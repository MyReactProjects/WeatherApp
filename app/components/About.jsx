var React = require('react');

var About = (props) => {
  return (
  <div>
    <h1 className="text-center page-title">About this app</h1>
    <p>This is a weather application built on React.<br/> Here are some of the tools I used:
      <ul>
        <li>React JS</li>
        <li>Webpack</li>
        <li>Heroku</li>
        <li>Foundation 6</li>
        <li>Node JS</li>
        <li><a href="https://github.com/MyReactProjects/WeatherApp">Github</a></li>
        <li><a href="https://openweathermap.org/api">Open Weather Map API</a></li>
        <li>And a few other npm modules</li>
      </ul></p>
  </div>
  )
};

module.exports = About;
