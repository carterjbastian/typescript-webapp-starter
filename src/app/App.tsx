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
import { colors } from '@/shared/styles';

// Set up a top-level container for our entire page
const AppContainer = styled.div`
  display: inline-block;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;

  background-color: ${colors.primaryWhite};
  overflow-y: auto;
  padding: 10px;
  border: 1px solid red;
`;

const PageContainer = styled.div`
  // Expand to full height and width
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;

  // Render as a flex column. Start at the top and horizontally center.
  display: inline-flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  // Relative positioning
  position: relative;
  border: 1px dotted black;
`;

const ReactiveContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 450px;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  margin: auto;
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
        <AppContainer>
          <PageContainer>
            <Outlet />
          </PageContainer>
        </AppContainer>
      }
      errorElement={<BaseError />}
    >
      {/* Home Page */}
      <Route index element={<>Home Page</>} />

      {/* Login Page */}
      <Route
        path="login"
        element={
          <ReactiveContainer>
            <>Login Page</>
          </ReactiveContainer>
        }
      />

      {/* Dashboard Routes */}
      <Route
        path="dashboard"
        // loader={todosLoader}
        element={
          <ReactiveContainer>
            <div>Hello starter</div>
            <Outlet />
          </ReactiveContainer>
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
