import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardProducto from "./CardProducto"; // Asegúrate que el path sea correcto

const ListaProductos = ({ baterias: productos }) => {
  return (
    <div className="container mt-4">
      {productos.length === 0 ? (
        <p className="text-center">
          No se encontraron productos que coincidan con los filtros.
        </p>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4 justify-content-center">
        {productos.map((producto) => (
          <Col key={producto.id}>
            <CardProducto producto={producto} />
          </Col>
        ))}
      </Row>
      
      )}
    </div>
  );
};

export default ListaProductos;
