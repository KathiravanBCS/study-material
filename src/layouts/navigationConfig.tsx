import { Book, Code } from 'tabler-icons-react'

export interface NavItem {
  label: string
  path?: string
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
    label: 'Hooks',
    icon: <Code size={20} />,
    path: '/hooks',
    children: [
      {
        label: 'Overview',
        path: '/hooks'
      },
      {
        label: 'Complete Guide',
        path: '/hooks/theory'
      },
      {
        label: 'Component Lifecycle',
        path: '/hooks/lifecycle'
      },
      {
        label: 'Props & Props Drilling',
        path: '/hooks/props-drilling'
      }
    ]
  },
  {
    label: 'Functional Programming',
    icon: <Code size={20} />,
    children: [
      {
        label: 'Pure Functions',
        path: '/functional/pure-functions'
      },
      {
        label: 'Side Effects',
        path: '/functional/side-effects'
      },
      {
        label: 'Immutability',
        path: '/functional/immutability'
      },
      {
        label: 'Higher Order Functions',
        path: '/functional/higher-order-functions'
      },
      {
        label: 'Currying & Composition',
        path: '/functional/currying-composition'
      }
    ]
  }
]
