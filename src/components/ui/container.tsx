import clsx from 'clsx'
import { ComponentProps, ReactNode } from 'react'

interface ContainerProps extends ComponentProps<'main'> {
  children: ReactNode
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <main
      className={clsx(
        'container flex items-center justify-center min-h-screen ',
        className
      )}
    >
      {children}
    </main>
  )
}
