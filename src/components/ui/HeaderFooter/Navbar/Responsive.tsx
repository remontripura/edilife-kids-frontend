import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { images, menuItems } from "@/components/store";

const Responsive = ({ handleToggle, toggle } : any) => {
  return (
    <div className={`md:hidden block py-2 bg`}>
      <div className="flex justify-between items-center px-4 relative">
      
     <Link href="/">
     <Image
          className="w-[150px]"
          src={images.logo}
          alt="Logo"
          width={500}
          height={500}
        />
     </Link>
        <HiOutlineMenuAlt2
          onClick={handleToggle}
          className="text-[24px] text-primary"
        />
      </div>
      <div
        onClick={handleToggle}
        className={`w-full h-screen bg-[#0000005b] z-[13] fixed top-0  md:hidden ${
          toggle ? "show" : "hidden"
        }`}
      ></div>
      <div
        className={`bg-secondary w-1/2 fixed h-screen z-[14] top-0 overflow-y-auto bg-[#ffffff] ${
          toggle ? "left-0 top-0 duration-300" : " -left-full duration-300"
        }`}
      >
        <nav className="flex flex-col space-y-2 ">
       <Link href='/' >
       <Image
          className="w-[150px] pl-3 pt-2"
          src={images.logo}
          alt="Logo"
          width={500}
          height={500}
        />
       </Link>
          {menuItems.map((item, i) => (
            <Link 
              key={i}
              href={`${item.pathname}`}
              className="hover:bg-[#acacac] hover:text-white py-2 font-semibold pl-3 duration-300"
              onClick={handleToggle}
            >
              <span className=""> {item.item}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Responsive;
