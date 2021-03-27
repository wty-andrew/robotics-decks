import { pre } from '@mdx-deck/themes/syntax-highlighter'

import code from './src/components/Code'

export default {
  colors: {
    text: '#000000',
    background: '#ffffff',
    link: '#448aff',
    codeColor: '#ebedf0',
    modes: {
      dark: {
        text: '#ffffff',
        background: '#18191A',
        codeColor: '#444950',
      },
    },
  },
  googleFont: 'https://fonts.googleapis.com/css?family=Montserrat',
  fonts: {
    body: '"Montserrat", serif',
  },
  custom: {
    fullscreen: {
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      left: 0,
      top: 0,
      overflow: 'auto',
    },
    responsive_padding: {
      paddingLeft: [null, '64px', '112px', '160px'],
      paddingRight: [null, '64px', '112px', '160px'],
      '@media print': {
        padding: '10%',
      },
    },
    responsive_padding_important: {
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
      variant: 'custom.responsive_padding',
      fontSize: '2em',
      display: 'block',
      lineHeight: 'body',
      padding: '1em',
      textAlign: 'left',
    },
  },
  components: {
    pre,
    code,
  },
}
