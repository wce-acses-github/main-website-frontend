import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import EventsPage from "./components/EventsPage/EventsPage.jsx";
import TeamsPage from "./components/TeamsPage/TeamsPage.jsx";
import AdminPage from "./components/AdminPage/AdminPage.jsx";
import NotFoundError from "./components/ErrorPage/NotFoundError.jsx";
import "./input.css";
import { AuthProvider } from "./context/authContext.jsx";
import { EventProvider } from "./context/eventContext.jsx";
import { TeamProvider } from "./context/teamContext.jsx"; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route
        path="events/:eventType"
        element={
          <EventProvider>
            <EventsPage />
          </EventProvider>
        }
      />
      <Route
        path="teams/:boardType"
        element={
          <TeamProvider>
            <TeamsPage />
          </TeamProvider>
        }
      />
      <Route path="admin" element={<AdminPage />} />
      <Route path="*" element={<NotFoundError />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
