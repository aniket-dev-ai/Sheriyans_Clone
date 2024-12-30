import React from "react";

function Names(props) {
  console.log(props.syllabus.syllabus_name);
  return (
    <div className="h-[20vh] flex items-center  border-t border-b border-gray-500 mx-20">
      <div className="text-4xl flex w-full justify-between">
        <h1 className="font-bold pl-10">{props.syllabus.syllabus_name}</h1>
        <h2 className="text-2xl">
          Level: <span className="text-[#02E797]">{props.syllabus.syllabus_hardness} </span>
        </h2>
      </div>
    </div>
  );
}

export default Names;
