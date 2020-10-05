import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

const GreetingWrapper = styled.div`
    border: 1px solid black;
`;

const Greeting = () => {
    const [username, setUsername] = useState('');
    useEffect(() => {
        setUsername(localStorage.getItem('username'));
    }, []);
    return (
        <GreetingWrapper>
            <div>안녕하세요. {username}</div>
        </GreetingWrapper>
    );
};

export default Greeting;
