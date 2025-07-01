import { FaRegCommentDots } from "react-icons/fa";
import { MdChecklistRtl } from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import { GiFactoryArm } from "react-icons/gi";
import { BiSolidUserBadge } from "react-icons/bi";

export default function Primarynav() {
  return (
    <div className="w-full flex items-center justify-center gap-x-50 gap-y-5 flex-wrap pt-10 pb-20 bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-18 h-18 rounded-full bg-[#0B0C4C] flex items-center justify-center text-[#00E6C0] text-5xl">
          <GiFactory />
        </div>
        <h1 className="text-3xl font-bold text-[#0B0C4C]">
          Y<span className="text-[#00E6C0]">f</span><br></br> Enterprises
        </h1>
      </div>

     
      <div className="sm:flex hidden items-center space-x-6">
        <Feature icon={<FaRegCommentDots />} title="24/7" subtitle="Customer Service" />
        <Feature icon={<MdChecklistRtl />} title="Kolkata" subtitle="Certifide Company" />
        <Feature icon={<BiSolidUserBadge />} title="Qualified" subtitle="Expert Professional" />
      </div>
    </div>
  );
}

function Feature({ icon, title, subtitle }) {
  return (
    <div className="flex items-center space-x-2 text-xl">
      <div className="w-10 h-10 bg-[#CCF5EF] rounded-full flex items-center justify-center text-[#00E6C0] ">
        {icon}
      </div>
      <div>
        <h2 className="font-bold text-[#0B0C4C]">{title}</h2>
        <p className="font-semibold text-[#0B0C4C]">{subtitle}</p>
      </div>
    </div>
  );
}
