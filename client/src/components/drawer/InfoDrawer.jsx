import { Box, Drawer, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import styled from "@emotion/styled";
import Profile from "./Profile";

const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #ffffff;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const drawerStyle = {
  left: 20,
  top: 17,
  height: "95%",
  width: "31.2%",
  boxShadow: "none",
};

function InfoDrawer({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBackIcon
          onClick={() => {
            setOpen(false);
          }}
        />
        <Typography style={{ fontSize: "18px" }}>Profile</Typography>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
}

export default InfoDrawer;
