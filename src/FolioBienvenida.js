import React from 'react';

const FolioBienvenida = () => {
  const params = new URLSearchParams(window.location.search);
  const folio = params.get('folio');

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>¡Bienvenido al evento! 🎉</h1>
      {folio ? (
        <p style={{ fontSize: '1.5rem' }}>
          Tu folio es: <strong>#{folio}</strong>
        </p>
      ) : (
        <p style={{ fontSize: '1.2rem', color: 'gray' }}>Folio no identificado</p>
      )}
    </div>
  );
};

export default FolioBienvenida;
