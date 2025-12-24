import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="flex-none py-16 bg-slate-900">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto text-white" />
        <p className="mt-6 text-base text-slate-400 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} Tawheed Islamic Organization. All
          rights reserved.
        </p>
      </Container>
    </footer>
  )
}
