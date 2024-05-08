import { Box, Grid } from '@mui/material';
import React from 'react';

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
                    bgcolor: "blue",
                    height: "100px",
                    width: "100px"
                }}
            />
        </Grid>
    );
};

export default ChatBody;
