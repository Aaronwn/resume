import Container from '@/components/Container'

function ToolSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </h2>
        <div className="md:col-span-3">
          <ul role="list" className="space-y-16">
            {children}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Tool({ title, href, children }: { title: string; href?: string; children: React.ReactNode }) {
  return (
    <li className="group relative flex flex-col items-start">
      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
            <span className="relative z-10">{title}</span>
          </a>
        ) : (
          <span>{title}</span>
        )}
      </h3>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {children}
      </p>
    </li>
  )
}

export default function Uses() {
  return (
    <div className="mt-40 sm:mt-48">  {/* 增加了顶部间距 */}
      <Container>
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software I use, gadgets I love, and other things I recommend.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I'm being productive when I'm really just procrastinating. Here's a big list of all of my favorite stuff.
          </p>
        </header>
        <div className="mt-16 sm:mt-20">
          <div className="space-y-20">
            <ToolSection title="Workstation">
              <Tool title="16&quot; MacBook Pro, M1 Max, 64GB RAM (2021)">
                I was using an Intel-based 16" MacBook Pro prior to this and the difference is night and day. I've never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various build processes.
              </Tool>
              <Tool title="Apple Pro Display XDR (Standard Glass)">
                The only display on the market if you want something HiDPI and bigger than 27". When you're working at planetary scale, every pixel you can get counts.
              </Tool>
              <Tool title="IBM Model M SSK Industrial Keyboard">
                They don't make keyboards the way they used to. I buy these any time I see them go up for sale and keep them in storage in case I need parts or need to retire my main.
              </Tool>
            </ToolSection>
            <ToolSection title="Development tools">
              <Tool title="VS Code" href="https://code.visualstudio.com/">
                I don't care if it's missing all of the fancy IDE features everyone else relies on, VS Code is still the best text editor ever made.
              </Tool>
              <Tool title="iTerm2" href="https://iterm2.com/">
                I'm honestly not even sure what features I get with this that aren't just part of the macOS Terminal but it's what I use.
              </Tool>
              <Tool title="TablePlus" href="https://tableplus.com/">
                Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.
              </Tool>
            </ToolSection>
            <ToolSection title="Design">
              <Tool title="Figma" href="https://www.figma.com/">
                We started using Figma as just a design tool but now it's become our virtual whiteboard for the entire company. Never would have expected the collaboration features to be the real hook.
              </Tool>
            </ToolSection>
            <ToolSection title="Productivity">
              <Tool title="Alfred" href="https://www.alfredapp.com/">
                It's not the newest kid on the block but it's still the fastest. The Sublime Text of the application launcher world.
              </Tool>
              <Tool title="Reflect" href="https://reflect.app/">
                Using a daily notes system instead of trying to keep things organized by topics has been super powerful for me. And with Reflect, it's still easy for me to find anything by topic even though all of my writing happens in the daily note.
              </Tool>
              <Tool title="SavvyCal" href="https://savvycal.com/">
                Great tool for scheduling meetings while protecting my calendar and making sure I still have lots of time for deep work during the week.
              </Tool>
            </ToolSection>
          </div>
        </div>
      </Container>
    </div>
  )
}
