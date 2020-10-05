import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import TodoList from './components/TodoList';

import { TodoProvider } from './contexts/TodoContext';

const AppWrapper = styled.div`
    border: 1px solid black;
`;

const App = () => {
    return (
        <TodoProvider>
            <AppWrapper>
                <Header />
                <Main />
                <TodoList />
            </AppWrapper>
        </TodoProvider>
    );
};

export default App;
