// joining author and books and find author details using lookup aggregator
[
  {
    $lookup: {
      from: "authors",
      localField: "author_id",
      foreignField: "_id",
      as: "authorDetails",
    },
  },
  {
    $addFields: {
      asuthorDetails: {
        $arrayElemAt: ["$authorDetails", 0],
      },
    },
  },
];
