import React from 'react';

function Card() {
  return (
    <div
      className="flex gap-4 sm:flex-row flex-col border w-[90vw] h-auto sm:h-[50vh] sm:w-[80vw] lg:h-[42vh] lg:w-[70vw] xl:h-[45vh] xl:w-[60vw]  2xl:w-[50vw] p-2 rounded-md "
      style={{
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15), 0 6px 20px rgba(0, 0, 0, 0.10)"
      }}
    >
      <div className="sm:h-full sm:w-[35%] w-full h-[250px] border rounded-md overflow-hidden object-cover">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
          alt="news img"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 gap-3 ">
        <div>
          <p className="text-[1.2rem] sm:text-[1.3rem] font-light leading-tight text-slate-900">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus eum laudantium eius similique adipisci.
          </p>
          <p className="text-[0.84rem] font-light text-slate-600">
            <span className="font-bold"> short by </span> Ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='flex flex-col justify-between  h-full'>
        <p className="text-gray-800 text-[0.8rem] sm:text-[0.9rem] font-light">
          88e3be1793c1492db925cb6940289166 Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate quaerat fugit!lorem18
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum facere odit aspernatur modi.
        </p>
        <p className="text-[0.84rem] text-slate-900 font-medium">
          Read more at
        </p>
        </div>
        
      </div>
    </div>
  );
}

export default Card;
