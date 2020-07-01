import Head from 'next/head';
import Link from 'next/link';

const SiteLayout = ({ children }) => (
  <div className="container">
    <Head>
      <title>Welcome</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1><Link href="/"><a>Welcome to Worth Engineering</a></Link></h1>
    <div>{children}</div>
    <ul className="menu">
      <li>
        <Link href="/launch/ignition">
          <a>Ignition</a>
        </Link>
      </li>
      <li>
        <Link href="/launch/lift-off">
          <a>Lift off!</a>
        </Link>
      </li>
      <li>
        <Link href="/launch/stage-one-seperation">
          <a>Stage 1 Seperation</a>
        </Link>
      </li>
      <li>
        <Link href="/launch/stage-two-seperation">
          <a>Stage 2 Seperation</a>
        </Link>
      </li>
      <li>
        <Link href="/launch/orbital">
          <a>Orbital</a>
        </Link>
      </li>
    </ul>

  </div>
);

export default SiteLayout;
