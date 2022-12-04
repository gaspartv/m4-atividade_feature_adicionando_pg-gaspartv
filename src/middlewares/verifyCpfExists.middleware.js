import { database } from "../database";

const verifyCpfExistsMiddleware = async (req, res, next) => {
  const [queryResponse] = await database
    .query(`SELECT users(cpf) FROM users;`)
    .then((res) => res.rows);

  if (queryResponse.some(res.body.cpf)) {
    return [422, { message: "Este CPF já está cadastrado!" }];
  }

  return next();
};

export default verifyCpfExistsMiddleware;
