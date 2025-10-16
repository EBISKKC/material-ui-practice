'use client';

import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Box,
  Stack,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff, AccountCircle, Email } from '@mui/icons-material';

export default function TextFieldExample() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        TextField
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        TextFieldコンポーネントは、ユーザーからテキスト入力を受け取るために使用されます。
      </Typography>

      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" gutterBottom>
            基本的なTextField
          </Typography>
          <Stack spacing={2} sx={{ maxWidth: 400 }}>
            <TextField label="標準" variant="outlined" />
            <TextField label="フィルド" variant="filled" />
            <TextField label="スタンダード" variant="standard" />
          </Stack>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            必須項目とヘルパーテキスト
          </Typography>
          <Stack spacing={2} sx={{ maxWidth: 400 }}>
            <TextField
              required
              label="必須項目"
              helperText="この項目は必須です"
            />
            <TextField
              label="メールアドレス"
              type="email"
              helperText="例: user@example.com"
            />
            <TextField
              error
              label="エラー"
              defaultValue="無効な入力"
              helperText="エラーが発生しました"
            />
          </Stack>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            パスワードフィールド
          </Typography>
          <Stack spacing={2} sx={{ maxWidth: 400 }}>
            <TextField
              label="パスワード"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            アイコン付きTextField
          </Typography>
          <Stack spacing={2} sx={{ maxWidth: 400 }}>
            <TextField
              label="ユーザー名"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="メールアドレス"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            サイズバリエーション
          </Typography>
          <Stack spacing={2} sx={{ maxWidth: 400 }}>
            <TextField label="Small" size="small" />
            <TextField label="Medium" size="medium" />
          </Stack>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            複数行テキスト
          </Typography>
          <Stack spacing={2} sx={{ maxWidth: 400 }}>
            <TextField
              label="メッセージ"
              multiline
              rows={4}
              placeholder="メッセージを入力してください"
            />
            <TextField
              label="自動サイズ調整"
              multiline
              maxRows={4}
              placeholder="入力すると自動的にサイズが調整されます"
            />
          </Stack>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            無効化と読み取り専用
          </Typography>
          <Stack spacing={2} sx={{ maxWidth: 400 }}>
            <TextField label="無効化" disabled defaultValue="編集できません" />
            <TextField
              label="読み取り専用"
              defaultValue="読み取り専用です"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
