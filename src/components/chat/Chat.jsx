import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import EmojiPicker from 'emoji-picker-react'
import React, { useState } from 'react'

function Chat() {
  const [emoji, setEmoji] = useState(false);
  const [text, setText] = useState('');

  const handleToggleEmoji = () => {
    setEmoji(!emoji)
  };

  const handleText = (e) => {
    setText(e);
  };

  const handleEmoji = (e) => {
    setText((perv) => perv + e.emoji);
    setEmoji(false);
  };

  return (
    <Grid sx={{ flex: "2", borderLeft: "1px solid #dddddd35", borderRight: "1px solid #dddddd35" }}>
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column", height: "90vh" }}>
          <Box sx={{ padding: "20px", display: "flex", justifyContent: "space-between", borderBottom: "1px solid #dddddd59", alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <img style={{ height: "60px", width: "60px", borderRadius: "50%", objectFit: "cover" }} src='./avatar.png' alt='' />
              <Box>
                <Typography variant='h6' sx={{ fontWeight: "700" }}>John Doe</Typography>
                <Typography sx={{ fontSize: "14px", color: "#a5a5a5" }}>Lorem ipsum dolor sit amet.</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <img style={{ width: "20px", height: "20px" }} src='./phone.png' alt='' />
              <img style={{ width: "20px", height: "20px" }} src='./video.png' alt='' />
              <img style={{ width: "20px", height: "20px" }} src='./info.png' alt='' />
            </Box>
          </Box>
          <Box>
            <Box>
              <Box sx={{ padding: '20px', flex: 1, overflowY: "scroll", height: "69vh", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Box sx={{ display: "flex", gap: "0.5rem" }}>
                  <img style={{ height: "35px", width: "35px", borderRadius: "50%", objectFit: "cover" }} src='./avatar.png' alt='' />
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography sx={{ maxWidth: "70%" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat nisi aliquid enim iure. Enim facere mollitia quisquam nostrum quidem ipsam consequatur tempora libero dolor perferendis, eius rem omnis doloribus gsgsgt njhhjhuyu.</Typography>
                    <span style={{ fontSize: "12px" }}>1 min ago</span>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', width: "100%", justifyContent: "end" }}>
                  <Box sx={{
                    maxWidth: "70%", display: "flex", flexDirection: "column", gap: 1
                  }}>
                    <Typography sx={{ backgroundColor: "#5183fe", padding: "10px", borderRadius: "7px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat nisi aliquid enim iure. Enim facere mollitia quisquam nostrum quidem ipsam consequatur tempora libero dolor perferendis, eius rem omnis doloribus gsgsgt njhhjhuyu.</Typography>
                    <span style={{ fontSize: "12px" }}>1 min ago</span>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: "0.5rem" }}>
                  <img style={{ height: "35px", width: "35px", borderRadius: "50%", objectFit: "cover" }} src='./avatar.png' alt='' />
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography sx={{ maxWidth: "70%" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat nisi aliquid enim iure. Enim facere mollitia quisquam nostrum quidem ipsam consequatur tempora libero dolor perferendis, eius rem omnis doloribus gsgsgt njhhjhuyu.</Typography>
                    <span style={{ fontSize: "12px" }}>1 min ago</span>
                  </Box>
                </Box>
                <Box sx={{display:"flex",justifyContent:"end"}}>
                  <img src='/chatImg.jpeg' alt='' style={{width:"70%", height:"300px",borderRadius:"10px"}}/>
                </Box>
                <Box sx={{ display: 'flex', width: "100%", justifyContent: "end" }}>
                  <Box sx={{
                    maxWidth: "70%", display: "flex", flexDirection: "column", gap: 1
                  }}>
                    <Typography sx={{ backgroundColor: "#5183fe", padding: "10px", borderRadius: "7px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat nisi aliquid enim iure. Enim facere mollitia quisquam nostrum quidem ipsam consequatur tempora libero dolor perferendis, eius rem omnis doloribus gsgsgt njhhjhuyu.</Typography>
                    <span style={{ fontSize: "12px" }}>1 min ago</span>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: "0.5rem" }}>
                  <img style={{ height: "35px", width: "35px", borderRadius: "50%", objectFit: "cover" }} src='./avatar.png' alt='' />
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography sx={{ maxWidth: "70%" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat nisi aliquid enim iure. Enim facere mollitia quisquam nostrum quidem ipsam consequatur tempora libero dolor perferendis, eius rem omnis doloribus gsgsgt njhhjhuyu.</Typography>
                    <span style={{ fontSize: "12px" }}>1 min ago</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ height: "40px", p: "15px", marginTop: 'auto', borderTop: "1px solid #dddddd35" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <img style={{ width: "20px", height: "20px", cursor: "pointer" }} src='./img.png' alt='' />
                <img style={{ width: "20px", height: "20px", cursor: "pointer" }} src='./camera.png' alt='' />
                <img style={{ width: "20px", height: "20px", cursor: "pointer" }} src='./mic.png' alt='' />
              </Box>
              <TextField
                placeholder='Type a message...'
                value={text}
                InputProps={{
                  inputProps: {
                    style: {
                      color: "white",
                    },
                  },
                }} style={{ flex: 1, height: "40px", backgroundColor: "rgba(17, 25, 40, 0.25)", color: "white" }}
                size='small' onChange={(e) => handleText(e.target.value)} />

              <Box sx={{ position: "relative" }}>
                <img style={{ width: "20px", height: "20px", cursor: "pointer" }} src='./emoji.png' alt='' onClick={handleToggleEmoji} />
                <Box sx={{ position: "absolute", bottom: "40px", left: 0 }}>
                  {
                    emoji && (
                      <EmojiPicker height={400} width={300} onEmojiClick={(e) => handleEmoji(e)} />
                    )
                  }
                </Box>
              </Box>
              <Button variant='contained'>Send</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default Chat;
