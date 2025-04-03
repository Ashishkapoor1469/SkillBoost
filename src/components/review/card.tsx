import Image from "next/image"
import Img1 from "@/components/courses/image/Ui.jpg"
interface  Reviewporps{
    name:string,
skill:string,
dis:string
}
const Card: React.FC<Reviewporps>= (props)=>{
    return(
        <>
        <div className="card rounded-xl w-90 h-70 border py-2">
<div className="flex w-full gap-4 px-6 py-3 items-center">
    <Image className="rounded-full h-11 w-11" src={Img1} height={40} width={40} alt="Img"/>
    <div className="flex flex-col">
        <h1 className="font-black text-xl">{props.name}</h1>
        <p className="text-[12px] text-neutral-500">{props.skill}</p>
    </div>
</div>
<div className="flex flex-col gap-1.5 text-sm py-3 px-5">
    <p>⭐⭐⭐⭐⭐</p>
    <p>{props.dis}</p>
</div>
        </div>
        </>
    )
}
export default Card;