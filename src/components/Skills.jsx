const skills = [
  {
    id: 1,
    name: "React.js Proficiency",
    description:
      "As a React developer, I have a strong grasp of React.js, a popular JavaScript library for building user interfaces. I can create interactive and dynamic web applications using React's component-based architecture.",
    image: "/atom.png",
  },
  {
    id: 2,
    name: "Figma Design",
    description:
      "I am proficient in Figma, a collaborative design tool. I can use Figma to create and collaborate on user interface and user experience (UI/UX) designs, making sure the designs are user-friendly and visually appealing.",
    image: "/figma.png",
  },
  {
    id: 3,
    name: "JavaScript",
    description:
    "I am proficient in JavaScript and can develop interactive and dynamic features for web applications, enhancing user interactivity and functionality.",
    image: "/js.png",
  },
  {
    id: 4,
    name: "HTML & CSS",
    description:
      "I am skilled in CSS and HTML and can style web pages, making them visually attractive and responsive across various devices and screen sizes ensuring proper semantics and accessibility.",
    image: "/css-3.png",
  },
];

const Skills = () => {

  return (
    <div className="lg:mx-12 mx-4 py-10" id="skills">
      <div className="mb-20">
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">My Expertise</h2>
      </div>


      {/* skillis card */}
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {
            skills.map( skill => <div key={skill.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
                <img src={skill.image} alt="" className="w-14 h-14 p-3 bg-white  rounded-lg shadow-md mb-7"/>
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                <p>{skill.description}</p>
            </div>)
        }
      </div>
    </div>
  );
};

export default Skills;
