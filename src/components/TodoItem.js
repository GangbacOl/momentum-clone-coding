import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItemLeft from './TodoItemLeft';
import TodoItemRight from './TodoItemRight';

const TodoItemWrapper = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
    margin: 3px auto;
    color: white;
    width: 90%;
    font-size: 0.8rem;
`;

const TodoItem = ({ item, idx, deleteList }) => {
    const [showModal, setShowModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    return (
        <TodoItemWrapper>
            <TodoItemLeft
                item={item}
                idx={idx}
                setShowModal={setShowModal}
                showUpdateForm={showUpdateForm}
                setShowUpdateForm={setShowUpdateForm}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
            <TodoItemRight
                idx={idx}
                isChecked={isChecked}
                deleteList={deleteList}
                showModal={showModal}
                setShowModal={setShowModal}
                setShowUpdateForm={setShowUpdateForm}
            />
        </TodoItemWrapper>
    );
};

export default React.memo(TodoItem);
