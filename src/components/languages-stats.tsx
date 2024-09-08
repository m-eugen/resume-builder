import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function LanguagesStats({
  languages,
  username,
  className,
}: {
  languages: { name: string; percentage: number }[]
  username: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col p-4 md:flex-row', className)}>
      <h2 className="text-lg font-bold w-full md:w-4/12 mb-4 md:mb-0">
        Languages
      </h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 w-full md:w-8/12">
        {languages.map(({ name, percentage }) => (
          <div key={name} className="flex justify-between bg-muted py-2 px-4">
            <Link
              href={`https://github.com/search?q=user:${username}+language:${name}`}
              target="_blank"
              className="hover:underline text-primary"
            >
              {name}
            </Link>
            <span className="text-muted-foreground text-sm">
              ({percentage}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
