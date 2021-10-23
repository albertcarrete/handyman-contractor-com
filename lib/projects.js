import axios from "axios";

export async function getAllProjects() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API}/api/pages/projects?api_token=${process.env.NEXT_PUBLIC_API_TOKEN}`
  );
  let results = await res.data;
  return results;
}

export async function getProjectByUrl(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/pages/projects/${slug}?api_token=${process.env.NEXT_PUBLIC_API_TOKEN}`
  );
  let results = await res.json();
  return results;
}
