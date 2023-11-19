// Create a Team class. This class will have attributes to store the team name (string), wins (int), losses (int), coach name
// (first and last with both being strings). The coach is an object from the BaseballCoach class.

class Team {
  constructor(teamName, wins, losses, coach) {
    this.teamName = teamName;
    this.wins = wins;
    this.losses = losses;
    this.coach = coach;
  }

  getTeamInfo() {
    return `The ${this.teamName} have won ${this.wins} games and lost ${this.losses} games and their coach is ${this.coach.firstName} ${this.coach.lastName}`;
  }
}

// Create a BaseballTeam class. This class inherits from the Team class and has the attributes of team batting average (float), pitching average (float).
class BaseballTeam extends Team {
  teamBattingAvg;
  pitchAvg;
}

// Create a Person class with the attributes of first and last names (strings).
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Create a BaseballCoach class that inherits from the Person class and has the attributes of career wins (int) and career losses (int) and win/loss pct (float).
class BaseballCoach extends Person {
  constructor(firstName, lastName, careerWins, careerLosses) {
    super(firstName, lastName);
    this.careerWins = careerWins;
    this.careerLosees = careerLosses;
    this.winLossPct =
      careerWins > 0 && careerLosses > 0
        ? careerWins / (careerWins + careerLosses)
        : 0;
  }
}

// Create BaseballPlayer class that inherits from the Person class and has the attribute of batting average (float) and home runs (int).
class BaseballPlayer extends Person {
  constructor(firstName, lastName, battingAverage, homeRuns) {
    super(firstName, lastName);
    this.battingAverage = battingAverage;
    this.homeRuns = homeRuns;
  }
}

// Each class constructor should receive all attributes for their class and make the necessary calls to the parent.

// The Team class should have a method that returns the string that is built using the team name attribute concatenated with the wins,
// losses, and coach name attributes. For example, "The Rockies have won 91 games and lost 72 games and their coach is Bud Black"
// where Rockies is the team name attribute, 91 is the wins attribute, 72 is the losses attribute, and Bud Black is the coach name attribute.
// You are NOT returning that literal string but instead dynamically building the string using the values from the attributes.
