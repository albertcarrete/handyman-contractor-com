import { getAllProjects } from "../lib/projects";
import Projects from "../components/Projects";
import Breadcrumbs from "../components/Breadcrumbs";
import { NextSeo } from "next-seo";
export default function ProjectsPage({ projects }) {
  return (
    <>
      <Breadcrumbs
        links={[
          {
            name: "Projects",
            url: "/projects",
          },
        ]}
      />

      <NextSeo
        title="Projects"
        description="View a selection of Handyman Contractor's past projects from hvac, plumbing, framing, appliance repair, custom homes, and more."
        canonical={`${process.env.NEXT_PUBLIC_URL}/projects`}
        openGraph={{
          title: "Projects",
          description:
            "View a selection of Handyman Contractor's past projects from hvac, plumbing, framing, appliance repair, custom homes, and more.",
          url: `${process.env.NEXT_PUBLIC_URL}/projects`,
          type: "website",
        }}
      />
      <div className="bumper py-20">
        <div className="">
          <h1 className="heading-2">Our Projects</h1>
        </div>{" "}
        <Projects projects={projects} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();
  return {
    props: {
      projects: projects ? projects : [],
    },
  };
}
