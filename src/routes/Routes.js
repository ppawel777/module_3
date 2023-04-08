import { Route, Routes } from "react-router-dom";

import NotFound from '../pages/NotFound'
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="heroes" element={<HeroesList />}>
          <Route path=":id" element={<Hero />} />
        </Route>
        <Route path="locations" element={<LocationList />}>
          <Route path=":id" element={<Location />} />
        </Route>
        <Route path="episodes" element={<EpisodeList />}>
          <Route path=":id" element={<Episode />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesComponent;
