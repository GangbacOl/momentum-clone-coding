import React, { useState } from 'react';

const First = () => {
    const [username, setUsername] = useState(null);
    return (
        <div>
            <h2>이름을 입력해주세요.</h2>
            <input
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
        </div>
    );
};

export default First;
