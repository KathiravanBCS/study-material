import { createHashRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { Introduction } from './components/docs/Introduction'

//React
import { Hooks } from './features/react/hooks/ReactHooks'
import ComprehensiveReactHooks from './features/react/hooks/ComprehensiveReactHooks'
import ComponentLifecycle from './features/react/lifecycle/ComponentLifecycle'
import { PropsDrillingGuide } from './features/react/hooks/PropsDrillingGuide'
//React - Basics
import { ReactBasics } from './features/react/basics'
//JavaScript - Basics
import { JavaScriptBasics } from './features/javaScript/javaScriptBasics'
//JavaScript - Advanced
import { JavaScriptAdvanced } from './features/javaScript/javascriptAdvanced'
//JavaScript - Functional Programming
import {
  PureFunctions,
  SideEffects,
  Immutability,
  HigherOrderFunctions,
  CurryingAndComposition
} from './features/javaScript/functionalProgramming'


const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/introduction',
        element: <Introduction />,
      },
      {
        path: '/hooks',
        element: <Hooks />,
      },
      {
        path: '/hooks/theory',
        element: <ComprehensiveReactHooks />,
      },
      {
        path: '/hooks/lifecycle',
        element: <ComponentLifecycle />,
      },
      {
        path: '/hooks/props-drilling',
        element: <PropsDrillingGuide />,
      },
      // React Basics Routes
      {
        path: '/react/basics',
        element: <ReactBasics />,
      },
      {
        path: '/react/basics/:section',
        element: <ReactBasics />,
      },
      // JavaScript Basics Route
      {
        path: '/javascript/basics',
        element: <JavaScriptBasics />,
      },
      {
        path: '/javascript/basics/:section',
        element: <JavaScriptBasics />,
      },
      {
        path: '/javascript/advanced',
        element: <JavaScriptAdvanced />,
      },
      {
        path: '/javascript/advanced/:section',
        element: <JavaScriptAdvanced />,
      },
      // Functional Programming Routes
      {
        path: '/functional/pure-functions',
        element: <PureFunctions />,
      },
      {
        path: '/functional/side-effects',
        element: <SideEffects />,
      },
      {
        path: '/functional/immutability',
        element: <Immutability />,
      },
      {
        path: '/functional/higher-order-functions',
        element: <HigherOrderFunctions />,
      },
      {
        path: '/functional/currying-composition',
        element: <CurryingAndComposition />,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
