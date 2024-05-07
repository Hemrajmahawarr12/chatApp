import { Box, Grid } from '@mui/material';
import React from 'react';
import List from '../components/list/List';
import Details from '../components/details/Details';
import Chat from '../components/chat/Chat';

const ChatBody = () => {
  return (
    <Grid
      sx={{
        backgroundImage: "url('/bg.jpg')",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          background: "rgba(17,25,40,0.75)",
          height: "90vh",
          width: "90vw",
          backdropFilter: "blur(19px) saturate(180%)",
          borderRadius: "12px",
          border:"1px solid rgba(255,255,255,0.125)",
          color: "white",
          display:"flex"
        }}
      >
        <List />
        <Chat />
        <Details />
      </Box>
    </Grid>
  );
};

export default ChatBody;
