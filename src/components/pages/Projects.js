import { useLocation } from "react-router-dom";
import Message from "../layouts/message";
import styles from "./Projects.module.css";
import Container from "../layouts/Container";
import Linkbutton from "../layouts/LinkButton";
function Projects() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <Linkbutton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message msg={message} type="success" />}
      <Container customClass="start">
        <p>projetos...</p>
      </Container>
    </div>
  );
}

export default Projects;
