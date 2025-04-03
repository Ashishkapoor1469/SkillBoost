import React from "react";
import { FaArrowRightLong, FaStar  } from "react-icons/fa6";

interface CardProps {
  tag: string;
  rate: string;
  head: string;
  dis: string;
  price: string;
  img: string;
}
const card: React.FC<CardProps> = (props) => {
  return (
    <div>
      <div className="card card-actions rounded-xl duration-300 w-full min-[344px]:w-86 h-auto border ">
        <div className="h-46 w-full bg-neutral-200 rounded-t-xl">
          <img className="rounded-t-xl w-full h-full"  src={props.img}  alt="Img" />
        </div>
        <div className="h-full w-full">
          <div className="text-[12px] w-full font-semibold text-neutral-500 flex justify-between pt-6 px-5 p-2">
            <p>{props.tag}</p>
            <p className="flex items-center gap-0.5"><FaStar className="text-yellow-400"/>{props.rate}</p>
          </div>
          <div className="w-full h-auto pb-3 px-5">
            <h1 className="text-xl font-bold">{props.head}</h1>
            <p className="text-neutral-500">{props.dis}</p>
          </div>
          <div className="w-full h-full p-4 border-t border-t-neutral-400 flex justify-between items-center font-bold">
<p className="text-sm">{props.price}</p>
<p className="text-sm flex justify-center items-center gap-0.5 cursor-pointer">Veiw Courses <FaArrowRightLong className="mt-1"/></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
