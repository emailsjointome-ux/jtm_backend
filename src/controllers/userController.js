"use strict";

const getUsers = async (req, res) => {
  res.json({
    statusCode: 200,
    data: [],
    message: "List of users fetched successfully.",
  });
};

export const userController = {
  getUsers,
};
