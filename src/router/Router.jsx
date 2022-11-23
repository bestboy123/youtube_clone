import React from 'react';
import { routers } from './mainrouter';
import { Route, Routes } from 'react-router-dom';
function Router() {
  return (
    <>
      <Routes>
        {routers.map((router) => (
          <Route
            key={router.id}
            path={router.path}
            element={<router.element />}
          />
        ))}
      </Routes>
    </>
  );
}

export default Router;
