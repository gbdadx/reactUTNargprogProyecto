//TaskList
import TaskItem from './TaskItem';



const TaskList = ({ tasks, removeTask}) => {
  
  return (

    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          index={index}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
