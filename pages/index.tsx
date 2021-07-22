import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
        <p className="text-light"> A computer science student, I stare at a computer all day and sometimes I write about it. I am currently learning Javascript and ReactJS. you can find most of my work on <a href="https://github.com/youssefbouzekri" rel='noreferrer' target="_blank">github</a>. I also occasionally <a href="https://twitter.com/youssefonlinux" target="_blank" rel="noreferrer">tweet</a> stuff, do not take twitter too seriously though</p>
        <br />
      <h3 className="!text-accent uppercase tracking-widest">Recently Published</h3>
      {posts.map((post) => (
        <article key={post.slug} className="mt-6">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-primary">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3 text-light">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;
