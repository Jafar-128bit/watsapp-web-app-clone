import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import axios from '../src/helper/axios';
import Pusher from "pusher-js";
import {useEffect, useState} from "react";

function App() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        axios.get('/api/v1/messages/sync')
            .then(response => {
                setMessages(response.data);
            })
    },[])
    useEffect(() => {
        const pusher = new Pusher('3fe1fd3833bffcaa301e', {
            cluster: 'ap2'
        });
        const channel = pusher.subscribe('messages');
        channel.bind('inserted', ( newMessages) => {
            setMessages([...messages, newMessages])
        });
        //clean Up callback function for cleaning the channel
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    },[messages]);
    console.log(messages);
    return (
        <div className="app">
            <div className="app__body">
                <Sidebar/>
                <Chat messages={messages}/>
            </div>
        </div>
    );
}

export default App;
