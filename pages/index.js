import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Letter to new starter at Worth</h1>
        <p>Dear, New Starter</p>
        <p>Welcome :)</p>
        <p>
          Everything you’ll experience on the first day, get around ambiguity,
          who you should talk to, low-level anxieties. What is the next thing
          you might need? Where are you sitting and who is sitting around you.
          Programs you need. What accounts to set up. List of slack channels.
        </p>
        <p>Where is everyone? We’re remoting a lot now.</p>
        <p>
          Eager to find people who don’t spell out certain rules. How to relax
          in your role.
        </p>
        <p>It’s your first day!</p>
        <h3>Get onto slack, the channels you’ll need are:</h3>
        <ul>
          <li>#Worth-Reading</li>
          <li>#Tech</li>
          <li>#FridayGuild</li>
          <li>#Food (AMEND)</li>
        </ul>
        <p>
          Discover them all! Use the search and feel free to join any that look
          interesting.
        </p>
        <p>
          Hopefully, you’ve got your welcome box! At any point, you shouldn’t
          hesitate to speak to Holly (or Courtney if she isn’t immediately able
          to help you!)
        </p>
        <p>
          If you’ve got any spare moments, it’s worth getting your local
          environment configured just the way you like it!
        </p>
        <p>Things we like:</p>
        <ul>
          <li>Brew (You can use this to quickly get the others!)</li>
          <li>VSCode</li>
          <li>Fish/ZSH</li>
          <li>nano</li>
          <li>Git</li>
          <li>Zoom</li>
          <li>DrawIO</li>
          <li>Node</li>
        </ul>
        <p>
          Read #readingbookclub slack channel for what we're currently reading.
        </p>
        <p></p>Toolkits:
        <ul>
          <li>Getting started with React, serverless framework</li>
          <li>VSCode Extensions</li>
          <li>DrawIO</li>
        </ul>
      </main>



      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          max-width: 60rem;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
        }

        footer img {
          margin-left: 0.5rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
