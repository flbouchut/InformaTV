import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';

import ListCategories from './ListCategories'
import Photos from './Photos';
import Reminders from './Reminders';
import Messages from './Messages';
import News from './News';
import Weather from './Weather';
import ScrollingText from './ScrollingText'

export default function Homepage() {
    const [index, setIndex] = useState(0);
    const [indexNews, setIndexNews] = useState(0);
    // let today = new Date();

    const [today, setToday] = useState(new Date());

    const [forecast, setForecast] = useState();
    //42ac8838a5eb1a998b9ac69f79eb45c7 la mienne
    //7b996dfcc08c6eb32d0b8fa2ee15669a pas la mienne

    const [news, setNews] = useState();
    const [reminders, setReminders] = useState();

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://newsapi.org/v2/top-headlines?country=ie&apiKey=5451bf4e9300407691a4ce8fc60b4e08");
            res
                .json()
                .then(res => setNews(res))
            // .catch(err => setErrors(err));
        }

        fetchData();
        console.log("appel a l'api news");
    }, []);


    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=30.489772&lon=-99.771335&units=metric&APPID=7b996dfcc08c6eb32d0b8fa2ee15669a");
            res
                .json()
                .then(res => setForecast(res.daily))
            // .catch(err => setErrors(err));
        }

        fetchData();
        console.log("appel a l'api");
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3004/reminders')
                .then((res) => {
                    console.log(res.data)
                    setReminders(res.data)
                }).catch((error) => {
                    console.log(error)
                });
        console.log("appel a l'api pour les reminders");
    }, []);


    useEffect(() => {
        const timer = setTimeout(() =>
            setIndex(index + 1)
            , 5000);
        if (index === 5) {
            setIndex(0);
        }
        return () => {
            clearTimeout(timer);
        }
    }, [index])

    useEffect(() => {
        const timer = setTimeout(() =>
            setIndexNews(indexNews + 3)
            , 25000);

        if (indexNews > 14) {
            setIndexNews(0);
        }
        return () => {
            clearTimeout(timer);
        }
    }, [indexNews])

    useEffect(() => {
        const timer = setTimeout(() =>
            setToday(new Date())
            , 1000);
        return () => {
            clearTimeout(timer);
        }
    }, [today])


    //besoin d'ajouter un useEffect pour l'heure en haut a gauche


    function switchPage(index) {
        switch (index) {
            case 0:
                return <News news={news}  index={indexNews}/>;
            case 1:
                return <Weather forecast={forecast}/>;
            case 2:
                return <Messages />;
            case 3:
                return <Reminders reminders={reminders}/>;
            case 4:
                return <Photos />;
            default:
                return null;
        }

    }

    return (
        <div>
            {/* {console.log(news)} */}
            <HomePageButton>
                InformaTV
            </HomePageButton>
            <HomePageButton2>
                {today.toString().substring(0, 16)}
            </HomePageButton2>
            <HomePageButton3>
                {today.toString().substring(16, 25)}
            </HomePageButton3>
            <ContentAndBoucle>
                <Content>
                    {switchPage(index)}

                </Content>
                <Boucle>
                    <ListCategories index={index}>
                    </ListCategories>
                </Boucle>


            </ContentAndBoucle>
            
            <Bottom>
            <NewsText>News</NewsText>
            <ScrollingBar>
                <ScrollingText news={news}></ScrollingText>
            </ScrollingBar>
            </Bottom>


        </div>
    );
}


const Bottom = styled.div`
    display: flex;
    width: 100vw;
    height:10vh;
    overflow: hidden;
    position: relative;
    background: white;
    color: #6EC8B9;
`

const ScrollingBar = styled.div`
    display: flex;
    width: 90vw;
    height:10vh;
    overflow: hidden;
    position: relative;
    background: white;
    color: #6EC8B9;
`
const NewsText = styled.div`
    height:10vh;
    line-height: 10vh;
    width: 20vw;
    font-size: 5vh;
    text-align: center;
    background: #6EC8B9;
    color: white;
`

const ContentAndBoucle = styled.div`
    display: flex;
    flex-direction: row;
    height:90vh;
`

const Content = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
    justify-content: center;
    align-items: center;
`
const Boucle = styled.div`
    width:20%;
`

const HomePageButton = styled.button`
    position: absolute;
    top: 1%;


    background-color: #6EC8B9;
    color: #ffff;
    font-size: 2em;
    

    padding: 5px;
    border: none;
`;

const HomePageButton2 = styled.button`
    position: absolute;
    top: 7%;


    background-color: #6EC8B9;
    color: #ffff;
    font-size: 2em;
    

    padding: 5px;
    border: none;
`;
const HomePageButton3 = styled.button`
    position: absolute;
    top: 13%;


    background-color: #6EC8B9;
    color: #ffff;
    font-size: 2em;
    

    padding: 5px;
    border: none;
`;