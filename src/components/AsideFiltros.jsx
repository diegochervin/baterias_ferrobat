import React from "react";

const AsideFiltros = ({
  marcas,
  busqueda,
  setBusqueda,
  filtroMarca,
  setFiltroMarca,
  filtroStock,
  setFiltroStock,
  orden,
  setOrden
}) => {
  return (
    
    <aside
    className="p-3 border-end d-flex flex-column"
    style={{ gap: "1rem" }} // espacio entre secciones
  >
    <h4 className="mb-3">🔎 Filtros</h4>
  
    {/* Contenedor de filtros */}
    <div className="d-flex flex-column" style={{ gap: "1rem" }}>
      {/* Búsqueda */}
      <div>
        <label htmlFor="buscar" className="form-label">Buscar por marca o modelo</label>
        <input
          type="text"
          className="form-control"
          id="buscar"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Ej: Erba Pura..."
        />
      </div>
  
      {/* Filtro por Marca */}
      <div>
        <strong>Filtrar por Marca</strong>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="filtroMarca"
            id="todas"
            value=""
            checked={filtroMarca === ""}
            onChange={(e) => setFiltroMarca(e.target.value)}
          />
          <label htmlFor="todas" className="form-check-label">Todas</label>
        </div>
        {marcas.map((marca, idx) => (
          <div className="form-check" key={idx}>
            <input
              type="radio"
              className="form-check-input"
              name="filtroMarca"
              id={`marca-${idx}`}
              value={marca}
              checked={filtroMarca === marca}
              onChange={(e) => setFiltroMarca(e.target.value)}
            />
            <label htmlFor={`marca-${idx}`} className="form-check-label">
              {marca}
            </label>
          </div>
        ))}
      </div>
  
      {/* Ordenamiento */}
      <div>
        <strong>Ordenar por:</strong>
        {["alfabetoAZ", "alfabetoZA", "preciomenor", "preciomayor"].map((value, idx) => (
          <div className="form-check" key={idx}>
            <input
              type="radio"
              className="form-check-input"
              name="orden"
              id={`orden-${value}`}
              value={value}
              checked={orden === value}
              onChange={(e) => setOrden(e.target.value)}
            />
            <label htmlFor={`orden-${value}`} className="form-check-label">
              {
                value === "alfabetoAZ" ? "A-Z" :
                value === "alfabetoZA" ? "Z-A" :
                value === "preciomenor" ? "Precio Menor a Mayor" :
                "Precio Mayor a Menor"
              }
            </label>
          </div>
        ))}
      </div>
  
      {/* Filtro de Stock */}
      <div>
        <strong>Stock:</strong>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="filtroStock"
            id="stockTodos"
            value=""
            checked={filtroStock === ""}
            onChange={(e) => setFiltroStock(e.target.value)}
          />
          <label htmlFor="stockTodos" className="form-check-label">Todos</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="filtroStock"
            id="stockDisponible"
            value="S"
            checked={filtroStock === "S"}
            onChange={(e) => setFiltroStock(e.target.value)}
          />
          <label htmlFor="stockDisponible" className="form-check-label">Solo con stock</label>
        </div>
      </div>
    </div>
  </aside>
    );
};

export default AsideFiltros;
