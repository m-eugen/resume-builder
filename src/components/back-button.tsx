import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'

export default function BackButton() {
  return (
    <Button asChild variant="ghost" className="gap-2">
      <Link href="/">
        <ArrowLeft className="size-4" />
        Back
      </Link>
    </Button>
  )
}
