import Button from "./Button";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function Hero() {
  return (
    <section className="lg:mx-[14vw] flex flex-col items-center my-20 lg:mt-[160px] lg:mb-[50vh] text-center">
      <small className="text-caption tracking-caption uppercase">
        Lorem ipsum dolor sit amet consectetur
      </small>
      <TextGenerateEffect
        words="Transforming Concepts into Seamless User Experiences"
        className="text-h3 lg:text-h2 xl:text-h1 tracking-h3 md:tracking-h3 lg:tracking-h2 xl:tracking-h1 my-4"
      />
      <p className="text-h6 lg:text-h5 tracking-h6 md:tracking-h5 mb-10">
        Hi, I'm Raman, Branding & Visual Identity Designer Based in Iraq.
      </p>
      <Button title="Button" />
    </section>
  );
}
