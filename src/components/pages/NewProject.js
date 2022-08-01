import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";
function NewProject() {
  let navigate = useNavigate();
  function createPost(project) {
    /* inicializar o projetc cost an servoces */
    project.cost = 0;
    project.services = [];
    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate("/projects", {
          state: { message: "projeto criado com sucesso!" },
        });
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}
export default NewProject;
