import express from 'express';
import cors from 'cors';
import { adminRouter } from './Routes/AdminRoute.js';
import con from './utils/db.js'; // Importar a conexão com o banco de dados

const app = express();
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ['GET', 'POST', 'PUT'],
  credentials: true
}));
app.use(express.json());

// Rota para criação de um novo post
app.post('/auth/posts', async (req, res) => {
  try {
    const { content } = req.body; // Alterado para pegar 'content' do corpo da solicitação
    // Lógica para inserir o novo post na tabela de posts
    await con.query('INSERT INTO posts (content) VALUES (?)', [content]); // Alterado para inserir 'content' na tabela
    res.status(201).json({ success: true, message: 'Post criado com sucesso!' });
  } catch (error) {
    console.error('Erro ao criar o post:', error);
    res.status(500).json({ success: false, message: 'Erro ao criar o post.' });
  }
});

// Rota para criar um novo comentário
app.post('/auth/comments', async (req, res) => {
    try {
      const { postId, userId, text } = req.body;
      // Lógica para inserir o novo comentário na tabela de comments
      await con.query('INSERT INTO comments (post_id, user_id, text) VALUES (?, ?, ?)', [postId, userId, text]);
      res.status(201).json({ success: true, message: 'Comentário criado com sucesso!' });
    } catch (error) {
      console.error('Erro ao criar o comentário:', error);
      res.status(500).json({ success: false, message: 'Erro ao criar o comentário.' });
    }
  });

// Adicione a rota para buscar as dicas e referências
app.get('/auth/salas_de_aula/:blocoId', async (req, res) => {
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
  // Rota para buscar os comentários de uma postagem
app.get('/auth/comments/:postId', async (req, res) => {
    try {
      const postId = req.params.postId;
      // Lógica para buscar os comentários de uma postagem na tabela de comments
      const comments = await con.query('SELECT * FROM comments WHERE post_id = ?', [postId]);
      res.status(200).json(comments);
    } catch (error) {
      console.error('Erro ao buscar os comentários:', error);
      res.status(500).json([]);
    }
  });

// Rota para buscar todos os departamentos
app.get('/departamentos', (req, res) => {
  const sql = 'SELECT * FROM departamentos';
  con.query(sql, (err, result) => {
      if (err) {
          console.error("Erro ao buscar os departamentos:", err);
          res.status(500).json({ success: false, error: "Erro ao buscar os departamentos." });
      } else {
          res.json(result);
      }
  });
});


  

app.use('/auth', adminRouter);

app.listen(3003, () => {
  console.log("Servidor online!");
});