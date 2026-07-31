import JobPage from "./pages/JobPage"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from "./components/Header/Header";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <JobPage />
      </QueryClientProvider>
    </>
  )
}

export default App
