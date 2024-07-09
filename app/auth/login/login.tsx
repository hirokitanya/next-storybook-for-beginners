'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { useFormState } from 'react-dom';

import { loginAction } from 'lib/actions/auth';
import { validation } from 'lib/validations/auth';

export default function Login({ onSubmit }: { onSubmit: typeof loginAction }) {
  const [lastResult, action] = useFormState(onSubmit, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: validation });
    },
    shouldValidate: 'onBlur',
  });
  return (
    <div className="relative">
      <div className="ms-auto flex bg-white">
        <Image src="./sample.jpg" alt="sample" className="h-screen w-5/12" width={750} height={100} />

        <Container component="main" maxWidth="xs">
          <Box className="mt-16 flex flex-col items-center">
            <div className="absolute top-1/4">
              <Typography component="h1" variant="h5" color="primary" className="text-center font-black">
                業務管理システム
              </Typography>
              <Box component="form" action={action} {...getFormProps(form)} className="mt-2">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="メールアドレス"
                  autoComplete="email"
                  placeholder="example@example.com"
                  autoFocus
                  {...getInputProps(fields.email, { type: 'email' })}
                  key={fields.email.key}
                  error={!!fields.email.errors}
                  helperText={fields.email.errors}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="パスワード"
                  autoComplete="current-password"
                  {...getInputProps(fields.password, { type: 'password' })}
                  key={fields.password.key}
                  error={!!fields.password.errors}
                  helperText={fields.password.errors}
                />
                <Typography className="px-3.5 text-xs font-bold text-gray-800">
                  パスワードを忘れた方は管理者にご連絡ください。
                </Typography>
                {form.errors && <div className="text-center text-red-600">{form.errors}</div>}
                <Button type="submit" fullWidth variant="contained" className="mb-4 mt-6">
                  ログイン
                </Button>
              </Box>
            </div>
            <Typography className="absolute bottom-1 text-sm font-bold text-gray-800">© 2024 サンプル空調</Typography>
          </Box>
        </Container>
      </div>
    </div>
  );
}
