import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Chat() {
  return (
    <Grid sx={{ flex: "2", borderLeft: "1px solid #dddddd35", borderRight: "1px solid #dddddd35" }}>
      <Box>
        <Box>
          <Box sx={{padding:"20px",display:"flex",justifyContent:"space-between",borderBottom:"1px solid #dddddd59",alignItems:"center"}}>
            <Box sx={{display:"flex",gap:"20px"}}>
              <img style={{height:"60px",width:"60px", borderRadius:"50%",objectFit:"cover"}} src='./avatar.png' alt=''/>
              <Box>
                <Typography variant='h6' sx={{fontWeight:"700"}}>John Doe</Typography>
                <Typography sx={{fontSize:"14px",color:"#a5a5a5"}}>Lorem ipsum dolor sit amet.</Typography>
              </Box>
            </Box>
            <Box sx={{display:"flex",gap:"20px"}}>
              <img style={{width:"20px", height:"20px"}} src='./phone.png' alt='' />
              <img style={{width:"20px", height:"20px"}} src='./video.png' alt='' />
              <img style={{width:"20px", height:"20px"}} src='./info.png' alt='' />
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default Chat