import React from 'react';
import styled from 'styled-components'

//5451bf4e9300407691a4ce8fc60b4e08

//https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY
//https://www.mirror.co.uk/3am/celebrity-news/sas-who-dares-wins-tony-22013835

export default function News(props) {

    return (
        <div>
            {props.news && (
                
                <Container>
                <Card>
                <Background src={props.news.articles[props.index].urlToImage} alt="">

                </Background>

                <Title>{props.news.articles[props.index].title}</Title>
                <TextContent>{props.news.articles[props.index].description}</TextContent>
                <Date>{props.news.articles[props.index].publishedAt}</Date>
                </Card>

                <Card>
                <Background src={props.news.articles[props.index + 1].urlToImage} alt="">

                </Background>

                <Title>{props.news.articles[props.index + 1].title}</Title>
                <TextContent>{props.news.articles[props.index + 1].description}</TextContent>
                <Date>{props.news.articles[props.index + 1].publishedAt}</Date>
                </Card>

                <Card>
                <Background src={props.news.articles[props.index + 2].urlToImage} alt=""></Background>
                <Title>{props.news.articles[props.index + 2].title}</Title>
                <TextContent>{props.news.articles[props.index + 2].description}</TextContent>
                <Date>{props.news.articles[props.index + 2].publishedAt}</Date>
                </Card>
                
                </Container>
                
            )}
            
        </div>
    );
}

const Background = styled.img`
    /* max-width: 100%; */
    height: auto;
    width: 95%;
    /* border-radius: 5%; */
    padding: 2.5%;
`;

const Container = styled.div`
  display: flex;
  height : 50vh;
  width : 65vw;
  /* overflow: hidden; */
  justify-content: space-between;
  
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  height : 50vh;
  width : 20vw;
  border: 1px solid #FF969B;
  background-color: white;

  /* overflow: hidden; */
`;

const Title = styled.div`
  font-weight: bold;
  text-align: center;
  margin: 2%;
`;

const TextContent = styled.div`
  text-align: justify;
  margin: 2%;
`;

const Date = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;