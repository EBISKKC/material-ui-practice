'use client';

import React from 'react';
import { Box, Typography, Paper, Stack, Divider } from '@mui/material';

export default function CSSBasicsExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        CSS基本
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Material UIのsxプロップを使った基本的なCSSスタイリング
      </Typography>

      <Stack spacing={4}>
        {/* マージンとパディング */}
        <Box>
          <Typography variant="h6" gutterBottom>
            マージン（margin）とパディング（padding）
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  padding (p) - 内側の余白
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
                  <Paper sx={{ p: 1, bgcolor: 'primary.main', color: 'white' }}>
                    p: 1 (8px)
                  </Paper>
                  <Paper sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
                    p: 2 (16px)
                  </Paper>
                  <Paper sx={{ p: 3, bgcolor: 'primary.main', color: 'white' }}>
                    p: 3 (24px)
                  </Paper>
                  <Paper sx={{ p: 4, bgcolor: 'primary.main', color: 'white' }}>
                    p: 4 (32px)
                  </Paper>
                </Stack>
              </Box>

              <Divider />

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  方向別のpadding
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
                  <Paper sx={{ pt: 3, bgcolor: 'secondary.main', color: 'white' }}>
                    pt: 3 (上)
                  </Paper>
                  <Paper sx={{ pb: 3, bgcolor: 'secondary.main', color: 'white' }}>
                    pb: 3 (下)
                  </Paper>
                  <Paper sx={{ pl: 3, bgcolor: 'secondary.main', color: 'white' }}>
                    pl: 3 (左)
                  </Paper>
                  <Paper sx={{ pr: 3, bgcolor: 'secondary.main', color: 'white' }}>
                    pr: 3 (右)
                  </Paper>
                  <Paper sx={{ px: 3, py: 1, bgcolor: 'secondary.main', color: 'white' }}>
                    px: 3, py: 1 (横・縦)
                  </Paper>
                </Stack>
              </Box>

              <Divider />

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  margin (m) - 外側の余白
                </Typography>
                <Box sx={{ bgcolor: 'grey.200', p: 2 }}>
                  <Stack spacing={0}>
                    <Paper sx={{ m: 1, p: 1, bgcolor: 'success.main', color: 'white' }}>
                      m: 1
                    </Paper>
                    <Paper sx={{ m: 2, p: 1, bgcolor: 'success.main', color: 'white' }}>
                      m: 2
                    </Paper>
                    <Paper sx={{ mt: 3, p: 1, bgcolor: 'success.main', color: 'white' }}>
                      mt: 3 (上マージン)
                    </Paper>
                    <Paper sx={{ mb: 3, p: 1, bgcolor: 'success.main', color: 'white' }}>
                      mb: 3 (下マージン)
                    </Paper>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Paper>
        </Box>

        {/* 幅と高さ */}
        <Box>
          <Typography variant="h6" gutterBottom>
            幅（width）と高さ（height）
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  固定サイズ（ピクセル）
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Paper sx={{ width: 100, height: 60, bgcolor: 'info.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    100x60px
                  </Paper>
                  <Paper sx={{ width: 150, height: 80, bgcolor: 'info.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    150x80px
                  </Paper>
                </Stack>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  パーセンテージ
                </Typography>
                <Paper sx={{ width: '50%', height: 60, bgcolor: 'warning.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  width: 50%
                </Paper>
                <Paper sx={{ width: '100%', height: 60, mt: 1, bgcolor: 'warning.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  width: 100%
                </Paper>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  最大・最小サイズ
                </Typography>
                <Paper sx={{ maxWidth: 300, p: 2, bgcolor: 'error.light', color: 'white' }}>
                  maxWidth: 300 - このボックスは最大300pxまでしか広がりません
                </Paper>
              </Box>
            </Stack>
          </Paper>
        </Box>

        {/* ボーダー */}
        <Box>
          <Typography variant="h6" gutterBottom>
            ボーダー（border）
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <Stack spacing={2}>
              <Paper sx={{ p: 2, border: 1, borderColor: 'grey.400' }}>
                border: 1（デフォルト）
              </Paper>
              <Paper sx={{ p: 2, border: 2, borderColor: 'primary.main' }}>
                border: 2, borderColor: 'primary.main'
              </Paper>
              <Paper sx={{ p: 2, borderTop: 3, borderColor: 'success.main' }}>
                borderTop: 3（上のみ）
              </Paper>
              <Paper sx={{ p: 2, borderRadius: 2, border: 1, borderColor: 'grey.400' }}>
                borderRadius: 2（角丸）
              </Paper>
              <Paper sx={{ p: 2, borderRadius: '50%', width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 1, borderColor: 'grey.400' }}>
                円形
              </Paper>
            </Stack>
          </Paper>
        </Box>

        {/* フォント */}
        <Box>
          <Typography variant="h6" gutterBottom>
            フォント
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <Stack spacing={2}>
              <Typography sx={{ fontSize: 12 }}>fontSize: 12</Typography>
              <Typography sx={{ fontSize: 16 }}>fontSize: 16（デフォルト）</Typography>
              <Typography sx={{ fontSize: 20 }}>fontSize: 20</Typography>
              <Typography sx={{ fontWeight: 'light' }}>fontWeight: light</Typography>
              <Typography sx={{ fontWeight: 'regular' }}>fontWeight: regular</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>fontWeight: bold</Typography>
              <Typography sx={{ fontStyle: 'italic' }}>fontStyle: italic</Typography>
              <Typography sx={{ textAlign: 'left' }}>textAlign: left</Typography>
              <Typography sx={{ textAlign: 'center' }}>textAlign: center</Typography>
              <Typography sx={{ textAlign: 'right' }}>textAlign: right</Typography>
            </Stack>
          </Paper>
        </Box>

        {/* 色 */}
        <Box>
          <Typography variant="h6" gutterBottom>
            色（color & background）
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <Stack spacing={2}>
              <Paper sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
                bgcolor: 'primary.main', color: 'white'
              </Paper>
              <Paper sx={{ p: 2, bgcolor: 'secondary.main', color: 'white' }}>
                bgcolor: 'secondary.main'
              </Paper>
              <Paper sx={{ p: 2, bgcolor: 'success.light', color: 'success.dark' }}>
                bgcolor: 'success.light', color: 'success.dark'
              </Paper>
              <Paper sx={{ p: 2, bgcolor: '#f0f0f0', color: '#333' }}>
                bgcolor: '#f0f0f0', color: '#333'（カスタムカラー）
              </Paper>
            </Stack>
          </Paper>
        </Box>

        {/* シャドウ */}
        <Box>
          <Typography variant="h6" gutterBottom>
            影（box-shadow）
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Paper sx={{ p: 2, boxShadow: 0 }}>shadow: 0</Paper>
              <Paper sx={{ p: 2, boxShadow: 1 }}>shadow: 1</Paper>
              <Paper sx={{ p: 2, boxShadow: 2 }}>shadow: 2</Paper>
              <Paper sx={{ p: 2, boxShadow: 3 }}>shadow: 3</Paper>
              <Paper sx={{ p: 2, boxShadow: 5 }}>shadow: 5</Paper>
              <Paper sx={{ p: 2, boxShadow: 10 }}>shadow: 10</Paper>
            </Stack>
          </Paper>
        </Box>

        {/* Display & Flexbox */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Display & Flexbox
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  display: flex, justifyContent
                </Typography>
                <Paper sx={{ p: 2, display: 'flex', justifyContent: 'flex-start', gap: 1, mb: 1 }}>
                  <Box sx={{ p: 1, bgcolor: 'primary.main', color: 'white' }}>A</Box>
                  <Box sx={{ p: 1, bgcolor: 'primary.main', color: 'white' }}>B</Box>
                  <Box sx={{ p: 1, bgcolor: 'primary.main', color: 'white' }}>C</Box>
                  <Typography sx={{ ml: 2 }}>← justifyContent: 'flex-start'</Typography>
                </Paper>
                <Paper sx={{ p: 2, display: 'flex', justifyContent: 'center', gap: 1, mb: 1 }}>
                  <Box sx={{ p: 1, bgcolor: 'secondary.main', color: 'white' }}>A</Box>
                  <Box sx={{ p: 1, bgcolor: 'secondary.main', color: 'white' }}>B</Box>
                  <Box sx={{ p: 1, bgcolor: 'secondary.main', color: 'white' }}>C</Box>
                  <Typography sx={{ ml: 2 }}>← justifyContent: 'center'</Typography>
                </Paper>
                <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                  <Box sx={{ p: 1, bgcolor: 'success.main', color: 'white' }}>A</Box>
                  <Box sx={{ p: 1, bgcolor: 'success.main', color: 'white' }}>B</Box>
                  <Box sx={{ p: 1, bgcolor: 'success.main', color: 'white' }}>C</Box>
                  <Typography>← justifyContent: 'space-between'</Typography>
                </Paper>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  alignItems（垂直方向の配置）
                </Typography>
                <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', height: 100, gap: 1 }}>
                  <Box sx={{ p: 1, bgcolor: 'info.main', color: 'white', height: 30 }}>小</Box>
                  <Box sx={{ p: 1, bgcolor: 'info.main', color: 'white', height: 50 }}>中</Box>
                  <Box sx={{ p: 1, bgcolor: 'info.main', color: 'white', height: 70 }}>大</Box>
                  <Typography>← alignItems: 'center'</Typography>
                </Paper>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
}
