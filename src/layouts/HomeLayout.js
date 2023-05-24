import React from 'react'
import HeaderLayout from './home/HeaderLayout'
import FooterLayout from './home/FooterLayout'
import { Typography } from '@mui/material'
import ButtonListLayout from './home/ButtonListLayout'

export default function HomeLayout() {
  return (
    <div>
        <HeaderLayout />
        <h3>Swiper</h3>
        <Typography variant='h6'>Sri Lanka's Largest Fashion Store</Typography>
        <ButtonListLayout /> 
        <FooterLayout />
    </div>
  )
}
