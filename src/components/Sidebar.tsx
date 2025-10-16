'use client';

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Divider,
  ListSubheader,
} from '@mui/material';
import {
  SmartButton,
  TableChart,
  CreditCard,
  TextFields,
  RadioButtonChecked, Style,
  Dashboard,
  OpenInNew,
  Chat,
  Notifications,
  GridOn
} from '@mui/icons-material';

const drawerWidth = 240;

interface SidebarProps {
  selectedComponent: string;
  onSelectComponent: (component: string) => void;
}

const menuItems = [
  { id: 'button', label: 'Button', icon: <SmartButton /> },
  { id: 'table', label: 'Table', icon: <TableChart /> },
  { id: 'card', label: 'Card', icon: <CreditCard /> },
  { id: 'textfield', label: 'TextField', icon: <TextFields /> },
  { id: 'radio', label: 'Radio', icon: <RadioButtonChecked /> },
];

const layoutItems = [
  { id: 'grid', label: 'Grid & Layout', icon: <GridOn /> },
];

const feedbackItems = [
  { id: 'modal', label: 'Modal', icon: <OpenInNew /> },
  { id: 'dialog', label: 'Dialog', icon: <Chat /> },
  { id: 'snackbar', label: 'Snackbar & Alert', icon: <Notifications /> },
];

const learningItems = [
  { id: 'css', label: 'CSS基本', icon: <Style /> },
  { id: 'tailwind', label: 'Tailwind基本', icon: <Dashboard /> },
];

export default function Sidebar({ selectedComponent, onSelectComponent }: SidebarProps) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List subheader={<ListSubheader>基本コンポーネント</ListSubheader>}>
          {menuItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                selected={selectedComponent === item.id}
                onClick={() => onSelectComponent(item.id)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List subheader={<ListSubheader>レイアウト</ListSubheader>}>
          {layoutItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                selected={selectedComponent === item.id}
                onClick={() => onSelectComponent(item.id)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List subheader={<ListSubheader>フィードバック</ListSubheader>}>
          {feedbackItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                selected={selectedComponent === item.id}
                onClick={() => onSelectComponent(item.id)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List subheader={<ListSubheader>学習</ListSubheader>}>
          {learningItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                selected={selectedComponent === item.id}
                onClick={() => onSelectComponent(item.id)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
