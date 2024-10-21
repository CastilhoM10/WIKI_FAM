

import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import CommentController from './controller.js';

const router = express.Router();

// Rota principal para administração
router.get('/', (req, res) => {
  res.send('Página de administração');
});

// Rota para criar um novo comentário
router.post('/comments', CommentController.createComment);

// Rota para buscar os comentários de uma postagem
router.get('/comments/:postId', CommentController.getComments);

// Rota para buscar os blocos 
router.get("/blocos", (req, res) => {
  const sql = `
    SELECT 
      id,
      nome AS nome_bloco
    FROM 
      blocos
    ORDER BY 
      nome
  `;
  con.query(sql, (err, result) => {
    if (err) {
      console.error("Erro ao buscar os blocos:", err);
      return res.status(500).json({ success: false, error: "Erro ao buscar os blocos." });
    }
    res.json(result);
  });
});

// Rota para buscar as salas de aula por ID do bloco
router.get("/salas_de_aula/:blocoId", (req, res) => {
  const blocoId = req.params.blocoId;
  const sql = `
    SELECT 
      id,
      nome AS nome_sala 
    FROM 
      salas_de_aula
    WHERE 
      bloco_id = ?
    ORDER BY 
      nome
  `;
  con.query(sql, [blocoId], (err, result) => {
    if (err) {
      console.error("Erro ao buscar as salas de aula:", err);
      return res.status(500).json({ success: false, error: "Erro ao buscar as salas de aula." });
    }
    res.json(result);
  });
});


router.get("/salas_de_aula/:blocoId", async (req, res) => {
  const blocoId = req.params.blocoId;
  try {
    const sql = `
      SELECT 
        sa.id,
        sa.nome AS nome_sala,
        ds.dica
      FROM 
        salas_de_aula sa
      LEFT JOIN 
        dicas_sala ds ON sa.id = ds.sala_id
      WHERE 
        sa.bloco_id = ?
      ORDER BY 
        sa.nome
    `;
    con.query(sql, [blocoId], (err, result) => {
      if (err) {
        console.error("Erro ao buscar as salas de aula:", err);
        return res.status(500).json({ success: false, error: "Erro ao buscar as salas de aula." });
      }
      res.json(result);
    });
  } catch (error) {
    console.error("Erro ao buscar as salas de aula:", error);
    return res.status(500).json({ success: false, error: "Erro ao buscar as salas de aula." });
  }
});

router.get("/salas_de_aula/:blocoId", async (req, res) => {
  const blocoId = req.params.blocoId;
  try {
    const sql = `
      SELECT 
        sa.id,
        sa.nome AS nome_sala,
        ds.dica,
        rs.referencia
      FROM 
        salas_de_aula sa
      LEFT JOIN 
        dicas_sala ds ON sa.id = ds.sala_id
      LEFT JOIN
        referencias_sala rs ON sa.id = rs.sala_id
      WHERE 
        sa.bloco_id = ?
      ORDER BY 
        sa.nome
    `;
    con.query(sql, [blocoId], (err, result) => {
      if (err) {
        console.error("Erro ao buscar as salas de aula:", err);
        return res.status(500).json({ success: false, error: "Erro ao buscar as salas de aula." });
      }
      res.json(result);
    });
  } catch (error) {
    console.error("Erro ao buscar as salas de aula:", error);
    return res.status(500).json({ success: false, error: "Erro ao buscar as salas de aula." });
  }
});
// Rota para buscar todos os departamentos
router.get('/departamentos', (req, res) => {
  // Consulta SQL para buscar todos os departamentos na tabela "departamentos"
  const sql = 'SELECT * FROM departamentos';

  // Execute a consulta SQL
  con.query(sql, (err, result) => {
      if (err) {
          console.error("Erro ao buscar os departamentos:", err);
          return res.status(500).json({ success: false, error: "Erro ao buscar os departamentos." });
      }
      // Retorne os resultados da consulta como resposta
      res.json(result);
  });
});


//rota para autenticação de login
router.post("/login", (req, res) => {
  const { email, ra, password } = req.body;

  if (!email || !ra || !password) {
    return res.status(400).json({ loginStatus: false, Error: "Por favor, forneça todas as informações de login." });
  }

  const sql = "SELECT * FROM (SELECT 'admin' AS role, email, ra, password FROM admin UNION ALL SELECT 'aluno' AS role, email, ra, password FROM alunos) AS users WHERE email = ? AND ra = ? AND password = ?";
  
  con.query(
    sql,
    [email, ra, password],
    (err, result) => {
      if (err) {
        console.error("Erro no servidor:", err);
        return res.status(500).json({ loginStatus: false, Error: "Erro no servidor." });
      }

      if (result.length > 0) {
        const user = result[0];
        const token = jwt.sign(
          { role: user.role, email: user.email },
          "jwt_secret_key",
          { expiresIn: "1d" }
        );
        res.cookie('token', token);
        return res.json({ loginStatus: true });
      } else {
        return res.status(401).json({ loginStatus: false, Error: "Credenciais inválidas." });
      }
    }
  );
});

export { router as adminRouter };
