import React from 'react';
import styled from 'styled-components'

import Carousel  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function Photos(props) {
    let w = 800;
    let url = "https://images.unsplash.com/photo-1588145906905-fd9ec4761f78?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=" + w + "&fit=max&ixid=eyJhcHBfaWQiOjEzMDk0Mn0"

    return (
        <div>
            <Container>
            <Carousel autoPlay={2000}
                        animationSpeed={1000}
                        infinite
                        >
                <img src={url} alt="zeub" />
                <img src="https://images.unsplash.com/photo-1588143534910-880c5027864b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjEzMDk0Mn0" alt="zeub" />
                <img src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjEzMDk0Mn0" alt="zeub" />
            </Carousel>
            </Container>
            <CaptionContainer>
            <Caption>Caption</Caption>
            </CaptionContainer>
        </div>
    );
}

const Container = styled.div`
  height : 60vh;
  width : 45vw;
  overflow: hidden;
`;

const CaptionContainer = styled.div`
    width : 45vw;
`;

const Caption = styled.div`
  text-align: center;
  line-height: normal;
  padding: 0.5rem 0rem;
  font-weight: bold;
  font-size: 1vw;

`;