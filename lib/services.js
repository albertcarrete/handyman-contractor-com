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
    "https://api.powerlinestudio.com/api/pages/services?api_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzM2ODMxNzk3NTgsIl9pZCI6IjJnSXJFRmo1UTUiLCJzaXRlX2lkIjoiNjE1ZmZmNzI3Y2I0ZmU2MTNhMWNlYWJjIiwicGVybWlzc2lvbnMiOlsiZ2V0X3BhZ2VzIl19.DuudbeznGZsZJaz5dB1t7kuts5YM8Eqr5BPjya-EP44"
  );
  let results = await res.data;
  return results;
}
