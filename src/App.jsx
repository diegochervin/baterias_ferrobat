import { useState, useEffect, useMemo  } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaProductos from './components/ListaProductos';
import productosData from './data/productos';
// import Footer from './components/Footer'
import AsideFiltros from './components/AsideFiltros';
import 'bootstrap/dist/css/bootstrap.min.css';
import { normalizarProductos } from './utils/normalizar';





function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [filtroMarca, setFiltroMarca] = useState('');
  const [filtroStock, setFiltroStock] = useState('');
  const [orden, setOrden] = useState('');
  
  const productosFiltrados = useMemo(() => {
    let filtrados = [...productos];
  
    // Buscar por texto
    if (busqueda.trim() !== '') {
      const texto = busqueda.toLowerCase();
      filtrados = filtrados.filter(bat =>
        bat.marca.toLowerCase().includes(texto) ||
        bat.modelo.toLowerCase().includes(texto)
      );
    }
  
    // Filtro por marca
    if (filtroMarca !== '') {
      filtrados = filtrados.filter(bat => bat.marca === filtroMarca);
    }
  
    // Filtro por stock
    if (filtroStock === 'S') {
      filtrados = filtrados.filter(bat => bat.stock > 0);
    }
  
    // Ordenamiento
    switch (orden) {
      case 'alfabetoAZ':
        filtrados.sort((a, b) => a.modelo.localeCompare(b.modelo));
        break;
      case 'alfabetoZA':
        filtrados.sort((a, b) => b.modelo.localeCompare(a.modelo));
        break;
      case 'preciomenor':
        filtrados.sort((a, b) => a.precio - b.precio);
        break;
      case 'preciomayor':
        filtrados.sort((a, b) => b.precio - a.precio);
        break;
      default:
        break;
    }
  
    return filtrados;
  }, [productos, busqueda, filtroMarca, filtroStock, orden]);
  

  useEffect(() => {
    const bateriasNormalizadas = normalizarProductos(productosData);
  setProductos(bateriasNormalizadas);
  }, []);

  const marcas = useMemo(() => {
    const todas = productos.map(b => b.marca);
    return [...new Set(todas)].sort();
  }, [productos]);

  
  return (
    <div className="App container mt-4">
      <div className="d-flex" style={{ width: '100%' }}>
        {/* Aside con ancho fijo */}
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
  
        {/* Contenedor de tarjetas que ocupa el resto del espacio */}
        <div className="flex-grow-1 " style={{ overflow: 'hidden' }}>
          <ListaProductos baterias={productosFiltrados} />
        </div>
      </div>
  
      {/* <Footer /> */}
    </div>
  );
  
  
}

export default App;