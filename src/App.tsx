import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../components/theme-provider";
import { Dashboard } from "../components/dashboard";
import OrdersPage from "./pages/OrdersPage";
import "./index.css";

function App() {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
