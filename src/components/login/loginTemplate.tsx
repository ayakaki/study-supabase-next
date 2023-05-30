'use client';

import supabase from '@/libs/supabase';
import { useState } from 'react';

const [email, setEmail] = useState('');

export const LoginTemplate: React.FC = (): JSX.Element => {
  const login = async (email: string): Promise<void> => {
    const { error } = await supabase.auth.signIn({ email });
    if (error) {
      alert(error.message);
    } else {
      alert('ログインリンクを送信しました。');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl">ログイン</h1>
      <p className="mt-4">
        Eメールを入力してマジック・リンクでログインします。
      </p>
      <div className="mt-6">
        <label className="block">Eメール</label>
        <input
          className="mt-2 w-full"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <button
        className="primary mt-4"
        onClick={async () => {
          await login(email);
        }}
      >
        マジックリンクを送信
      </button>
    </div>
  );
};
