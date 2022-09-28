import './Chat.css';
import {Avatar, IconButton} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import {useState} from "react";
import axios from '../../helper/axios';

const Chat = ({messages}) => {
    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/api/v1/messages/new', {
            message:input,
            name: "Jafar",
            timestamp:"Just Now!",
            received: false
        });

        setInput("");
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((value, index, array) => {
                    return <p
                        className={value.received ? "chat__message" : "chat__message chat__receiver"}
                    key={index}
                    >
                        <span className="chat__name">{value.name}</span>
                        {value.message}
                        <span className="chat__timestamp">{value.timestamps}</span>
                    </p>
                })}
            </div>
            <div className="chat__footer">
                <IconButton>
                    <EmojiEmotionsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <AttachFileOutlinedIcon/>
                </IconButton>
                <form>
                    <input
                        placeholder="Type a message"
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <button
                        type="submit"
                        onClick={sendMessage}
                    >
                        Send a Message
                    </button>
                </form>
                <IconButton>
                    <MicOutlinedIcon/>
                </IconButton>
            </div>
        </div>
    );
}

export default Chat;
