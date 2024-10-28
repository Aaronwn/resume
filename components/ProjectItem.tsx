export function ProjectItem({ project }: { project: any }) {
  return (
    <div className="group relative flex flex-col items-start">
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <span className="relative z-10">{project.name}</span>
      </h2>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
      <p className="relative z-10 mt-4 text-sm text-teal-500">技术栈：{project.tech}</p>
      <div className="relative z-10 mt-4">
        <ul className="space-y-2">
          {project.highlights.map((highlight: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="flex-none flex items-center justify-center w-8">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
              </span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
