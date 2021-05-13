import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { Box, Flex, Heading } from 'theme-ui'

const Card = ({ title, url }) => (
  <Link to={url} css={{ textDecoration: 'none', color: 'inherit' }}>
    <Box
      css={{
        borderRadius: '4px',
        boxShadow:
          'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        padding: '1.2rem',
        margin: '1rem',
        marginBottom: '1.5rem',
        cursor: 'pointer',
      }}
    >
      <Heading>{title}</Heading>
    </Box>
  </Link>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

const Home = () => {
  return (
    <Box css={{ maxWidth: 600, margin: 'auto', fontFamily: 'sans-serif' }}>
      <Flex css={{ justifyContent: 'center', padding: '2.5rem 0' }}>
        <Heading as="h1">Robotics Decks</Heading>
      </Flex>

      <Card title="Karto SLAM" url="/karto-slam" />
    </Box>
  )
}

export default Home
