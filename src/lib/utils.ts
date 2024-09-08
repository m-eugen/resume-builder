import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { GitHubRepo } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function calculateLanguagePercentages(repos: GitHubRepo[]) {
  if (repos.length === 0) {
    return []
  }

  const languages = repos.reduce(
    (acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1
      }
      return acc
    },
    {} as Record<string, number>
  )

  const totalRepos = Object.values(languages).reduce(
    (sum, count) => sum + count,
    0
  )

  return Object.entries(languages)
    .map(([language, count]) => ({
      name: language,
      percentage: Math.round((count / totalRepos) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage)
}

export function formatYear(dateString: string): string {
  return new Date(dateString).getFullYear().toString()
}
