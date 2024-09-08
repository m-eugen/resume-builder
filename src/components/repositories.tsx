import { GitHubRepo } from '@/lib/types'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Repositories({
  repos,
  className,
}: {
  repos: GitHubRepo[]
  className?: string
}) {
  const sortedRepos = repos
    .sort(
      (a, b) =>
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    )
    .slice(0, 5)

  return (
    <div className={cn('flex flex-col p-4 md:flex-row', className)}>
      <h2 className="text-lg font-bold w-full md:w-4/12 mb-4 md:mb-0">
        Popular Repositories
      </h2>
      <ul className="flex flex-col gap-2 w-full md:w-8/12">
        {sortedRepos.map((repo) => (
          <li key={repo.id} className="flex flex-col gap-2 p-2 bg-muted w-full">
            <div className="flex justify-between">
              <Link
                href={repo.html_url}
                target="_blank"
                className="text-primary hover:underline font-bold"
              >
                {repo.name}
              </Link>
              <span className="text-muted-foreground text-sm">
                {repo.language}
              </span>
            </div>
            {repo.description && <p>{repo.description}</p>}
            <small>
              Last updated: {new Date(repo.pushed_at).toLocaleDateString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  )
}
