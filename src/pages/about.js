const React = require('react')
const { Link } = require('react-router')

const About = React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li><a href="/about">About Me</a></li>
        </ul>
        <Link to="/">Home</Link>
      </div>
   )
  }
})
module.exports = About
