import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_KEY } from '../config/config';

const HeaderWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 15px;
    text-align: right;
    font-size: 1.5rem;
    color: white;
`;

const WeatherContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: white;
`;

const WeatherWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const SpanWrapper = styled.p`
    font-size: 0.9rem;
    margin: 0 5px 0 0;
`;

const Header = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [apiData, setApiData] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { data } = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API_KEY}`
            );
            setApiData(data);
            setIsLoaded(true);
        });
    }, []);
    return (
        <HeaderWrapper>
            {isLoaded ? (
                <WeatherWrapper>
                    <WeatherContentWrapper>
                        <img
                            src={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}.png`}
                            alt=""
                            stlye={{ width: 30 }}
                        />
                        <span>{parseInt(apiData.main.temp)}°</span>
                    </WeatherContentWrapper>
                    <SpanWrapper>{apiData.name}</SpanWrapper>
                    {/* {apiData.weather[0].main} */}
                </WeatherWrapper>
            ) : null}
        </HeaderWrapper>
    );
};

export default Header;
