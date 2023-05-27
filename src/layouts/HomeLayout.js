import React from 'react'
import HeaderLayout from './home/HeaderLayout'
import FooterLayout from './home/FooterLayout'
import { Typography } from '@mui/material'
import ButtonListLayout from './home/ButtonListLayout'
import CarouselLayout from './home/CarouselLayout'

export default function HomeLayout() {
  return (
    <div>
        <HeaderLayout />
        <CarouselLayout />
        <Typography variant='h6'>Sri Lanka's Largest Fashion Store</Typography>
        <ButtonListLayout /> 
        <FooterLayout />
    </div>
  )
}
