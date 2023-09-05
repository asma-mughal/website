import banner from "../assets/banner.png";



const Home = () => {
  return (
    <div className=" bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between
       py-24 gap-5">
      <div className="md:w-1/2 w-full">
          <img src={banner} alt="" className="w-full" />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-5">Hey, I am Asma</p>
          <h1 className="text-4xl font-bold text-primary mb-4">
  Crafting <span className="text-secondary">Exceptional</span> React Experiences
</h1>
<p className="text-2xl text-body leading-9 mb-8">
  Elevating user interfaces with cutting-edge React development.
</p>

          <button className="px-8 py-4 bg-primary text-xl text-white 
          rounded hover:bg-body hover:text-white transition-all duration-300">Get In Touch</button>
        </div>
        {/* rigth side */}
        
      </div>
    </div>
  );
};

export default Home;
