import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import TodoList from './components/TodoList';

import { TodoProvider } from './contexts/TodoContext';

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
	}
`;

const AppWrapper = styled.div`
    background-image: url('https://source.unsplash.com/random/1920x1080');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: linear-gradient(
        to right,
        rgba(20, 20, 20, 0.1) 10%,
        rgba(20, 20, 20, 0.7) 70%,
        rgba(20, 20, 20, 1)
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    animation: fadeIn 700ms ease-in-out 1s both;
`;

const App = () => {
    return (
        <AppWrapper>
            <GlobalStyle />
            <Header />
            <TodoProvider>
                <Main />
                <TodoList />
            </TodoProvider>
        </AppWrapper>
    );
};

export default App;
