import { database } from "../database";

const listUsersService = async () => {
  const queryResponse = await database
    .query("SELECT * FROM users;")
    .then((res) => res.rows);

  return [200, queryResponse];
};

export default listUsersService;
