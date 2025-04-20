// src/components/Inicio.js
import AsideFiltros from "./AsideFiltros";
import ListaProductos from "./ListaProductos";

const Home = ({
  marcas,
  busqueda,
  setBusqueda,
  filtroMarca,
  setFiltroMarca,
  filtroStock,
  setFiltroStock,
  orden,
  setOrden,
  productosFiltrados
}) => {
  return (
    <div className="container-fluid mt-4">
      <div className="d-flex" style={{ width: '100%' }}>
        {/* Aside con filtros */}
        <aside
          className="border-end"
          style={{
            width: '300px',
            minWidth: '300px',
            flexShrink: 0,
          }}
        >
          <AsideFiltros
            marcas={marcas}
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            filtroMarca={filtroMarca}
            setFiltroMarca={setFiltroMarca}
            filtroStock={filtroStock}
            setFiltroStock={setFiltroStock}
            orden={orden}
            setOrden={setOrden}
          />
        </aside>

        {/* Tarjetas */}
        <div className="flex-grow-1" style={{ overflow: 'hidden' }}>
          <ListaProductos baterias={productosFiltrados} />
        </div>
      </div>
    </div>
  );
};

export default Home;
