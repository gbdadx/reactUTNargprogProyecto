//TaskItem
import './TaskItem.css';

const TaskItem = ({ task, index, removeTask, verifyTask,  editTask}) => {
  const taskItemStyle = {
    textDecoration: task.completed ? 'line-through' : 'none',
    backgroundColor: task.completed ? '#eee' : 'transparent',
  };
  return (
    <li className="task-item" style={taskItemStyle}>
      <div className="task-name">{task.name}</div>
      <div className="task-actions">
        <button className="edit" onClick={() => editTask(index)}>
          🖊
        </button>
        <button className="remove" onClick={() => removeTask(index)}>
          ❌
        </button>
        <button className="verify" onClick={() => verifyTask(index)}>
          ✔️
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
