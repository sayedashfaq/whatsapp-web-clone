import styled from "@emotion/styled";
import { MoreVert, Search } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
const Header = styled(Box)`
  height: 44px;
  background: #ededed;
  display: flex;
  padding: 8px 16px;
  align-items: center;
`;

const Image = styled("img")({
  width: 40,
  height: 40,
  objectFit: "cover",
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 8px;
    font-size: 22px;
    color: #000;
  }
`;
// ... (other imports)

const Status = styled(Typography)`
  font-size: 12px !important;
  color: ${(props) => (props.online ? "green" : "red")};
  margin-left: 12px !important;
`;

function ChatHeader({person}) {
  const { activeUsers } = useContext(AccountContext);
  console.log("person.sub:", person.sub);
  console.log("activeUsers:", activeUsers);

  const isPersonOnline = activeUsers?.some((user) => user.sub === person.sub);
  console.log("isPersonOnline:", isPersonOnline);


  return (
    <Header>
      <Image src={person.picture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <Status online={isPersonOnline}>
          {isPersonOnline ? "Online" : "Offline"}
        </Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
}

export default ChatHeader;
