import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import TodoContext from '../contexts/TodoContext';

const TodoItemStyleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    overflow: auto;
    max-height: 700px;
    overflow: auto;
`;

const TodoItemWrapper = () => {
    const value = useContext(TodoContext);
    return (
        <TodoItemStyleWrapper>
            {value.state.list.map((item, idx) => {
                return (
                    <TodoItem
                        item={item}
                        idx={idx}
                        updateList={value.actions.updateList}
                        deleteList={value.actions.deleteList}
                        key={idx}
                    />
                );
            })}
        </TodoItemStyleWrapper>
    );
};

export default React.memo(TodoItemWrapper);
