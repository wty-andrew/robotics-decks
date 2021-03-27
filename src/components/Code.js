import React from 'react'
import PropTypes from 'prop-types'
import { getLanguage } from '@mdx-deck/themes/syntax-highlighter'
import { Prism } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const CODE_BACKGROUND_COLOR =
  tomorrow['pre[class*="language-"]'].background

const Code = ({ className, children, ...props }) => {
  const language = getLanguage(className)
  return (
    <Prism language={language} style={tomorrow} {...props}>
      {children.trimEnd()}
    </Prism>
  )
}

Code.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
}

export default Code
