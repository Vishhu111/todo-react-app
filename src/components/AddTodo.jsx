import { useRef } from "react";

function AddTodo({ onNewItem }) {
    const todoNameElement = useRef();
    const dueDateElement = useRef();

    /*const handleNameChange = (event) => {
        setTodoName(event.target.value);
        noOfUpdates.current += 1;
    }
    const handleDateChange = (event) => {
        setDueDate(event.target.value);
        console.log(`no of updates are:${noOfUpdates.current}`);
    }*/
    const handleAddButtonClicked = () => {
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        todoNameElement.current.value = "";
        dueDateElement.current.value = "";
        onNewItem(todoName, dueDate);   //send to parent i.e in app.jsx
    }
    return (
        <div className="container text-center">
            <form className="row kg-row" onSubmit={handleAddButtonClicked}>
                <div className="col-6">
                    <input type="text" ref={todoNameElement} placeholder="Enter Todo Here" />
                </div>
                <div className="col-4">
                    <input type="date" ref={dueDateElement} />
                </div>
                <div className="col-1">
                    <button type="button" className="btn btn-success kg-button"
                        onClick={handleAddButtonClicked}>
                        Add
                    </button>
                </div>
            </form>
        </div>
    );

}
export default AddTodo;