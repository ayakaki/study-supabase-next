import { UserPosts } from './userPosts';
import { Suspense } from 'react';

export const HomeTemplate: React.FC = (): JSX.Element => {
  return (
    <div className="">
      <h2>グローバルカウンター</h2>
      <Suspense fallback={<>ローディング中。。</>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts />
      </Suspense>
    </div>
  );
};
