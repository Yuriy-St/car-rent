import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoute } from '../routes';
import { Layout } from '../layout/Layout';
import { Homepage, Catalog, Favorites } from '../views';
import { routes } from '../routes';

export default function App() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<PublicRoute component={<Homepage />} />} />
        <Route
          path={routes.CATALOG}
          element={<PublicRoute component={<Catalog />} />}
        />

        <Route
          path={routes.FAVORITES}
          element={<PublicRoute component={<Favorites />} />}
        />
        <Route path="*" element={<Navigate to={routes.HOME} replace />} />
      </Route>
    </Routes>
  );
}
