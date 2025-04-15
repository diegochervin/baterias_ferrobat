import { useState, useEffect, useMemo  } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaBaterias from './components/ListaBaterias';
import bateriasData from './data/baterias';
import Footer from './components/Footer'
import AsideFiltros from './components/AsideFiltros';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [baterias, setBaterias] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [filtroMarca, setFiltroMarca] = useState('');
  const [filtroStock, setFiltroStock] = useState('');
  const [orden, setOrden] = useState('');
  const bateriasFiltradas = useMemo(() => {
    let filtradas = [...baterias];
  
    // Buscar por texto
    if (busqueda.trim() !== '') {
      const texto = busqueda.toLowerCase();
      filtradas = filtradas.filter(bat =>
        bat.marca.toLowerCase().includes(texto) ||
        bat.modelo.toLowerCase().includes(texto)
      );
    }
  
    // Filtro por marca
    if (filtroMarca !== '') {
      filtradas = filtradas.filter(bat => bat.marca === filtroMarca);
    }
  
    // Filtro por stock
    if (filtroStock === 'S') {
      filtradas = filtradas.filter(bat => bat.stock > 0);
    }
  
    // Ordenamiento
    switch (orden) {
      case 'alfabetoAZ':
        filtradas.sort((a, b) => a.modelo.localeCompare(b.modelo));
        break;
      case 'alfabetoZA':
        filtradas.sort((a, b) => b.modelo.localeCompare(a.modelo));
        break;
      case 'preciomenor':
        filtradas.sort((a, b) => a.precio - b.precio);
        break;
      case 'preciomayor':
        filtradas.sort((a, b) => b.precio - a.precio);
        break;
      default:
        break;
    }
  
    return filtradas;
  }, [baterias, busqueda, filtroMarca, filtroStock, orden]);
  

  useEffect(() => {
    setBaterias(bateriasData);
  }, []);

  const marcas = useMemo(() => {
    const todas = baterias.map(b => b.marca);
    return [...new Set(todas)].sort();
  }, [baterias]);

  
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
          <ListaBaterias baterias={bateriasFiltradas} />
        </div>
      </div>
  
      <Footer />
    </div>
  );
  
  
}

export default App;