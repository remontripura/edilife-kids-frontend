import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

interface CourseCardProps {
  id:string,
  title:string,
  description:string,
  imageSrc :StaticImageData
}

const CourseCard = ({ id, title, description, imageSrc }: CourseCardProps ) => {

  return (
    <Link href={`/courses/${id}`} className="block">
      <div
        className=" mx-4 rounded-xl  lg:h-[450px]
        border m-4 md:m-1 transition-shadow duration-300 ease-in-out hover:shadow-md "
      >
        <div className="relative aspect-video">
          <Image className="w-full" src={imageSrc} alt={title} />
        </div>
        <div className=" px-2.5 md:px-6 py-4">
          <h3 className="font-bold text-lg md:text-[24px] text-[#302C2C] leading-[30.1px] mb-2">
            {title}
          </h3>
          <p className="text-[#787676] text-sm md:text-base leading-[24px]">
            {description}
          </p>
        </div>
        <div className="px-2.5 md:px-6 py-4">
          <span className="flex gap-2 items-center text-[#363636] text-sm md:text-base leading-[24px] group">
            Learn More
            <GoArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
