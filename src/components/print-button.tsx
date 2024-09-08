'use client'

import { Button } from './ui/button'

export default function PrintButton() {
  return <Button onClick={() => window.print()}>Print</Button>
}
