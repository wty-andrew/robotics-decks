import React from 'react'
import PropTypes from 'prop-types'
import { useSteps } from 'gatsby-theme-mdx-deck'
import { Box } from 'theme-ui'

import { CODE_BACKGROUND_COLOR } from './Code'
import Highlighter from './Highlighter'

const CodeSurfer = ({
  code,
  children,
  title: defaultTitle,
  showLineNumbers = false,
  style = {},
  titleContainerStyle = {},
  noteContainerStyle = {},
  steps = [],
  ...props
}) => {
  const step = useSteps(steps.length - 1)
  // TODO: check why undefined appears when this component is used consecutively
  if (steps[step] === undefined) return null

  let {
    addedLines = '',
    removedLines = '',
    highlightLines = '',
    title,
    note,
    code: snippet,
  } = steps[step]
  // assume title/code come from either props or specified in each step, not both
  const content = code || children || snippet
  title = defaultTitle || title

  return (
    <Box
      style={style}
      sx={{
        variant: 'custom.responsive_padding', // check multiple variant support?
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        left: 0,
        top: 0,
        overflow: 'auto',
        backgroundColor: CODE_BACKGROUND_COLOR,
        color: 'modes.dark.text',
        margin: '0 !important',
        display: 'grid',
        gridTemplateRows: '15% 1fr 20%',
        pre: {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }}
    >
      <Box
        style={titleContainerStyle}
        sx={{
          position: 'relative',
          h2: { marginBottom: '0', position: 'absolute', bottom: 0 },
        }}
      >
        {title && (typeof title === 'string' ? <h2>{title}</h2> : title())}
      </Box>

      <Highlighter
        showLineNumbers={showLineNumbers}
        addedLines={addedLines}
        removedLines={removedLines}
        highlightLines={highlightLines}
        {...props}
      >
        {content.trimEnd()}
      </Highlighter>

      <Box style={noteContainerStyle}>
        {note && (typeof note === 'string' ? note : note())}
      </Box>
    </Box>
  )
}

CodeSurfer.propTypes = {
  code: PropTypes.string,
  children: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  showLineNumbers: PropTypes.bool,
  style: PropTypes.object,
  titleContainerStyle: PropTypes.object,
  noteContainerStyle: PropTypes.object,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      addedLines: PropTypes.string,
      removedLines: PropTypes.string,
      highlightLines: PropTypes.string,
      title: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      note: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      code: PropTypes.string,
    })
  ),
}

export default CodeSurfer
