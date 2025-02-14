import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Router/Routes.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserRoutes from "./PrivateRoutes/UserRoutes.jsx";

const query = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={query}>
        <UserRoutes>
          <RouterProvider router={Routes} />
        </UserRoutes>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
