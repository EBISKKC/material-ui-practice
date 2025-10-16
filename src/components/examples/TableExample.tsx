'use client';

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Stack,
  Chip,
} from '@mui/material';

interface Data {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const rows: Data[] = [
  { id: 1, name: '山田 太郎', email: 'yamada@example.com', role: '管理者', status: 'active' },
  { id: 2, name: '佐藤 花子', email: 'sato@example.com', role: 'エディター', status: 'active' },
  { id: 3, name: '鈴木 一郎', email: 'suzuki@example.com', role: 'ビューアー', status: 'inactive' },
  { id: 4, name: '田中 美咲', email: 'tanaka@example.com', role: 'エディター', status: 'active' },
  { id: 5, name: '伊藤 健太', email: 'ito@example.com', role: 'ビューアー', status: 'active' },
];

export default function TableExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Table
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Tableコンポーネントは、データを整理して表示するために使用されます。
      </Typography>

      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" gutterBottom>
            基本的なテーブル
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>名前</TableCell>
                  <TableCell>メール</TableCell>
                  <TableCell>役割</TableCell>
                  <TableCell>ステータス</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.status === 'active' ? 'アクティブ' : '非アクティブ'}
                        color={row.status === 'active' ? 'success' : 'default'}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            ホバー効果付きテーブル
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>商品名</TableCell>
                  <TableCell align="right">価格</TableCell>
                  <TableCell align="right">在庫</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover>
                  <TableCell>ノートパソコン</TableCell>
                  <TableCell align="right">¥120,000</TableCell>
                  <TableCell align="right">15</TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell>マウス</TableCell>
                  <TableCell align="right">¥3,500</TableCell>
                  <TableCell align="right">50</TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell>キーボード</TableCell>
                  <TableCell align="right">¥8,000</TableCell>
                  <TableCell align="right">30</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </Box>
  );
}
