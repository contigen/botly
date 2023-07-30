import { tv } from 'tailwind-variants'
import { ComponentProps as FlexBoxProps } from './types/component.type'

const flexVariants = tv({
    base: 'flex',
    variants: {
        direction: {
            column: 'flex-col',
        },
        justifyContent: {
            around: 'justify-around',
            between: 'justify-between',
            center: 'justify-center',
            end: 'justify-end',
            evenly: 'justify-evenly',
        },
        alignItems: {
            center: 'items-center',
            end: 'items-end',
        },
    },
})

export default function FlexBox({
    children,
    direction,
    justifyContent,
    alignItems,
    className,
}: FlexBoxProps & {
    direction?: 'column' | undefined
    justifyContent?:
        | 'center'
        | 'around'
        | 'between'
        | 'end'
        | 'evenly'
        | undefined
    alignItems?: 'center' | 'end' | undefined
    className?: string
}) {
    return (
        <div
            className={flexVariants({
                direction,
                justifyContent,
                alignItems,
                className,
            })}
        >
            {children}
        </div>
    )
}
