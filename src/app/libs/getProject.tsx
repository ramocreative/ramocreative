export default async function getProject(id: string) {
  const response = await fetch(`http://localhost:4000/projects/${id}`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Oh, shoot!");
  }

  return response.json();
}
