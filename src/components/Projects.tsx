import React, { useContext } from "react";
import { MenuListProvider } from "../provider/StateProvider";
import ProjectItem from "./ProjectItem";

function Projects() {
  const { projectList } = useContext(MenuListProvider);

  return (
    <section>
      <h2 id="to_projects">Projects</h2>
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
      </div>
    </section>
  );
}

export default Projects;
