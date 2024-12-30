import React from "react";
import Names from "../Components/Names";
import video from "D:/Coding/React_Sher/routing/src/assets/Java & DSA Domination.mp4";

function Mastering_DSA() {
  const syllabus = [
    { syllabus_name: "Arrays", syllabus_hardness: "Easy" },
    { syllabus_name: "Linked List", syllabus_hardness: "Medium" },
    { syllabus_name: "Stacks", syllabus_hardness: "Medium" },
    { syllabus_name: "Queues", syllabus_hardness: "Medium" },
    { syllabus_name: "Hashing", syllabus_hardness: "Hard" },
    { syllabus_name: "Trees", syllabus_hardness: "Hard" },
    { syllabus_name: "Binary Search Trees", syllabus_hardness: "Hard" },
    { syllabus_name: "Heaps", syllabus_hardness: "Hard" },
    { syllabus_name: "Graphs", syllabus_hardness: "Hard" },
    { syllabus_name: "Dynamic Programming", syllabus_hardness: "Hard" },
    { syllabus_name: "Greedy Algorithms", syllabus_hardness: "Medium" },
    { syllabus_name: "Backtracking", syllabus_hardness: "Hard" },
    { syllabus_name: "Divide and Conquer", syllabus_hardness: "Medium" },
    { syllabus_name: "Searching Algorithms", syllabus_hardness: "Easy" },
    { syllabus_name: "Sorting Algorithms", syllabus_hardness: "Medium" },
    { syllabus_name: "Bit Manipulation", syllabus_hardness: "Hard" },
    { syllabus_name: "Matrix", syllabus_hardness: "Medium" },
    { syllabus_name: "Recursion", syllabus_hardness: "Easy" },
    { syllabus_name: "String Algorithms", syllabus_hardness: "Medium" },
    { syllabus_name: "Trie", syllabus_hardness: "Hard" },
  ];

  return (
    <div>
      <div className="h-[65vh] p-5 pl-12 flex">
        <div className="flex flex-col  gap-10  justify-between">
          <div className="text-5xl font-semibold">
            <h1>Java & Dsa</h1>
            <h1>Domination:Crack</h1>
            <h1 className="flex items-center">
              <div className="flex">
                <img
                  className="w-12"
                  src="https://img.icons8.com/?size=100&id=PvvcWRWxRKSR&format=png&color=000000"
                  alt=""
                />
                <img
                  className="w-12"
                  src="https://img.icons8.com/?size=100&id=30840&format=png&color=ffffff"
                  alt=""
                />
                <img
                  className="w-12"
                  src="https://img.icons8.com/?size=100&id=31ntOI4KZ6HK&format=png&color=000000"
                  alt=""
                />
                <img
                  className="w-12"
                  src="https://img.icons8.com/?size=100&id=FB9cHpr7hgtM&format=png&color=000000"
                  alt=""
                />
                <img
                  className="w-12"
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  alt=""
                />
              </div>
              Companies
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-xl font-semibold">
                <span className="text-4xl">Only </span>
                <span className="text-2xl "> $9999 </span>
                <span className="text-2xl text-[#3fad87]"> $4999 </span>
                <span className="text-lg"> ( 50% off )</span>
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
            src="https://ik.imagekit.io/sheryians/java&dsa/javaas%20Large_jY0Wighav.jpeg"
            alt=""
          />
        </div>
      </div>
      <div>
        <img
          className="mt-20"
          src="https://ik.imagekit.io/sheryians/java&dsa/maang-env_GSP6Ma8FIZ.png"
          alt=""
        />
        <img
          className="w-[80vw] mt-10 m-auto"
          src="https://ik.imagekit.io/sheryians/java&dsa/status_4j-zuELqy.png"
          alt=""
        />
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
      <div className="text-9xl font-bold pl-40">
        <h1>Concepts</h1>
        <h1>Which</h1>
        <h1>Matters</h1>
      </div>
      <div className="text-4xl  mt-20 ">
        <h1 className="pl-40">Dominate</h1>
        <h1 className="mb-10 pl-40">Data Structure & Algorithms</h1>
        <video
          className="w-[70vw] h-[50vh] object-cover max-w-full mx-auto"
          src={video}
          autoPlay
          loop
          muted
        />
      </div>
      <div className="pl-40 flex flex-col ">
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
  );
}

export default Mastering_DSA;
