import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { SearchBlock } from '../../components/SearchBlock';

export const Layout = () => (
  <>
    <Header />
    <SearchBlock />
    <main>
      <Outlet />
    </main>
  </>
);
