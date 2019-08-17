// ===============================================================================
// DATA
// Below data will hold all of the friends for matching
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    "name":"Deb",
    "photo":"images/mary.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    "name":"Sally",
    "photo":"images/sally.jpg",
    "scores":[
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ]
  },
  {
    "name":"John",
    "photo":"images/john.jpg",
    "scores":[
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5
      ]
  },
  {
    "name":"Greg",
    "photo":"images/greg.jpg",
    "scores":[
        5,
        4,
        3,
        2,
        1,
        1,
        2,
        3,
        4,
        5
      ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;