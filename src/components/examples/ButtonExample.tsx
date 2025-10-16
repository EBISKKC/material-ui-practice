'use client';

import React from 'react';
import { Button, Stack, Typography, Box } from '@mui/material';
import { Delete, Send } from '@mui/icons-material';

export default function ButtonExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Button
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Buttonコンポーネントは、ユーザーがアクションを実行できるようにします。
      </Typography>

      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" gutterBottom>
            基本的なボタン
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            色のバリエーション
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
            <Button variant="contained" color="warning">
              Warning
            </Button>
            <Button variant="contained" color="info">
              Info
            </Button>
          </Stack>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            サイズ
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button size="small" variant="contained">
              Small
            </Button>
            <Button size="medium" variant="contained">
              Medium
            </Button>
            <Button size="large" variant="contained">
              Large
            </Button>
          </Stack>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            アイコン付きボタン
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" startIcon={<Send />}>
              Send
            </Button>
            <Button variant="contained" endIcon={<Delete />} color="error">
              Delete
            </Button>
          </Stack>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            無効化されたボタン
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" disabled>
              Disabled
            </Button>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
