//TaskItem
import './TaskItem.css'

const TaskItem = ({ task, index, removeTask }) => {
  

  return (
    <li >
      <span id="tarea">
      {task.name}</span>
      <span id="borrar">
        <button className='remover' onClick={() => removeTask(index)}>❌</button>
      </span>
    </li>
  );
};

export default TaskItem;
