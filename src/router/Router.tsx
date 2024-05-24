import { Route, Routes } from "react-router-dom";
import PokeMain from "../page/PokeMain";
import NotFound from "../page/NotFound";
import PokeDetail from "../page/PokeDetail";
const Router = () => {
  return (
    <>
      <Routes>
        <Route index element={<PokeMain />} />
        <Route path=":no" element={<PokeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
