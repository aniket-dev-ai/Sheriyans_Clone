import React from "react";

function Projects(props) {
  console.log(props.project.project_name);

  return (
    <div>
      <div className="flex ml-40 gap-5 items-center">
      <div className="h-[8vh] rounded-md w-[1vw] bg-yellow-400"></div>
      <h1 className="text-3xl font-light mb-7 ">Project:{props.project.project_no}</h1>
      </div>
      <h1 className="text-5xl font-semibold ml-40 mb-6">{props.project.project_name}</h1>
      <img className="w-[80vw] m-auto object-cover" src={props.project.project_img} alt="" />
    </div>
  );
}

export default Projects;
