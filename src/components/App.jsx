import React from "react";
import "./App.css";
import { QueryClientProvider, QueryClient } from 'react-query'
import Main from "./Main";
function App() {
  const queryClient = new QueryClient()
  return (
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <Main />
          {console.log(process.env.SECRET_KEY)}
          </QueryClientProvider>
      </div>
  );
}

export default App;
