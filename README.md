<h1>AI Twin</h1>

<p>The idea: I built a version of me that can think, talk, and code the way I do.<br>
Call it my AI twin.
<h2>What it does</h2>
<ul>
  <li>Talks how I speak and respond</li>
  <li>Writes code the way I usually write it</li>
  <li>Handles chats, tasks, and reasoning like a cloned brain</li>
  <li>Fully interactive web app with auth, sessions, and memory</li>
</ul>

<h2>Tech behind it</h2>
<ul>
  <li>Node.js (API logic)</li>
  <li>Next.js + React (frontend, routing, UI)</li>
  <li>Clerk (auth, sessions, OAuth)</li>
  <li>NLP pipeline for style + behavior modeling</li>
  <li>OpenRouter models for generation</li>
  <li>Realtime syncing between user prompts and AI responses</li>
</ul>


<h2>How it works (short version)</h2>
<ul>
  <li>User logs in through Clerk</li>
  <li>Backend pulls their session and routes the input</li>
  <li>NLP layer shapes the prompt to match my tone + reasoning patterns</li>
  <li>OpenRouter handles generation</li>
  <li>UI streams the response in real time</li>
</ul>

<h2>Why I built it</h2>
<p>Wanted to see if I could turn my own thinking style into a working system instead of a gimmick.<br>
This repo is the result.</p>

<h2>Future ideas</h2>
<ul>
  <li>Memory layer that adapts based on long-term sessions</li>
  <li>Voice input + voice cloning using Whisper and Eleven Labs</li>
  <li>More tools the AI twin can use (photo, files)</li>
</ul>
