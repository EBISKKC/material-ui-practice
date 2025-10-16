'use client';

import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Stack,
  Avatar,
  IconButton,
  CardHeader,
} from '@mui/material';
import { MoreVert, Favorite, Share } from '@mui/icons-material';

export default function CardExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Card
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Cardコンポーネントは、関連する情報をグループ化して表示するために使用されます。
      </Typography>

      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" gutterBottom>
            基本的なカード
          </Typography>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              title="美味しい料理"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                美味しい料理
              </Typography>
              <Typography variant="body2" color="text.secondary">
                新鮮な食材を使った、栄養バランスの取れた美味しい料理です。
                季節の野菜をふんだんに使用しています。
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">共有</Button>
              <Button size="small">詳細</Button>
            </CardActions>
          </Card>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            ヘッダー付きカード
          </Typography>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  R
                </Avatar>
              }
              action={
                <IconButton>
                  <MoreVert />
                </IconButton>
              }
              title="レストラン名"
              subheader="2024年1月15日"
            />
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
              title="サラダ"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                今日のおすすめメニューは、新鮮な野菜をたっぷり使ったサラダです。
                ドレッシングは自家製で、健康的で美味しいです。
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton>
                <Favorite />
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </CardActions>
          </Card>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            シンプルなカード
          </Typography>
          <Stack direction="row" spacing={2}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  今日の単語
                </Typography>
                <Typography variant="h5" component="div">
                  素晴らしい
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  形容詞
                </Typography>
                <Typography variant="body2">
                  非常に良い、優れている
                  <br />
                  &quot;素晴らしい天気ですね&quot;
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">もっと詳しく</Button>
              </CardActions>
            </Card>

            <Card sx={{ minWidth: 275 }} variant="outlined">
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  統計情報
                </Typography>
                <Typography variant="h5" component="div">
                  1,234
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  訪問者数
                </Typography>
                <Typography variant="body2">
                  今月の訪問者数は先月比で15%増加しました。
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
