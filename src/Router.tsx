import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Cart from "./pages/cart/cart";

const App = lazy(() => import("./App"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const EmailSend = lazy(() => import("./pages/contact/EmailSend"));
const Description = lazy(() => import("./pages/description/Description"));

//const Cart = lazy(() => import("./pages/cart/cart"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Description />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Sending...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/EmailSend",
        element: (
          <Suspense fallback={<div>Sending...</div>}>
            <EmailSend />
          </Suspense>
        ),
      },
    ],
  },
]);
