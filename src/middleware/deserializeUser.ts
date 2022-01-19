// *  this middleware checks if valid accessToken is provided
// *  if yes, then sets the user props to res.locals.users
// *  else do nothing

import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = (req.headers.authorization || "").replace(
    /^Bearer\s/,
    ""
  );

  if (!accessToken) {
    return next();
  }

  const decoded = verifyJwt(accessToken, "accessTokenPublicKey");

  if (decoded) {
    res.locals.user = decoded;
  }

  return next();
};

export default deserializeUser;
