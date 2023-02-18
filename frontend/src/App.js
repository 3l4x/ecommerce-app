import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import MainThemeProvider from './components/providers/ThemeProvider.js';
import { BaseLayout, MinimalLayout } from './components/layout/index.js';
import { baseLayoutRoutes, minimalLayoutRoutes } from './utils/layoutRoutes.js';
function App() {

  return (
    <MainThemeProvider>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
            {baseLayoutRoutes}
          </Route>
          <Route element={<MinimalLayout />}>
            {minimalLayoutRoutes}
          </Route>
        </Routes>
      </Router>
    </MainThemeProvider>
  );
}

export default App;
