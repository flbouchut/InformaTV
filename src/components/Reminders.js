import React from 'react';
import styled from 'styled-components'

export default function Reminders(props) {

    function sqldatetodisplay(date){
        var result = new Date(date).toUTCString().substring(0,22);
        console.log(result);
        return result;
    }

    function datetoday(date){
        var result = new Date(date);
        var today = new Date();
        var nbJours = result.getUTCDate() - today.getUTCDate();
        return nbJours;
    }

    return (
        <div>
            {props.reminders && (
            <ListReminders>
            {props.reminders.map((content, index) => (
                <Reminder>
                <Header>
                    <DateStyled>{sqldatetodisplay(props.reminders[index].datetime)}</DateStyled>
                    <Category>{props.reminders[index].category}</Category>
                    <Left>{datetoday(props.reminders[index].datetime)} day left</Left>
                </Header>
                <Texte>{props.reminders[index].content}</Texte>
            </Reminder>
            ))}


            {/* <Reminder>
                <Header>
                    <DateStyled>{sqldatetodisplay(props.reminders[0].datetime)}</DateStyled>
                    <Category>{props.reminders[0].category}</Category>
                    <Left>1 day left</Left>
                </Header>
                <Texte>{props.reminders[0].content}</Texte>
            </Reminder>
            <Reminder>
                <Header>
                    <DateStyled>{sqldatetodisplay(props.reminders[1].datetime)}</DateStyled>
                    <Left>2 days left</Left>
                </Header>
                <Texte>{props.reminders[1].content}</Texte>
            </Reminder>
            <Reminder>
                <Header>
                    <DateStyled>{sqldatetodisplay(props.reminders[2].datetime)}</DateStyled>
                    <Category>{props.reminders[2].category}</Category>
                    <Left>2 days left</Left>
                </Header>
                <Texte>{props.reminders[2].content}</Texte>
            </Reminder>
            <Reminder>
                <Header>
                    <DateStyled>{sqldatetodisplay(props.reminders[3].datetime)}</DateStyled>
                    <Category>{props.reminders[3].category}</Category>
                    <Left>2 days left</Left>
                </Header>
                <Texte>
                {props.reminders[3].content}
                </Texte>
            </Reminder> */}



            </ListReminders>
            )}
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
  padding:0 0 0 10px;
  font-size: 1.5vw;
  border-top-style: solid;
  border-width:1px;
  border-color: grey;
  
`;

const DateStyled = styled.div`
  float: left;
  padding:0 0 0 10px;
`;

const Left = styled.div`
  float: right;
  padding:0 10px 0 0;
  font-style: italic;
`;

const Category = styled.div`
  float: left;
  font-weight: bold;
  margin: 0 0 0 75px;
`;

const Header = styled.div`
`;

