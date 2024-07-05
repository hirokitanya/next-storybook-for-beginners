'use client';

import { Dashboard, People } from '@mui/icons-material';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { List } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <List component="nav">
      <ListItemButton component={NextLink} href="/dashboard" selected={pathname === '/dashboard'}>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'}>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Costomers" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integreation" />
      </ListItemButton>
    </List>
  );
}
