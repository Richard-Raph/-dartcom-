import testimonial from "../assets/testimonial.png";

export default function HomeTestimonial () {
  return (
    <div className="w-full h-[28vh] bg-[#0029FF] mt-[50px] mb-[60px] p-10 px-[80px]">
      <h2 className="text-white mb-5 text-3xl font-semibold">Testimonials</h2>
      <div className="flex gap-6">
        {/* TESTIMONIAL 1 */}
        <div className="bg-white w-[400px] h-auto p-7 shadow-lg mb-8 rounded-md ">
          <p className="mb-8">
            &quot;Working with dartcom has been pleasing, as i have had no better
            experience&quot;
          </p>
          <div className="flex gap-2">
            <img src={testimonial} alt="" />
            <div className="flex flex-col">
              <h4 className="font-bold">Daniel Kolenda</h4>
              <p>C.E.O of JX project limited</p>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL 2 */}
        <div className="bg-white w-[400px] h-auto p-7 shadow-lg mb-8 rounded-md ">
          <p className="mb-8">
            &quot;Working with dartcom has been pleasing, as i have had no better
            experience&quot;
          </p>
          <div className="flex gap-2">
            <img src={testimonial} alt="" />
            <div className="flex flex-col">
              <h4 className="font-bold">Daniel Kolenda</h4>
              <p>C.E.O of JX project limited</p>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL 3 */}
        <div className="bg-white w-[400px] h-auto p-7 shadow-lg mb-8 rounded-md ">
          <p className="mb-8">
            &quot;Working with dartcom has been pleasing, as i have had no better
            experience&quot;
          </p>
          <div className="flex gap-2">
            <img src={testimonial} alt="" />
            <div className="flex flex-col">
              <h4 className="font-bold">Daniel Kolenda</h4>
              <p>C.E.O of JX project limited</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}