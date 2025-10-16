'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from '@mui/material';

export default function DialogExample() {
  const [simpleOpen, setSimpleOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [scrollOpen, setScrollOpen] = useState(false);
  const [fullWidthOpen, setFullWidthOpen] = useState(false);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dialog（ダイアログ）
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Dialogコンポーネントは、ユーザーに情報を表示したり、アクションを促したりするためのウィンドウです。
      </Typography>

      <Stack spacing={4}>
        {/* シンプルなダイアログ */}
        <Box>
          <Typography variant="h6" gutterBottom>
            シンプルなダイアログ
          </Typography>
          <Button variant="contained" onClick={() => setSimpleOpen(true)}>
            シンプルなダイアログを開く
          </Button>
          <Dialog open={simpleOpen} onClose={() => setSimpleOpen(false)}>
            <DialogTitle>ダイアログタイトル</DialogTitle>
            <DialogContent>
              <DialogContentText>
                これはシンプルなダイアログの例です。ダイアログは、ユーザーに情報を提供したり、
                確認を求めたりするために使用されます。
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSimpleOpen(false)}>閉じる</Button>
              <Button onClick={() => setSimpleOpen(false)} variant="contained">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </Box>

        {/* アラートダイアログ */}
        <Box>
          <Typography variant="h6" gutterBottom>
            アラートダイアログ
          </Typography>
          <Button variant="contained" color="warning" onClick={() => setAlertOpen(true)}>
            アラートダイアログを開く
          </Button>
          <Dialog
            open={alertOpen}
            onClose={() => setAlertOpen(false)}
          >
            <DialogTitle>
              注意が必要です
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                この操作を実行すると、データが変更されます。続行してもよろしいですか？
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setAlertOpen(false)}>
                キャンセル
              </Button>
              <Button onClick={() => setAlertOpen(false)} color="warning" variant="contained" autoFocus>
                続行
              </Button>
            </DialogActions>
          </Dialog>
        </Box>

        {/* 確認ダイアログ */}
        <Box>
          <Typography variant="h6" gutterBottom>
            削除確認ダイアログ
          </Typography>
          <Button variant="contained" color="error" onClick={() => setConfirmOpen(true)}>
            削除確認ダイアログを開く
          </Button>
          <Dialog
            open={confirmOpen}
            onClose={() => setConfirmOpen(false)}
          >
            <DialogTitle>
              アイテムを削除しますか？
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                このアイテムを削除すると、元に戻すことはできません。
                本当に削除してもよろしいですか？
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setConfirmOpen(false)}>
                キャンセル
              </Button>
              <Button onClick={() => setConfirmOpen(false)} color="error" variant="contained">
                削除
              </Button>
            </DialogActions>
          </Dialog>
        </Box>

        {/* フォームダイアログ */}
        <Box>
          <Typography variant="h6" gutterBottom>
            フォーム付きダイアログ
          </Typography>
          <Button variant="contained" color="secondary" onClick={() => setFormOpen(true)}>
            フォームダイアログを開く
          </Button>
          <Dialog open={formOpen} onClose={() => setFormOpen(false)} fullWidth maxWidth="sm">
            <DialogTitle>新規ユーザー登録</DialogTitle>
            <DialogContent>
              <DialogContentText sx={{ mb: 2 }}>
                新しいユーザーを登録するために、以下の情報を入力してください。
              </DialogContentText>
              <Stack spacing={2}>
                <TextField
                  autoFocus
                  label="ユーザー名"
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="メールアドレス"
                  type="email"
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="パスワード"
                  type="password"
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="パスワード（確認）"
                  type="password"
                  fullWidth
                  variant="outlined"
                />
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setFormOpen(false)}>
                キャンセル
              </Button>
              <Button onClick={() => setFormOpen(false)} variant="contained">
                登録
              </Button>
            </DialogActions>
          </Dialog>
        </Box>

        {/* スクロール可能なダイアログ */}
        <Box>
          <Typography variant="h6" gutterBottom>
            スクロール可能なダイアログ
          </Typography>
          <Button variant="contained" onClick={() => setScrollOpen(true)}>
            スクロール可能なダイアログを開く
          </Button>
          <Dialog
            open={scrollOpen}
            onClose={() => setScrollOpen(false)}
            scroll="paper"
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle>利用規約</DialogTitle>
            <DialogContent dividers>
              <DialogContentText>
                <Typography paragraph>
                  <strong>第1条（目的）</strong><br />
                  この利用規約は、当サービスの利用条件を定めるものです。
                </Typography>
                <Typography paragraph>
                  <strong>第2条（定義）</strong><br />
                  本規約において使用する用語の定義は、次の各号に定めるとおりとします。
                </Typography>
                <Typography paragraph>
                  1. 「本サービス」とは、当社が提供する全てのサービスを意味します。<br />
                  2. 「利用者」とは、本サービスを利用する全ての個人または法人を意味します。<br />
                  3. 「登録情報」とは、利用者が本サービスの利用登録の際に入力する情報を意味します。
                </Typography>
                <Typography paragraph>
                  <strong>第3条（登録）</strong><br />
                  本サービスの利用を希望する者は、本規約に同意した上で、当社所定の方法により
                  利用登録を行うものとします。
                </Typography>
                <Typography paragraph>
                  <strong>第4条（アカウントの管理）</strong><br />
                  利用者は、自己の責任において、本サービスのアカウント情報を管理するものとします。
                </Typography>
                <Typography paragraph>
                  <strong>第5条（禁止事項）</strong><br />
                  利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。
                </Typography>
                <Typography component="div" paragraph>
                  <ul>
                    <li>法令または公序良俗に違反する行為</li>
                    <li>犯罪行為に関連する行為</li>
                    <li>当社、本サービスの他の利用者、またはその他第三者の権利を侵害する行為</li>
                    <li>本サービスの運営を妨害する行為</li>
                    <li>不正アクセス行為</li>
                  </ul>
                </Typography>
                <Typography paragraph>
                  <strong>第6条（サービスの停止等）</strong><br />
                  当社は、以下のいずれかに該当する場合には、利用者に事前に通知することなく、
                  本サービスの全部または一部の提供を停止または中断することができます。
                </Typography>
                <Typography paragraph>
                  <strong>第7条（免責事項）</strong><br />
                  当社は、本サービスに関して、利用者と他の利用者または第三者との間において生じた
                  取引、連絡または紛争等について一切責任を負いません。
                </Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setScrollOpen(false)}>
                閉じる
              </Button>
              <Button onClick={() => setScrollOpen(false)} variant="contained">
                同意する
              </Button>
            </DialogActions>
          </Dialog>
        </Box>

        {/* フルワイドダイアログ */}
        <Box>
          <Typography variant="h6" gutterBottom>
            フルワイドダイアログ（選択リスト）
          </Typography>
          <Button variant="contained" onClick={() => setFullWidthOpen(true)}>
            選択ダイアログを開く
          </Button>
          <Dialog
            open={fullWidthOpen}
            onClose={() => setFullWidthOpen(false)}
            fullWidth
            maxWidth="md"
          >
            <DialogTitle>国を選択してください</DialogTitle>
            <DialogContent>
              <List>
                {['日本', 'アメリカ', 'イギリス', 'フランス', 'ドイツ', '中国', '韓国', 'オーストラリア', 'カナダ', 'イタリア'].map((country) => (
                  <ListItem key={country} disablePadding>
                    <ListItemButton onClick={() => setFullWidthOpen(false)}>
                      <ListItemText primary={country} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setFullWidthOpen(false)}>
                キャンセル
              </Button>
            </DialogActions>
          </Dialog>
        </Box>

        {/* コード例 */}
        <Box>
          <Typography variant="h6" gutterBottom>
            基本的な使い方（コード例）
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.900', color: 'grey.100', overflow: 'auto' }}>
            <pre style={{ margin: 0 }}>
{`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>
  ダイアログを開く
</Button>

<Dialog open={open} onClose={() => setOpen(false)}>
  <DialogTitle>タイトル</DialogTitle>
  <DialogContent>
    <DialogContentText>
      ダイアログの内容をここに記述します。
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpen(false)}>
      キャンセル
    </Button>
    <Button onClick={() => setOpen(false)} variant="contained">
      OK
    </Button>
  </DialogActions>
</Dialog>`}
            </pre>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
}
