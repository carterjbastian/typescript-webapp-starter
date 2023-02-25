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
import { Button } from 'pay-component-library';

// Import Components
import Header from '@/pages/plan/Header';

// Import pages
import PlanPage from '@/pages/plan/PlanPage';

// Set up a top-level container for our entire page
const AppContainer = styled.div`
  display: inline-block;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;

  background-color: ${colors.bodyWhite};
  overflow-y: auto;
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
`;

const ContentContainer = styled.div`
  height: fit-content;
  min-height: fit-content;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

interface StarterProps {
  height: string;
}
const ContentStarter = styled.div<StarterProps>`
  background-color: ${colors.primaryGreen};
  width: 100%;
  height: ${(p) => p.height};
  min-height: ${(p) => p.height};
`;

interface PullupProps {
  pullUp: string;
}
const ReactiveContainer = styled.div<PullupProps>`
  width: 100%;
  min-height: 450px;
  max-width: 600px;

  position: relative;
  top: ${(p) => p.pullUp};
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  border: 1px dashed blue;
`;

const ContentMain = styled.div`
  display: inline-block;
  width: 100%;

  border: 1px solid red;
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
            {/* Header */}
            <Header />
            {/* Content */}
            <Outlet />
            {/* Footer */}
            <div>hello</div>
          </PageContainer>
        </AppContainer>
      }
      errorElement={<BaseError />}
    >
      {/* Home Page */}
      <Route
        index
        element={
          <ContentContainer>
            <ContentStarter height="600px" />
            <ContentMain>
              <ReactiveContainer pullUp="-300px">
                <>Home Page</>
                <Button text="Hello world" />
              </ReactiveContainer>
            </ContentMain>
          </ContentContainer>
        }
      />

      {/* Dashboard Routes */}
      <Route
        path="plan"
        // loader={todosLoader}
        element={
          <ReactiveContainer pullUp="0">
            <Outlet />
          </ReactiveContainer>
        }
      >
        <Route index element={<>Dashboard Index</>} />
        <Route path=":planId" element={<PlanPage />} />
      </Route>
    </Route>
  )
);

const Fallback = () => <div>Loading...</div>;

export default function App() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />;
}
