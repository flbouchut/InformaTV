import React  from 'react';
import styled from 'styled-components'

export default function Weather(props) {
    // const [dayForecast, setDayForecast] = useState([]);
 
    return (
        <div>
            {props.forecast && (
                <div>
                {/* {console.log(props.forecast[0])} */}
                <City>City</City>
                <ListCard>
                <Card>
                    <Text>{String(new Date(props.forecast[0].dt * 1000)).substring(0,16)}</Text>
                    <Text>{(props.forecast[0].weather[0].description).charAt(0).toUpperCase() + (props.forecast[0].weather[0].description).slice(1)}</Text>
                    <BannerIcon src={"https://openweathermap.org/img/wn/" + props.forecast[0].weather[0].icon + "@2x.png"} />
                    <Temperature>Min: {props.forecast[0].temp.min}°C</Temperature>
                    <Temperature>Max: {props.forecast[0].temp.max}°C</Temperature>

                </Card>
                <Card>
                    <Text>{String(new Date(props.forecast[1].dt * 1000)).substring(0,16)}</Text>
                    <Text>{(props.forecast[1].weather[0].description).charAt(0).toUpperCase() + (props.forecast[1].weather[0].description).slice(1)}</Text>
                    <BannerIcon src={"https://openweathermap.org/img/wn/" + props.forecast[1].weather[0].icon + "@2x.png"} />
                    <Temperature>Min: {props.forecast[1].temp.min}°C</Temperature>
                    <Temperature>Max: {props.forecast[1].temp.max}°C</Temperature>

                </Card>
                <Card>
                    <Text>{String(new Date(props.forecast[2].dt * 1000)).substring(0,16)}</Text>
                    <Text>{(props.forecast[2].weather[0].description).charAt(0).toUpperCase() + (props.forecast[2].weather[0].description).slice(1)}</Text>
                    <BannerIcon src={"https://openweathermap.org/img/wn/" + props.forecast[2].weather[0].icon + "@2x.png"} />
                    <Temperature>Min: {props.forecast[2].temp.min}°C</Temperature>
                    <Temperature>Max: {props.forecast[2].temp.max}°C</Temperature>

                </Card>
                <Card>
                    <Text>{String(new Date(props.forecast[3].dt * 1000)).substring(0,16)}</Text>
                    <Text>{(props.forecast[3].weather[0].description).charAt(0).toUpperCase() + (props.forecast[3].weather[0].description).slice(1)}</Text>
                    <BannerIcon src={"https://openweathermap.org/img/wn/" + props.forecast[3].weather[0].icon + "@2x.png"} />
                    <Temperature>Min: {props.forecast[3].temp.min}°C</Temperature>
                    <Temperature>Max: {props.forecast[3].temp.max}°C</Temperature>

                </Card>
                <Card>
                    <Text>{String(new Date(props.forecast[4].dt * 1000)).substring(0,16)}</Text>
                    <Text>{(props.forecast[4].weather[0].description).charAt(0).toUpperCase() + (props.forecast[4].weather[0].description).slice(1)}</Text>
                    <BannerIcon src={"https://openweathermap.org/img/wn/" + props.forecast[4].weather[0].icon + "@2x.png"} />
                    <Temperature>Min: {props.forecast[4].temp.min}°C</Temperature>
                    <Temperature>Max: {props.forecast[4].temp.max}°C</Temperature>

                </Card>
                </ListCard>
                </div>
            )}
        </div>
        
    );
}

const ListCard = styled.div`
    display:flex;
    width: 78vw;
`;
    

const Card = styled.div`
    display:flex;
    flex-direction:column;
    background-color: white;
    align-items: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    margin: 10px;
    border-radius:5%;
    width: 25%;
`

const BannerIcon = styled.img`
  width: 10rem;
  height: 10rem;
`;

const Text = styled.div`
  /* text-align: center; */
  line-height: normal;
  padding: 0.5rem 0rem;
  font-weight: bold;
  font-size: 1.5vw;
`;

const Temperature = styled.div`
  font-size: 1.5vw;
  margin-left: 0.5rem;
  font-weight: bold;
`;

const City = styled.div`
  font-size: 1.5vw;
  text-align: center;
  font-weight: bold;
`;

