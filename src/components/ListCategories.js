import React from 'react';
import styled from 'styled-components'

//color: #FF969B;
//color: #6EC8B9;
export default function ListCategories(props) {
    const categoriesNames = ["Photos", "Reminders", "Messages", "Sport", "Weather"];

    return (
        <div>
            <Container>
                {categoriesNames.map((name, index) => (
                    <Category key = {index} page = {props.index} toCompare = {index}> {name}</Category>
                ))}

            </Container>
            {/* {console.log(props.index)} */}
        </div>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around; 


  position: absolute;
  right:0;
  top: 10%;
  height : 80%;
  width : 20%;
`;

const Category = styled.button`
    height : 15%;
    padding: 20px;
    
    color: ${props => props.toCompare === props.page ? "#FF969B": "#6EC8B9"};
    

    font-size: 3vw;
    font-weight: ${props => props.toCompare === props.page ? "bold" : ""};

    background-color: #ffff;
    border-radius:10%;
`;
