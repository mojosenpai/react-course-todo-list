import PropTypes from 'prop-types'

function Header({ greetings }) {
    let person = "Jamshid"
    let style = {backgroundColor: 'red', color: 'blue'}
  return (
    <div style={style}>{greetings} from {person}!</div>
  )
}
Header.defaultProps = {
    greetings: "Hello"
}
// import React, { Component } from 'react'

// export class Header extends Component {
//   render() {
//     return (
//       <div>Hello from class-based Header!</div>
//     )
//   }
// }

Header.propTypes = {
    greetings: PropTypes.string
}

export default Header