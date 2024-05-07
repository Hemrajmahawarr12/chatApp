import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const UserInfo = () => {
  return (
    <Grid>
        <Box>
          <Box>
            <img src='/avatar.png'/>
            <Typography variant='h4'>Hemraj Mahawar</Typography>
          </Box>
            <Box>
                <img src='/more.png'></img>
                <img src='/video.png'></img>
                <img src='/edit.png'></img>
            </Box>
        </Box>
    </Grid>
  )
}

export default UserInfo