import React from 'react'
import PropTypes from 'prop-types'
import rangeParser from 'parse-numeric-range'

import Code from './Code'

const DEFAULT_LINE_STYLE = {
  display: 'block',
  margin: '0 -1em',
  padding: '0 1em',
  whiteSpace: 'pre-wrap',
}

const createLineStyle = (color) => ({
  ...DEFAULT_LINE_STYLE,
  backgroundColor: color,
})

const ADDED_LINE_STYLE = createLineStyle('#0c4532')
const REMOVED_LINE_STYLE = createLineStyle('#4c232d')
const HIGHLIGHT_LINE_STYLE = createLineStyle('rgba(255,255,255,.15)')

/*
There's a hack on lineNumberStyle below since lineProps receives wrong argument if
`showLineNumbers` is not set
see https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/288
*/
const Highlighter = ({
  children,
  addedLines = '',
  removedLines = '',
  highlightLines = '',
  showLineNumbers = false,
  ...props
}) => {
  addedLines = rangeParser(addedLines)
  removedLines = rangeParser(removedLines)
  highlightLines = rangeParser(highlightLines)

  return (
    <Code
      wrapLines
      showLineNumbers
      lineNumberStyle={{ display: showLineNumbers ? 'inline-block' : 'none' }}
      lineProps={(lineNumber) => {
        let style = DEFAULT_LINE_STYLE
        if (addedLines.includes(lineNumber)) style = ADDED_LINE_STYLE
        if (removedLines.includes(lineNumber)) style = REMOVED_LINE_STYLE
        if (highlightLines.includes(lineNumber)) style = HIGHLIGHT_LINE_STYLE
        return { style }
      }}
      {...props}
    >
      {children}
    </Code>
  )
}

Highlighter.propTypes = {
  children: PropTypes.string.isRequired,
  showLineNumbers: PropTypes.bool,
  addedLines: PropTypes.string,
  removedLines: PropTypes.string,
  highlightLines: PropTypes.string,
}

export default Highlighter
