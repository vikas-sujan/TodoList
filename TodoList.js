import React from 'react';
import Todo from './Todo';

const TodoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <div style={{backgroundColor:'whitesmoke', borderBottom: 2 }}>
                        <Todo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                    </div>
                )
            })}
            <button style={{margin: '20px', height: 30, borderRadius:10, borderColor:'white', fontFamily:'revert'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default TodoList;