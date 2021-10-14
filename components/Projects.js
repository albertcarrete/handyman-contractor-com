import Link from "next/link";
import { img } from "../utils/imageHelpers";

export default function Projects({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
      {projects.map((project, index) => {
        return (
          <Link href={`/projects/${project.slug}`} key={index}>
            <a className="block shadow">
              {project?.fields?.gallery?.[0] && (
                <div
                  className="pt-1/2 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${img(
                      project.fields.gallery[0].path
                    )}')`,
                  }}
                ></div>
              )}
              <div className="p-5">
                <div className="text-xl font-medium">{project.name}</div>
                <div className="text-gray-700">{project.fields.location}</div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
