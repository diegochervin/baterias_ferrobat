import { Card, Button } from "react-bootstrap";

const CardProducto = ({ producto }) => {
  // Campos que no queremos mostrar como propiedad dinámica
  const camposIgnorados = ["id", "foto", "precio"]; // Ignoramos estos campos

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
        src={producto.foto}
        alt={producto.nombre || "Producto"}
        style={{
            height: "200px",
            width: "100%",
            objectFit: "contain",
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{producto.nombre || "Producto"}</Card.Title>

        <Card.Text className="mb-4">
          {producto.marca && (
            <>
              <strong>Marca:</strong> {producto.marca} <br />
            </>
          )}

          <strong>Precio:</strong>{" "}
          <span className="text-danger fw-bold">U$S {producto.precio}</span> <br />

          {/* Mostrar el campo "Clon" solo si tiene un valor */}
          {producto.clon && (
            <>
              <strong>Clon:</strong> {producto.clon} <br />
            </>
          )}
          {producto.tamano && (
            <>
              <strong>Tamaño:</strong> {producto.tamano} ML <br />
            </>
          )}

{/* {producto.descripcion && (
            <>
              <strong>descripcion:</strong> {producto.descripcion} <br />
            </>
          )} */}


          {/* Aquí podrías mostrar otro campo, por ejemplo, stock */}
          <strong>Stock:</strong> {producto.stock || "No disponible"} <br />
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

export default CardProducto;
