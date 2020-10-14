import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GreetingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const H2Wrapper = styled.h2`
    margin: 10px;
    font-size: 10rem;
    font-weight: bold;
`;

const PWrapper = styled.p`
    text-align: center;
    font-size: 2.6rem;
    font-weight: bold;
`;

const Greeting = () => {
    const [username, setUsername] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const getCurrentTime = () => {
        const h = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
        const m = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
        const s = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
        return h + ':' + m + ':' + s;
    };
    useEffect(() => {
        setUsername(localStorage.getItem('username'));
        setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);
    }, []);
    return (
        <GreetingWrapper>
            <H2Wrapper>{currentTime}</H2Wrapper>
            <PWrapper>안녕하세요, {username}님</PWrapper>
        </GreetingWrapper>
    );
};

export default React.memo(Greeting);
