import React from "react"
import { Link } from "gatsby"
export default props => (
  <h1>
    <Link to="/">{props.headerText}</Link>
  </h1>
)
