import React from 'react';
import "./botoes.css";

const Botoes = ({ bottons, setBotaoClicado }) => {
  const handleClick = (text) => {
    setBotaoClicado(text);
  }

  return (
    <div className='botoes'>
      <ul>
        {bottons.map((item, index) => (
          <li key={index}>
            <button onClick={() => handleClick(item.text)}>
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Botoes;