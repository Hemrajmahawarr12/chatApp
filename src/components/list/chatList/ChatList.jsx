import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
    <Grid>
      <Box>
        <Box>
          <Box sx={{display:"flex",alignItems:"center",gap:"20px",padding:"20px"}}>
            <Box sx={{flex:"1",backgroundColor:"rgba(17, 25, 40, 0.25)",display:"flex",alignItems:"center",gap:"20px",borderRadius:"10px",padding:"13px"}}>
              <img style={{height:"20px",width:"20px"}} src='./search.png' alt=''></img>
              <input style={{backgroundColor:"transparent",border:"none",outline:"none",color:"white",flex:"1",fontSize:"16px"}} type='text' placeholder='Search'/>
            </Box>
            <Box sx={{display:"flex",alignItems:"center"}}>
              <img style={{height:"25px",width:"25px",backgroundColor:"rgba(17, 25, 40, 0.25)",padding:"10px",cursor:"pointer",borderRadius:"10px"}} src={ addMode ? './minus.png' : "./plus.png"} alt=''
              onClick={() => setAddMode(!addMode)}
              ></img>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={{display:"flex",alignItems:"center",gap:"20px",padding:"20px", cursor:"pointer",borderBottom:"1px solid #dddddd35"}}>
            <img style={{height:"50px",width:"50px",borderRadius:"50%",objectFit:"cover"}} src='./avatar.png' alt=''/>
            <Box sx={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <Typography sx={{fontWeight:"500"}} variant='h6'>John Doe</Typography>
            <Typography sx={{fontSize:"14px"}} variant='h'>Hello !</Typography>
            </Box>
          </Box>
          <Box sx={{display:"flex",alignItems:"center",gap:"20px",padding:"20px", cursor:"pointer",borderBottom:"1px solid #dddddd35"}}>
            <img style={{height:"50px",width:"50px",borderRadius:"50%",objectFit:"cover"}} src='./avatar.png' alt=''/>
            <Box sx={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <Typography sx={{fontWeight:"500"}} variant='h6'>John Doe</Typography>
            <Typography sx={{fontSize:"14px"}} variant='h'>Hello !</Typography>
            </Box>
          </Box>
          <Box sx={{display:"flex",alignItems:"center",gap:"20px",padding:"20px", cursor:"pointer",borderBottom:"1px solid #dddddd35"}}>
            <img style={{height:"50px",width:"50px",borderRadius:"50%",objectFit:"cover"}} src='./avatar.png' alt=''/>
            <Box sx={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <Typography sx={{fontWeight:"500"}} variant='h6'>John Doe</Typography>
            <Typography sx={{fontSize:"14px"}} variant='h'>Hello !</Typography>
            </Box>
          </Box>
          <Box sx={{display:"flex",alignItems:"center",gap:"20px",padding:"20px", cursor:"pointer",borderBottom:"1px solid #dddddd35"}}>
            <img style={{height:"50px",width:"50px",borderRadius:"50%",objectFit:"cover"}} src='./avatar.png' alt=''/>
            <Box sx={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <Typography sx={{fontWeight:"500"}} variant='h6'>John Doe</Typography>
            <Typography sx={{fontSize:"14px"}} variant='h'>Hello !</Typography>
            </Box>
          </Box>
          <Box sx={{display:"flex",alignItems:"center",gap:"20px",padding:"20px", cursor:"pointer",borderBottom:"1px solid #dddddd35"}}>
            <img style={{height:"50px",width:"50px",borderRadius:"50%",objectFit:"cover"}} src='./avatar.png' alt=''/>
            <Box sx={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <Typography sx={{fontWeight:"500"}} variant='h6'>John Doe</Typography>
            <Typography sx={{fontSize:"14px"}} variant='h'>Hello !</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default ChatList