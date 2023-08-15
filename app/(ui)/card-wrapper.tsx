'use client'

import { Card, CardBody } from '@nextui-org/react'
import { ComponentProps as CardWrapperProps } from './types/component.type'

export function CardWrapper({ children }: CardWrapperProps) {
  return (
    <Card shadow='none' className='border-1 px-5 py-2 w-full'>
      {children}
    </Card>
  )
}
