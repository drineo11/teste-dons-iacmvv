import { Routes, Route } from 'react-router-dom';
import { TestePage } from './pages/TestePage';
import { ResultadoPage } from './pages/ResultadoPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TestePage />} />
      <Route path="/resultado" element={<ResultadoPage />} />
    </Routes>
  );
}
