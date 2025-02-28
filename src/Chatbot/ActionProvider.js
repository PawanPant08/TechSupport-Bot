import React from "react";
import VideoLink from "./components/VideoLink"; // Ensure this component is in your project

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const initialAction = () => {
    const message = createChatBotMessage("🔧 How can I help? Choose an issue below:", {
      widget: "issueOptions",
    });
    updateState(message);
  };

  const handleTechSupport = (issue) => {
    let responseMessage = "";
    let videoUrl = "";

    switch (issue.toLowerCase()) {
      case "slow internet":
        responseMessage = "📶 Try restarting your router. If that doesn't help, check your internet speed.";
        videoUrl = "https://www.youtube.com/shorts/u4TYf7sKUnc";
        break;
      case "reset password":
        responseMessage = "🔑 Go to the login page, click 'Forgot Password?', and follow the steps.";
        videoUrl = "https://www.youtube.com/shorts/NhJoVsSgTRE";
        break;
      case "computer overheating":
        responseMessage = "🔥 Ensure vents are clear, clean the fan, and close unused apps.";
        videoUrl = "https://youtube.com/shorts/WZz9P3an_SU?si=lhncalCMl3VqoW-N";
        break;
      case "frozen screen":
        responseMessage = "❄️ Try Ctrl + Alt + Delete (Windows) or Command + Option + Escape (Mac) to force quit.";
        videoUrl = "https://youtube.com/shorts/Fh-WHZWPRZM?si=FKnGDVLXc42kkRUK";
        break;
      case "install updates":
        responseMessage = "🔄 Check system settings for updates. Ensure enough storage and a stable connection.";
        videoUrl = "https://youtube.com/shorts/igO5C205Pzc?si=CofqA246vnGqFcCz";
        break;
      default:
        responseMessage = "🤔 Not sure about that issue. Can you describe it in more detail?";
        videoUrl = "";
        break;
    }

    const message = createChatBotMessage(responseMessage, {
      widget: "videoLink",
      payload: { videoUrl },
    });

    updateState(message);
  };

  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            handleTechSupport,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
