import React, { useContext } from "react";
import { MenuListProvider } from "../provider/StateProvider";
import ProjectItem from "./ProjectItem";
import Link from "next/link";

function Projects() {
  const { projectList } = useContext(MenuListProvider);

  return (
    <section>
      <h2 id="to_projects">Works</h2>
      <p>制作実績</p>
      <div className="flex flex-col w-full gap-10 ">
        {projectList.map((project, i) => (
          <ProjectItem
            title={project.title}
            languages={project.languages}
            src={project.src}
            key={project.title}
            link={project.link}
            description={project.description}
            index={i}
          />
        ))}
        <Link href={"/works"}>
          <a className={`
              w-4/5 mx-auto font-bold flex flex-col items-center text-mainB py-0.5 px-3 border-2 border-mainB md:w-min md:px-10 
              group hover:bg-mainB transform transition-colors duration-500 ease-out
            `}>
            <span className="transform transition-all duration-500 ease-in group-hover:translate-y-0.5 group-hover:text-[#fafafa] whitespace-nowrap text-xl">View More</span>
            <span className="transform transition-all duration-500 ease-in group-hover:-translate-y-0.5 group-hover:text-[#fafafa] whitespace-nowrap text-xs">もっと見る</span>
          </a>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
