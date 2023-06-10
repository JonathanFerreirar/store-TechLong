import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const App = lazy(() => import("./App"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const EmailSend = lazy(() => import("./pages/contact/EmailSend"));
const Description = lazy(() => import("./pages/description/Description"));

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