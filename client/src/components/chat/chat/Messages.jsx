import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessages } from "../../../service/api";
import Message from "./Message";

const Wrapper = styled(Box)`
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;
function Messages({ person, conversation }) {
  const [value, setValue] = useState("");
  const [file, setFile] = useState();
  const [image, setImage] = useState("");
  const { account } = useContext(AccountContext);
  const [messages, setMessages] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  const sendText = async (e) => {
    try {
      const code = e.keyCode || e.which;
      if (code === 13) {
        let message = {};
        if (!file) {
          message = {
            senderId: account.sub,
            receiverId: person.sub,
            conversationId: conversation._id,
            type: "text",
            text: value,
          };
        } else {
          message = {
            senderId: account.sub,
            conversationId: conversation._id,
            receiverId: person.sub,
            type: "file",
            text: image,
          };
        }

        await newMessages(message);

        setValue("");
        setNewMessageFlag((prev) => !prev);
        setImage("");
        setFile();
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle the error (e.g., show a notification to the user)
    }
  };

  useEffect(() => {
    const getMessageDetails = async () => {
      if (conversation._id) {
        let data = await getMessages(conversation._id);
        setMessages(data);
      }
    };

    getMessageDetails();
  }, [conversation._id, newMessageFlag]);

  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => (
            <Container key={message._id}>
              <Message message={message} />
            </Container>
          ))}
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Wrapper>
  );
}

export default Messages;
