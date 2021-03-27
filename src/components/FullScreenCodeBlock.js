import React from 'react'
import { Box } from 'theme-ui'

const FullScreenCodeBlock = (props) => {
  return (
    <Box
      {...props}
      sx={{
        variant: 'custom.fullscreen',
        pre: {
          width: '100%',
          height: '100%',
          margin: '0 !important',
          variant: 'custom.responsive_padding_important',
        },
      }}
    />
  )
}

export default FullScreenCodeBlock
