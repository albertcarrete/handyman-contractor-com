import axios from "axios";

export async function getAllProjects() {
  const res = await axios.get(
    "https://api.powerlinestudio.com/api/pages/projects?api_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzM2ODMxNzk3NTgsIl9pZCI6IjJnSXJFRmo1UTUiLCJzaXRlX2lkIjoiNjE1ZmZmNzI3Y2I0ZmU2MTNhMWNlYWJjIiwicGVybWlzc2lvbnMiOlsiZ2V0X3BhZ2VzIl19.DuudbeznGZsZJaz5dB1t7kuts5YM8Eqr5BPjya-EP44"
  );
  let results = await res.data;
  return results;
}

export async function getProjectByUrl(slug) {
  const res = await fetch(
    `https://api.powerlinestudio.com/api/pages/projects/${slug}?api_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzM2ODMxNzk3NTgsIl9pZCI6IjJnSXJFRmo1UTUiLCJzaXRlX2lkIjoiNjE1ZmZmNzI3Y2I0ZmU2MTNhMWNlYWJjIiwicGVybWlzc2lvbnMiOlsiZ2V0X3BhZ2VzIl19.DuudbeznGZsZJaz5dB1t7kuts5YM8Eqr5BPjya-EP44`
  );
  let results = await res.json();
  return results;
}
