import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const EventsPage = lazy(() => import('../pages/events/page'));
const MediaPage = lazy(() => import('../pages/media/page'));
const GivingPage = lazy(() => import('../pages/giving/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const LeadPastorStoryPage = lazy(() => import('../pages/lead-pastor-story/page'));
const LeadershipProfilePage = lazy(() => import('../pages/leadership/[slug]/page'));
const ItemsDonationPage = lazy(() => import('../pages/giving/items-donation/page'));
const VolunteerPage = lazy(() => import('../pages/giving/volunteer/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/events',
    element: <EventsPage />,
  },
  {
    path: '/media',
    element: <MediaPage />,
  },
  {
    path: '/giving',
    element: <GivingPage />,
  },
  {
    path: '/giving/items-donation',
    element: <ItemsDonationPage />,
  },
  {
    path: '/giving/volunteer',
    element: <VolunteerPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/lead-pastor-story',
    element: <LeadPastorStoryPage />,
  },
  {
    path: '/leadership/:slug',
    element: <LeadershipProfilePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;