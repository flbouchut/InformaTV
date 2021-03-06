import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

import macron from '../data/pdp.png'
// import Photos from './Photos';

export default function Messages(props) {
  const numberOfNewMessages = 3;
  const [selectedContact, setSelectedContact] = useState(0);
  const [newNotifications, setNewNotifications] = useState(true);

  const dataContact = [{url: macron, name: "Manu"},{url: "https://randomuser.me/api/portraits/women/75.jpg", name: "Daisy"}, {url: "https://randomuser.me/api/portraits/men/76.jpg", name: "Fred"}, {url:"https://randomuser.me/api/portraits/women/77.jpg", name: "Sarah"}, {url:"https://randomuser.me/api/portraits/men/78.jpg", name: "Last User"}];
  const dataMessages = [["messages from manu", "second message from manu", "third message very very Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"], ["messages from second contact", "second message from second contact"], ["messages from third user", "second message from third user", "example of photo in the next message : "], ["messages from manu", "second message from manu"]];

  useEffect(() => {
    const timer = setTimeout(() =>
        setSelectedContact(selectedContact + 1)
        , 3000);
    if (selectedContact > numberOfNewMessages - 1) {
        setSelectedContact(0);
        setNewNotifications(false);
    }
    return () => {
        clearTimeout(timer);
    }
}, [selectedContact])

function photos() {
  if(selectedContact === 2){
    return <Message> <img src="https://randomuser.me/api/portraits/women/75.jpg" alt=""/></Message>
  }else{
    return null;
  }
}


    return (
        <div>
          {/* {console.log(newNotifications)} */}
          {newNotifications ?
          // <Alert>You get 3 news messages</Alert>
          <Container>
          <Banner>You have 3 new messages</Banner>
                <NotificationsList>
                  <Notification>
                    Monday 22th April - 6.22pm : New message from Sarah
                  </Notification>

                  <Notification>
                  Monday 22th April - 6.22pm : New message from Sarah
                  </Notification>

                  <Notification>
                    Monday 22th April - 6.22pm : New message from Kevin
                  </Notification>

                  <Notification>
                    Monday 22th April - 6.22pm : New message from Mehdi
                  </Notification>


                </NotificationsList>
                </Container>
          : <Container>
            <Banner>
            <PhotodeProfil src={dataContact[selectedContact].url}/>  
            {dataContact[selectedContact].name} 
            </Banner>
            
            <MessageTab>
                      {dataMessages[selectedContact].map((message, index) => (
                        <Message key = {index}>
                          {message}
                        </Message>
                      ))}
                      {photos()}
                </MessageTab>
              
          </Container>
          }
            {/* <Container>
                <ContactList>
                    <Titre>Messages</Titre>

                    {dataContact.map((obj, index) => (
                    <Contact key = {index}  selected = {selectedContact} toCompare = {index}>
                      <PhotodeProfil src={obj.url}/>
                      <Name>{obj.name}</Name>
                    </Contact>
                    ))}
                </ContactList>

                <MessageTab>
                    <Titre> {dataContact[selectedContact].name}</Titre>
                    <ListMessage>
                      {dataMessages[selectedContact].map((message, index) => (
                        <Message key = {index}>
                          {message}
                        </Message>
                      ))}
                      {photos()}
                    </ListMessage>
                </MessageTab>
            </Container> */}
            
        </div>
    );
}

const Notification = styled.div`
    margin: 15px 10px 15px 50px;
    font-size: 2vw;

`;

const NotificationsList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width : 100%;
  justify-content: center;

`


const Banner = styled.div`
  display: flex;
  height: 20%;

  width : 100%;
  border-bottom-style: solid;
  border-color: grey;
  border-width: 1px;
  text-align: center;
  font-weight: bold;
  font-size: 2vw;
  align-items: center;
  justify-content: center;

`

// const Alert = styled.div`
//   margin-bottom: 3%;
//   text-align: center;
//   font-weight: bold;
//   font-size: 2vw;
//   line-height: 5vh;
//   width : 60vw;
//   background-color: #FF969B;
//   border-radius: 5%;
// `;

const Message = styled.div`
    margin: 10px 10px 10px 50px;
    background: #6EC8B9;
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 1.5vw;
    max-width: 80%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 2px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const ListMessage = styled.div`
  height : 82%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height : 63vh;
  width : 60vw;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 2%;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  height : 100%;
  width : 33%;
  border-right-style: solid;
  border-color: grey;
  border-width: 1px;
`;

const MessageTab = styled.div`
  display: flex;
  flex-direction: column;
  height : 100%;
  width : 100%;
  justify-content: center;
`;

const Contact = styled.div`
  display: flex;
  height: 5rem;
  margin: 5px;
  /* background: ${props => props.isSelected ? "palevioletred" : "white"}; */
  border: ${props => props.toCompare === props.selected ? "2px solid" : ""};
  border-radius: ${props => props.toCompare === props.selected ? "5%" : ""};
  border-color : ${props => props.toCompare === props.selected ? "palevioletred" : "white"};
`;

const PhotodeProfil = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin: 0px 10px 0px 0px;
`;

const Name = styled.div`
  line-height: 5rem;
  font-weight: bold;
  font-size: 1.2vw;
`;

const Titre = styled.div`
  margin: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2vw;
`;

