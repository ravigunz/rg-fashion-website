import { Typography } from '@mui/material'
import React from 'react'
import { priceValueFormat } from '../../../util/functions'

export default function ProductPrice({ value }) {
  return <Typography sx={{ fontWeight: 'bold'}}> {priceValueFormat(value)}</Typography>
}
