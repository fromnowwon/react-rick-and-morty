import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./pages/Home";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="h-screen">
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </div>
  );
}

export default App;
