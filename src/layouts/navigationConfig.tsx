import { Book, Code, BrandReact, Book2, Rocket, MathFunction, School, GitFork, Refresh, Anchor } from 'tabler-icons-react'

export interface NavItem {
  label: string
  path?: string
  icon?: React.ReactNode
  children?: NavItem[]
}

export interface NavLink extends NavItem {
  icon: React.ReactNode
}

export const navigationData: NavLink[] = [
  {
    label: 'Introduction',
    icon: <Book size={20} />,
    path: '/introduction'
  },
  {
    label: 'JavaScript',
    icon: <Code size={20} />,
    children: [
      {
        label: 'Basics',
        icon: <Book2 size={18} />,
        children: [
          { label: 'Introduction', path: '/javascript/basics/intro' },
          { label: 'Variables', path: '/javascript/basics/variables' },
          { label: 'Data Types', path: '/javascript/basics/datatypes' },
          { label: 'Operators', path: '/javascript/basics/operators' },
          { label: 'Control Flow', path: '/javascript/basics/control' },
          { label: 'Loops', path: '/javascript/basics/loops' },
          { label: 'Functions', path: '/javascript/basics/functions' },
          { label: 'Scope', path: '/javascript/basics/scope' },
          { label: 'Error Handling', path: '/javascript/basics/error' },
          { label: 'Closures', path: '/javascript/basics/closures' }
        ]
      },
      {
        label: 'Advanced',
        icon: <Rocket size={18} />,
        children: [
          { label: 'Overview', path: '/javascript/advanced/intro' },
          { label: 'Functions', path: '/javascript/advanced/functions' },
          { label: 'Closures', path: '/javascript/advanced/closures' },
          { label: 'Objects', path: '/javascript/advanced/objects' },
          { label: 'Array Methods', path: '/javascript/advanced/arrayMethods' },
          { label: 'Destructuring', path: '/javascript/advanced/destructuring' },
          { label: 'Spread & Rest', path: '/javascript/advanced/spreadRest' },
          { label: 'Shorthand', path: '/javascript/advanced/shorthand' }
        ]
      },
      {
        label: 'Functional Programming',
        icon: <MathFunction size={18} />,
        children: [
          { label: 'Pure Functions', path: '/functional/pure-functions' },
          { label: 'Side Effects', path: '/functional/side-effects' },
          { label: 'Immutability', path: '/functional/immutability' },
          { label: 'Higher Order Functions', path: '/functional/higher-order-functions' },
          { label: 'Currying & Composition', path: '/functional/currying-composition' }
        ]
      }
    ]
  },
  {
    label: 'React',
    icon: <BrandReact size={20} />,
    children: [
      {
        label: 'Basics',
        icon: <School size={18} />,
        children: [
          { label: 'Introduction', path: '/react/basics/intro' },
          { label: 'History', path: '/react/basics/history' },
          { label: 'Component Types', path: '/react/basics/components' },
          { label: 'Single Page Application', path: '/react/basics/spa' },
          { label: 'DOM vs Virtual DOM', path: '/react/basics/dom' },
          { label: 'Environment Setup', path: '/react/basics/setup' },
          { label: 'Folder Structure', path: '/react/basics/structure' },
          { label: 'Import & Export', path: '/react/basics/importexport' },
          { label: 'Expressions', path: '/react/basics/expressions' },
          { label: 'Styles in React', path: '/react/basics/styles' }
        ]
      },
      {
        label: 'Props & Props Drilling',
        icon: <GitFork size={18} />,
        path: '/hooks/props-drilling'
      },
      {
        label: 'Component Lifecycle',
        icon: <Refresh size={18} />,
        path: '/hooks/lifecycle'
      },
      {
        label: 'Hooks',
        icon: <Anchor size={18} />,
        children: [
          { label: 'Overview', path: '/hooks' },
          { label: 'Hooks Complete Guide', path: '/hooks/theory' }
        ]
      }
    ]
  }
]
