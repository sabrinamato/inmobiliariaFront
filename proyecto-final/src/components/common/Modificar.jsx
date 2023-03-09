
import React, { useState } from 'react';


const Modificar = ({ terreno, selectedTerreno, setTerreno, setIsEditing }) => {
  const id = selectedTerreno.id;

  const [nombre, setNombre] = useState(selected.nombre);
  const [apellido, setApellido] = useState(selectedTerreno.apellido);
  const [email, setEmail] = useState(selectedTerreno.email);
  const [precio, setPrecio] = useState(selectedTerreno.precio);
  const [date, setDate] = useState(selectedTerreno.date);

  const handleUpdate = e => {
    e.preventDefault();

    if (!nombre || !apellido || !email || !precio || !date) {
      return ({
        icon: 'error',
        title: 'Error!',
        text: 'Todos los campos son requeridos.',
        showConfirmButton: true,
      });
    }

    const terreno = {
      id,
      nombre,
      apellido,
      email,
      precio,
      date,
    };

    for (let i = 0; i < terreno.length; i++) {
      if (terreno[i].id === id) {
        terreno.splice(i, 1, terreno);
        break;
      }
    }

    localStorage.setItem('inmobiliaria_data', JSON.stringify(terreno));
    setTerreno(terreno);
    setIsEditing(false);

    ({
      icon: 'Cambio Exitoso',
      title: 'Actualizado!',
      text: `${terreno.nombre} ${terreno.apellido}'el terreno ha sido actualizado.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Terreno</h1>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <label htmlFor="Apellido">Apellido</label>
        <input
          id="apellido"
          type="text"
          name="Apellido"
          value={apellido}
          onChange={e => setApellido(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="precio"> Precio ($)</label>
        <input
          id="precio"
          type="number"
          name="precio"
          value={precio}
          onChange={e => setPrecio(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Modificar;

