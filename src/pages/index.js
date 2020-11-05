import React from 'react'
import { Link } from 'gatsby'

export default function Home() {
  return (
    <>
      <h1>Gatsby MDX-Deck Template</h1>
      <ul>
        <li>
          <Link to="/foo">Foo</Link>
        </li>
        <li>
          <Link to="/bar">Bar</Link>
        </li>
      </ul>
    </>
  )
}
