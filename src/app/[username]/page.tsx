import BackButton from '@/components/back-button'
import NavBar from '@/components/nav-bar'
import Resume from '@/components/resume'
import UserNotFound from '@/components/user-not-found'
import { getUser, getUserRepos } from '@/lib/api'
import { Metadata } from 'next'

export const generateMetadata = async ({
  params,
}: {
  params: { username: string }
}): Promise<Metadata> => {
  const user = await getUser(params.username)
  return {
    title: user?.name || 'Resume Builder',
    description: user?.bio || 'Build your resume in minutes, not hours.',
    openGraph: {
      images: [user?.avatar_url || ''],
    },
  }
}

export default async function UsernamePage({
  params,
}: {
  params: { username: string }
}) {
  const [user, repos] = await Promise.all([
    getUser(params.username),
    getUserRepos(params.username),
  ])

  if (!user) {
    return <UserNotFound />
  }

  return (
    <main className="min-h-screen flex items-center flex-col px-4">
      <NavBar>
        <BackButton />
      </NavBar>
      <Resume user={user} repos={repos} />
    </main>
  )
}
