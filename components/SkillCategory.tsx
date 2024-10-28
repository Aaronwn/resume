export function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="mt-12 first:mt-0">
      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">{title}</h3>
      <ul className="mt-4 space-y-4">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center space-x-3">
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-teal-500" />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
