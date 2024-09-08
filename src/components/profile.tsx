import Link from 'next/link'
import { cn } from '@/lib/utils'
import { GitHubUser } from '@/lib/types'
export default function Profile({
  name,
  username,
  location,
  public_repos,
  followers,
  className,
  since,
}: Pick<GitHubUser, 'name' | 'location' | 'public_repos' | 'followers'> & {
  username: string
  since: string
  className?: string
}) {
  return (
    <div className={cn('block', className)}>
      <p>
        On GitHub since {since}, {name || username} is a developer based in{' '}
        {location || 'Unknown'} with{' '}
        <Link
          href={`https://github.com/${username}?tab=repositories`}
          target="_blank"
          className="underline text-primary hover:no-underline"
        >
          {public_repos} public repositories
        </Link>{' '}
        and{' '}
        <Link
          href={`https://github.com/${username}?tab=followers`}
          target="_blank"
          className="underline text-primary hover:no-underline"
        >
          {followers} followers
        </Link>
        .
      </p>
    </div>
  )
}
