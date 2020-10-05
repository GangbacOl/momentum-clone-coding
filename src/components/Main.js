import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../contexts/TodoContext';
import Greeting from './Greeting';
import First from './First';

const MainWrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    font-weight: 100;
    font-size: 2rem;
`;

const Main = () => {
    const [inputText, setInputText] = useState('');
    const [isLogged, setIsLogged] = useState(null);
    const value = useContext(TodoContext);
    useEffect(() => {
        setIsLogged(localStorage.getItem('isLogged'));
    }, []);
    return (
        <MainWrapper>
            {isLogged ? <Greeting /> : <First />}
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        value.actions.createList(inputText);
                        setInputText('');
                    }
                }}
            />
        </MainWrapper>
    );
};

export default Main;
