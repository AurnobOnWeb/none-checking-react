import RegularButton from "../button/RegularButton";
const Hero = () => {
  return (
    <>
      <div className="hero min-h-[600px] bg-[url('../../assets/images/hero.png')] bg-no-repeat bg-cover text-white rounded-3xl">
  <div className="hero-content text-center">
    <div className="max-w-full lg:max-w-[60%]">
      <h1 className="text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="py-6">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
    <div className="flex justify-center gap-4">
    <RegularButton title={"Explore Now"} className="bg-green-500 text-black border-none hover:bg-green-400"></RegularButton>
     <RegularButton title={"Our Feedback"} className="bg-transparent text-white border border-white hover:bg-gray-50 hover:bg-opacity-20"></RegularButton>
    </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Hero;