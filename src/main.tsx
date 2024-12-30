import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import './index.css';
import DashboardLayout from './layouts/dashboard.layout.tsx';
import BearPage from './pages/dashboard/bear.page.tsx';
import { DashboardPage } from './pages/dashboard/dashboard.page.tsx';
import { JiraPage } from './pages/dashboard/jira-page.tsx';
import { PersonPage } from './pages/dashboard/person.page.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='dashboard' element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path='bear' element={<BearPage />} />
          <Route path='person' element={<PersonPage />} />
          <Route path='tasks' element={<JiraPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
