import Head from 'next/head';
import Link from 'next/link';
import Menu from './Menu';

const SiteLayout = ({ children }) => (
  <div className="container">
    <Head>
      <title>Welcome</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1><Link href="/"><a>Welcome to WORTH Engineering</a></Link></h1>
    <div>{children}</div>

    <Menu />
  </div>
);

export default SiteLayout;
