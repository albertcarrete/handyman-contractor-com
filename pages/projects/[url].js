import { getAllProjects, getProjectByUrl } from "../../lib/projects";
import Breadcrumbs from "../../components/Breadcrumbs";
import Link from "next/link";
import { img } from "../../utils/imageHelpers";
import { NextSeo } from "next-seo";

export default function ProjectPage({ project }) {
  return (
    <div>
      <Breadcrumbs
        links={[
          {
            name: "Projects",
            url: "/projects",
          },
          {
            name: project.name,
            url: `/projects/${project.slug}`,
          },
        ]}
      />
      <NextSeo
        title={`${project.name} | Projects`}
        description={`${project.fields.seo.description}`}
        canonical={`${process.env.NEXT_PUBLIC_URL}/projects/${project.slug}`}
        openGraph={{
          title: `${project.name} | Projects`,
          description: `${project.fields.seo.description}`,
          url: `${process.env.NEXT_PUBLIC_URL}/projects/${project.slug}`,
          type: "website",
        }}
      />
      <img
        className="w-full h-56 object-cover "
        src={`${img(project.fields.gallery[0].path)}`}
        alt={project.fields.gallery[0].alt}
      />
      <div className="bumper py-10">
        <div className="md:flex">
          <div className="md:w-1/2 pr-8">
            <h1 className="text-3xl mb-1">{project.name}</h1>
            <p className="text-xl">{project.fields.location}</p>
          </div>
          <div
            className="md:w-1/2"
            dangerouslySetInnerHTML={{ __html: project.fields.description }}
          ></div>
        </div>
      </div>
      <div className="bumper">
        <div className="grid grid-cols-2 gap-6">
          {project.fields.gallery.map((image, index) => {
            return (
              <div className="gallery-photo-container">
                <img
                  key={index}
                  className="gallery-photo"
                  src={img(image.path)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="bumper py-10 text-center">
        <Link href="/projects">
          <a className="text-teal font-bold">Back to Projects</a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const project = await getProjectByUrl(params.url);
  return {
    props: {
      project: project ? project : null,
    },
  };
}

export async function getStaticPaths() {
  var projects = await getAllProjects();
  return {
    paths: projects.map((project) => {
      return {
        params: {
          url: project.slug,
        },
      };
    }),
    fallback: "blocking",
  };
}
