"use client"
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

function Home() {
  return (
    <div>
      <Button size="lg" onClick={() => toast.success("clicked in button")}>
        click me
      </Button>
    </div>
  )
}

export default Home
