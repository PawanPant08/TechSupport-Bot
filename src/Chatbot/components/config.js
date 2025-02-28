import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import VideoLink from './VideoLink';

const config = {
    botName: "TechSupport Bot",
    initialMessages: [
        createChatBotMessage("👋 Welcome! How can I assist you? Choose an issue below:", {
            widget: "issueOptions",
        }),
    ],
    customComponents: {
        botAvatar: (props) => <Avatar {...props} />,
    },
    widgets: [
        {
            widgetName: "issueOptions",
            widgetFunc: (props) => (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    <button style={buttonStyle} onClick={() => props.actions.handleTechSupport("Slow Internet")}>📶 Slow Internet</button>
                    <button style={buttonStyle} onClick={() => props.actions.handleTechSupport("Reset Password")}>🔑 Reset Password</button>
                    <button style={buttonStyle} onClick={() => props.actions.handleTechSupport("Computer Overheating")}>🔥 Overheating</button>
                    <button style={buttonStyle} onClick={() => props.actions.handleTechSupport("Frozen Screen")}>❄️ Frozen Screen</button>
                    <button style={buttonStyle} onClick={() => props.actions.handleTechSupport("Install Updates")}>🔄 Install Updates</button>
                </div>
            ),
        },
        {
            widgetName: "videoLink",
            widgetFunc: (props) => <VideoLink videoUrl={props.payload.videoUrl} />,
        },
    ],
};

const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
};

export default config;
