import React from 'react'
import { useLocation } from 'react-router-dom'

const Success = () => {
  const location = useLocation()

  console.log(location)
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        Tu orden ha sido creada. Tu número de orden es: ch_3LxhZsEpsYhIlqpf0YUOVpuG
         "Tu orden esta siendo preparada..."
      <button style={{ padding: 10, marginTop: 20 }}>Regresar a la pagina</button>
    </div>
  );
};

export default Success