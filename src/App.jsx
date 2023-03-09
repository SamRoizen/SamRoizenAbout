
import './index.css'

import { Outlet } from "react-router-dom";
import { Title } from './components/Title';
import { Home } from './components/home';

export function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Home />
    </div>
  )
}