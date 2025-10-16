'use client';

import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';

export default function TailwindBasicsExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Tailwind CSS 基本
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Tailwindで使用される基本的なユーティリティクラスの解説
      </Typography>

      <Stack spacing={4}>
        {/* スペーシング */}
        <Box>
          <Typography variant="h6" gutterBottom>
            スペーシング（Margin & Padding）
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Margin（m）- 外側の余白
                </Typography>
                <Box className="bg-gray-200 p-4">
                  <div className="m-0 p-2 bg-blue-500 text-white mb-2">m-0（マージンなし）</div>
                  <div className="m-1 p-2 bg-blue-500 text-white mb-2">m-1（4px）</div>
                  <div className="m-2 p-2 bg-blue-500 text-white mb-2">m-2（8px）</div>
                  <div className="m-4 p-2 bg-blue-500 text-white mb-2">m-4（16px）</div>
                  <div className="m-8 p-2 bg-blue-500 text-white">m-8（32px）</div>
                </Box>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  スケール: 0, 1=4px, 2=8px, 3=12px, 4=16px, 5=20px, 6=24px, 8=32px, 10=40px, 12=48px, 16=64px
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  方向別のMargin
                </Typography>
                <div className="bg-gray-200 p-4 space-y-2">
                  <div className="mt-4 p-2 bg-green-500 text-white">mt-4（上マージン）</div>
                  <div className="mb-4 p-2 bg-green-500 text-white">mb-4（下マージン）</div>
                  <div className="ml-8 p-2 bg-green-500 text-white">ml-8（左マージン）</div>
                  <div className="mr-8 p-2 bg-green-500 text-white">mr-8（右マージン）</div>
                  <div className="mx-8 p-2 bg-green-500 text-white">mx-8（左右マージン）</div>
                  <div className="my-4 p-2 bg-green-500 text-white">my-4（上下マージン）</div>
                </div>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Padding（p）- 内側の余白
                </Typography>
                <div className="space-y-2">
                  <div className="p-2 bg-purple-500 text-white">p-2（8px）</div>
                  <div className="p-4 bg-purple-500 text-white">p-4（16px）</div>
                  <div className="px-8 py-2 bg-purple-500 text-white">px-8 py-2（横32px 縦8px）</div>
                  <div className="pt-6 pb-2 px-4 bg-purple-500 text-white">pt-6 pb-2 px-4（個別指定）</div>
                </div>
              </Box>
            </Stack>
          </Paper>
        </Box>

        {/* サイズ */}
        <Box>
          <Typography variant="h6" gutterBottom>
            幅（Width）と高さ（Height）
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  幅（w-）
                </Typography>
                <div className="space-y-2">
                  <div className="w-32 h-8 bg-blue-400 text-white flex items-center justify-center">w-32（128px）</div>
                  <div className="w-64 h-8 bg-blue-400 text-white flex items-center justify-center">w-64（256px）</div>
                  <div className="w-1/2 h-8 bg-blue-400 text-white flex items-center justify-center">w-1/2（50%）</div>
                  <div className="w-3/4 h-8 bg-blue-400 text-white flex items-center justify-center">w-3/4（75%）</div>
                  <div className="w-full h-8 bg-blue-400 text-white flex items-center justify-center">w-full（100%）</div>
                </div>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  高さ（h-）
                </Typography>
                <div className="flex space-x-2">
                  <div className="w-20 h-16 bg-red-400 text-white flex items-center justify-center">h-16</div>
                  <div className="w-20 h-24 bg-red-400 text-white flex items-center justify-center">h-24</div>
                  <div className="w-20 h-32 bg-red-400 text-white flex items-center justify-center">h-32</div>
                </div>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  最小・最大サイズ
                </Typography>
                <div className="space-y-2">
                  <div className="max-w-xs p-2 bg-yellow-400">max-w-xs（320px）</div>
                  <div className="max-w-md p-2 bg-yellow-400">max-w-md（448px）</div>
                  <div className="max-w-lg p-2 bg-yellow-400">max-w-lg（512px）</div>
                  <div className="min-h-20 p-2 bg-yellow-400">min-h-20（最小高さ80px）</div>
                </div>
              </Box>
            </Stack>
          </Paper>
        </Box>

        {/* カラー */}
        <Box>
          <Typography variant="h6" gutterBottom>
            色（Colors）
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  背景色（bg-）
                </Typography>
                <div className="space-y-2">
                  <div className="p-2 bg-red-500 text-white">bg-red-500</div>
                  <div className="p-2 bg-blue-500 text-white">bg-blue-500</div>
                  <div className="p-2 bg-green-500 text-white">bg-green-500</div>
                  <div className="p-2 bg-yellow-500">bg-yellow-500</div>
                  <div className="p-2 bg-purple-500 text-white">bg-purple-500</div>
                  <div className="p-2 bg-pink-500 text-white">bg-pink-500</div>
                  <div className="p-2 bg-gray-500 text-white">bg-gray-500</div>
                </div>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  色の濃さ: 50（最も薄い）〜 900（最も濃い）
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  色の濃さバリエーション
                </Typography>
                <div className="space-y-1">
                  <div className="p-2 bg-blue-100">bg-blue-100</div>
                  <div className="p-2 bg-blue-300">bg-blue-300</div>
                  <div className="p-2 bg-blue-500 text-white">bg-blue-500</div>
                  <div className="p-2 bg-blue-700 text-white">bg-blue-700</div>
                  <div className="p-2 bg-blue-900 text-white">bg-blue-900</div>
                </div>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  テキスト色（text-）
                </Typography>
                <div className="space-y-2 p-2 bg-white">
                  <p className="text-red-500">text-red-500</p>
                  <p className="text-blue-600">text-blue-600</p>
                  <p className="text-green-700">text-green-700</p>
                  <p className="text-gray-500">text-gray-500</p>
                </div>
              </Box>
            </Stack>
          </Paper>
        </Box>

        {/* テキスト */}
        <Box>
          <Typography variant="h6" gutterBottom>
            テキストスタイル
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  フォントサイズ（text-）
                </Typography>
                <div className="space-y-2">
                  <p className="text-xs">text-xs（12px）</p>
                  <p className="text-sm">text-sm（14px）</p>
                  <p className="text-base">text-base（16px）</p>
                  <p className="text-lg">text-lg（18px）</p>
                  <p className="text-xl">text-xl（20px）</p>
                  <p className="text-2xl">text-2xl（24px）</p>
                  <p className="text-3xl">text-3xl（30px）</p>
                  <p className="text-4xl">text-4xl（36px）</p>
                </div>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  フォントウェイト（font-）
                </Typography>
                <div className="space-y-2">
                  <p className="font-light">font-light（300）</p>
                  <p className="font-normal">font-normal（400）</p>
                  <p className="font-medium">font-medium（500）</p>
                  <p className="font-semibold">font-semibold（600）</p>
                  <p className="font-bold">font-bold（700）</p>
                </div>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  テキスト配置
                </Typography>
                <div className="space-y-2">
                  <p className="text-left">text-left（左揃え）</p>
                  <p className="text-center">text-center（中央揃え）</p>
                  <p className="text-right">text-right（右揃え）</p>
                </div>
              </Box>
            </Stack>
          </Paper>
        </Box>

        {/* Flexbox */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Flexbox
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  基本的なFlex
                </Typography>
                <div className="flex space-x-2 p-2 bg-white">
                  <div className="p-2 bg-blue-500 text-white">A</div>
                  <div className="p-2 bg-blue-500 text-white">B</div>
                  <div className="p-2 bg-blue-500 text-white">C</div>
                </div>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  className=&quot;flex space-x-2&quot;
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  justify-content（水平方向）
                </Typography>
                <div className="space-y-2">
                  <div className="flex justify-start space-x-2 p-2 bg-white">
                    <div className="p-2 bg-green-500 text-white">A</div>
                    <div className="p-2 bg-green-500 text-white">B</div>
                  </div>
                  <Typography variant="caption">justify-start（左寄せ）</Typography>

                  <div className="flex justify-center space-x-2 p-2 bg-white">
                    <div className="p-2 bg-green-500 text-white">A</div>
                    <div className="p-2 bg-green-500 text-white">B</div>
                  </div>
                  <Typography variant="caption">justify-center（中央）</Typography>

                  <div className="flex justify-end space-x-2 p-2 bg-white">
                    <div className="p-2 bg-green-500 text-white">A</div>
                    <div className="p-2 bg-green-500 text-white">B</div>
                  </div>
                  <Typography variant="caption">justify-end（右寄せ）</Typography>

                  <div className="flex justify-between space-x-2 p-2 bg-white">
                    <div className="p-2 bg-green-500 text-white">A</div>
                    <div className="p-2 bg-green-500 text-white">B</div>
                    <div className="p-2 bg-green-500 text-white">C</div>
                  </div>
                  <Typography variant="caption">justify-between（均等配置）</Typography>
                </div>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  align-items（垂直方向）
                </Typography>
                <div className="flex items-center space-x-2 h-24 p-2 bg-white">
                  <div className="p-2 bg-purple-500 text-white h-8">小</div>
                  <div className="p-2 bg-purple-500 text-white h-12">中</div>
                  <div className="p-2 bg-purple-500 text-white h-16">大</div>
                </div>
                <Typography variant="caption">items-center（垂直中央）</Typography>
              </Box>
            </Stack>
          </Paper>
        </Box>

        {/* ボーダーと角丸 */}
        <Box>
          <Typography variant="h6" gutterBottom>
            ボーダーと角丸
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  ボーダー
                </Typography>
                <div className="space-y-2">
                  <div className="p-2 border border-gray-400">border（1px）</div>
                  <div className="p-2 border-2 border-blue-500">border-2 border-blue-500</div>
                  <div className="p-2 border-4 border-red-500">border-4 border-red-500</div>
                  <div className="p-2 border-t-4 border-green-500">border-t-4（上のみ）</div>
                  <div className="p-2 border-b-4 border-purple-500">border-b-4（下のみ）</div>
                </div>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  角丸（rounded）
                </Typography>
                <div className="flex space-x-2">
                  <div className="p-2 bg-blue-500 text-white rounded">rounded</div>
                  <div className="p-2 bg-blue-500 text-white rounded-md">rounded-md</div>
                  <div className="p-2 bg-blue-500 text-white rounded-lg">rounded-lg</div>
                  <div className="p-2 bg-blue-500 text-white rounded-xl">rounded-xl</div>
                  <div className="p-4 bg-blue-500 text-white rounded-full">rounded-full</div>
                </div>
              </Box>
            </Stack>
          </Paper>
        </Box>

        {/* 影 */}
        <Box>
          <Typography variant="h6" gutterBottom>
            影（Shadow）
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <div className="flex space-x-4">
              <div className="p-4 bg-white shadow-sm">shadow-sm</div>
              <div className="p-4 bg-white shadow">shadow</div>
              <div className="p-4 bg-white shadow-md">shadow-md</div>
              <div className="p-4 bg-white shadow-lg">shadow-lg</div>
              <div className="p-4 bg-white shadow-xl">shadow-xl</div>
            </div>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
}
