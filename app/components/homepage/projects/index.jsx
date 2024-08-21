import {projectsData} from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import Image from "next/image";

const Projects = () => {

    return (<div id='projects' className="relative z-50  my-12 lg:my-24">
        <div className="sticky top-10">
            <div
                className="w-[600px] h-[10px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

        </div>
        <Image
            src="./section.svg"
            alt="Hero"
            width={1080 * 2}
            height={200 * 2}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-80 mx-auto"
        />
        <div className="pt-24">

            <div className="flex flex-col gap-6">
                {projectsData.slice(0, 4).map((project, index) => (<div
                    id={`sticky-card-${index + 1}`}
                    key={index}
                    className="sticky-card w-full mx-auto max-w-2xl sticky"
                >
                    <div
                        className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s] flex-mobile"> {/* Add flex-mobile class */}
                        <ProjectCard project={project}/>
                        <Image
                            src="./blur-23.svg"
                            alt="Hero"
                            width={1080}
                            height={200}
                            className="absolute bottom-0 opacity-80"
                        />
                    </div>
                </div>))}
            </div>
        </div>
    </div>);
};


export default Projects;