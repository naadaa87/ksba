import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Industry from './pages/Industry';
import Standards from './pages/Standards';
import Certification from './pages/Certification';
import Education from './pages/Education';
import Members from './pages/Members';
import Projects from './pages/Projects';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/industry', element: <Industry /> },
      { path: '/standards', element: <Standards /> },
      { path: '/certification', element: <Certification /> },
      { path: '/education', element: <Education /> },
      { path: '/members', element: <Members /> },
      { path: '/projects', element: <Projects /> },
      { path: '/insights', element: <Insights /> },
      { path: '/contact', element: <Contact /> },
      { path: '/privacy', element: <Legal type="privacy" /> },
      { path: '/terms', element: <Legal type="terms" /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
