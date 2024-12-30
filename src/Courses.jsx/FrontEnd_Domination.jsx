import React from "react";
import Names from "../Components/Names";
import video from "D:/Coding/React_Sher/routing/src/assets/Java & DSA Domination.mp4";
import Projects from "../Components/Projects";

function FrontEnd_Domination() {
  const syllabus = [
    { syllabus_name: "HTML", syllabus_hardness: "Easy" },
    { syllabus_name: "CSS", syllabus_hardness: "Medium" },
    { syllabus_name: "JavaScript", syllabus_hardness: "Hard" },
    { syllabus_name: "DOM Manipulation", syllabus_hardness: "Medium" },
    { syllabus_name: "CSS Flexbox", syllabus_hardness: "Medium" },
    { syllabus_name: "CSS Grid", syllabus_hardness: "Medium" },
    { syllabus_name: "Responsive Design", syllabus_hardness: "Medium" },
    { syllabus_name: "Version Control (Git)", syllabus_hardness: "Medium" },
    { syllabus_name: "React.js", syllabus_hardness: "Hard" },
    { syllabus_name: "Vue.js", syllabus_hardness: "Medium" },
    { syllabus_name: "Angular", syllabus_hardness: "Hard" },
    { syllabus_name: "TypeScript", syllabus_hardness: "Hard" },
    {
      syllabus_name: "State Management (Redux, Context API)",
      syllabus_hardness: "Hard",
    },
    { syllabus_name: "AJAX & Fetch API", syllabus_hardness: "Medium" },
    {
      syllabus_name: "Web Performance Optimization",
      syllabus_hardness: "Hard",
    },
    { syllabus_name: "Progressive Web Apps (PWA)", syllabus_hardness: "Hard" },
    { syllabus_name: "Web Accessibility (a11y)", syllabus_hardness: "Medium" },
    {
      syllabus_name: "Testing (Jest, Mocha, Cypress)",
      syllabus_hardness: "Hard",
    },
    {
      syllabus_name: "Build Tools (Webpack, Babel)",
      syllabus_hardness: "Hard",
    },
    { syllabus_name: "API Integration", syllabus_hardness: "Medium" },
  ];
  const projects = [
    { project_no: 1, project_name: "Portfolio Website", project_img: "https://ik.imagekit.io/sheryians/FrontEnd%20Donation/Frame%2017%201_76L2H04wGs.png?updatedAt=1716011889739" },
    { project_no: 2, project_name: "E-Commerce Website", project_img: "https://ik.imagekit.io/sheryians/FrontEnd%20Donation/Frame%2015%201_BquJDfas8.png?updatedAt=1716011889719" },
    { project_no: 3, project_name: "Weather App", project_img: "https://ik.imagekit.io/sheryians/FrontEnd%20Donation/Frame%2014%201_xDcp_edxb.png?updatedAt=1716011890611" },
    { project_no: 4, project_name: "Blog Platform", project_img: "https://ik.imagekit.io/sheryians/FrontEnd%20Donation/Frame%2016%201_qjY5HOPVwX.png?updatedAt=1716011889601" },
    { project_no: 5, project_name: "Task Management App", project_img: "https://ik.imagekit.io/sheryians/FrontEnd%20Donation/Frame%2012%201_Dp0s2REfie.png?updatedAt=1716011889608" },
    { project_no: 6, project_name: "Real-time Chat Application", project_img: "https://ik.imagekit.io/sheryians/FrontEnd%20Donation/Frame%2014%201_xDcp_edxb.png?updatedAt=1716011890611" },
    { project_no: 7, project_name: "Movie Search App", project_img: "https://ik.imagekit.io/sheryians/FrontEnd%20Donation/Frame%2015%201_BquJDfas8.png?updatedAt=1716011889719" },
    { project_no: 8, project_name: "Social Media Dashboard", project_img: "https://ik.imagekit.io/sheryians/FrontEnd%20Donation/Frame%2012%201_Dp0s2REfie.png?updatedAt=1716011889608" }
];
  return (
    <div>
      <div className="h-[65vh] p-5 pl-12 flex">
        <div className="flex flex-col  gap-10  justify-between">
          <div className="text-5xl font-semibold">
            <h1>Frontend Domination -</h1>
            <h1>Create anything with </h1>
            <h1 className="flex items-center">code.</h1>
            <div className="flex text-sm w-full gap-10 mt-3">
                <p className="bg-gray-800 rounded-lg p-4 py-2">Web Development</p>
                <p className="bg-gray-800 rounded-lg p-4 py-2">Animation</p>
                <p></p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-xl font-semibold">
                <span className="text-4xl">Only </span> 
                <span className="text-3xl text-[#02E797]"> $4999 </span> 
              </h1>
            </div>
            <div>
              <button className="bg-[#009560] text-white font-bold px-7 rounded-lg text-xl p-4">
                Buy-Now Start Learning
              </button>
            </div>
          </div>
          <div>
            <h1 className="w-[95%] text-xl text-[#BABABA] tracking-wide">
              Coding is the process of writing instructions for computers using
              programming languages like C++, Python, solutions.
            </h1>
          </div>
        </div>
        <div className="p-7 py-0">
          <img
            className="rounded-3xl w-[80vw] h-[60vh] object-cover"
            src="https://ik.imagekit.io/sheryians/courses_gif/Front-End_Domination__Create_Anything_with_Code-FRONTENDTHUBNAIL_Wf8WqcNJx.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <img
          className="mt-20 w-96 m-auto"
          src="https://ik.imagekit.io/sheryians/FrontEnd%20Donation/frontend-domination_gkQjfCjLF.png?updatedAt=1715900754599"
          alt=""
        />
        <h1 className="text-center text-[#FAA22D] text-9xl font-bold">Dominate</h1>
        <h1 className="text-center text-[3.6rem] tracking-tight font-semibold">Frontend Development</h1>
        <img
          className="w-[75vw] mt-10 m-auto"
          src="https://ik.imagekit.io/sheryians/FrontEnd%20Donation/Group%2076_jhwV3btehT.png?updatedAt=1716010786520"
          alt=""
        />
      </div>
      <div className=" mt-60 pl-20 pb-40 ml-20">
        <h1 className="text-[10rem] leading-none font-semibold tracking-tighter">
          Projects
        </h1>
        <h1 className="text-[10rem] leading-none font-semibold tracking-tighter">
          which matters.
        </h1>
        <h1 className="text-5xl mt-4 font-light pl-4  ">
          Beyond projects , toward purpose
        </h1>
      </div>
      <div>
        {projects.map((project, idx) => {
            return (
                <Projects key={idx} project={project} />
            )
        })}
      </div>
      <div>
        {syllabus.map((syllabus, idx) => {
          return <Names key={idx} syllabus={syllabus} />;
        })}
      </div>
      <div className="text-9xl mt-40 font-bold pl-40">
        <h1 className="text-6xl">Industry level , intense training</h1> 
      </div>
        <div className="text-4xl  mt-10 text-[#757575] ">
        <h1 className="pl-40">If Anything is considered part of backend dev, we're</h1>
        <h1 className="mb-10 pl-40">covering it in this course</h1>
        <button className="px-28 py-1 text-white text-3xl ml-40 bg-[#3C3C3C]">start training</button>
      </div>
      <div className="pl-40 mt-40 flex flex-col ">
        <h1 className="text-9xl font-bold tracking-tighter">More Value,</h1>
        <h1 className="text-9xl font-bold tracking-tighter mb-10">
          Less Cost.
        </h1>
        <h2 className=" ml-2 text-2xl opacity-70">
          Quality And Value Drives Us,{" "}
          <span className="opacity-100 text-[#02E395]">Delivering More</span>
        </h2>
        <h2 className=" ml-2 text-2xl opacity-70 mb-3">
          for <span className="opacity-100 text-[#02E395]">Less Cost</span>.
        </h2>
        <p className="text-xs ml-1">
          "Cousre validity is for 1 years from the date of purchase"
        </p>
      </div>
      <div className="ml-40 mt-20">
        <h1 className="text-xl font-light tracking-tighter">
          Scratch This to get a discount Coupon
        </h1>
        <div
          className="h-[50vh] w-[30vw] my-5 rounded-md bg-gray-300 flex justify-center items-center text-black
             text-4xl"
        >
          Scratch
        </div>
      </div>
      <div className="ml-40">
        <button className="bg-[#107326] p-4 px-6 text-2xl rounded-3xl    ">
          Start learning now 😎
        </button>
      </div>
    </div>
  );
}

export default FrontEnd_Domination;
