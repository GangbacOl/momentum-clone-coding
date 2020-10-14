import React from 'react';
import styled from 'styled-components';

const TodoItemButtonModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    border-radius: 3px;
    padding: 3px 0;
    width: 110px;
    background-color: #333333;
    position: absolute;
    right: 45px;
`;

const InputWrapper = styled.input`
    width: 100%;
    border: none;
    transition: all 0.3s;
    background-color: #333333;
    color: white;
    right: 0;
    &:hover {
        background-color: #515151;
    }
`;

const TodoItemButtonModal = ({ idx, deleteList, setShowModal, setShowUpdateForm }) => {
    return (
        <TodoItemButtonModalWrapper>
            <InputWrapper
                type="button"
                value="수정"
                onClick={() => {
                    setShowUpdateForm(true);
                    setShowModal(false);
                }}
            />
            <InputWrapper
                type="button"
                value="삭제"
                onClick={() => {
                    deleteList(idx);
                    setShowModal(false);
                }}
            />
            <InputWrapper type="button" value="취소" onClick={() => setShowModal(false)} />
        </TodoItemButtonModalWrapper>
    );
};

export default React.memo(TodoItemButtonModal);
