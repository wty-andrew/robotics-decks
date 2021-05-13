import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text } from 'theme-ui'

const CodeTitle = ({ title, ...props }) => (
  <Flex css={{ fontFamily: 'monospace', padding: '1em' }} {...props}>
    <Text
      css={{
        overflow: 'hidden',
        flex: 1,
        direction: 'rtl',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      }}
    >
      {title}
    </Text>
  </Flex>
)

CodeTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CodeTitle
