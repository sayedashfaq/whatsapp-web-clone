import React, { useContext } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import LoginDialog from "./Account/LoginDialog";
import styled from "@emotion/styled";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";
const Component = styled(Box)`
  height: 100vh;
  width: 99vw;
  background: #dcdcdc;
`;

const ChatHeader = styled(AppBar)`
  height: 125px;
  background-color: #00a884;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

function Messenger() {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? (
        <>
          <ChatHeader>
            <Toolbar></Toolbar>
          </ChatHeader>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
}
//The word is little bit larger than anyone
export default Messenger;
