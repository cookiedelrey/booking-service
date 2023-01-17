import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MapPage from '../pages/MapPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import HotelsPage from '../pages/HotelsPage';
import HotelDetailsPage from '../pages/HotelDetailsPage';
import CartPage from '../pages/CartPage';
import AboutUsPage from '../pages/AboutUsPage';
import EditPage from '../pages/EditPage';
import AddHotelPage from '../pages/AddHotelPage';

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: '/', element: <HomePage />, id: 1 },
    { link: '/login', element: <SignInPage />, id: 2 },
    { link: '/signup', element: <SignUpPage />, id: 3 },
    { link: '/map', element: <MapPage />, id: 4 },
    { link: '/hotels', element: <HotelsPage />, id: 5 },
    { link: '/hotels/:id', element: <HotelDetailsPage />, id: 6 },
    { link: '/cart', element: <CartPage />, id: 7 },
    { link: '/about', element: <AboutUsPage />, id: 8 },
    { link: '/edit', element: <EditPage />, id: 9 },
    { link: '/add', element: <AddHotelPage />, id: 10 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
