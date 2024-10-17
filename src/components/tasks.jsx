import React from "react";
import Task from "./task";

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
            ))}
        </>
    );
};
export default Tasks;