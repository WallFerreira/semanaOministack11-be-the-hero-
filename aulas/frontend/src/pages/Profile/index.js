import React from 'react';
import { Link }  from 'react-router-dom';
import { FiPower }  from 'react-icons/fi';
import { FiTrash2 }  from 'react-icons/fi';


import './styles.css';

import LogoImg from '../../assets/logo.svg';

export default function Profile() {
    return(    
    <div className="profile-container">
        <header>
            <img src={LogoImg} alt="Be The Hero"/>
            <span>Bem vinda, APAD</span>

            <Link className="button" to="/incidents/new"> Criar novo caso </Link> 
            <button type="button">
                <FiPower size={18} color="#E02041" />
            </button>
        </header>
        <h1> Casos cadastrados</h1>
        <ul>
            <li>
                <strong>CASO:</strong>
                <p>Caso teste</p>

                <strong>DESCRIÇÃO:</strong>
                <p>Descrição teste</p>
            
                <strong>VALOR:</strong>
                <p>R$ 230</p>

                <button><FiTrash2 size={20} color="#a8a8b3"/> </button>
            </li>
            <li>
                <strong>CASO:</strong>
                <p>Caso teste</p>

                <strong>DESCRIÇÃO:</strong>
                <p>Descrição teste</p>
            
                <strong>VALOR:</strong>
                <p>R$ 230</p>

                <button><FiTrash2 size={20} color="#a8a8b3"/> </button>
            </li>
            <li>
                <strong>CASO:</strong>
                <p>Caso teste</p>

                <strong>DESCRIÇÃO:</strong>
                <p>Descrição teste</p>
            
                <strong>VALOR:</strong>
                <p>R$ 230</p>

                <button><FiTrash2 size={20} color="#a8a8b3"/> </button>
            </li>
            <li>
                <strong>CASO:</strong>
                <p>Caso teste</p>

                <strong>DESCRIÇÃO:</strong>
                <p>Descrição teste</p>
            
                <strong>VALOR:</strong>
                <p>R$ 230</p>

                <button><FiTrash2 size={20} color="#a8a8b3"/> </button>
            </li>
            
        </ul>
    </div>
  );
}
