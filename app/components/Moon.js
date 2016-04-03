var React = require('react');
var MoonData = require('json!../data/moon_data.json')

var Moon = React.createClass({
  getInitialState: function() {
    var moon = MoonData[this.props.params.name]

    return {
      title: moon.title
    }
  },
  render: function() {
    return(
      <div>
        {this.state.title}
      </div>
    )
  }
});

module.exports = Moon;