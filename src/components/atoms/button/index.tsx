import { cn } from '@/shared/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { AtomButtonProps } from './button'
import { buttonVariants } from './type'

export const AtomsButton = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: AtomButtonProps) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
