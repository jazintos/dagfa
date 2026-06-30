import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Leadership from "../pages/Leadership";
import Initiatives from "../pages/Initiatives";
import Analytics from "../pages/Analytics";
import Insights from "../pages/Insights";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";

export default function AppRouter() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/leadership"
          element={<Leadership />}
        />

        <Route
          path="/initiatives"
          element={<Initiatives />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/insights"
          element={<Insights />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Route>

      <Route
        path="*"
        element={<NotFound />}
      />

        <Route path="/privacy" element={<Privacy />} />

        <Route path="/terms" element={<Terms />} />

    </Routes>
  );
}