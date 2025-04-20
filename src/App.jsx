import { useState, useEffect, useMemo } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import productosData from './data/productosListos';
import { normalizarProductos } from './utils/normalizar';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Nav from './components/Nav'; // asegurate de tener este componente creado

function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [filtroMarca, setFiltroMarca] = useState('');
  const [filtroStock, setFiltroStock] = useState('');
  const [orden, setOrden] = useState('');
  const [seccion, setSeccion] = useState('Inicio');

  const productosFiltrados = useMemo(() => {
    let filtrados = [...productos];
    if (busqueda.trim() !== '') {
      const texto = busqueda.toLowerCase();
      filtrados = filtrados.filter(bat =>
        bat.marca.toLowerCase().includes(texto) ||
        bat.nombre.toLowerCase().includes(texto)
      );
    }

    if (filtroMarca !== '') {
      filtrados = filtrados.filter(bat => bat.marca === filtroMarca);
    }

    if (filtroStock === 'S') {
      filtrados = filtrados.filter(bat => bat.stock > 0);
    }

    switch (orden) {
      case 'alfabetoAZ':
        filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'alfabetoZA':
        filtrados.sort((a, b) => b.nombre.localeCompare(a.nombre));
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
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Nav items={["Inicio", "Contacto"]} onSeleccion={setSeccion} />
      <main className="flex-grow-1 p-3">
        {seccion === "Inicio" && (
          <Home
            marcas={marcas}
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            filtroMarca={filtroMarca}
            setFiltroMarca={setFiltroMarca}
            filtroStock={filtroStock}
            setFiltroStock={setFiltroStock}
            orden={orden}
            setOrden={setOrden}
            productosFiltrados={productosFiltrados}
          />
        )}
        {seccion === "Contacto" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
