export default function Container({ className = '', children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </div>
  );
}
