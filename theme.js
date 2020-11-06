import React from 'react'
import { Prism } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { getLanguage, pre } from '@mdx-deck/themes/syntax-highlighter'

const code = (props) => {
  const language = getLanguage(props.className)
  return <Prism language={language} style={tomorrow} {...props} />
}

export default {
  colors: {
    text: '#000000',
    background: '#ffffff',
    link: '#448aff',
    codeColor: '#ebedf0',
  },
  googleFont: 'https://fonts.googleapis.com/css?family=Montserrat',
  fonts: {
    body: '"Montserrat", serif',
  },
  styles: {
    blockquote: {
      background: '#f9f9f9',
      borderLeft: '10px solid #ccc',
      fontWeight: 'bold',
      margin: '1em 10px',
      padding: '.1em 25px .1em 25px',
      color: 'black',
    },
    a: {
      backgroundColor: 'transparent',
      color: 'link',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    ol: {
      counterReset: 'ordered-list',
      li: {
        counterIncrement: 'ordered-list',
      },
      'li::marker': {
        content: 'counter(ordered-list)"  "',
      },
    },
    ul: {
      'li::marker': {
        content: '"⁕  "',
      },
      'li li::marker': {
        content: '"✦  "',
      },
      'li li li::marker': {
        content: '"●  "',
      },
    },
    li: {
      marginBottom: '.3em',
      lineHeight: '1.5',
    },
    inlineCode: {
      padding: '.25rem .5rem',
      fontSize: '.85em',
      backgroundColor: 'codeColor',
      borderRadius: '4px',
    },
    img: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
    },
    Slide: {
      fontSize: '2em',
      display: 'block',
      lineHeight: 'body',
      padding: '1em',
      paddingLeft: [null, '64px', '112px', '160px'],
      paddingRight: [null, '64px', '112px', '160px'],
      '@media print': {
        padding: '10%',
      },
      textAlign: 'left',
    },
  },
  components: {
    pre,
    code,
  },
}
