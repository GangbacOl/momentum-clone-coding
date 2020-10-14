import React from 'react';
import styled from 'styled-components';
import TodoItemButtonModal from './TodoItemButtonModal';

const TodoItemRightWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const InputWrapper = styled.input`
    all: unset;
    color: white;
    padding: 2px 5px;
    transition: all 0.2s;
    border-radius: 100%;
    z-index: 999;
    position: relative;
    &:hover {
        background-color: #3d3d3d;
    }
`;

const TodoItemRight = ({ idx, isChecked, deleteList, showModal, setShowModal, setShowUpdateForm }) => {
    return (
        <TodoItemRightWrapper>
            {showModal && !isChecked && (
                <TodoItemButtonModal
                    idx={idx}
                    deleteList={deleteList}
                    setShowModal={setShowModal}
                    setShowUpdateForm={setShowUpdateForm}
                />
            )}
            {!isChecked && <InputWrapper type="button" value="▾" onClick={() => setShowModal(!showModal)} />}
        </TodoItemRightWrapper>
    );
};

export default React.memo(TodoItemRight);
