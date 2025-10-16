'use client';

import React, { useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
  Typography,
  Divider,
  ListSubheader,
} from '@mui/material';
import {
  SmartButton,
  TableChart,
  CreditCard,
  TextFields,
  Style,
  MoreVert,
  Close,
} from '@mui/icons-material';

interface BottomNavProps {
  selectedComponent: string;
  onSelectComponent: (component: string) => void;
}

const mainNavItems = [
  { id: 'button', label: 'Button', icon: <SmartButton /> },
  { id: 'table', label: 'Table', icon: <TableChart /> },
  { id: 'card', label: 'Card', icon: <CreditCard /> },
  { id: 'textfield', label: 'TextField', icon: <TextFields /> },
];

const allMenuItems = {
  basic: [
    { id: 'button', label: 'Button', icon: <SmartButton /> },
    { id: 'table', label: 'Table', icon: <TableChart /> },
    { id: 'card', label: 'Card', icon: <CreditCard /> },
    { id: 'textfield', label: 'TextField', icon: <TextFields /> },
    { id: 'radio', label: 'Radio' },
    { id: 'checkbox', label: 'Checkbox' },
    { id: 'switch', label: 'Switch' },
    { id: 'select', label: 'Select' },
  ],
  layout: [
    { id: 'grid', label: 'Grid & Layout' },
  ],
  feedback: [
    { id: 'modal', label: 'Modal' },
    { id: 'dialog', label: 'Dialog' },
    { id: 'snackbar', label: 'Snackbar & Alert' },
  ],
  learning: [
    { id: 'css', label: 'CSS基本', icon: <Style /> },
    { id: 'tailwind', label: 'Tailwind基本' },
  ],
};

export default function BottomNav({ selectedComponent, onSelectComponent }: BottomNavProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavChange = (event: React.SyntheticEvent, newValue: string) => {
    if (newValue === 'more') {
      setDrawerOpen(true);
    } else {
      onSelectComponent(newValue);
    }
  };

  const handleMenuItemClick = (id: string) => {
    onSelectComponent(id);
    setDrawerOpen(false);
  };

  return (
    <>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: { xs: 'block', sm: 'none' },
        }}
        elevation={3}
      >
        <BottomNavigation
          value={selectedComponent}
          onChange={handleNavChange}
          showLabels
        >
          {mainNavItems.map((item) => (
            <BottomNavigationAction
              key={item.id}
              value={item.id}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <BottomNavigationAction
            value="more"
            label="その他"
            icon={<MoreVert />}
          />
        </BottomNavigation>
      </Paper>

      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            maxHeight: '80vh',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">すべてのコンポーネント</Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ overflow: 'auto', pb: 2 }}>
          <List subheader={<ListSubheader>基本コンポーネント</ListSubheader>}>
            {allMenuItems.basic.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  selected={selectedComponent === item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          <List subheader={<ListSubheader>レイアウト</ListSubheader>}>
            {allMenuItems.layout.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  selected={selectedComponent === item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          <List subheader={<ListSubheader>フィードバック</ListSubheader>}>
            {allMenuItems.feedback.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  selected={selectedComponent === item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          <List subheader={<ListSubheader>学習</ListSubheader>}>
            {allMenuItems.learning.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  selected={selectedComponent === item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
