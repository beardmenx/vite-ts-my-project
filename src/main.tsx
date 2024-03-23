import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar.tsx';
import { Dialogs } from './components/Dialogs/Dialogs.tsx';
import { Profile } from './components/Profile/Profile.tsx';
import { News } from './components/News/News.tsx';
import { Books } from './components/Books/Books.tsx';
import { Todolist } from './components/Todolist/Todolist.tsx';
import { Settings } from './components/Settings/Settings.tsx';
import { EnglishCards } from './components/EnglishCards/EnglishCards.tsx';
import { v1 } from 'uuid';
import { ComputerCards } from './components/EnglishCards/ComputerCards/ComputerCards.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/dialogs',
        element: <Dialogs />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/books',
        element: <Books />,
      },
      {
        path: '/todolist',
        element: <Todolist />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/englishCard',
        element: <EnglishCards />,
      },
      {
        path: '/englishCategoryCard/:id',
        element: <ComputerCards />, // сделать карточку и потом вставить ее путь !! пока что это заглушка
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
