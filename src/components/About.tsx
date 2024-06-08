import Button from "./Button";
import img from "../../public/dummy-image-square.jpg";
import Image from "next/image";
import {
  RiCustomerServiceLine,
  RiSearchLine,
  RiStarLine,
} from "@remixicon/react";

export default function About() {
  return (
    <section className="w-full mx-auto md:max-w-[80vw] lg:max-w-[70vw] grid justify-center grid-cols-[repeat(auto-fit,minmax(600px,1fr))] max-md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-md:gap-16 max-2xl:mt-16">
      <div className="w-full h-full flex items-center md:pr-64">
        <Image
          src={img}
          alt="img"
          className="w-full block object-cover rounded-3xl"
        />
      </div>
      <div className="flex flex-col py-18 md:py-20 lg:py-24 xl:py-28 2xl:py-[340px]">
        <div className="flex flex-col md:flex-row gap-6 *:flex-1 mb-12">
          <div className="bg-neutral-100 dark:bg-neutral-800 flex flex-col items-center justify-center py-12 rounded-3xl">
            <RiStarLine className="mb-2" />
            <p className="relative text-body1 tracking-body1 after:absolute after:-bottom-2 after:left-[50%] after:translate-x-[-50%] after:bg-black after:dark:bg-white after:w-4 after:h-[2px] mb-6">
              Role / Specialist
            </p>
            <small className="text-caption tracking-caption uppercase">
              Logo & Branding Design
            </small>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800 flex flex-col items-center justify-center py-12 rounded-3xl">
            <RiSearchLine className="mb-2" />
            <p className="relative text-body1 tracking-body1 after:absolute after:-bottom-2 after:left-[50%] after:translate-x-[-50%] after:bg-black after:dark:bg-white after:w-4 after:h-[2px] mb-6">
              Experience
            </p>
            <small className="text-caption tracking-caption uppercase">
              More than 5 years
            </small>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800 flex flex-col items-center justify-center py-12 rounded-3xl">
            <RiCustomerServiceLine className="mb-2" />
            <p className="relative text-body1 tracking-body1 after:absolute after:-bottom-2 after:left-[50%] after:translate-x-[-50%] after:bg-black after:dark:bg-white after:w-4 after:h-[2px] mb-6">
              Online
            </p>
            <small className="text-caption tracking-caption uppercase">
              24 / 7
            </small>
          </div>
        </div>
        <h3 className="text-h4 tracking-h4 sm:text-h3 sm:tracking-h3 font-bold mb-8">
          Raman S. Jalal
        </h3>
        <p className="text-body2 tracking-body2 md:text-body1 md:tracking-body1 max-w-[75ch] mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          dolore recusandae? Magni ad dolor hic necessitatibus provident
          temporibus, quos dicta iure dolorum labore commodi ex odio
          perferendis. Veritatis, cumque at.
        </p>
        <small className="text-body2 tracking-body2 text-neutral-500 max-w-[75ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          cumque, voluptatum repellat alias numquam a ex. Adipisci facilis
          commodi, sequi eligendi similique laborum blanditiis, quia, harum
          praesentium autem iste modi.
        </small>
        <div className="mt-12">
          <Button title="Button" />
        </div>
      </div>
    </section>
  );
}
