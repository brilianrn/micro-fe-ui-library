import { VariantProps } from 'class-variance-authority'
import React, { ReactNode } from 'react'
import { buttonVariants } from './type'

export interface AtomButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export interface ButtonProps extends AtomButtonProps {
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}
