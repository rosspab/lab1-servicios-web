import { Routes, Route, Link } from 'react-router-dom';
import { Tarea1 } from './components/tarea1';
import { Tarea2 } from './components/tarea2';
import { Tarea3 } from './components/tarea3';
import { Tarea4 } from './components/tarea4';

export const App = () => {
    return (
        <>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/tarea1">Tarea 1</Link>
                <Link to="/tarea2">Tarea 2</Link>
                <Link to="/tarea3">Tarea 3</Link>
                <Link to="/tarea4">Tarea 4</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tarea1" element={<Tarea1 />} />
                <Route path="/tarea2" element={<Tarea2 />} />
                <Route path="/tarea3" element={<Tarea3 />} />
                <Route path="/tarea4" element={<Tarea4 initialNames={["Juan", "María", "Pedro"]} />} />
            </Routes>
        </>
    );
}

const Home = () => {
    return <h1>Bienvenido a la página de inicio</h1>;
}