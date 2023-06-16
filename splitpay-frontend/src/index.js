import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Expense from "./pages/Expense";
import Layout from "./pages/Layout";
import User from "./pages/User";
import Login from "./pages/Login";
import Order from "./pages/Order";
import TransactionDetails from "./pages/TransactionDetails";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} basename="/">
        <Route index element={<Home />} />
        <Route path="expense" element={<Expense />} />
        <Route path="user" element={<User />} />
        <Route path="login" element={<Login />} />
        <Route path="payment" element={<Order />} />
        <Route path="transactionDetails" element={<TransactionDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
