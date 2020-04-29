import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

import ListCategories from './ListCategories'
import Photos from './Photos';
import Reminders from './Reminders';

export default function Homepage() {
    const [index, setIndex] = useState(0);
    let today = new Date();

    useEffect(() => {
        const timer = setTimeout(() => 
            setIndex(index + 1)
        , 1000);
        if(index === 5) {
            setIndex(0);
        }
        return () => {
            clearTimeout(timer);
        }
    }, [index])


    function switchPage(index) {
        switch (index) {
            case 0:
                return <Photos/>;
                break;
            case 1:
                return <Reminders/>;
                break;
            default:
                return null;
                

        }

    }

    return (
        <div>
            
            <HomePageButton>
                InformaTV
            </HomePageButton>
            <HomePageButton2>
                {today.toString().substring(0,16)}
            </HomePageButton2>
            <HomePageButton3>
                {today.toString().substring(16, 25)}
            </HomePageButton3>
            <ContentAndBoucle>
                <Content>
                    {switchPage(index)}
                    
                </Content>
                <Boucle>
                    <ListCategories index = {index}>
                    </ListCategories>
                </Boucle>


            </ContentAndBoucle>

            
            {/* {switchPage(index)} */}

        </div>
    );
}

const ContentAndBoucle = styled.div`
    display: flex;
    flex-direction: row;
    height:100vh;
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
    top: 3%;


    background-color: #6EC8B9;
    color: #ffff;
    font-size: 2em;
    

    padding: 5px;
    border: none;
`;

const HomePageButton2 = styled.button`
    position: absolute;
    top: 10%;


    background-color: #6EC8B9;
    color: #ffff;
    font-size: 2em;
    

    padding: 5px;
    border: none;
`;
const HomePageButton3 = styled.button`
    position: absolute;
    top: 17%;


    background-color: #6EC8B9;
    color: #ffff;
    font-size: 2em;
    

    padding: 5px;
    border: none;
`;