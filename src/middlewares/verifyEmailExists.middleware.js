const verifyEmailExistsMiddleware = async (req, res, next) => {
  const [queryResponse] = await database
    .query(`SELECT users(email) FROM users;`)
    .then((res) => res.rows);

  if (queryResponse.some(res.body.cpf)) {
    return [422, { message: "Este E-mail já está cadastrado!" }];
  }
  return next();
};

export default verifyEmailExistsMiddleware;
