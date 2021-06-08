import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`taskList__item${task.done && hideDoneTasks ? " taskList__item--hidden" : ""}`}
            >
                <button className="taskList__button taskList__button--toggleDone">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`taskList__span${task.done ? " taskList__span--done" : ""}`}>
                    {task.content}
                </span>
                <button className="taskList__button taskList__button--remove">
                    🗑
        </button>
            </li>

        ))}
    </ul >
);
export default Tasks;