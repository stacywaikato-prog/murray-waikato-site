/** Marks te reo Māori for screen readers and hyphenation (lang="mi"). */
export function Reo({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span lang="mi" className={className}>{children}</span>;
}
