import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'
import Link, { LinkProps } from 'next/link'
import { ComponentProps } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2',
  {
    variants: {
      variant: {
        default: 'bg-[#262C48] text-indigo-300 hover:bg-[#262C48]/90'
      },
      size: {
        default: 'h-10 px-4 py-2 text-sm',
        sm: 'h-9 px-3',
        lg: 'h-12 px-6 text-lg',
        icon: 'size-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

interface LinkButtonProps
  extends ComponentProps<'a'>,
    LinkProps,
    VariantProps<typeof buttonVariants> {
  href: string
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
  disabled?: boolean
}

export const LinkButton = ({
  href,
  className,
  variant,
  size,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  children,
  disabled,
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={clsx(buttonVariants({ variant, size, className }), {
        'pointer-events-none opacity-50': disabled
      })}
      {...props}
    >
      <>
        {LeftIcon && (
          <LeftIcon
            className={clsx({
              'size-5': size === 'lg',
              'size-4': size === 'default'
            })}
          />
        )}
        {children}
        {RightIcon && (
          <RightIcon
            className={clsx({
              'size-5': size === 'lg',
              'size-4': size === 'default'
            })}
          />
        )}
      </>
    </Link>
  )
}
