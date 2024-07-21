import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterDetail from "./pages/CharacterDetail";
import NavBar from "./components/NavBar";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="h-screen">
      <QueryClientProvider client={queryClient}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/character/:id" element={<CharacterDetail />}></Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
