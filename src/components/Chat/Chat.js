import './Chat.css';
import {Avatar, IconButton} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

const Chat = () => {
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
                <p className="chat__message">
                    <span className="chat__name">Jafar</span>
                    Hello Ashraf
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Ashraf</span>
                    Hello Bro! Hw are you?
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Jafar</span>
                    I am fine bro...
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>
            <div className="chat__footer">
                <IconButton>
                    <EmojiEmotionsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <AttachFileOutlinedIcon />
                </IconButton>
                <form>
                    <input
                        placeholder="Type a message"
                        type="text"
                    />
                    <button
                        type="submit"
                    >
                        Send a Message
                    </button>
                </form>
                <IconButton>
                    <MicOutlinedIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Chat;
