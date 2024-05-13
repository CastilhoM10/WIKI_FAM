import { useState, useEffect } from 'react';
import axios from 'axios';
import './departamentos.css';

export default function Departamentos() {
    const [departments, setDepartments] = useState([]);
    const [filteredDepartments, setFilteredDepartments] = useState([]);
    const [selectedArea, setSelectedArea] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get('http://localhost:3003/departamentos');
                setDepartments(response.data);
            } catch (error) {
                console.error('Erro ao buscar departamentos:', error);
            }
        };
        fetchDepartments();
    }, []);

    useEffect(() => {
        if (selectedArea === '') {
            setFilteredDepartments(departments);
        } else {
            const filtered = departments.filter(department => department.area === selectedArea);
            setFilteredDepartments(filtered);
        }
    }, [selectedArea, departments]);

    const showDepartmentDetails = (department) => {
        setSelectedDepartment(department);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend
        setFormSubmitted(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="department-section">
            <h2>Departamentos</h2>
            <div className="filter-options">
                <span>Filtrar por área:</span>
                <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
                    <option value="">Todos</option>
                    {departments.map(department => (
                        <option key={department.id} value={department.area}>{department.area}</option>
                    ))}
                </select>
            </div>
            <ul className="department-list">
                {filteredDepartments.map(department => (
                    <li key={department.id}>
                        <button onClick={() => showDepartmentDetails(department)}>{department.nome}</button>
                    </li>
                ))}
            </ul>
            {selectedDepartment && (
                <div className="department-details">
                    <h3>{selectedDepartment.nome}</h3>
                    <p><strong>Contato:</strong> {selectedDepartment.contato}</p>
                    <p><strong>Horário de Atendimento:</strong> {selectedDepartment.horario_de_atendimento}</p>
                    <p><strong>Descrição:</strong> {selectedDepartment.descricao}</p>
                    <h4>Entre em Contato</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nome:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensagem:</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                    {formSubmitted && <p>Mensagem enviada com sucesso!</p>}
                </div>
            )}
        </div>
    );
}