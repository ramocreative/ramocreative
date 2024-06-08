export default async function getProjects() {
  const response = await fetch("http://localhost:4000/projects/", {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Filed to get Projects");
  }

  return await response.json();
}
