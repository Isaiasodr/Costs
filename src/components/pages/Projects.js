import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Message from "../layouts/message";
import styles from "./Projects.module.css";
import Container from "../layouts/Container";
import Loading from "../layouts/Loading";
import Linkbutton from "../layouts/LinkButton";
import ProjectCard from "../project/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 3000);
  }, []);
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <Linkbutton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message msg={message} type="success" />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading &&
          projects.length === 0(<p>Não há projetos cadastrados</p>)}
      </Container>
    </div>
  );
}

export default Projects;
