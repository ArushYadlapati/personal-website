// @flow strict

import {skillsData} from "@/utils/data/skills";
import {skillsImage} from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
    const getSkillWebsite = (skill) => {
        const websiteMap = {
            Javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            React: "https://reactjs.org/",
            Python: "https://www.python.org/",
            HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "Next JS": "https://nextjs.org/",
            "Nuxt JS": "https://nuxtjs.org/",
            "Node JS": "https://nodejs.org/",
            Vue: "https://vuejs.org/",
            Angular: "https://angular.io/",
            Docker: "https://www.docker.com/",
            Photoshop: "https://www.adobe.com/products/photoshop.html",
            Illustrator: "https://www.adobe.com/products/illustrator.html",
            Svelte: "https://svelte.dev/",
            GCP: "https://cloud.google.com/",
            Azure: "https://azure.microsoft.com/",
            Fastify: "https://www.fastify.io/",
            Haxe: "https://haxe.org/",
            Ionic: "https://ionicframework.com/",
            Markdown: "https://www.markdownguide.org/",
            "Microsoft Office": "https://www.office.com/",
            Picsart: "https://picsart.com/",
            Sketch: "https://www.sketch.com/",
            Unity: "https://unity.com/",
            WolframAlpha: "https://www.wolframalpha.com/",
            "Adobe XD": "https://www.adobe.com/products/xd.html",
            "After Effects": "https://www.adobe.com/products/aftereffects.html",
            Bootstrap: "https://getbootstrap.com/",
            Bulma: "https://bulma.io/",
            CapacitorJs: "https://capacitorjs.com/",
            Coffeescript: "https://coffeescript.org/",
            MemSQL: "https://www.singlestore.com/",
            C: "https://en.cppreference.com/w/c",
            "C++": "https://isocpp.org/",
            "C#": "https://docs.microsoft.com/en-us/dotnet/csharp/",
            Java: "https://www.java.com/",
            Julia: "https://julialang.org/",
            Matlab: "https://www.mathworks.com/products/matlab.html",
            Swift: "https://developer.apple.com/swift/",
            Ruby: "https://www.ruby-lang.org/",
            Kotlin: "https://kotlinlang.org/",
            Go: "https://golang.org/",
            PHP: "https://www.php.net/",
            Flutter: "https://flutter.dev/",
            Dart: "https://dart.dev/",
            Typescript: "https://www.typescriptlang.org/",
            Git: "https://git-scm.com/",
            Figma: "https://www.figma.com/",
            Canva: "https://www.canva.com/",
            Ubuntu: "https://ubuntu.com/",
            MongoDB: "https://www.mongodb.com/",
            Tailwind: "https://tailwindcss.com/",
            ViteJS: "https://vitejs.dev/",
            VuetifyJS: "https://vuetifyjs.com/",
            MySQL: "https://www.mysql.com/",
            PostgreSQL: "https://www.postgresql.org/",
            AWS: "https://aws.amazon.com/",
            Firebase: "https://firebase.google.com/",
            Blender: "https://www.blender.org/",
            "Premiere Pro": "https://www.adobe.com/products/premiere.html",
            "Adobe Audition": "https://www.adobe.com/products/audition.html",
            Deno: "https://deno.land/",
            Django: "https://www.djangoproject.com/",
            Gimp: "https://www.gimp.org/",
            Graphql: "https://graphql.org/",
            Lightroom: "https://www.adobe.com/products/photoshop-lightroom.html",
            MaterialUI: "https://material-ui.com/",
            Nginx: "https://www.nginx.com/",
            Numpy: "https://numpy.org/",
            OpenCV: "https://opencv.org/",
            Pytorch: "https://pytorch.org/",
            Selenium: "https://www.selenium.dev/",
            Strapi: "https://strapi.io/",
            Tensorflow: "https://www.tensorflow.org/",
            Webex: "https://www.webex.com/",
            Wordpress: "https://wordpress.org/"
        };

        return websiteMap[skill] || "#"; // Return "#" if no website is defined
    };

    return (<div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
        <div
            className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

        <Image src="./section.svg" alt="Hero" width={1080} height={200} className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-80 mx-auto"/>

        <div className="flex justify-center -translate-y-[1px]">
            <div className="w-3/4">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"/>
            </div>
        </div>

        <div className="flex justify-center my-5 lg:py-8">
            <div className="flex  items-center">
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
        </div>

        <div className="w-full my-12">
            <Marquee gradient={false} speed={80} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction="left">
                {skillsData.map((skill, id) => (
                    <a href={getSkillWebsite(skill)} target="_blank" rel="noopener noreferrer" className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer" key={id}>
                    <div
                        className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                        <div className="flex -translate-y-[1px] justify-center">
                            <div className="w-3/4">
                                <div
                                    className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3 p-6">
                            <div className="h-8 sm:h-10">
                                <Image src={skillsImage(skill)?.src} alt={skill} width={40} height={40} className="h-full w-auto rounded-lg"/>
                            </div>
                            <p className="text-white text-sm sm:text-lg">
                                {skill}
                            </p>
                        </div>
                    </div>
                </a>))}
            </Marquee>
        </div>
    </div>);
}

export default Skills;