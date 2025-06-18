import { AtomsButton } from '@/components/atoms'
import { ButtonProps } from '@/components/atoms/button/button'
import classNames from 'clsx'
import { FC } from 'react'

export const Button: FC<ButtonProps> = ({
  size = 'lg',
  variant = 'default',
  type = 'submit',
  children,
  disabled = false,
  icon,
  iconPosition = 'right',
  className,
  ...props
}) => {
  return (
    <AtomsButton
      {...props}
      className={classNames(className, disabled && '!cursor-not-allowed')}
      disabled={disabled}
      size={size}
      variant={variant}
      type={type}
    >
      <div
        className={classNames([
          'flex justify-between gap-2 items-center h-full',
          iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row',
        ])}
      >
        {icon}
        {children}
      </div>
    </AtomsButton>
  )
}
