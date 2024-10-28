export function ExperienceItem({
  title,
  company,
  date,
  description
}: {
  title: string
  company: string
  date: string
  description: string[]
}) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <div className="md:col-span-3 group relative flex flex-col items-start">
        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          {title} @ {company}
        </h3>
        <time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 dark:text-zinc-400">
          {date}
        </time>
        <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description.map((item, index) => (
            <div key={index} className="mt-4 first:mt-0 flex items-start">
              <span className="flex-none flex items-center justify-center w-8">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <time className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 dark:text-zinc-400">
        {date}
      </time>
    </article>
  );
}
