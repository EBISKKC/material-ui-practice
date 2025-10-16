'use client';

import {
  Grid,
  Box,
  Typography,
  Paper,
  Stack,
  Container,
} from '@mui/material';

export default function GridExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Grid & Layout
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Material UIのGridシステムを使ったレスポンシブレイアウトの作成方法
      </Typography>

      <Stack spacing={4}>
        {/* 基本的なGrid */}
        <Box>
          <Typography variant="h6" gutterBottom>
            基本的なGrid（12カラムシステム）
          </Typography>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Paper sx={{ p: 2, bgcolor: 'primary.light', color: 'white', textAlign: 'center' }}>
                size=12（全幅）
              </Paper>
            </Grid>
            <Grid size={6}>
              <Paper sx={{ p: 2, bgcolor: 'secondary.light', color: 'white', textAlign: 'center' }}>
                size=6（半分）
              </Paper>
            </Grid>
            <Grid size={6}>
              <Paper sx={{ p: 2, bgcolor: 'secondary.light', color: 'white', textAlign: 'center' }}>
                size=6（半分）
              </Paper>
            </Grid>
            <Grid size={4}>
              <Paper sx={{ p: 2, bgcolor: 'success.light', color: 'white', textAlign: 'center' }}>
                size=4
              </Paper>
            </Grid>
            <Grid size={4}>
              <Paper sx={{ p: 2, bgcolor: 'success.light', color: 'white', textAlign: 'center' }}>
                size=4
              </Paper>
            </Grid>
            <Grid size={4}>
              <Paper sx={{ p: 2, bgcolor: 'success.light', color: 'white', textAlign: 'center' }}>
                size=4
              </Paper>
            </Grid>
            <Grid size={3}>
              <Paper sx={{ p: 2, bgcolor: 'info.light', color: 'white', textAlign: 'center' }}>
                size=3
              </Paper>
            </Grid>
            <Grid size={3}>
              <Paper sx={{ p: 2, bgcolor: 'info.light', color: 'white', textAlign: 'center' }}>
                size=3
              </Paper>
            </Grid>
            <Grid size={3}>
              <Paper sx={{ p: 2, bgcolor: 'info.light', color: 'white', textAlign: 'center' }}>
                size=3
              </Paper>
            </Grid>
            <Grid size={3}>
              <Paper sx={{ p: 2, bgcolor: 'info.light', color: 'white', textAlign: 'center' }}>
                size=3
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* レスポンシブGrid */}
        <Box>
          <Typography variant="h6" gutterBottom>
            レスポンシブGrid
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            画面サイズに応じて自動的にレイアウトが変わります
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper sx={{ p: 3, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
                xs=12<br />sm=6<br />md=4
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper sx={{ p: 3, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
                xs=12<br />sm=6<br />md=4
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper sx={{ p: 3, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
                xs=12<br />sm=6<br />md=4
              </Paper>
            </Grid>
          </Grid>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
            xs: モバイル（全幅）、sm: タブレット（半分）、md: デスクトップ（1/3）
          </Typography>
        </Box>

        {/* スペーシング */}
        <Box>
          <Typography variant="h6" gutterBottom>
            スペーシングのバリエーション
          </Typography>
          <Stack spacing={3}>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                spacing=1
              </Typography>
              <Grid container spacing={1}>
                {[1, 2, 3, 4].map((item) => (
                  <Grid key={item} size={3}>
                    <Paper sx={{ p: 2, bgcolor: 'warning.light', textAlign: 'center' }}>
                      {item}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                spacing=3
              </Typography>
              <Grid container spacing={3}>
                {[1, 2, 3, 4].map((item) => (
                  <Grid key={item} size={3}>
                    <Paper sx={{ p: 2, bgcolor: 'error.light', color: 'white', textAlign: 'center' }}>
                      {item}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
        </Box>

        {/* ネストされたGrid */}
        <Box>
          <Typography variant="h6" gutterBottom>
            ネストされたGrid
          </Typography>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Paper sx={{ p: 2, bgcolor: 'primary.light', color: 'white' }}>
                <Typography gutterBottom>size=8（メインコンテンツ）</Typography>
                <Grid container spacing={1}>
                  <Grid size={6}>
                    <Paper sx={{ p: 1, bgcolor: 'primary.dark', color: 'white', textAlign: 'center' }}>
                      ネスト 6
                    </Paper>
                  </Grid>
                  <Grid size={6}>
                    <Paper sx={{ p: 1, bgcolor: 'primary.dark', color: 'white', textAlign: 'center' }}>
                      ネスト 6
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid size={4}>
              <Paper sx={{ p: 2, bgcolor: 'secondary.light', color: 'white' }}>
                size=4<br />（サイドバー）
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* カードレイアウトの例 */}
        <Box>
          <Typography variant="h6" gutterBottom>
            カードレイアウトの例
          </Typography>
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid key={item} size={{ xs: 12, sm: 6, md: 4 }}>
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    カード {item}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    これはカード{item}の説明文です。Gridを使うことで、
                    レスポンシブなカードレイアウトを簡単に作成できます。
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Container */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Container（コンテナ）
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Containerコンポーネントは、コンテンツを中央に配置し、最大幅を設定します
          </Typography>
          <Stack spacing={2}>
            <Box sx={{ bgcolor: 'grey.100', p: 2 }}>
              <Container maxWidth="sm">
                <Paper sx={{ p: 2, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
                  maxWidth=&quot;sm&quot;（小）
                </Paper>
              </Container>
            </Box>
            <Box sx={{ bgcolor: 'grey.100', p: 2 }}>
              <Container maxWidth="md">
                <Paper sx={{ p: 2, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
                  maxWidth=&quot;md&quot;（中）
                </Paper>
              </Container>
            </Box>
            <Box sx={{ bgcolor: 'grey.100', p: 2 }}>
              <Container maxWidth="lg">
                <Paper sx={{ p: 2, bgcolor: 'success.main', color: 'white', textAlign: 'center' }}>
                  maxWidth=&quot;lg&quot;（大）
                </Paper>
              </Container>
            </Box>
          </Stack>
        </Box>

        {/* オフセット */}
        <Box>
          <Typography variant="h6" gutterBottom>
            オフセット（offset）
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            左側に余白を作ることができます
          </Typography>
          <Grid container spacing={2}>
            <Grid size={6} offset={3}>
              <Paper sx={{ p: 2, bgcolor: 'info.main', color: 'white', textAlign: 'center' }}>
                size=6, offset=3（中央配置）
              </Paper>
            </Grid>
            <Grid size={4} offset={2}>
              <Paper sx={{ p: 2, bgcolor: 'warning.main', color: 'white', textAlign: 'center' }}>
                size=4, offset=2
              </Paper>
            </Grid>
            <Grid size={4}>
              <Paper sx={{ p: 2, bgcolor: 'warning.main', color: 'white', textAlign: 'center' }}>
                size=4
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* 実践例: ダッシュボードレイアウト */}
        <Box>
          <Typography variant="h6" gutterBottom>
            実践例: ダッシュボードレイアウト
          </Typography>
          <Grid container spacing={3}>
            <Grid size={12}>
              <Paper sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
                <Typography variant="h6">ヘッダー</Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Paper sx={{ p: 2, minHeight: 200 }}>
                <Typography variant="h6" gutterBottom>サイドバー</Typography>
                <Typography variant="body2" color="text.secondary">
                  ナビゲーション<br />
                  メニュー1<br />
                  メニュー2<br />
                  メニュー3
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 9 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Paper sx={{ p: 2, bgcolor: 'success.light' }}>
                    <Typography variant="h6">統計1</Typography>
                    <Typography variant="h4">1,234</Typography>
                  </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Paper sx={{ p: 2, bgcolor: 'info.light' }}>
                    <Typography variant="h6">統計2</Typography>
                    <Typography variant="h4">567</Typography>
                  </Paper>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Paper sx={{ p: 2, bgcolor: 'warning.light' }}>
                    <Typography variant="h6">統計3</Typography>
                    <Typography variant="h4">890</Typography>
                  </Paper>
                </Grid>
                <Grid size={12}>
                  <Paper sx={{ p: 2, minHeight: 200 }}>
                    <Typography variant="h6" gutterBottom>メインコンテンツ</Typography>
                    <Typography variant="body2" color="text.secondary">
                      ここにメインのコンテンツが表示されます
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* コード例 */}
        <Box>
          <Typography variant="h6" gutterBottom>
            基本的な使い方（コード例）
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.900', color: 'grey.100', overflow: 'auto' }}>
            <pre style={{ margin: 0 }}>
{`import { Grid2 as Grid } from '@mui/material';

// 基本的なGrid
<Grid container spacing={2}>
  <Grid size={6}>
    <div>左側（半分）</div>
  </Grid>
  <Grid size={6}>
    <div>右側（半分）</div>
  </Grid>
</Grid>

// レスポンシブGrid
<Grid container spacing={2}>
  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
    <div>レスポンシブカード</div>
  </Grid>
</Grid>

// オフセット
<Grid container>
  <Grid size={6} offset={3}>
    <div>中央に配置</div>
  </Grid>
</Grid>`}
            </pre>
          </Paper>
        </Box>

        {/* ブレークポイント */}
        <Box>
          <Typography variant="h6" gutterBottom>
            ブレークポイント一覧
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <Stack spacing={1}>
              <Typography variant="body2">
                • <strong>xs</strong>: 0px〜 （モバイル）
              </Typography>
              <Typography variant="body2">
                • <strong>sm</strong>: 600px〜 （タブレット）
              </Typography>
              <Typography variant="body2">
                • <strong>md</strong>: 900px〜 （小型デスクトップ）
              </Typography>
              <Typography variant="body2">
                • <strong>lg</strong>: 1200px〜 （デスクトップ）
              </Typography>
              <Typography variant="body2">
                • <strong>xl</strong>: 1536px〜 （大型デスクトップ）
              </Typography>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
}
