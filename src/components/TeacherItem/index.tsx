import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/12834226?s=460&u=c073d2a2d94ff2560c93374865bb8a0ab3f796e9&v=4"
          alt="Nailton Oliveira"
        />
        <div>
          <strong>Nailton Oliveira</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
