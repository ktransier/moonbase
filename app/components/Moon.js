var React = require('react');

var Moon = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.params.name}
      </div>
    )
  }
});

module.exports = Moon;