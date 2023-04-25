import { Route, Routes } from "react-router-dom";

import NotFound from '../pages/NotFound'
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import HeroesList from '../pages/HeroesList'
import Heroes from '../pages/Heroes'
import LocationList from '../pages/LocationList'
import Location from '../pages/Location'
import EpisodeList from '../pages/EpisodeList'
import Episode from '../pages/Episode'

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="heroes" element={<HeroesList />} />
        <Route path="heroes/:id" element={<Heroes />} />
        <Route path="locations" element={<LocationList />} />
        <Route path="locations/:id" element={<Location />} />
        <Route path="episodes" element={<EpisodeList />} />
        <Route path="episodes/:id" element={<Episode />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesComponent;
