import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TodoContext from '../contexts/TodoContext';
import { API_KEY } from '../config/config';

const HeaderWrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    font-weight: 100;
    font-size: 2rem;
`;

const Header = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [apiData, setApiData] = useState({});
    const { actions } = useContext(TodoContext);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { data } = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API_KEY}`
            );
            console.log(data);
            setApiData(data);
            setIsLoaded(true);
        });
    }, []);
    return (
        <HeaderWrapper>
            {isLoaded ? (
                <div className="weather">
                    <img src={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}.png`} alt="" />
                    <span>{apiData.main.temp}도</span>
                </div>
            ) : null}
        </HeaderWrapper>
    );
};

export default Header;
