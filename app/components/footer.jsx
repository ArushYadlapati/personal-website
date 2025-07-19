import Link from 'next/link';
import {personalData} from "@/utils/data/personal-data";
import {BsDiscord, BsGithub} from "react-icons/bs";

function Footer() {
  return (
      <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
        <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
          <div className="flex justify-center -z-40">
            <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="font-mono text-lg md:text-xl lg:text-1xl text-sky-500 transition-all duration-300">
              Arush Y
            </p>
            <a href="mailto:hello@arush.dev"
               className="font-mono text-lg md:text-xl lg:text-xl text-sky-500 hover:text-sky-500">
            <span className="hover:underline hover:text-[#19F2B3] hover:decoration-[#19F2B3]">
              hello@arush.dev
            </span>
            </a>


            <div className="flex items-center gap-5">
              <Link
                  href={personalData.github}
                  target='_blank'
                  className="transition-all text-sky-500 hover:scale-125 duration-300"
              >
                <BsGithub size={30}/>
              </Link>
              <Link
                  href={personalData.discord}
                  target='_blank'
                  className="transition-all text-sky-500 hover:scale-125 duration-300"
              >
                <BsDiscord size={30}/>
              </Link>

            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;