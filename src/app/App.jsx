import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from '../routes';
import { Layout } from '../layout/Layout';
import { Homepage, Catalog, Favorites } from '../views';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PublicRoute component={<Homepage />} />} />
          <Route
            path="catalog"
            element={<PublicRoute component={<Catalog />} />}
          />

          <Route
            path="favorites"
            element={<PublicRoute component={<Favorites />} />}
          />
          <Route path="*" element={<Homepage replace />} />
        </Route>
      </Routes>
    </>
  );
}
