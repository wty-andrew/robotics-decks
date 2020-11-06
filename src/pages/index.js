import React from 'react'
import { Link } from 'gatsby'

const Home = () => {
  return (
    <>
      <h1>Gatsby MDX-Deck Template</h1>
      <ul>
        <li>
          <Link to="/markdown">Markdown</Link>
        </li>
        <li>
          <Link to="/misc">MISC</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
