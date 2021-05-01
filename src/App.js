import './App.css';
import React, {useEffect, useState} from "react";
import ProfilePicture from "./profile_picture";
import Chat from "./chat";
import {henry_chats, answer_state, answer_prompt} from "./chat_logs";
import DatePicker from 'react-date-picker';
const waitImg = <img src="./Wait.png" alt="Typing..."/>
const waitTimer = 100;

function App() {
  document.title = "Manifest";
  let [chat_state, setCS] = useState(0) // chat state
  let [chat_wait, setCW] = useState(true) // timer between messages
  // let [showAnswer, setShowAnswer] = useState(false); // whether to show answer yet or not
  let [answered, setAnswered] = useState(true); // if the question got answered
  let [answers, setAnswers] = useState([]); // array of answers
  let [ns_ind, setNSInd] = useState(0);
  let [next_state, setNextState] = useState(answer_state[ns_ind]);// checking for the next answer state
  let [messages, setMessages] = useState([[waitImg, 0]]);
  // Date of Birth value
  const [dob, setDOB] = useState(new Date());
  let choices = <></>;

  useEffect(()=>{
    let newMessages = messages;
    const chat_timer = setInterval(()=>{
        console.log(chat_state, next_state, answers);
        messages.pop();
        newMessages.push([henry_chats[chat_state], 0]);
        setMessages(newMessages)
        setCS(c => c+1);
        setCW(false);
      }, waitTimer)
    
    if(!(chat_wait && answered) || next_state === undefined){
      clearInterval(chat_timer);
      if(chat_state !== next_state){
        setCW(true);
        newMessages.push([waitImg, 0])
      } else {
        setAnswered(false);
      }
    }

    return () => clearInterval(chat_timer);
  }, [chat_wait])

  if(!answered && chat_state === next_state){
        if(chat_state === 10){
          choices = <div style={{display: "flex", flexDirection:"column"}}>
            <DatePicker onChange={setDOB} value={dob} />

            <div className="response" key="confirm" onClick={()=>{
              const dobString = dob.toDateString().slice(4);
              let newAnswers = answers;
              let newMessages = messages;
              newAnswers.push(dobString);
              newMessages.push([dobString, 1]);
              newMessages.push([waitImg, 0]);
              setAnswers(newAnswers);
              setMessages(newMessages);
              setNextState(answer_state[ns_ind+1]);
              setNSInd(n => n+1);
              setAnswered(true);
              setCW(true);
            }}>Confirm</div>
          </div>
        } else {
        choices = answer_prompt[next_state].map((choice, ind) =>{
          return <div className="response" key={`response${ind}`} onClick={()=>{
            let newAnswers = answers;
            answers.push(choice);
            let newMessages = messages;
            newMessages.push([choice, 1]);
            newMessages.push([waitImg, 0]);
            setMessages(newMessages);
            setAnswers(newAnswers);
            setNextState(answer_state[ns_ind+1]);
            setNSInd(n => n+1);
            setAnswered(true);
            setCW(true);
          }}>
            {choice}
          </div>

        })
      }

  }

  let profilePicture = <ProfilePicture />
  let bodyStyle = {}
  if(chat_state > 3){
    profilePicture = <></>
    bodyStyle = {overflowY: "scroll"}
  }

  return (
    <div className="chatbox">
      <div className="header">
        <div><b>Manifest</b></div>
      </div>
      <div className="body" style={bodyStyle}>
        {profilePicture}
        <Chat messages={messages}/>  
      </div>
      <div className="response-area">
        {choices}
      </div>
    </div>
  );
}

export default App;
