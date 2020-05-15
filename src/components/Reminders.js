import React from 'react';
import styled from 'styled-components'

export default function Reminders(props) {

    return (
        <div>
            <ListReminders>
            <Reminder>
                <Header>
                    <Date>Wednesday May 06 - 10am</Date>
                    <Left>1 day left</Left>
                </Header>
                <Texte>Dental Appointment</Texte>
            </Reminder>
            <Reminder>
                <Header>
                    <Date>Thurdsay May 07 - 10am</Date>
                    <Left>2 days left</Left>
                </Header>
                <Texte>Something to do</Texte>
            </Reminder>
            <Reminder>
                <Header>
                    <Date>Thursday May 07 - 10am</Date>
                    <Left>2 days left</Left>
                </Header>
                <Texte>Something to do</Texte>
            </Reminder>
            <Reminder>
                <Header>
                    <Date>Thursday May 07 - 10am</Date>
                    <Left>2 days left</Left>
                </Header>
                <Texte>
                    Something to do
                </Texte>
            </Reminder>



            </ListReminders>
        </div>
    );
}

const ListReminders = styled.div`
    display:flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 5px 0 5px 0;
    width:50vw;
`;

const Reminder = styled.div`
    display:flex;
    flex-direction:column;
    background: #fff;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    padding: 3px 0px;
    font-size: 2.5vh;
    margin-bottom: 2vh;
    border-radius: 3px;
`
const Texte = styled.div`
  font-weight: bold;
  font-size: 1.5vw;
  border-top-style: solid;
  border-width:1px;
  border-color: grey;
  width:100%;
  text-align: center;
`;

const Date = styled.div`
  float: left;
  padding:0 0 0 10px;
`;

const Left = styled.div`
  float: right;
  padding:0 10px 0 0;
  font-style: italic;
`;
const Header = styled.div`
`;

