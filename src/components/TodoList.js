import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../contexts/TodoContext';
import TodoItemWrapper from './TodoItemWrapper';

const TodoListWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(14, 18, 19, 0.9);
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 320px;
`;

const TextInputWrapper = styled.input`
    all: unset;
    border-bottom: 1px solid white;
    padding: 5px;
    color: white;
`;

const TodoList = () => {
    const [inputText, setInputText] = useState('');
    const value = useContext(TodoContext);

    return (
        <TodoListWrapper>
            <TodoItemWrapper />
            <TextInputWrapper
                type="text"
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
                placeholder="Type to do."
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        value.actions.createList(e.target.value);
                        setInputText('');
                    }
                }}
            />
        </TodoListWrapper>
    );
};

export default React.memo(TodoList);
