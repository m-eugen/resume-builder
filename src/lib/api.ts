import 'server-only'

import { GitHubRepo, GitHubUser } from './types'

export async function getUser(username: string): Promise<GitHubUser | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    })

    if (res.status === 404) {
      return null
    }

    return res.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getUserRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    })
    return res.json()
  } catch (error) {
    console.error(error)
    return []
  }
}
