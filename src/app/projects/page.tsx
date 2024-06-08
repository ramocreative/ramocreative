import Link from "next/link";
import getProjects from "../libs/getProjects";
import Image, { StaticImageData } from "next/image";

type projectsProps = {
  id: number;
  title: string;
  desc: string;
  image: string | StaticImageData;
};

export default async function Projects() {
  const data = await getProjects();

  return (
    <main className="px-8 lg:px-20 overflow-hidden">
      {data.map((obj: projectsProps) => (
        <div key={obj.id} className="realtive">
          <Image src={obj.image} alt={obj.title} fill />
        </div>
      ))}
    </main>
  );
}
