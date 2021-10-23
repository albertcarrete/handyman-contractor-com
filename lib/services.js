import axios from "axios";

// export async function getAllServices() {
//   const res = await axios.get(
//     "https://api.squarematter.com/api/collections/5b3eae560e6b1d3adfd7d474/records?isPublished=true&populate=true&sortBy=datePublished"
//   );
//   let results = await res.data.data;
//   return results;
// }
export async function getAllServices() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API}/api/pages/services?api_token=${process.env.NEXT_PUBLIC_API_TOKEN}`
  );
  let results = await res.data;
  return results;
}
