import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import { render } from 'pseudocode'

const PseudoCode = ({
  src,
  children,
  indentSize,
  commentDelimiter,
  lineNumber,
  lineNumberPunc,
  noEnd,
  captionCount,
  titlePrefix,
  ...props
}) => {
  const content = src || children
  const ref = useRef()
  useEffect(() => {
    const options = {
      indentSize,
      commentDelimiter,
      lineNumber,
      lineNumberPunc,
      noEnd,
      captionCount,
      titlePrefix,
    }
    const domElem = ref.current
    render(content, domElem, options)
    return () => domElem.firstChild.remove()
  }, [
    content,
    indentSize,
    commentDelimiter,
    lineNumber,
    lineNumberPunc,
    noEnd,
    captionCount,
    titlePrefix,
  ])

  return (
    <Box
      ref={ref}
      sx={{
        '.ps-root .ps-algorithm': {
          borderColor: 'inherit',
        },
        '.ps-root .ps-algorithm.with-caption > .ps-line:first-of-type': {
          borderColor: 'inherit',
        },
      }}
      {...props}
    />
  )
}

PseudoCode.propTypes = {
  src: PropTypes.string,
  children: PropTypes.string,
  indentSize: PropTypes.string,
  commentDelimiter: PropTypes.string,
  lineNumber: PropTypes.bool,
  lineNumberPunc: PropTypes.string,
  noEnd: PropTypes.bool,
  captionCount: PropTypes.number,
  titlePrefix: PropTypes.string,
}

export default PseudoCode
