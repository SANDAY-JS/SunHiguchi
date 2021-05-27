import React, { useContext } from "react";
import { MenuListProvider } from "../StateProvider";
import ProjectItem from "./ProjectItem";

function Projects() {
  const { projectList } = useContext(MenuListProvider);

  return (
    <section>
      <h2 id="to_projects">Projects</h2>
      <p>制作実績</p>
      <div className="flex flex-wrap justify-center w-full">
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
