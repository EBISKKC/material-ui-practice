'use client';

import React, { useState } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  Switch,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  Box,
  Stack,
  FormGroup,
} from '@mui/material';

export default function FormControlsExample() {
  const [age, setAge] = useState('');

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        フォームコントロール
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Radio、Checkbox、Switch、Selectなどのフォームコントロールコンポーネント
      </Typography>

      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Radio Button
          </Typography>
          <FormControl>
            <FormLabel>性別</FormLabel>
            <RadioGroup defaultValue="male">
              <FormControlLabel value="male" control={<Radio />} label="男性" />
              <FormControlLabel value="female" control={<Radio />} label="女性" />
              <FormControlLabel value="other" control={<Radio />} label="その他" />
            </RadioGroup>
          </FormControl>

          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
              色のバリエーション
            </Typography>
            <RadioGroup row defaultValue="primary">
              <FormControlLabel
                value="primary"
                control={<Radio color="primary" />}
                label="Primary"
              />
              <FormControlLabel
                value="secondary"
                control={<Radio color="secondary" />}
                label="Secondary"
              />
              <FormControlLabel
                value="success"
                control={<Radio color="success" />}
                label="Success"
              />
              <FormControlLabel
                value="error"
                control={<Radio color="error" />}
                label="Error"
              />
            </RadioGroup>
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Checkbox
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="選択済み" />
            <FormControlLabel control={<Checkbox />} label="未選択" />
            <FormControlLabel control={<Checkbox disabled />} label="無効化" />
            <FormControlLabel control={<Checkbox disabled checked />} label="無効化（選択済み）" />
          </FormGroup>

          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
              色のバリエーション
            </Typography>
            <Stack direction="row" spacing={1}>
              <FormControlLabel
                control={<Checkbox defaultChecked color="primary" />}
                label="Primary"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked color="secondary" />}
                label="Secondary"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked color="success" />}
                label="Success"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked color="error" />}
                label="Error"
              />
            </Stack>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
              複数選択の例
            </Typography>
            <FormControl component="fieldset">
              <FormLabel component="legend">興味のあるトピック</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="テクノロジー"
                />
                <FormControlLabel control={<Checkbox />} label="スポーツ" />
                <FormControlLabel control={<Checkbox />} label="音楽" />
                <FormControlLabel control={<Checkbox />} label="旅行" />
              </FormGroup>
            </FormControl>
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Switch
          </Typography>
          <Stack spacing={1}>
            <FormControlLabel control={<Switch defaultChecked />} label="オン" />
            <FormControlLabel control={<Switch />} label="オフ" />
            <FormControlLabel control={<Switch disabled />} label="無効化" />
            <FormControlLabel control={<Switch disabled checked />} label="無効化（オン）" />
          </Stack>

          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
              色のバリエーション
            </Typography>
            <Stack direction="row" spacing={1}>
              <FormControlLabel
                control={<Switch defaultChecked color="primary" />}
                label="Primary"
              />
              <FormControlLabel
                control={<Switch defaultChecked color="secondary" />}
                label="Secondary"
              />
              <FormControlLabel
                control={<Switch defaultChecked color="success" />}
                label="Success"
              />
              <FormControlLabel
                control={<Switch defaultChecked color="error" />}
                label="Error"
              />
            </Stack>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
              設定の例
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="通知を有効にする"
              />
              <FormControlLabel control={<Switch />} label="ダークモード" />
              <FormControlLabel control={<Switch />} label="自動保存" />
            </FormGroup>
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Select
          </Typography>
          <Stack spacing={3} sx={{ maxWidth: 300 }}>
            <FormControl fullWidth>
              <InputLabel>年齢</InputLabel>
              <Select
                value={age}
                label="年齢"
                onChange={(e) => setAge(e.target.value)}
              >
                <MenuItem value={10}>10代</MenuItem>
                <MenuItem value={20}>20代</MenuItem>
                <MenuItem value={30}>30代</MenuItem>
                <MenuItem value={40}>40代</MenuItem>
                <MenuItem value={50}>50代以上</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>国</InputLabel>
              <Select label="国" defaultValue="jp">
                <MenuItem value="jp">日本</MenuItem>
                <MenuItem value="us">アメリカ</MenuItem>
                <MenuItem value="uk">イギリス</MenuItem>
                <MenuItem value="cn">中国</MenuItem>
                <MenuItem value="kr">韓国</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth variant="filled">
              <InputLabel>言語</InputLabel>
              <Select label="言語" defaultValue="ja">
                <MenuItem value="ja">日本語</MenuItem>
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="zh">中文</MenuItem>
                <MenuItem value="ko">한국어</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth disabled>
              <InputLabel>無効化</InputLabel>
              <Select label="無効化" defaultValue="">
                <MenuItem value="">選択してください</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
