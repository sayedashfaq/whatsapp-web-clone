import React, { useContext, useEffect, useState } from "react";
import { Box, Divider } from "@mui/material";
import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";
import Conversation from "./Conversation";
import styled from "@emotion/styled";

// The Wrapper of all conversation user side box and fetching page of users;;;;;;;;;  - #  Mr Thangu #

const Component = styled(Box)`
  overflow: overlay;
  height: 81vh;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

function Conversations({ text }) {
  const { account } = useContext(AccountContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await getUsers();
        const fiteredData = data.filter((user) =>
          user.name.toLowerCase().includes(text.toLowerCase())
        );
        setUsers(fiteredData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, [text]);

  return (
    <Component>
      {users.map(
        (user) =>
          user.sub !== account.sub && (
            <>
              <Conversation key={user.id} user={user} />
              <StyledDivider />
            </>
          )
      )}
    </Component>
  );
}

export default Conversations;
