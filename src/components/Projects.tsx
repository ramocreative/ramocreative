import Button from "./Button";
import ImageSlider from "./ImageSlider";
import img1 from "../../public/faded_gallery-9CSCCteMuVQ-unsplash.jpg";
import img2 from "../../public/milad-fakurian-rmisGutQbCo-unsplash.jpg";
import img3 from "../../public/ph-m-nh-t-v-4C7dniwlw-unsplash.jpg";

export default function Projects() {
  const IMAGES = [
    { id: 1, url: img1, alt: "img1" },
    { id: 2, url: img2, alt: "img2" },
    { id: 3, url: img3, alt: "img3" },
  ];

  return (
    <section className="realtive bg-black text-white w-full md:h-[75vh] translate-y-0 lg:translate-y-[-50%] lg:-mb-[calc(75vh/2)] flex justify-strat items-end p-10 md:p-24 lg:p-32 rounded-3xl overflow-hidden">
      <div className="flex items-end h-full max-sm:mb-16">
        <div className="flex flex-col h-full">
          <small className="text-overline uppercase tracking-overline mb-auto max-md:mb-24 bg-white/[0.1] backdrop-blur w-fit py-4 px-8 rounded-full">
            Selected works
          </small>
          <h3 className="text-h4 md:text-h3 tracking-h4 md:tracking-h3 font-semibold mb-4 max-md:mb-4">
            Project Title
          </h3>
          <p className="text-body2 tracking-body2 md:text-body1 md:tracking-body1 max-w-[75ch] mb-8 sm:mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ex enim atque earum. Dicta a quaerat accusamus qui aperiam nihil
            natus doloribus, amet, labore eum dolorem quisquam numquam, officiis
            libero.
          </p>
          <div className="">
            <Button title="Button" />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-[0] sm:left-[20%] -z-[1] w-full h-full">
        <ImageSlider images={IMAGES} />
      </div>
    </section>
  );
}
