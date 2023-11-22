import React, { useContext, useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import { Box } from "@mui/material";
import Messages from "./Messages";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../service/api";

const ChatBox = () => {
  const { account, person } = useContext(AccountContext);

  const [conversation, setConversation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getConversationDetails = async () => {
      try {
        setLoading(true);
        const data = await getConversation({
          senderId: account.sub,
          receiverId: person.sub,
        });
        console.log("Received conversation data:", data);
        setConversation(data);
      } catch (error) {
        console.error("Error fetching conversation:", error);
        // Handle the error if necessary
      } finally {
        setLoading(false);
      }
    };

    getConversationDetails();
  }, [person.sub, account.sub]);

  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader person={person} />
      {loading ? (
        <p>Loading conversation...</p>
      ) : (
        <Messages person={person} conversation={conversation} />
      )}
    </Box>
  );
};

export default ChatBox;
