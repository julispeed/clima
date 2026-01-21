import { useState } from "react";
const Listatareas = ({ lista, remover, toggletachado }) => {
  return (
    <div>
      <ul>
        {lista.map((item, index) => (
          <li
            key={index}
            onClick={() => toggletachado(item.texto)}
            style={{
              color: "white",
              cursor: "pointer",
              textDecoration: item.tachado ? "line-through" : "none"
            }}
          >
            {item.texto}
            <button
              onClick={(e) => {
                e.stopPropagation();
                remover(item.texto);
              }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Listatareas;
