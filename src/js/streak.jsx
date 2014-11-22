/** @jsx React.DOM */

var Streak = React.createClass({
  render: function() {
    var style = {"background-color": this.props.color};
    return (
      <div className="streak" style={style} value={this.props.value}></div>
    );
  }
});


var StreakView = React.createClass({
  render: function() {
    var streakNodes = this.props.data.map(function (streak) {
      return (
        <Streak color={streak.color} value={streak.value} />
      );
    });

    return (
      <div className="streakList">
        {streakNodes}
      </div>
    );
  }
});

var Challenge = React.createClass({
  render: function() {
    return (
      <div className="streak">
        {this.props.challenge}
      </div>
    );
  }
});

var ChallengesList = React.createClass({
  render: function() {
    var challengeNodes = this.props.data.map(function (challenge) {
      return (
        <Challenge challenge="challenge" />
      );
    });

    return (
      <div className="challengeList">
        {challengeNodes}
      </div>
    );
  }
});

var DATA = {streaks:[], challenges:[]}
for (var x=0; x<365; x++) {
  var value = Math.random()
  var percentage = Math.round(value*100)
  var color = "#000";
  if (percentage <= 50) color= "#dae289"
  else if (percentage <= 70) color= "#9cc069"
  else if (percentage <= 80) color= "#669d45"
  else if (percentage <= 90) color= "#637939"
  else if (percentage <= 100) color= "#3b6427"
  DATA.streaks.push({color:color, value:value})
}

React.renderComponent(
  <div>
    <h1>Hello, world!</h1>
    <ChallengesList data={DATA.challenges} />
    <StreakView data={DATA.streaks} />
  </div>,
  document.getElementById('streak')
);