import { Card, Button } from "react-bootstrap";

const CardProducto = ({ producto }) => {
  // Campos que no queremos mostrar como propiedad dinámica
  const camposIgnorados = ["id", "imagen", "tipo", "precio", "stock"];

  return (
    <Card
      className="h-100 d-flex flex-column justify-content-between"
      style={{
        width: "300px",
        minHeight: "400px",
        maxHeight: "600px",
      }}
    >
      <Card.Img
        variant="top"
        src={producto.imagen}
        alt={producto.modelo || producto.descripcion || "Producto"}
        style={{
          height: "200px",
          objectFit: "cover",
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          {producto.modelo || producto.descripcion || "Producto"}
        </Card.Title>

        <Card.Text className="mb-4">
          {producto.marca && (
            <>
              {/* <strong>Marca:</strong> {producto.marca} <br /> */}
            </>
          )}

          <strong>Precio:</strong>{" "}
          <span className="text-danger fw-bold">${producto.precio}</span> <br />

          <strong>Stock:</strong> {producto.stock} <br />

          {/* Mostrar dinámicamente el resto de propiedades */}
          {Object.entries(producto)
            .filter(([key, value]) => !camposIgnorados.includes(key) && value)
            .map(([key, value]) => (
              <div key={key}>
                <strong>{capitalizar(key)}:</strong> {value}
              </div>
            ))}
        </Card.Text>

        <Button
          variant="primary"
          className="mt-auto"
          disabled={producto.stock === 0}
        >
          {producto.stock > 0 ? "Agregar al Carrito" : "Sin stock"}
        </Button>
      </Card.Body>
    </Card>
  );
};

// Capitaliza el nombre de la propiedad
const capitalizar = (texto) =>
  texto.charAt(0).toUpperCase() + texto.slice(1).replace("_", " ");

export default CardProducto;
