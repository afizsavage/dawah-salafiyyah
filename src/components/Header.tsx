import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11 bg-slate-900">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto border-b border-yellow-400/20 py-4 font-mono text-sm whitespace-nowrap text-yellow-400 sm:-mx-6 lg:order-0 lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2025-12-25">25</time>-
              <time dateTime="2025-12-28">28 of December, 2025</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Freetown, SL</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button
            href="https://us06web.zoom.us/j/5715126510?pwd=XIbYgr4ZDnCR1JFFDeOHRSUKVAWi1R.1"
            target="_blank"
            rel="noopener noreferrer">
            Attend Remotely
          </Button>
        </div>
      </Container>
    </header>
  )
}
