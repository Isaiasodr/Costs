function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placehoder="Insira o nome do projeto" />
      </div>
      <div>
        <input type="number" placehoder="Insira o orçamento do projeto" />
      </div>
      <div>
        <select name="category_id">
          <option disabled>Selecione a Categoria</option>
        </select>
      </div>
      <input type="submit" value="criar projeto" />
    </form>
  );
}
export default ProjectForm;
