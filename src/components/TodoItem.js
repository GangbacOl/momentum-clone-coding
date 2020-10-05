import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../contexts/TodoContext';

const TodoItemWrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
`;

const TodoItem = ({ item, idx }) => {
    const [updateInputText, setUpdateInputText] = useState('');
    const [updateForm, setUpdateForm] = useState(false);
    const value = useContext(TodoContext);

    document.body.addEventListener('click', () => setUpdateForm(false));

    return (
        <TodoItemWrapper>
            <div className="listItem" key={idx}>
                <span>{item}</span>
                {updateForm ? (
                    <div>
                        <input
                            type="text"
                            onChange={(e) => setUpdateInputText(e.target.value)}
                            value={updateInputText}
                        />
                        <input
                            type="button"
                            onClick={() => {
                                value.actions.updateList(updateInputText, idx);
                                setUpdateInputText('');
                                setUpdateForm(false);
                            }}
                            value="수정"
                        />
                    </div>
                ) : (
                    <div>
                        <input type="button" onClick={() => value.actions.deleteList(idx)} value="삭제" />
                        <input type="button" onClick={() => setUpdateForm(true)} value="수정" />
                    </div>
                )}
            </div>
        </TodoItemWrapper>
    );
};

export default TodoItem;
