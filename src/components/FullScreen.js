import React from 'react'
import { Box } from 'theme-ui'

const FullScreen = (props) => {
  return (
    <Box
      {...props}
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        left: 0,
        top: 0,
      }}
    />
  )
}

export default FullScreen
