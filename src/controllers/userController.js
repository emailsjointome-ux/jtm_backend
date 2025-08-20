"use strict";

const getUsers = async (req, res) => {
  res.json({
    statusCode: 200,
    data: [{
      name: "Yatin",
      city: "Dhule"
    }],
    message: "List of users fetched successfully.",
  });
};

export const userController = {
  getUsers,
};
