import React from 'react'
import { FiHome, FiBook, FiUsers, FiArchive, FiBell } from 'react-icons/fi'

export interface DrawerItem {
  label: string
  url: string
  icon: React.ReactNode
}

export const DRAWER_WIDTH = 300
export const DRAWER_TOP_ITEMS: DrawerItem[] = [
  {
    label: 'My Spending',
    url: '/',
    icon: <FiHome />,
  },
  {
    label: 'My Trades',
    url: '/personal-trades',
    icon: <FiBook />,
  },
  {
    label: 'Public Trades',
    url: '/public-trade',
    icon: <FiUsers />,
  },
  {
    label: 'Summary',
    url: '/report',
    icon: <FiArchive />,
  },
  {
    label: 'Notifications',
    url: '/notifications',
    icon: <FiBell />,
  },
]
export const DRAWER_BOTTOM_ITEMS: DrawerItem[] = [
  {
    label: 'Edit Profile',
    url: '/profile',
    icon: 'edit profile icon',
  },
  {
    label: 'Logout',
    url: '/logout',
    icon: 'log out icon',
  },
]
