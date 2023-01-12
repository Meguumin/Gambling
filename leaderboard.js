// Get the user's score from local storage
  var userScore = localStorage.getItem("storedItem");
  var userName = localStorage.getItem("username");
  var inserted = false;
  // Define the array of names and scores
  var namesAndScores = [
    { name: 'John', score: 50 },
    { name: 'Alice', score: 75 },
    { name: 'Bob', score: 25 },
    { name: 'Eve', score: 90 }
  ];



function SaveUsername()
  {
    var SaveUser = document.getElementById("username").value;
    localStorage.setItem("username", SaveUser)
  }