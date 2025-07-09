import Head from 'next/head';

export default function ResourcePreloader() {
  return (
    <Head>
      <link rel="preload" href="/hero.png" as="image" />
      <link rel="preload" href="/stats.jpg" as="image" />
    </Head>
  );
}
