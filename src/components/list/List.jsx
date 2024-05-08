import React from 'react'
import UserInfo from './userInfo/UserInfo'
import ChatList from './chatList/ChatList'
import { Grid } from '@mui/material'

const List = () => {
  return (
    <Grid sx={{flex:"1"}}>
        <UserInfo />
        <ChatList />
    </Grid>
  )
}

export default List