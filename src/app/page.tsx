import { HomeTemplate } from '@/components/home/homeTemplate';
import { PAGE_METAS } from '@/constants/meta';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: PAGE_METAS.HOME.TITLE,
  description: PAGE_METAS.HOME.DESCRIPTION,
};

const HomePage: NextPage = (): JSX.Element => {
  return (
    <>
      <HomeTemplate />
    </>
  );
};

export default HomePage;
