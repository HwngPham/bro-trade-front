import { useState } from 'react'
import { DRAWER_TOP_ITEMS } from './constants'

export const useTrackActiveLink = () => {
  const [currentActiveLink, setCurrentActiveLink] = useState(
    DRAWER_TOP_ITEMS[0].label
  )

  const changeActiveLink = (label: string) => setCurrentActiveLink(label)

  return {
    currentActiveLink,
    changeActiveLink,
  }
}
