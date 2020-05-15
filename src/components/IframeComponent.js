import React from 'react';
// import styled from 'styled-components'

//5451bf4e9300407691a4ce8fc60b4e08

//https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY
//https://www.mirror.co.uk/3am/celebrity-news/sas-who-dares-wins-tony-22013835
//https://carlow-nationalist.ie/2020/05/12/hse-direct-provision-centres-receiving-priority-testing/

//https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2020/04/18082216/Bruno-Fernandes-Manchester-United.jpg
//https://i2-prod.corkbeo.ie/news/local-news/article18218563.ece/ALTERNATES/s1200/0_Tony123.jpg
export default function IFrameComponent(props) {

    return (
        <div>
            {/* <iframe title="Wikipedia page for Avocados" src="https://www.thejournal.ie/irish-water-conservation-increase-in-domestic-use-5096761-May2020/" title="iframe Example 1" width="900" height="600"></iframe> */}
            
            <img src="https://i2-prod.corkbeo.ie/news/local-news/article18218563.ece/ALTERNATES/s1200/0_Tony123.jpg" alt="" width="1000"></img>
        </div>
    );
}