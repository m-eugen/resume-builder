import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function UserNotFound() {
  return (
    <Card className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">User not found</h1>
      <p className="text-muted-foreground mb-4 text-center max-w-md">
        The user you are looking for does not exist. Please check the username
        and try again.
      </p>
      <Button asChild variant="outline">
        <Link href="/">Go back to the homepage</Link>
      </Button>
    </Card>
  )
}
