import { db } from "../db.js";

export const getBebidas = (_, res) => {
  const q = "SELECT * FROM bebidas ";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addBebidas = (req, res) => {
  const q =
    "INSERT INTO bebidas(`nomel`, `valor`, `sobre`, `imagem`, `pessoas`) VALUES(?)";

  const values = [
    req.body.nomel,
    req.body.valor,
    req.body.sobre,
    req.body.imagem,
    req.body.pessoas,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateBebidas = (req, res) => {
  const q =
    "UPDATE bebidas SET `nomel` = ?, `valor` = ?, `sobre` = ?, `imagem` = ?, `pessoas` = ? WHERE `id` = ?";

  const values = [
    req.body.nomel,
    req.body.valor,
    req.body.sobre,
    req.body.imagem,
    req.body.pessoas,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteBebidas = (req, res) => {
  const q = "DELETE FROM bebidas WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
