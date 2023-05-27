import { Typography } from '@mui/material'
import React from 'react'

export default function ProductPrice({ value }) {
  return <Typography sx={{ fontWeight: 'bold'}}> {value}</Typography>
}
