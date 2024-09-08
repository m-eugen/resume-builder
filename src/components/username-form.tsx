'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function UsernameForm() {
  const [username, setUsername] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/${username}`)
  }

  return (
    <Card className="p-4 w-full max-w-lg">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-2 flex-col md:flex-row">
          <Input
            id="username"
            type="text"
            placeholder="Enter your GitHub username and click generate"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            type="submit"
            disabled={!username}
            className="w-full md:w-auto"
          >
            Generate
          </Button>
        </div>
      </form>
    </Card>
  )
}
