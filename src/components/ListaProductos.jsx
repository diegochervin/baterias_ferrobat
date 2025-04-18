import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardProducto from "./CardProducto"; // Asegurate que el path sea correcto

const ListaProductos = ({ baterias: productos }) => {
  return (
    <div className="container mt-4">
      {productos.length === 0 ? (
        <p className="text-center">
          No se encontraron productos que coincidan con los filtros.
        </p>
      ) : (
        <Row xs="auto" className="g-4">
          {productos.map((producto) => (
            <Col key={producto.id} style={{ flex: "0 0 auto" }}>
              <CardProducto producto={producto} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ListaProductos;
