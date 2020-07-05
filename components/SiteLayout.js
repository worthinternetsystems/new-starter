import Head from 'next/head';
import Link from 'next/link';
import Menu from './Menu';
import { useRouter } from 'next/router';

const SiteLayout = ({ children }) => (
  <div className="container">
    <Head>
      <title>Welcome</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
    <h1>
    <Link href="/">
    <a>Welcome to WORTH Engineering</a>
    </Link>
    </h1>

    {useRouter().pathname !== "/" && <Menu />}
    </header>
    <div>{children}</div>
  </div>
);

export default SiteLayout;
