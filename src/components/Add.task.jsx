import React, { useState } from 'react';

import Button from './Button';

import './Add.task.css';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
       if (inputData.trim()) { // Verifica se o input não está vazio
        handleTaskAddition(inputData)
        setInputData('');
       }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTaskClick();
        }
    }

    return (
        <div className='add-task-container'>
            <input 
                onChange={handleInputChange} 
                value={inputData}
                onKeyDown={handleKeyPress} // Adiciona o manipulador para a tecla Enter
                className='add-task-input' 
                type="text" 
                placeholder='Adicionar nova tarefa'
                />
            ;
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
};
export default AddTask;