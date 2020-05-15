import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

export default function ScrollingText(props) {
    const [indexScroll, setIndexScroll] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() =>
            setIndexScroll(indexScroll + 2)
            , 15000);

        if (indexScroll > 17) {
            setIndexScroll(0);
        }
        return () => {
            clearTimeout(timer);
        }
    }, [indexScroll])

    const [indexScroll2, setIndexScroll2] = useState(0);

    useEffect(() => {
        let timer = 0

        if (indexScroll2 === 0 ){
            timer = setTimeout(() =>
                setIndexScroll2(indexScroll2 + 2)
            , 22500);
        } else {
            timer = setTimeout(() =>
                setIndexScroll2(indexScroll2 + 2)
            , 15000);
        }

        if (indexScroll2 > 17) {
            setIndexScroll2(0);
        }
        return () => {
            clearTimeout(timer);
        }
    }, [indexScroll2])



    return (
        <div>
            {props.news && (
                <div>
                <Text>{props.news.articles[indexScroll].title.toUpperCase()}</Text>
                <Text2>{props.news.articles[indexScroll2 + 1].title.toUpperCase()}</Text2>
                {/* <Text3>{props.news.articles[indexScroll + 2].title.toUpperCase()}</Text3> */}
                {/* {console.log("indice 1:" + indexScroll)} */}
                {/* {console.log("indice 2:" + (indexScroll2 + 1))} */}
                </div>
            )}

        </div>
    );
}

const Text = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 10vh;
    font-size:3vh;
    text-align: center;
    /* Starting position */
    -moz-transform:translateX(100%);
    -webkit-transform:translateX(100%);	
    transform:translateX(100%);
    /* Apply animation to this element */	
    -moz-animation: scroll-left 15s linear infinite;
    -webkit-animation: scroll-left 15s linear infinite;
    animation: scroll-left 15s linear infinite;
    }
/* Move it (define the animation) */
    @-moz-keyframes scroll-left {
    0%   { -moz-transform: translateX(100%); }
    100% { -moz-transform: translateX(-100%); }
    }
    @-webkit-keyframes scroll-left {
    0%   { -webkit-transform: translateX(100%); }
    100% { -webkit-transform: translateX(-100%); }
    }
    @keyframes scroll-left {
    0%   { 
    -moz-transform: translateX(100%); /* Browser bug fix */
    -webkit-transform: translateX(100%); /* Browser bug fix */
    transform: translateX(100%); 		
    }
    100% { 
    -moz-transform: translateX(-100%); /* Browser bug fix */
    -webkit-transform: translateX(-100%); /* Browser bug fix */
    transform: translateX(-100%); 
 }
`

const Text2 = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 10vh;
    font-size:3vh;
    text-align: center;
    /* Starting position */
    -moz-transform:translateX(100%);
    -webkit-transform:translateX(100%);	
    transform:translateX(100%);
    /* Apply animation to this element */	
    -moz-animation: scroll-left 15s linear infinite;
    -webkit-animation: scroll-left 15s linear infinite;
    animation: scroll-left 15s linear infinite;
    animation-delay: 7.5s;
    }
/* Move it (define the animation) */
    @-moz-keyframes scroll-left {
    0%   { -moz-transform: translateX(100%); }
    100% { -moz-transform: translateX(-100%); }
    }
    @-webkit-keyframes scroll-left {
    0%   { -webkit-transform: translateX(100%); }
    100% { -webkit-transform: translateX(-100%); }
    }
    @keyframes scroll-left {
    0%   { 
    -moz-transform: translateX(100%); /* Browser bug fix */
    -webkit-transform: translateX(100%); /* Browser bug fix */
    transform: translateX(100%); 		
    }
    100% { 
    -moz-transform: translateX(-100%); /* Browser bug fix */
    -webkit-transform: translateX(-100%); /* Browser bug fix */
    transform: translateX(-100%); 
 }
`

const Text3 = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 10vh;
    font-size:3vh;
    text-align: center;
    /* Starting position */
    -moz-transform:translateX(100%);
    -webkit-transform:translateX(100%);	
    transform:translateX(100%);
    /* Apply animation to this element */	
    -moz-animation: scroll-left 15s linear infinite;
    -webkit-animation: scroll-left 15s linear infinite;
    animation: scroll-left 15s linear infinite;
    animation-delay: 15s;
    }
/* Move it (define the animation) */
    @-moz-keyframes scroll-left {
    0%   { -moz-transform: translateX(100%); }
    100% { -moz-transform: translateX(-100%); }
    }
    @-webkit-keyframes scroll-left {
    0%   { -webkit-transform: translateX(100%); }
    100% { -webkit-transform: translateX(-100%); }
    }
    @keyframes scroll-left {
    0%   { 
    -moz-transform: translateX(100%); /* Browser bug fix */
    -webkit-transform: translateX(100%); /* Browser bug fix */
    transform: translateX(100%); 		
    }
    100% { 
    -moz-transform: translateX(-100%); /* Browser bug fix */
    -webkit-transform: translateX(-100%); /* Browser bug fix */
    transform: translateX(-100%); 
 }
`