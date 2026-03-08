//grouping in mongoDB

[
  {
    $group: {
      _id: "$gender",
      avgAge: {
        $avg: "$age",
      },
    },
  },
];

// finding top 2 favourit fruits
[
  {
    $group: {
      _id: "$favoriteFruit",
      fruitCount: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      fruitCount: -1,
    },
  },
  {
    $limit: 2,
  },
];
