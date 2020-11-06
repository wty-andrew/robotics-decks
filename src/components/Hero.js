import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

import FullScreen from './FullScreen'

const Hero = ({ title, subtitle }) => {
  return (
    <FullScreen>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <h1>{title}</h1>
        {subtitle && (
          <Box sx={{ margin: '1em', maxWidth: '80%' }}>{subtitle}</Box>
        )}
      </Box>
    </FullScreen>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default Hero
