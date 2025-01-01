import React from "react";
import Names from "../Components/Names";
import video from "D:/Coding/React_Sher/routing/src/assets/Java & DSA Domination.mp4";
import Projects from "../Components/Projects";

function FrontEnd_Domination() {
  const syllabus = [
    { syllabus_name: "Databases", syllabus_hardness: "Medium" },
    { syllabus_name: "SQL", syllabus_hardness: "Medium" },
    { syllabus_name: "NoSQL", syllabus_hardness: "Hard" },
    { syllabus_name: "APIs", syllabus_hardness: "Medium" },
    {
      syllabus_name: "Authentication & Authorization",
      syllabus_hardness: "Hard",
    },
    { syllabus_name: "RESTful Services", syllabus_hardness: "Medium" },
    { syllabus_name: "GraphQL", syllabus_hardness: "Hard" },
    { syllabus_name: "Microservices", syllabus_hardness: "Hard" },
    { syllabus_name: "Docker & Containers", syllabus_hardness: "Hard" },
    { syllabus_name: "CI/CD", syllabus_hardness: "Medium" },
    { syllabus_name: "Version Control (Git)", syllabus_hardness: "Medium" },
    { syllabus_name: "Server Management", syllabus_hardness: "Hard" },
    { syllabus_name: "Cloud Computing", syllabus_hardness: "Hard" },
    { syllabus_name: "Load Balancing", syllabus_hardness: "Hard" },
    { syllabus_name: "Caching", syllabus_hardness: "Medium" },
    { syllabus_name: "Message Queues", syllabus_hardness: "Hard" },
    { syllabus_name: "Serverless Architecture", syllabus_hardness: "Hard" },
    { syllabus_name: "Monitoring & Logging", syllabus_hardness: "Medium" },
    { syllabus_name: "Security Best Practices", syllabus_hardness: "Hard" },
    {
      syllabus_name: "Testing (Unit, Integration, E2E)",
      syllabus_hardness: "Medium",
    },
  ];

  return (
    <div>
      <div className="h-[65vh] p-5 pl-12 flex">
        <div className="flex flex-col  gap-10  justify-between">
          <div className="text-5xl capitalize font-bold tracking-tighter">
            <h1>Backend Domination -</h1>
            <h1>Create scalable and </h1>
            <h1>Secured Backend </h1>
            {/* <h1 className="flex items-center">code.</h1> */}
            <div className="flex text-sm w-full tracking-normal gap-10 mt-3">
              <p className="bg-[#212121] rounded-lg p-4 py-2">
                Backend Development
              </p>
              <p className="bg-[#212121] rounded-lg p-4 py-2">Logic Building</p>
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
            src="https://ik.imagekit.io/sheryians/courses_gif/undefined-backend_0.5x_Medium_wgHDU-5rPt.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <img
          className="mt-20 w-96 m-auto"
          src="https://ik.imagekit.io/sheryians/BackEnd%20Donation/nodeJs_0PymuvVgr.jpg"
          alt=""
        />
        <h1 className="text-center text-[4rem] mt-10 tracking-tight font-semibold">
          Backend Dev
        </h1>
        <h1 className="text-center text-[#63C354] tracking-[-0.125rem] text-9xl font-semibold">
          Incredibely Easy.
        </h1>
        <img
          className="w-[75vw] mt-10 m-auto"
          src="https://ik.imagekit.io/sheryians/BackEnd%20Donation/Group%20485%20(Small)_6UFqKT4Yq.png"
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
        {syllabus.map((syllabus, idx) => {
          return <Names key={idx} syllabus={syllabus} />;
        })}
      </div>
      <div className="text-9xl mt-40 font-bold pl-40">
        <h1 className="text-6xl">Industry level , intense training</h1>
      </div>
      <div className="text-4xl  mt-10 text-[#757575] ">
        <h1 className="pl-40">
          If Anything is considered part of backend dev, we're
        </h1>
        <h1 className="mb-10 pl-40">covering it in this course</h1>
        <button className="px-28 py-1 text-white text-3xl ml-40 bg-[#3C3C3C]">
          start training
        </button>
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
