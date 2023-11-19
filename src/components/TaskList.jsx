//TaskList
import TaskItem from './TaskItem';


const TaskList = ({ tasks, removeTask, editTask, verifyTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          index={index}
          removeTask={removeTask}
          editTask={editTask}
          verifyTask={verifyTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
