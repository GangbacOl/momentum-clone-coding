import React, { useState } from 'react';
import styled from 'styled-components';

const FirstWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PWrapper = styled.p`
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
`;

const InputWrapper = styled.input`
    all: unset;
    border-bottom: 3px solid white;
    width: 90%;
    text-align: center;
    font-size: 2rem;
`;

const First = () => {
    const [username, setUsername] = useState(null);
    return (
        <FirstWrapper>
            <PWrapper>이름을 입력해주세요.</PWrapper>
            <InputWrapper
                type="text"
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        localStorage.setItem('username', username);
                        localStorage.setItem('isLogged', true);
                        window.location.reload();
                    }
                }}
            />
        </FirstWrapper>
    );
};

export default First;
