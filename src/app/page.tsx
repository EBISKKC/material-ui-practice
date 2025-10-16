'use client';

import { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';
import Sidebar from '@/components/Sidebar';
import BottomNav from '@/components/BottomNav';
import ButtonExample from '@/components/examples/ButtonExample';
import TableExample from '@/components/examples/TableExample';
import CardExample from '@/components/examples/CardExample';
import TextFieldExample from '@/components/examples/TextFieldExample';
import FormControlsExample from '@/components/examples/FormControlsExample';
import GridExample from '@/components/examples/GridExample';
import ModalExample from '@/components/examples/ModalExample';
import DialogExample from '@/components/examples/DialogExample';
import SnackbarExample from '@/components/examples/SnackbarExample';
import CSSBasicsExample from '@/components/examples/CSSBasicsExample';
import TailwindBasicsExample from '@/components/examples/TailwindBasicsExample';

const drawerWidth = 240;

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState('button');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'button':
        return <ButtonExample />;
      case 'table':
        return <TableExample />;
      case 'card':
        return <CardExample />;
      case 'textfield':
        return <TextFieldExample />;
      case 'radio':
      case 'checkbox':
      case 'switch':
      case 'select':
        return <FormControlsExample />;
      case 'grid':
        return <GridExample />;
      case 'modal':
        return <ModalExample />;
      case 'dialog':
        return <DialogExample />;
      case 'snackbar':
        return <SnackbarExample />;
      case 'css':
        return <CSSBasicsExample />;
      case 'tailwind':
        return <TailwindBasicsExample />;
      default:
        return <ButtonExample />;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Material UI コンポーネント練習
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar
        selectedComponent={selectedComponent}
        onSelectComponent={setSelectedComponent}
      />
      <BottomNav
        selectedComponent={selectedComponent}
        onSelectComponent={setSelectedComponent}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          mt: 8,
          mb: { xs: 7, sm: 0 },
        }}
      >
        {renderComponent()}
      </Box>
    </Box>
  );
}
