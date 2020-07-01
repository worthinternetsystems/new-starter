import Head from "next/head";

export default function Home() {
  return (
      <main>
        <h2>Lift Off</h2>
        <p>Let's help get you started & installed </p>
        <ul>
          <li>Who Worth is?</li>
          <li>Values and what they mean in practice? Expert, Open, Impact, Pragmatic, Team.</li>
         <li>People at Worth</li>
        </ul>
        
        <p>We'll be getting you into a project as quickly as possible. We operate
        a lot as a mob (you'll understand more about what that means as you go along).
        It's essentially a team, but you'll work on the same thing together. This
        is quicker than working as individuals, because you can make decisions much
    quicker. More important at the moment, though, is that it's a great place to
    learn. It'll put you in driving seat quickly and you'll have the support so you
    won't feel alone and you won't fear mistakes. You'll being code in the open
    and learning rapidly.</p>

    <p>To work in the mob you're going to have to get connected to the source code
    (github, bitbucket, Azure Devops etc) - i.e. the products we build - 
    get connected to the project mission / goals - i.e. what we're building and why.
    Our teams are often a hybrid of Worth employees, contractors and clients - we're
    all aligned on the common goal so we're all equal, open and mostly friendly.
    You'll get invites to common ceremonies such as stand ups, show and tells.</p>

    <p>You'll also need to log your time (Harvest). Once we're out of lock down you
    may need to claim expenses (Expensify). You'll probably want to book holidays
    (timestastic).</p>

    <p>And finally we meet up several times a week for some group activities.
    We do prefer to meet up in person, but we're in interesting times at the moment
    so get used to lots of zoom, google meetings and slack calls. We have a social
    once a week currently called Thirsty Thursday, or DigiDrinks if we have it on
    Friday. We also have guild meetings, company updates every other week. NL run
    Guilds as well, which are great to get in to.</p>

    <ul className="raci">
      <li className="responsible">Get coding - get stuff installed</li>
      <li className="accountable">Commit some code. Are you logging your time?</li>
      <li className="consulted">Have you been given what you need to start work? Any blockers?</li>
        <li className="informed">
          Have you been told that you have to do a presentation about
          yourself yet? Have you been talked through the code base that you’re
          working on. Have you been introduced to all of your squadmates?
        </li>
    </ul>
        We really care about the followins, and we'll explain why they're important to us.
        <ul>
          <li>Test Pyramid</li>
          <li>TDD / BDD</li>
          <li>Mobbing</li>
          <li>Automation</li>
          <li>Being a polyglot</li>
          <li>Being T-Shaped</li>
        </ul>
      </main>
  );
}
