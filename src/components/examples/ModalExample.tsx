'use client';

import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  TextField,
  IconButton,
  Fade,
  Backdrop,
} from '@mui/material';
import { Close, Delete, Warning, CheckCircle } from '@mui/icons-material';

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  minWidth: 400,
};

export default function ModalExample() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [warningOpen, setWarningOpen] = useState(false);
  const [largeOpen, setLargeOpen] = useState(false);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Modal（モーダル）
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Modalコンポーネントは、ユーザーの注意を引くためのオーバーレイウィンドウです。
      </Typography>

      <Stack spacing={4}>
        {/* 基本的なモーダル */}
        <Box>
          <Typography variant="h6" gutterBottom>
            基本的なモーダル
          </Typography>
          <Button variant="contained" onClick={() => setBasicOpen(true)}>
            基本モーダルを開く
          </Button>
          <Modal
            open={basicOpen}
            onClose={() => setBasicOpen(false)}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={basicOpen}>
              <Box sx={modalStyle}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6">基本的なモーダル</Typography>
                  <IconButton onClick={() => setBasicOpen(false)} size="small">
                    <Close />
                  </IconButton>
                </Box>
                <Typography sx={{ mb: 3 }}>
                  これは基本的なモーダルの例です。背景をクリックするか、閉じるボタンで閉じることができます。
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                  <Button onClick={() => setBasicOpen(false)}>閉じる</Button>
                  <Button variant="contained" onClick={() => setBasicOpen(false)}>
                    OK
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Modal>
        </Box>

        {/* フォーム付きモーダル */}
        <Box>
          <Typography variant="h6" gutterBottom>
            フォーム付きモーダル
          </Typography>
          <Button variant="contained" color="secondary" onClick={() => setFormOpen(true)}>
            フォームモーダルを開く
          </Button>
          <Modal
            open={formOpen}
            onClose={() => setFormOpen(false)}
          >
            <Box sx={modalStyle}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">ユーザー情報入力</Typography>
                <IconButton onClick={() => setFormOpen(false)} size="small">
                  <Close />
                </IconButton>
              </Box>
              <Stack spacing={2} sx={{ mb: 3 }}>
                <TextField
                  label="名前"
                  fullWidth
                  placeholder="山田 太郎"
                />
                <TextField
                  label="メールアドレス"
                  type="email"
                  fullWidth
                  placeholder="example@email.com"
                />
                <TextField
                  label="メッセージ"
                  multiline
                  rows={4}
                  fullWidth
                  placeholder="メッセージを入力してください"
                />
              </Stack>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                <Button onClick={() => setFormOpen(false)}>キャンセル</Button>
                <Button variant="contained" onClick={() => {
                  setFormOpen(false);
                  setSuccessOpen(true);
                }}>
                  送信
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>

        {/* 確認モーダル */}
        <Box>
          <Typography variant="h6" gutterBottom>
            確認モーダル（削除確認）
          </Typography>
          <Button variant="contained" color="error" onClick={() => setConfirmOpen(true)}>
            削除確認モーダルを開く
          </Button>
          <Modal
            open={confirmOpen}
            onClose={() => setConfirmOpen(false)}
          >
            <Box sx={modalStyle}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <Delete sx={{ color: 'error.main', mr: 2, mt: 0.5, fontSize: 32 }} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    本当に削除しますか？
                  </Typography>
                  <Typography color="text.secondary">
                    この操作は取り消すことができません。削除されたデータは復元できません。
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 3 }}>
                <Button onClick={() => setConfirmOpen(false)}>
                  キャンセル
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => setConfirmOpen(false)}
                >
                  削除する
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>

        {/* 成功モーダル */}
        <Box>
          <Typography variant="h6" gutterBottom>
            成功メッセージモーダル
          </Typography>
          <Button variant="contained" color="success" onClick={() => setSuccessOpen(true)}>
            成功モーダルを開く
          </Button>
          <Modal
            open={successOpen}
            onClose={() => setSuccessOpen(false)}
          >
            <Box sx={modalStyle}>
              <Box sx={{ textAlign: 'center' }}>
                <CheckCircle sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  送信完了
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  メッセージが正常に送信されました。
                  <br />
                  ご連絡ありがとうございます。
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => setSuccessOpen(false)}
                  fullWidth
                >
                  閉じる
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>

        {/* 警告モーダル */}
        <Box>
          <Typography variant="h6" gutterBottom>
            警告モーダル
          </Typography>
          <Button variant="contained" color="warning" onClick={() => setWarningOpen(true)}>
            警告モーダルを開く
          </Button>
          <Modal
            open={warningOpen}
            onClose={() => setWarningOpen(false)}
          >
            <Box sx={modalStyle}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <Warning sx={{ color: 'warning.main', mr: 2, mt: 0.5, fontSize: 32 }} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    保存されていない変更があります
                  </Typography>
                  <Typography color="text.secondary">
                    変更を保存せずに終了しますか？保存していない変更は失われます。
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 3 }}>
                <Button onClick={() => setWarningOpen(false)}>
                  キャンセル
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setWarningOpen(false)}
                >
                  保存せずに終了
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setWarningOpen(false)}
                >
                  保存する
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>

        {/* 大きなモーダル */}
        <Box>
          <Typography variant="h6" gutterBottom>
            大きなコンテンツのモーダル
          </Typography>
          <Button variant="contained" onClick={() => setLargeOpen(true)}>
            大きなモーダルを開く
          </Button>
          <Modal
            open={largeOpen}
            onClose={() => setLargeOpen(false)}
          >
            <Box sx={{
              ...modalStyle,
              width: '80%',
              maxWidth: 800,
              maxHeight: '80vh',
              overflow: 'auto',
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, position: 'sticky', top: 0, bgcolor: 'background.paper', zIndex: 1, pb: 2 }}>
                <Typography variant="h6">利用規約</Typography>
                <IconButton onClick={() => setLargeOpen(false)} size="small">
                  <Close />
                </IconButton>
              </Box>
              <Typography paragraph>
                <strong>第1条（適用）</strong><br />
                本規約は、当社が提供するサービス（以下「本サービス」といいます。）の利用に関する条件を、
                本サービスを利用するお客様（以下「利用者」といいます。）と当社との間で定めるものです。
              </Typography>
              <Typography paragraph>
                <strong>第2条（利用登録）</strong><br />
                利用希望者は、本規約に同意の上、当社の定める方法によって利用登録を申請し、
                当社がこれを承認することによって、利用登録が完了するものとします。
              </Typography>
              <Typography paragraph>
                <strong>第3条（禁止事項）</strong><br />
                利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。
              </Typography>
              <Typography component="div" paragraph>
                <ul>
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当社、本サービスの他の利用者、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                  <li>当社のサービスの運営を妨害するおそれのある行為</li>
                  <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
                  <li>不正アクセスをし、またはこれを試みる行為</li>
                  <li>他の利用者に成りすます行為</li>
                </ul>
              </Typography>
              <Typography paragraph>
                <strong>第4条（本サービスの提供の停止等）</strong><br />
                当社は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく
                本サービスの全部または一部の提供を停止または中断することができるものとします。
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 3, position: 'sticky', bottom: 0, bgcolor: 'background.paper', pt: 2 }}>
                <Button onClick={() => setLargeOpen(false)}>
                  閉じる
                </Button>
                <Button variant="contained" onClick={() => setLargeOpen(false)}>
                  同意する
                </Button>
              </Box>
            </Box>
          </Modal>
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
  モーダルを開く
</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
>
  <Box sx={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  }}>
    <Typography variant="h6">
      モーダルタイトル
    </Typography>
    <Typography sx={{ mt: 2 }}>
      モーダルの内容
    </Typography>
    <Button onClick={() => setOpen(false)}>
      閉じる
    </Button>
  </Box>
</Modal>`}
            </pre>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
}
