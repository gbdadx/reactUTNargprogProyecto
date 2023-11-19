//TaskForm

const TaskForm = ({ addTask, taskInput }) => {
  const handleInputChange = (e) => {
    taskInput.onChange(e.target.value);
  };

  return (
    <form>
      <fieldset id="fieldset" >
        <input 
          type="text"
          id="taskInput"
          value={taskInput.value}
          onChange={handleInputChange} 
        />
        <button className="addButton" onClick={addTask}>
          Agregar Tarea
        </button>
      </fieldset>
    </form>
  );
};

export default TaskForm;
