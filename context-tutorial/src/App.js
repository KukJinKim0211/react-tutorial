import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';
import { Routes, Route } from 'react-router-dom';
import CurrentPage from './pages/CurrentPage';
import NextPage from "./pages/NextPage";

const App = () => {
  return (
    <ColorProvider>
      <Routes>
        <Route path='/' element={<CurrentPage />} />
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </ColorProvider>
  );
};

export default App;