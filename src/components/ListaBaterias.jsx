import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ListaBaterias = ({ baterias }) => {
  return (
    <div className="container mt-4">
      {baterias.length === 0 ? (
        <p className="text-center">
          No se encontraron baterías que coincidan con los filtros.
        </p>
      ) : (
        <Row xs="auto" className="g-4">
          {baterias.map((bateria) => (
            <Col key={bateria.id} style={{ flex: "0 0 auto" }}>
              <Card
                className="h-100 d-flex flex-column justify-content-between"
                style={{
                  width: "300px",
                  minHeight: "400px",
                  maxHeight: "600px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card.Img
                  variant="top"
                  src={bateria.imagen}
                  alt={`${bateria.marca} ${bateria.modelo}`}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body
                  className="d-flex flex-column"
                  style={{ flexGrow: 1 }}
                >
                  <Card.Title>Modelo: {bateria.modelo}</Card.Title>
                  <Card.Text className="mb-4">
                    <strong>Marca: </strong> {bateria.marca} <br />
                    <strong>Precio:</strong>{" "}
                    <span className="text-danger fw-bold">
                      ${bateria.precio}
                    </span>{" "}
                    <br />
                    <strong>Stock:</strong> {bateria.stock} <br />
                    {[
                      { label: "Tamaño", key: "tamaño" },
                      { label: "Voltaje", key: "voltaje" },
                      { label: "Peso", key: "peso" },
                      { label: "Garantía", key: "garantia" },
                      // agregás más acá si querés
                    ].map((prop) =>
                      bateria[prop.key] ? (
                        <div key={prop.key}>
                          <strong>{prop.label}:</strong> {bateria[prop.key]}
                        </div>
                      ) : null
                    )}
                  </Card.Text>

                  <Button
                    variant="primary"
                    disabled={bateria.stock === 0}
                    className="mt-auto"
                  >
                    {bateria.stock > 0 ? "Agregar al Carrito" : "Sin stock"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ListaBaterias;
