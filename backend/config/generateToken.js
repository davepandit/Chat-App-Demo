import jwt from "jsonwebtoken";

export const generateToken = (id) => {
  return jwt.sign({ id }, "9f!@#LK23sdf0-DF!32_8asdfjwio123jlkqwer123", {
    expiresIn: "30d",
  });
};
