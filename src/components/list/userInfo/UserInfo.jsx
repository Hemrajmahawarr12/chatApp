import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const UserInfo = () => {
  return (
    <Grid>
        <Box sx={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Box sx={{display:"flex",alignItems:"center", gap:"20px"}}>
            <img className='imgProfile' src='/avatar.png' alt=''/>
            <Typography variant='h5' sx={{fontWeight:"800"}}>John Doe</Typography>
          </Box>
            <Box sx={{display:"flex",gap:"20px"}}>
                <img className='iconImg' src='/more.png' alt=''></img>
                <img className='iconImg' src='/video.png' alt=''></img>
                <img className='iconImg' src='/edit.png' alt=''></img>
            </Box>
        </Box>
    </Grid>
  )
}

export default UserInfo