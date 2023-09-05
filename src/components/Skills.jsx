const skills = [
  {
    id: 1,
    name: "React.js Proficiency",
    description:
      "As a React developer, I have a strong grasp of React.js, a popular JavaScript library for building user interfaces. I can create interactive and dynamic web applications using React's component-based architecture.",
    image: "src/assets/react-icon.png",
  },
  {
    id: 2,
    name: "Figma Design",
    description:
      "I am proficient in Figma, a collaborative design tool. I can use Figma to create and collaborate on user interface and user experience (UI/UX) designs, making sure the designs are user-friendly and visually appealing.",
    image: "src/assets/figma-icon.png",
  },
  {
    id: 3,
    name: "HTML, CSS, and JavaScript",
    description:
      "I have a solid foundation in web development technologies, including HTML, CSS, and JavaScript. I can create and style web pages using HTML and CSS, and I can enhance user interactivity with JavaScript.",
    image: "src/assets/web-development-icon.png",
  },
  {
    id: 4,
    name: "Effective Communication",
    description:
      "I possess strong communication skills, allowing me to collaborate effectively with team members, clients, and stakeholders. Clear and concise communication is key to project success.",
    image: "src/assets/communication-icon.png",
  },
];

const Skills = () => {

  return (
    <div className="lg:mx-12 mx-4 py-20" id="skills">
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
