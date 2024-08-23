import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { redirectHandler } from "./pages/RedirectPage.jsx";
import Privacy from "./pages/Privacy.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/privacy",
      element: <Privacy />,
    },
    {
      path: "/form",
      element: redirectHandler(
        "https://docs.google.com/forms/d/e/1FAIpQLScoN19fAklBenQlIPES3KYiInuK26iAkyHka6iPTnPdFRKwlQ/viewform?usp=sf_link"
      ),
    },
    {
      path: "/ios",
      element: redirectHandler(
        "https://apps.apple.com/app/%EB%B9%A0%EB%A5%B8-%EC%83%81%EC%83%81%EB%9E%A9/id6648756420"
      ),
    },
  ],
  {
    basename: import.meta.env.PUBLIC_URL,
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
