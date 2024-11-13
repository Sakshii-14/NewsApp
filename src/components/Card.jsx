import React from 'react';

function Card() {
  return (
    <div
      className="flex gap-4 border w-[50%] h-[35%] p-2 rounded-md bg-white"
      style={{
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15), 0 6px 20px rgba(0, 0, 0, 0.10)"
      }}
    >
      <div className="h-full w-[35%] object-cover border rounded-md overflow-hidden">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
          alt="news img"
          className="h-full w-full"
        />
      </div>
      <div className='flex flex-col justify-start flex-1 gap-3'>
        <div>
          <p className="text-[1.5rem] font-light leading-tight text-slate-900">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus eum laudantium eius similique adipisci.
          </p>
          <p className="text-[0.84rem]  font-light text-slate-600">
            <span className='font-bold'> short by </span> Ipsum dolor sit amet consectetur adipisicing elit./ dfdf
          </p>
        </div>
        <p className="text-gray-800 text-[1rem] font-light ">
          88e3be1793c1492db925cb6940289166 Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus ullam a hic molestiae nemo numquam similique distinctio cum ipsam harum, reiciendis, nostrum architecto obcaecati nihil voluptate voluptas iure. Tempora, ipsum doloribus?lorem14
          lorem14
          lorem12
        </p>
        <p className='text-[0.84rem]  text-slate-900 font-medium'>Read more at </p>
      </div>
    </div>
  );
}

export default Card;
