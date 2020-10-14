import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../contexts/TodoContext';
import Greeting from './Greeting';
import First from './First';

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 10px;
    font-size: 2rem;
    color: white;
`;

const GreetingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InputWrapper = styled.input`
    all: unset;
    border-bottom: 3px solid white;
    width: 500px;
    min-width: 400px;
    text-align: center;
    font-size: 2rem;
`;

const Main = () => {
    const [inputText, setInputText] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    const value = useContext(TodoContext);
    useEffect(() => {
        setIsLogged(localStorage.getItem('isLogged'));
    }, []);
    return (
        <MainWrapper>
            {isLogged ? (
                <GreetingWrapper>
                    <Greeting />
                    <InputWrapper
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                value.actions.createList(inputText);
                                setInputText('');
                            }
                        }}
                    />
                </GreetingWrapper>
            ) : (
                <First />
            )}
        </MainWrapper>
    );
};

export default Main;
