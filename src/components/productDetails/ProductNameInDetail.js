import { Typography } from '@mui/material'
import React from 'react'

export default function ProductNameInDetail({value}) {
  return <Typography sx={{ fontWeight: '550', fontSize: '30px', color: 'purple' }}>{value}</Typography>
}
