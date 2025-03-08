function gameObject(){
    return {
     home : {teamName: "Brooklyn Nets",
             colors: ["Black","White"],
             players: {
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1,
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7,

                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15,
                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5,

                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1,

                },
            },
        },

           
    away: {teamName:"Charlotte Hornets",
           colors:["Turquoise","Purple"],
           players:{
            "Jeff Adrien":{
                number:4,
                shoe:18,
                points:10,
                rebounds:1,
                assists:1,
                steals:2,
                blocks:7,
                slamDunks:2,
            },
            "Bismak Biyombo":{
                number:0,
                shoe:16,
                points:12,
                rebounds:4,
                assists:7,
                steals:7,
                blocks:15,
                slamDunks:10,

            },
            "DeSagna Diop":{
                number:2,
                shoe:14,
                points:24,
                rebounds:12,
                assists:12,
                steals:4,
                blocks:5,
                slamDunks:5,

            },
            "Ben Gordon":{
                number:8,
                shoe:15,
                points:33,
                rebounds:3,
                assists:2,
                steals:2,
                blocks:1,
                slamDunks:0,

            },
            "Brendan Haywood":{
                number:33,
                shoe:15,
                points:6,
                rebounds:12,
                assists:12,
                steals:22,
                blocks:5,
                slamDunks:12,

            },
           },
        },
    };
}



console.log(gameObject());

function numPointsScored(playerName) {
    const gameObj = gameObject(); 
    const homePlayers = gameObj.home.players;
    const awayPlayers = gameObj.away.players;
  
    if (homePlayers.hasOwnProperty(playerName)) {
      return homePlayers[playerName].points;
    } else if (awayPlayers.hasOwnProperty(playerName)) {
      return awayPlayers[playerName].points;
    } else {
      return "Player not found";
    }
  }
  function shoeSize(playerName) {
    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;
  
    if (homePlayers.hasOwnProperty(playerName)) {
      return homePlayers[playerName].shoe;
    } else if (awayPlayers.hasOwnProperty(playerName)) {
      return awayPlayers[playerName].shoe;
    }
    return "Player not found";
  }
  
  function teamColors(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
      return game.home.colors;
    } else if (game.away.teamName === teamName) {
      return game.away.colors;
    }
    return "Team not found";
  }
  
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  function playerNumbers(teamName) {
    const game = gameObject();
    let numbers = [];
    let players;
  
    if (game.home.teamName === teamName) {
      players = game.home.players;
    } else if (game.away.teamName === teamName) {
      players = game.away.players;
    } else {
      return "Team not found";
    }
  
    for (let player in players) {
      numbers.push(players[player].number);
    }
    return numbers;
  }
  
  function playerStats(playerName) {
    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;
  
    if (homePlayers.hasOwnProperty(playerName)) {
      return homePlayers[playerName];
    } else if (awayPlayers.hasOwnProperty(playerName)) {
      return awayPlayers[playerName];
    }
    return "Player not found";
  }
  
  function bigShoeRebounds() {
    const game = gameObject();
    let maxShoeSize = 0;
    let playerWithMaxShoe = null;
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].shoe > maxShoeSize) {
          maxShoeSize = game[team].players[player].shoe;
          playerWithMaxShoe = game[team].players[player];
        }
      }
    }
    if (playerWithMaxShoe) {
      return playerWithMaxShoe.rebounds;
    }
    return "No players found";
  }
  function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerWithMaxPoints = null;
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].points > maxPoints) {
          maxPoints = game[team].players[player].points;
          playerWithMaxPoints = player;
        }
      }
    }
    return playerWithMaxPoints;
  }
  
  function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
  
    for (let player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
    for (let player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
  
    if (homePoints > awayPoints) {
      return game.home.teamName;
    } else if (awayPoints > homePoints) {
      return game.away.teamName;
    } else {
      return "Tie";
    }
  }
  
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  
  function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let longestNameSteals = 0;
  
    for (let team in game) {
      if (game[team].players.hasOwnProperty(longestName)) {
        longestNameSteals = game[team].players[longestName].steals;
        break;
      }
    }
    let maxSteals = 0;
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].steals > maxSteals) {
          maxSteals = game[team].players[player].steals;
        }
      }
    }
    return longestNameSteals === maxSteals;
  }  