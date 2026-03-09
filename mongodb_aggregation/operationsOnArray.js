//  find no of users who have tempor as an tag
[
  {
    $match: {
      tags: "tempor",
    },
  },
  {
    $count: "countUsers",
  },
];

// find the user name and age who is inactive and has tempor as tag
[
  {
    $match: {
      tags: "tempor",
      isActive: false,
    },
  },
  {
    $project: {
      name: 1,
      age: 1,
    },
  },
];

// count the users who has phone no starting with +1 (771)
[
  {
    $match: {
      "company.phone": /^\+1 \(771\)/,
    },
  },
  {
    $count: "string",
  },
];

// find users who has proident as second tag
[
  {
    $match: {
      "tags.1": "proident",
    },
  },
];

// find all the users that has elit and proident as tags
[
  {
    $match: {
      tags: { $all: ["elit", "proident"] },
    },
  },
];
