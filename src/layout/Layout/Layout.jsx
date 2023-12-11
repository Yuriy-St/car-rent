import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { SearchBlock } from '../../components/SearchBlock/SearchBlock.1';

export const Layout = () => (
  <>
    <Header />
    <SearchBlock />
    <main>
      <Outlet />
    </main>
  </>
);
