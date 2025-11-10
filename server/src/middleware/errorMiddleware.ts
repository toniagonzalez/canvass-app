import { NextFunction, Request, Response } from "express";

module.exports = function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err.stack);
  res.status(500).send("Oops something went wrong!");
};
