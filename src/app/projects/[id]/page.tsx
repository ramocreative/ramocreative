import getProject from "@/app/libs/getProject";

export default async function ClientPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getProject(id);

  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.desc}</p>
      <small>
        {data.owners.name} <br /> {data.owners.location}
      </small>
    </main>
  );
}
