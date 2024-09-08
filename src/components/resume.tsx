import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  calculateLanguagePercentages,
  formatYear,
  getInitials,
} from '@/lib/utils'
import { GitHubRepo, GitHubUser } from '@/lib/types'
import Profile from './profile'
import LanguagesStats from './languages-stats'
import Repositories from './repositories'

export default function Resume({
  user,
  repos,
}: {
  user: GitHubUser
  repos: GitHubRepo[]
}) {
  if (!user) return null
  return (
    <Card className="flex flex-col w-full max-w-screen-lg shadow-none">
      <div className="flex flex-col md:flex-row border-b border-border p-4 mb-4 w-full">
        <Avatar className="w-24 h-24">
          <AvatarImage src={user.avatar_url} alt={user.name || user.login} />
          <AvatarFallback>
            {user.name ? getInitials(user.name) : user.login.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col mt-6 md:mt-0 md:ml-6">
          {user.name && (
            <h1 className="text-2xl font-bold uppercase">{user.name}</h1>
          )}
          <p className="text-lg text-muted-foreground mt-1">@{user.login}</p>
          <Profile
            name={user.name}
            username={user.login}
            since={formatYear(user.created_at)}
            location={user.location}
            public_repos={user.public_repos}
            followers={user.followers}
            className="mt-2"
          />
          {user.blog && (
            <Link
              href={user.blog}
              target="_blank"
              className="text-primary hover:underline mt-2"
            >
              {user.blog}
            </Link>
          )}
        </div>
      </div>
      <LanguagesStats
        languages={calculateLanguagePercentages(repos)}
        username={user.login}
        className="flex-1 border-b border-border mb-4"
      />
      <Repositories repos={repos} className="mb-4" />
    </Card>
  )
}
