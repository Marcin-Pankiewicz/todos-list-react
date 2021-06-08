import "./style.css"

const ListButtons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <div>
            <button className="taskList__optionButton">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>
            <button
                className="taskList__optionButton"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
        </button>
        </div>
    )
)

export default ListButtons;
