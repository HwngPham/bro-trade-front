import {
  Divider,
  Drawer as MDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import { Link } from 'react-router-dom'
import {
  DrawerItem,
  DRAWER_BOTTOM_ITEMS,
  DRAWER_TOP_ITEMS,
  DRAWER_WIDTH,
} from './constants'
import { useTrackActiveLink } from './hooks'

export const Drawer = () => {
  const renderNavigateItem = (item: DrawerItem) => (
    <NavigateItem
      key={item.label}
      url={item.url}
      label={item.label}
      icon={item.icon}
    />
  )

  return (
    <MDrawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />

      <List>{DRAWER_TOP_ITEMS.map(renderNavigateItem)}</List>
      <List>{DRAWER_BOTTOM_ITEMS.map(renderNavigateItem)}</List>
    </MDrawer>
  )
}

const NavigateItem: React.FC<DrawerItem> = ({ url, label, icon }) => {
  const { currentActiveLink, changeActiveLink } = useTrackActiveLink()

  return (
    <Link to={url} onClick={() => changeActiveLink(label)}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
      <Divider />
    </Link>
  )
}
