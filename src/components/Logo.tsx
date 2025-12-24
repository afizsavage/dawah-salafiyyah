import Image from 'next/image'
import tioLogo from '@/images/tio_logo.jpeg'

export function Logo({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={className} {...props}>
      <Image
        src={tioLogo}
        alt="Tawheed Islamic Organization Logo"
        width={120}
        height={48}
        className="h-12 w-auto"
        priority
      />
    </div>
  )
}
