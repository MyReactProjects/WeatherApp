var React = require('react');
var {Link} =require('react-router')

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples Component</h1>
      <p>Here are a few examle location to try out</p>
      <ol>
        <li><Link to='/?location=denver'>Denver, CO</Link></li>
        <li><Link to='/?location=jerusalem'>Jerusalem, IL</Link></li>
      </ol>

    </div>
  )
}

module.exports = Examples;
