import React from "react";

const Team = () => {
  return (
    <div className="w-[90%] mx-auto p-3">
      <div className="text-center">
        <h2 className="text-sm text-orange-500">OUR TEAM</h2>
        <h1 className="text-2xl md:text-4xl font-bold">WE HAVE EXPERIENCED MEMBERS</h1>
      </div>
      <div className="flex flex-col md:flex-row items-stretch gap-3 my-9">
        <div>
          <div className="md:w-64 h-64">
            <img src="/assets/teem3.jpeg" alt="Project Manager" className="w-full md:w-64 h-64 object-cover" />
          </div>
          <span className="my-3 text-xl">Project Managers</span>
        </div>
        <div>
          <div className="md:w-64 h-64">
            <img src="/assets/Teamm.jpeg" alt="Technical Team" className="w-full md:w-64 h-64 object-cover" />
          </div>
          <span className="my-3 text-xl">Technical Team</span>
        </div>
        <div>
          <div className="md:w-64 h-64">
            <img src="/assets/teem.jpeg" alt="Construction Team" className="w-full md:w-64 h-64 object-cover" />
          </div>
          <span className="my-3 text-xl">Construction Team</span>
        </div>
        <div>
          <div className="md:w-64 h-64">
            <img src="/assets/teem1.jpeg" alt="Architectural Team" className="w-full md:w-64 h-64 object-cover" />
          </div>
          <span className="my-3 text-xl">Architectural Team</span>
        </div>
      </div>
    </div>
  );
};

export default Team;
