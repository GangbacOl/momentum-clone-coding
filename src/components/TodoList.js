import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import TodoContext from '../contexts/TodoContext';

const TodoListWrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
`;

const TodoList = () => {
    const [inputText, setInputText] = useState('');
    const value = useContext(TodoContext);
    return (
        <TodoListWrapper>
            <input type="text" onChange={(e) => setInputText(e.target.value)} value={inputText} />
            <input
                type="button"
                onClick={() => {
                    value.actions.createList(inputText);
                    setInputText('');
                }}
                value="추가"
            />
            {value.state.list.map((item, idx) => (
                <TodoItem item={item} idx={idx} key={idx} />
            ))}
        </TodoListWrapper>
    );
};

export default TodoList;
