import { Grid } from '@mui/material'
import React from 'react'
import UserInfo from './userInfo/UserInfo'
import ChatList from './chatList/ChatList'

const List = () => {
  return (
    <Grid sx={{flex:"1"}}>
        <UserInfo />
        <ChatList />
    </Grid>
  )
}

export default List