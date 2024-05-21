

import con from "../utils/db.js";

const CommentController = {
    // Método para criar um novo comentário
    createComment: async (req, res) => {
        try {
            const { postId, userId, text } = req.body;
            // Lógica para inserir o novo comentário na tabela de comentários
            await con.query('INSERT INTO comments (post_id, user_id, text) VALUES (?, ?, ?)', [postId, userId, text]);
            res.status(201).json({ success: true, message: 'Comentário criado com sucesso!' });
        } catch (error) {
            console.error('Erro ao criar o comentário:', error);
            res.status(500).json({ success: false, message: 'Erro ao criar o comentário.' });
        }
    },

    // Método para buscar os comentários de uma postagem
    getComments: async (req, res) => {
        try {
            const postId = req.params.postId;
            // Lógica para buscar os comentários de uma postagem na tabela de comentários
            const comments = await con.query('SELECT * FROM comments WHERE post_id = ?', [postId]);
            res.status(200).json(comments);
        } catch (error) {
            console.error('Erro ao buscar os comentários:', error);
            res.status(500).json([]);
        }
    },

    // Método para enviar uma mensagem
    sendMessage: async (req, res) => {
        try {
            const { senderId, receiverId, messageText } = req.body;
            // Lógica para inserir a mensagem na tabela de mensagens
            await con.query('INSERT INTO messages (sender_id, receiver_id, message_text) VALUES (?, ?, ?)', [senderId, receiverId, messageText]);
            res.status(201).json({ success: true, message: 'Mensagem enviada com sucesso!' });
        } catch (error) {
            console.error('Erro ao enviar a mensagem:', error);
            res.status(500).json({ success: false, message: 'Erro ao enviar a mensagem.' });
        }
    },

    // Método para buscar mensagens de um determinado usuário
    getMessages: async (req, res) => {
        try {
            const userId = req.params.userId;
            // Lógica para buscar as mensagens do usuário na tabela de mensagens
            const messages = await con.query('SELECT * FROM messages WHERE receiver_id = ?', [userId]);
            res.status(200).json(messages);
        } catch (error) {
            console.error('Erro ao buscar as mensagens do usuário:', error);
            res.status(500).json([]);
        }
    }
};

export default CommentController;