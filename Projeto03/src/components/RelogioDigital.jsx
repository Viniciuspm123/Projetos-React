import React, { useState, useEffect } from 'react';

function RelogioDigital() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Relógio Digital</h2>
      <p>{hora}</p>
    </div>
  );
}

export default RelogioDigital;
