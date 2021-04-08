import React, { useState } from 'react';

const TodoPage = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input style={{borderColor:'grey', borderWidth: 5, width:'15%', height: 25}} value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <div>
                <button style={{margin:'20px', width:'6%', fontFamily:'revert', fontWeight:'bold', height: 30, borderColor:'white'}}>Submit</button>
            </div>
        </form>
    );
};

export default TodoPage;