import { LoginTemplate } from '@/components/login/loginTemplate';
import { PAGE_METAS } from '@/constants/meta';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: PAGE_METAS.LOGIN.TITLE,
  description: PAGE_METAS.LOGIN.DESCRIPTION,
};

const LoginPage: NextPage = (): JSX.Element => {
  return (
    <>
      <LoginTemplate />
    </>
  );
};

export default LoginPage;
