import { Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, ContactPage } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </div>
  )
}
