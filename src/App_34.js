import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage_34 from "./pages/HomePage_34";

import MenuStaticPage_34 from "./pages/local/MenuStaticPage_34";
import SupaMenuPage_34 from "./pages/supabase/MenuPagea_34";
import SupaMenuByCategoryPage from "./pages/supabase/MenuByCategoryPage_34";
import MenuNodePage_34 from "./pages/node/MenuNodePage_34";
import MenuLocalJsonPage_34 from "./pages/local/MenuLocalJsonPage_34";

const App_34 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage_34 />} />
        <Route path="/static_34" element={<MenuStaticPage_34 />} />
        <Route path="/supa_menu_34" element={<SupaMenuPage_34 />} />
        <Route
          path="/supa_menu_34/:category"
          element={<SupaMenuByCategoryPage />}
        />
        <Route path="/node_menu_34" element={<MenuNodePage_34 />} />
        <Route path="/json_menu_34" element={<MenuLocalJsonPage_34 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App_34;
