import { Box, Grid } from '@mui/material'
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
      </Box>
    </Grid>
  )
}

export default ChatList