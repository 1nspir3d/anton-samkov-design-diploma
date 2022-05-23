import { FC, memo } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from './components/Main/Main';
import Branding from './components/Branding/MyWebsite'
import Contacts from './components/Contacts/MyWebsite'
import Logo from './components/Logo/MyWebsite'
import Marketing from './components/Marketing/MyWebsite'
import Web from './components/Web/MyWebsite'
import ScrollToTop from './components/ScrollToTop';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path="/branding" element={<Branding />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/web" element={<Web />} />
        </Routes>
    </Router>
  );
});
