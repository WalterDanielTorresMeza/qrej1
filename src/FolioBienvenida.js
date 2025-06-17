import React, { useState, useEffect } from 'react';
import invitados from './invitados.json'; // Asegúrate de que esté en src/

const FolioBienvenida = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const folio = invitados[id]; // buscar el folio en el JSON

  useEffect(() => {
    const access = localStorage.getItem('adminAccess');
    if (access === 'true') {
      setHasAccess(true);
    }
  }, []);

  const handleLogin = () => {
    if (password === 'charro123') {
      localStorage.setItem('adminAccess', 'true');
      setHasAccess(true);
    } else {
      setError(true);
    }
  };

  if (!hasAccess) {
    return (
      <div style={{ textAlign: 'center', marginTop: '5rem' }}>
        <h1>🎉 Evento Tal</h1>
        <p>Si eres invitado, ¡nos vemos el día del evento!</p>
        <p>Si eres recepcionista, ingresa la contraseña:</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          style={{ padding: '0.5rem', marginTop: '1rem' }}
        />
        <br />
        <button onClick={handleLogin} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Ingresar
        </button>
        {error && <p style={{ color: 'red' }}>Contraseña incorrecta</p>}
      </div>
    );
  }

  // Si tiene acceso y el ID es válido
  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>✅ Bienvenido</h1>
      {folio ? (
        <p>Tu folio es: <strong>#{folio}</strong></p>
      ) : (
        <p>❌ Código inválido o manipulado</p>
      )}
    </div>
  );
};

export default FolioBienvenida;
