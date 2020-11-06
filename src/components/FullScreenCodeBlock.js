import React from 'react'
import { Box } from 'theme-ui'

const FullScreenCodeBlock = (props) => {
  return (
    <Box
      {...props}
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        left: 0,
        top: 0,
        pre: {
          width: '100%',
          height: '100%',
          overflow: 'auto',
          margin: '0 !important',
          paddingLeft: [
            null,
            '64px !important',
            '112px !important',
            '160px !important',
          ],
          paddingRight: [
            null,
            '64px !important',
            '112px !important',
            '160px !important',
          ],
          '@media print': {
            padding: '10% !important',
          },
        },
      }}
    />
  )
}

export default FullScreenCodeBlock
