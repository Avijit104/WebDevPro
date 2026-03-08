//basic aggregation
[
  {
    $match: {
      $isActive: true,
    },
  },
  {
    $count: "activeUsers",
  },
];
