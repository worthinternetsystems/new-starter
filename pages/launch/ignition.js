import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Engineering.</h1>
        <h2>Ignition</h2>
        <p>Hello. 🤗</p>
        <p>
          We just wanted to make sure that you have access and you've gotten
          onto the slack channels, make sure that you're connected to things
          like #WorthReading ⛄️ #SnowFever .
        </p>
        <p>
          We'll help you get to know the project that you're on, but don't worry
          about that right now!
        </p>
        <p>
          Where do <em>you</em> want to go? We'll be talking to you about
          progression and lots of other things! But don't worry about them for
          now. 🙂
        </p>

        <ul>
          <li>
            Have you got signed on...
            <ul>
              <li>
                Slack
                <ul>
                  <li>#Worth-reading</li>
                  <li>#snowfeverworth</li>
                </ul>
              </li>
              <li>Email 📧</li>
              <li>Harvest (Timesheets)</li>
              <li>
                Calendar invites
                <ul>
                  <li>Thirsty Thursday</li>
                  <li>Timetastic</li>
                  <li>Bi-weekly Meeting</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="raci">
          <li>
            <span>R: </span>Get yourself comfortable 🧶
          </li>
          <li>
            <span>A: </span>Saying hello on slack, make yourself known👀
          </li>
          <li>
            <span>C: </span>Have people asked if you’re OK? Have you been asked
            what your T-Shirt size is🦻
          </li>
          <li>
            <span>I: </span>Have you got your welcome box? Welcome email? some
            calendar invites? 📅
          </li>
        </ul>
      </main>
    </div>
  );
}
