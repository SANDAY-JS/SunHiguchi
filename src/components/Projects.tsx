import React, { useContext } from "react";
import { MenuListProvider } from "../provider/StateProvider";
import ProjectItem from "./ProjectItem";

function Projects() {
  const { projectList } = useContext(MenuListProvider);

  return (
    <section>
      <h2 id="to_projects">Projects</h2>
      <p>制作実績</p>
      <div className="flex flex-wrap justify-center lg:justify-between w-full lg:max-w-screen-xl lg:mx-auto">
        {projectList.map((project) => (
          <ProjectItem
            title={project.title}
            language={project.language}
            src={project.src}
            key={project.title}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
