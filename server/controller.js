module.exports = {
  addUser: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { username, password } = req.body;
    console.log(req.body);

    dbInstance
      .add_user([username, password])
      .then(response => res.status(200).send(response))
      .catch(console.log);
  }
};
