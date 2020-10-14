import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../contexts/TodoContext';

const TodoItemLeftWrapper = styled.div`
    position: relative;
`;

const ContentWrapper = styled.div`
    font-weight: 600;
    word-break: break-all;
    margin-left: 10px;
`;

const SpanWrapperChecked = styled.span`
    text-decoration: line-through;
    color: #888888;
`;

const CheckboxWrapper = styled.input`
    position: absolute;
    top: -2px;
    left: -15px;
`;

const TodoItemLeft = ({ item, idx, showUpdateForm, setShowUpdateForm, isChecked, setIsChecked, setShowModal }) => {
    const [updateValue, setUpdateValue] = useState();
    const value = useContext(TodoContext);

    useEffect(() => {
        setUpdateValue(item);
    }, [item, idx]);

    return (
        <TodoItemLeftWrapper>
            {showUpdateForm ? (
                <input
                    type="text"
                    value={updateValue}
                    onChange={(e) => setUpdateValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            value.actions.updateList(updateValue, idx);
                            setShowUpdateForm(false);
                        } else if (e.key === 'Escape') {
                            setUpdateValue(item);
                            setShowUpdateForm(false);
                        }
                    }}
                />
            ) : (
                <ContentWrapper>
                    <CheckboxWrapper
                        type="checkbox"
                        onClick={() => {
                            setIsChecked(!isChecked);
                            setShowModal(false);
                        }}
                    />
                    {isChecked ? <SpanWrapperChecked>{item}</SpanWrapperChecked> : item}
                </ContentWrapper>
            )}
        </TodoItemLeftWrapper>
    );
};

export default React.memo(TodoItemLeft);
