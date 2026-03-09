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

// average tag number per user

[
  //  { using unwind
  //   $unwind: "$tags",
  // },
  // {
  //   $group: {
  //     _id: "$_id",
  //     tagNumbers: {
  //       $sum: 1,
  //     },
  //   },
  // },
  // {
  //   $group: {
  //     _id: "null",
  //     average: {
  //       $avg: "$tagNumbers",
  //     },
  //   },
  // },

  {
    $addFields: {
      numberOfTags: {
        $size: {
          $ifNull: ["$tags", []],
        },
      },
    },
  },
  {
    $group: {
      _id: null,
      average: {
        $avg: "$numberOfTags",
      },
    },
  },
];
