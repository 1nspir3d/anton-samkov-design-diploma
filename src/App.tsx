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
          <Route path='/anton-samkov-design-diploma' element={<Main />}/>
          <Route path="/anton-samkov-design-diploma/branding" element={<Branding />} />
          <Route path="/anton-samkov-design-diploma/contacts" element={<Contacts />} />
          <Route path="/anton-samkov-design-diploma/logo" element={<Logo />} />
          <Route path="/anton-samkov-design-diploma/marketing" element={<Marketing />} />
          <Route path="/anton-samkov-design-diploma/web" element={<Web />} />
        </Routes>
    </Router>
  );
});
