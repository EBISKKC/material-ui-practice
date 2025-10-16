'use client';

import React, { useState } from 'react';
import {
  Snackbar,
  Alert,
  AlertTitle,
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';

export default function SnackbarExample() {
  const [simpleOpen, setSimpleOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [warningOpen, setWarningOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [titleOpen, setTitleOpen] = useState(false);
  const [autoHideOpen, setAutoHideOpen] = useState(false);

  const handleClose = (setter: (value: boolean) => void) => {
    return (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setter(false);
    };
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Snackbar & Alert
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Snackbarは、画面下部に表示される一時的な通知です。Alertは、重要なメッセージを表示するためのコンポーネントです。
      </Typography>

      <Stack spacing={4}>
        {/* シンプルなSnackbar */}
        <Box>
          <Typography variant="h6" gutterBottom>
            シンプルなSnackbar
          </Typography>
          <Button variant="contained" onClick={() => setSimpleOpen(true)}>
            シンプルなSnackbarを表示
          </Button>
          <Snackbar
            open={simpleOpen}
            autoHideDuration={6000}
            onClose={handleClose(setSimpleOpen)}
            message="これはシンプルなメッセージです"
            action={
              <IconButton
                size="small"
                color="inherit"
                onClick={handleClose(setSimpleOpen)}
              >
                <Close fontSize="small" />
              </IconButton>
            }
          />
        </Box>

        {/* Alert - 成功 */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Alert（成功）
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" onClick={() => setSuccessOpen(true)}>
              成功メッセージ
            </Button>
          </Stack>
          <Snackbar
            open={successOpen}
            autoHideDuration={6000}
            onClose={handleClose(setSuccessOpen)}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert onClose={handleClose(setSuccessOpen)} severity="success" sx={{ width: '100%' }}>
              データが正常に保存されました！
            </Alert>
          </Snackbar>
        </Box>

        {/* Alert - エラー */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Alert（エラー）
          </Typography>
          <Button variant="contained" color="error" onClick={() => setErrorOpen(true)}>
            エラーメッセージ
          </Button>
          <Snackbar
            open={errorOpen}
            autoHideDuration={6000}
            onClose={handleClose(setErrorOpen)}
          >
            <Alert onClose={handleClose(setErrorOpen)} severity="error" sx={{ width: '100%' }}>
              エラーが発生しました。もう一度お試しください。
            </Alert>
          </Snackbar>
        </Box>

        {/* Alert - 警告 */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Alert（警告）
          </Typography>
          <Button variant="contained" color="warning" onClick={() => setWarningOpen(true)}>
            警告メッセージ
          </Button>
          <Snackbar
            open={warningOpen}
            autoHideDuration={6000}
            onClose={handleClose(setWarningOpen)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          >
            <Alert onClose={handleClose(setWarningOpen)} severity="warning" sx={{ width: '100%' }}>
              ディスク容量が残り少なくなっています。
            </Alert>
          </Snackbar>
        </Box>

        {/* Alert - 情報 */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Alert（情報）
          </Typography>
          <Button variant="contained" color="info" onClick={() => setInfoOpen(true)}>
            情報メッセージ
          </Button>
          <Snackbar
            open={infoOpen}
            autoHideDuration={6000}
            onClose={handleClose(setInfoOpen)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          >
            <Alert onClose={handleClose(setInfoOpen)} severity="info" sx={{ width: '100%' }}>
              新しいバージョンが利用可能です。
            </Alert>
          </Snackbar>
        </Box>

        {/* タイトル付きAlert */}
        <Box>
          <Typography variant="h6" gutterBottom>
            タイトル付きAlert
          </Typography>
          <Button variant="contained" onClick={() => setTitleOpen(true)}>
            タイトル付きメッセージ
          </Button>
          <Snackbar
            open={titleOpen}
            autoHideDuration={8000}
            onClose={handleClose(setTitleOpen)}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <Alert onClose={handleClose(setTitleOpen)} severity="success" sx={{ width: '100%' }}>
              <AlertTitle>送信完了</AlertTitle>
              メッセージが正常に送信されました。担当者から折り返しご連絡いたします。
            </Alert>
          </Snackbar>
        </Box>

        {/* 自動非表示なし */}
        <Box>
          <Typography variant="h6" gutterBottom>
            自動的に消えないSnackbar
          </Typography>
          <Button variant="contained" onClick={() => setAutoHideOpen(true)}>
            手動で閉じる必要があるメッセージ
          </Button>
          <Snackbar
            open={autoHideOpen}
            onClose={handleClose(setAutoHideOpen)}
          >
            <Alert onClose={handleClose(setAutoHideOpen)} severity="warning" sx={{ width: '100%' }}>
              <AlertTitle>重要な通知</AlertTitle>
              このメッセージは自動的には消えません。必ず内容をご確認の上、手動で閉じてください。
            </Alert>
          </Snackbar>
        </Box>

        {/* 埋め込みAlert */}
        <Box>
          <Typography variant="h6" gutterBottom>
            埋め込みAlert（Snackbarを使わない）
          </Typography>
          <Stack spacing={2}>
            <Alert severity="success">
              これは成功メッセージです。
            </Alert>
            <Alert severity="error">
              これはエラーメッセージです。
            </Alert>
            <Alert severity="warning">
              これは警告メッセージです。
            </Alert>
            <Alert severity="info">
              これは情報メッセージです。
            </Alert>
          </Stack>
        </Box>

        {/* バリエーション */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Alertのバリエーション
          </Typography>
          <Stack spacing={2}>
            <Alert severity="success" variant="filled">
              塗りつぶし（filled）- 成功
            </Alert>
            <Alert severity="info" variant="outlined">
              アウトライン（outlined）- 情報
            </Alert>
            <Alert severity="warning" variant="standard">
              標準（standard）- 警告
            </Alert>
            <Alert severity="error" variant="filled">
              <AlertTitle>エラー</AlertTitle>
              タイトル付きの塗りつぶしAlert
            </Alert>
          </Stack>
        </Box>

        {/* コード例 */}
        <Box>
          <Typography variant="h6" gutterBottom>
            基本的な使い方（コード例）
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.900', color: 'grey.100', overflow: 'auto' }}>
            <pre style={{ margin: 0 }}>
{`const [open, setOpen] = useState(false);

// シンプルなSnackbar
<Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={() => setOpen(false)}
  message="メッセージ"
/>

// Alert付きSnackbar
<Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={() => setOpen(false)}
>
  <Alert
    onClose={() => setOpen(false)}
    severity="success"
  >
    成功しました！
  </Alert>
</Snackbar>

// 埋め込みAlert
<Alert severity="info">
  情報メッセージ
</Alert>

// タイトル付きAlert
<Alert severity="error">
  <AlertTitle>エラー</AlertTitle>
  エラーが発生しました
</Alert>`}
            </pre>
          </Paper>
        </Box>

        {/* 位置のオプション */}
        <Box>
          <Typography variant="h6" gutterBottom>
            表示位置のオプション
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
            <Typography variant="body2" paragraph>
              anchorOriginプロパティで位置を指定できます：
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">
                • <code>vertical: &apos;top&apos; | &apos;bottom&apos;</code>
              </Typography>
              <Typography variant="body2">
                • <code>horizontal: &apos;left&apos; | &apos;center&apos; | &apos;right&apos;</code>
              </Typography>
            </Stack>
            <Paper sx={{ p: 2, bgcolor: 'grey.900', color: 'grey.100', mt: 2 }}>
              <pre style={{ margin: 0, fontSize: '0.875rem' }}>
{`anchorOrigin={{
  vertical: 'top',
  horizontal: 'center'
}}`}
              </pre>
            </Paper>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
}
