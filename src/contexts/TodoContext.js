import React, { useState, useCallback, createContext } from 'react';

const TodoContext = createContext({
    state: { list: ['ex) Study math'] },
    actions: {
        createList: () => {},
        updateList: () => {},
        deleteList: () => {},
    },
});

const TodoProvider = ({ children }) => {
    const [list, setList] = useState(['ex) Study math']);
    const createList = useCallback((todoContent) => setList(list.concat(todoContent)), [list]);
    const deleteList = useCallback((idx) => setList(list.filter((item, index) => index !== idx)), [list]);
    const updateList = useCallback(
        (updateInputText, idx) => setList(list.map((item, index) => (index === idx ? updateInputText : item))),
        [list]
    );

    const value = {
        state: { list },
        actions: { createList, deleteList, updateList },
    };

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const TodoConsumer = TodoContext.Consumer;

export { TodoProvider, TodoConsumer };

export default TodoContext;
