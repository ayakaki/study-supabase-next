import supabase from '@/libs/supabase';
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
};

export const UserPosts = async (): Promise<JSX.Element> => {
  const { data: posts } = await supabase.from('posts').select('id, title');

  if (posts === null) {
    return <p>No posts found.</p>;
  }

  return (
    <>
      {posts.map((post: Post) => (
        <p key={post.id}>
          <Link href={`/static/${post.id}`}>{post.title}</Link>
        </p>
      ))}
    </>
  );
};
