import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import NotFound from "./Page/NotFound/NotFound";
import Dashboard from "./Page/Dashboard/Dashboard";
// start commend npm run dev -- --host 0.0.0.0

const login = true; // false দিলে NotFound দেখাবে

function App() {
  return (
    <BrowserRouter>
      {login ? (
        // login হলে নিচের গুলো শো করবে। 
        <Layout>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Layout>
      ) : (
        // login না হলে নিচের গুলো শো করবে।
        <NotFound />
      )}
    </BrowserRouter>
  );
}

export default App;
