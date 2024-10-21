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
    const { content } = req.body; // pegar 'content' do corpo da solicitação
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

// Rotas para o ToDo List

// Rota para buscar todas as tarefas
app.get('/todos', (req, res) => {
  const sql = 'SELECT * FROM todo_list WHERE is_completed = FALSE';
  con.query(sql, (err, result) => {
    if (err) {
      console.error('Erro ao buscar as tarefas:', err);
      res.status(500).json({ success: false, message: 'Erro ao buscar as tarefas.' });
    } else {
      res.json(result);
    }
  });
});

// Rota para adicionar uma nova tarefa
app.post('/todos', (req, res) => {
  const { title, description, due_date } = req.body;
  const sql = 'INSERT INTO todo_list (title, description, due_date, is_completed) VALUES (?, ?, ?, FALSE)';
  con.query(sql, [title, description, due_date], (err, result) => {
    if (err) {
      console.error('Erro ao criar a tarefa:', err);
      res.status(500).json({ success: false, message: 'Erro ao criar a tarefa.' });
    } else {
      const newTodo = {
        id: result.insertId,
        title,
        description,
        due_date,
        is_completed: false
      };
      res.status(201).json(newTodo);
    }
  });
});

// Rota para finalizar uma tarefa
app.put('/todos/:id/complete', (req, res) => {
  const { id } = req.params;
  const sql = 'UPDATE todo_list SET is_completed = TRUE WHERE id = ?';
  con.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Erro ao finalizar a tarefa:', err);
      res.status(500).json({ success: false, message: 'Erro ao finalizar a tarefa.' });
    } else {
      res.json({ success: true, message: 'Tarefa finalizada com sucesso!' });
    }
  });
});

// Rota para buscar todas as tarefas concluídas
app.get('/todos/completed', (req, res) => {
  const sql = 'SELECT * FROM todo_list WHERE is_completed = TRUE';
  con.query(sql, (err, result) => {
    if (err) {
      console.error('Erro ao buscar as tarefas concluídas:', err);
      res.status(500).json({ success: false, message: 'Erro ao buscar as tarefas concluídas.' });
    } else {
      res.json(result);
    }
  });
});


// Rota para buscar todos os atendimentos
app.get('/auth/atendimentos', (req, res) => {
  const sql = `
    SELECT 
      atendimentos.id,
      alunos.nome AS nome_aluno,
      atendimentos.curso,
      atendimentos.data_atendimento,
      atendimentos.descricao,
      atendimentos.telefone_paciente,
      atendimentos.nome_paciente,
      atendimentos.link_reuniao
    FROM 
      atendimentos
    LEFT JOIN 
      alunos ON atendimentos.aluno_id = alunos.id
  `;
  con.query(sql, (err, result) => {
    if (err) {
      console.error('Erro ao buscar os atendimentos:', err);
      res.status(500).json({ success: false, message: 'Erro ao buscar os atendimentos.' });
    } else {
      res.json(result);
    }
  });
});

// Rota para criar um novo atendimento
app.post('/auth/atendimentos', (req, res) => {
  const { aluno_id, curso, data_atendimento, descricao, telefone_paciente, nome_paciente, link_reuniao } = req.body;
  const sql = `
    INSERT INTO atendimentos (aluno_id, curso, data_atendimento, descricao, telefone_paciente, nome_paciente, link_reuniao)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  con.query(sql, [aluno_id, curso, data_atendimento, descricao, telefone_paciente, nome_paciente, link_reuniao], (err, result) => {
    if (err) {
      console.error('Erro ao criar o atendimento:', err);
      res.status(500).json({ success: false, message: 'Erro ao criar o atendimento.' });
    } else {
      res.status(201).json({ success: true, message: 'Atendimento criado com sucesso!' });
    }
  });
});

// Rota para buscar todos os alunos
app.get('/auth/alunos', (req, res) => {
  const sql = 'SELECT id, nome FROM alunos';
  con.query(sql, (err, result) => {
    if (err) {
      console.error('Erro ao buscar os alunos:', err);
      res.status(500).json({ success: false, message: 'Erro ao buscar os alunos.' });
    } else {
      res.json(result);
    }
  });
});

// Rota para criar uma nova sugestão
app.post('/auth/sugestoes', async (req, res) => {
  try {
    const { nome, sugestao } = req.body;
    // Consultar o ID do aluno com base no nome
    const alunoQuery = 'SELECT id FROM Alunos WHERE nome = ?';
    con.query(alunoQuery, [nome], (err, result) => {
      if (err || result.length === 0) {
        console.error('Erro ao buscar o aluno:', err);
        return res.status(404).json({ success: false, message: 'Aluno não encontrado.' });
      }
      const alunoId = result[0].id;
      const sugestaoQuery = 'INSERT INTO Sugestoes (aluno_id, sugestao) VALUES (?, ?)';
      con.query(sugestaoQuery, [alunoId, sugestao], (err, result) => {
        if (err) {
          console.error('Erro ao enviar a sugestão:', err);
          return res.status(500).json({ success: false, message: 'Erro ao enviar a sugestão.' });
        }
        res.status(201).json({ success: true, message: 'Sugestão enviada com sucesso!' });
      });
    });
  } catch (error) {
    console.error('Erro ao enviar a sugestão:', error);
    res.status(500).json({ success: false, message: 'Erro ao enviar a sugestão.' });
  }
});

// Rota para buscar todas as sugestões
app.get('/auth/sugestoes', async (req, res) => {
  try {
    const sql = `
      SELECT 
        s.id,
        a.nome AS nome_aluno,
        s.sugestao,
        s.data_criacao
      FROM 
        Sugestoes s
      JOIN 
        Alunos a ON s.aluno_id = a.id
      ORDER BY 
        s.data_criacao DESC
    `;
    con.query(sql, (err, result) => {
      if (err) {
        console.error('Erro ao buscar as sugestões:', err);
        return res.status(500).json({ success: false, message: 'Erro ao buscar as sugestões.' });
      }
      res.json(result);
    });
  } catch (error) {
    console.error('Erro ao buscar as sugestões:', error);
    res.status(500).json({ success: false, message: 'Erro ao buscar as sugestões.' });
  }
});


app.use('/auth', adminRouter);

app.listen(3003, () => {
  console.log("Servidor online!");
});