import styled from 'styled-components';
import './resets.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
  useRouteError,
  isRouteErrorResponse,
} from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

const Subcontainer = styled(Container)`
  border: 1px dashed blue;
`;
function BaseError() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>This page doesn&apos;t exist!</div>;
    }

    if (error.status === 401) {
      return <div>You aren&apos;t authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }

  return <div>Something went wrong</div>;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    // Top-level Parent Wrapper
    <Route
      path="/"
      element={
        <Container>
          <Outlet />
        </Container>
      }
      errorElement={<BaseError />}
    >
      {/* Home Page */}
      <Route index element={<>Home Page</>} />

      {/* Login Page */}
      <Route path="login" element={<>Login Page</>} />

      {/* Dashboard Routes */}
      <Route
        path="dashboard"
        // loader={todosLoader}
        element={
          <Subcontainer>
            <div>Hello starter</div>
            <Outlet />
          </Subcontainer>
        }
      >
        <Route index element={<>Dashboard Index</>} />
        <Route path=":id" element={<>Dashboard id path</>} />
      </Route>
    </Route>
  )
);

const Fallback = () => <div>Loading...</div>;

export default function App() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />;
}
