import React from 'react'
import { Link, useLocation } from 'react-router-dom'

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
      <Link to="/">
        <button style={{ padding: 10, marginTop: 20, cursor: 'pointer'}}>Regresar a la pagina</button>
      </Link>
      
    </div>
  );
};

export default Success