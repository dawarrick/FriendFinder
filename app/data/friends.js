// ===============================================================================
// DATA
// Below data will hold all of the friends for matching
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    "name":"Mary",
    "photo":"https://github.com/dawarrick/FriendFinder/blob/master/app/data/Images/mary.jpg?raw=true",
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
    "photo":"https://github.com/dawarrick/FriendFinder/blob/master/app/data/Images/sally.jpg?raw=true",
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
    "name":"Brad",
    "photo":"http://www.gstatic.com/tv/thumb/persons/1366/1366_v9_bb.jpg",
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
    "photo":"https://github.com/dawarrick/FriendFinder/blob/master/app/data/Images/greg.jpg?raw=true",
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