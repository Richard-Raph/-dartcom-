import bigImg from "../assets/bigImg.png";
import smallImg from "../assets/smallImg.png";

export default function HomeBanner () {
  return (
    <div className="w-full h-[80vh] flex justify-between px-[80px] pt-[85px]">
      <div className="pt-[120px]">
        <h1 className="text-5xl font-bold mb-3 leading-[55px]">
          Engineering <br /> Excellence Delivered
        </h1>
        <p className="w-[400px] mb-8 text-[#333333]">
          Your Trusted Partner In Innovation and Quality Engineering Solutions
          You Can Rely On.
        </p>
        <button className="text-white bg-[#4D68FF] px-8 py-2 rounded-md font-medium">
          Our Service
        </button>
      </div>
      <div className="relative">
        <img className="w-[650px] h-[545px]" src={bigImg} alt="" />
        <img
          className="absolute right-[65%] bottom-[-100px] border-4 border-gray-300 rounded-md"
          src={smallImg}
          alt=""
        />
      </div>
    </div>
  );
}