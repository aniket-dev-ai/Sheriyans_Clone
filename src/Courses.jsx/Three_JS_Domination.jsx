import React from "react";
import Names from "../Components/Names";

function Three_JS_Domination() {
  const syllabus = [
    { syllabus_name: "Introduction to Three.js", syllabus_hardness: "Easy" },
    { syllabus_name: "Scene, Camera, and Renderer Basics", syllabus_hardness: "Medium" },
    { syllabus_name: "Geometries and Materials", syllabus_hardness: "Medium" },
    { syllabus_name: "Lighting and Shadows", syllabus_hardness: "Hard" },
    { syllabus_name: "Textures and Environment Maps", syllabus_hardness: "Hard" },
    { syllabus_name: "Animation and Keyframes", syllabus_hardness: "Medium" },
    { syllabus_name: "Loading 3D Models (GLTF, OBJ)", syllabus_hardness: "Hard" },
    { syllabus_name: "Physics with Three.js", syllabus_hardness: "Hard" },
    { syllabus_name: "Post-Processing Effects", syllabus_hardness: "Hard" },
    { syllabus_name: "Integrating Three.js with React (React Three Fiber)", syllabus_hardness: "Hard" }
];
  return (<div>
    <div className="text-5xl capitalize  tracking-tight ml-40 leading-none mt-12">
      <h1>Introducing Three.js Domination __________</h1>
      <h1 className="text-[#767472]">Create Web Experiences People</h1>
      <h1 className="text-[#767472]">Won't Believe</h1>
      <div className="flex gap-10 items-center mt-5 text-xl tracking-normal">
          <button className="bg-[#D9AB00] text-black px-5 py-2 rounded-2xl">Buy Now $2499</button>
        <p className="text-base">See Details</p>
      </div>
      </div>
      <div>
        <img className="mt-16" src="https://ik.imagekit.io/sheryians/three.js/three_8IbmQpggex.webp" alt="" />
      </div>
      <div className=" mt-60 pl-20 pb-40">
        <h1 className="text-[10rem] leading-none font-semibold tracking-tighter">
          Dominate.
        </h1>
        <h1 className="text-6xl pl-4 font-bold text-[#535353]">
          From start to victory
        </h1>
      </div>
      <div>
        {syllabus.map((syllabus, idx) => {
          return <Names key={idx} syllabus={syllabus} />;
        })}
      </div>
      <div className="pl-40 mt-20 flex flex-col ">
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
        <h1 className="text-xl font-light tracking-tighter">Scratch This to get a discount Coupon</h1>
        <div
          className="h-[50vh] w-[30vw] my-5 rounded-md bg-gray-300 flex justify-center items-center text-black
         text-4xl"
        >
          Scratch
        </div>
      </div>
      <div className="ml-40">
        <button className="bg-[#107326] p-4 px-6 text-2xl rounded-3xl    ">Start learning now 😎</button>
      </div>
    </div>
  )
}

export default Three_JS_Domination;
