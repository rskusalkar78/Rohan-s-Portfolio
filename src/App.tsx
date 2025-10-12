
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResumePage from "./pages/Resume";
import { createElement } from "react";

// Create a new QueryClient outside of the component
const queryClient = new QueryClient();

const App = () => {
  return createElement(
    QueryClientProvider,
    { client: queryClient },
    createElement(
      TooltipProvider,
      null,
      createElement(Toaster, null),
      createElement(Sonner, null),
      createElement(
        BrowserRouter,
        null,
        createElement(
          Routes,
          null,
          createElement(Route, { path: "/", element: createElement(Index) }),
          createElement(Route, { path: "/resume", element: createElement(ResumePage) }),
          createElement(Route, { path: "*", element: createElement(NotFound) })
        )
      )
    )
  );
};

export default App;
