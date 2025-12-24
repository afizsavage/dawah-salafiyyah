import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24 bg-slate-900">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-white sm:text-7xl">
            <span className="sr-only">Da'wah Salafiyyah Sierra Leone – 7th Annual Conference - </span>Da'wah Salafiyyah Sierra Leone – 7th Annual Conference
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-white">
            <p className="text-yellow-400 font-semibold">
              The Importance of Tawheed in a Person's Life
            </p>
          </div>
          <Button
            href="https://us06web.zoom.us/j/5715126510?pwd=XIbYgr4ZDnCR1JFFDeOHRSUKVAWi1R.1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 w-full sm:hidden"
          >
            Attend Remotely
          </Button>
          <dl className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', '7'],
              ['Venue', 'Masjid Nurul Islam'],
              ['Location', 'Adolphus Street, Freetown'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-yellow-400">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-white">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
