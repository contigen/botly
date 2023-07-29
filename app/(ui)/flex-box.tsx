import { tv } from 'tailwind-variants'
import { ComponentProps as FlexBoxProps } from './types/component.type'

const flexStyles = tv({
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
    defaultVariants: {},
})

export default function FlexBox({
    children,
    className,
}: FlexBoxProps & { className?: {} }) {
    return <div className={flexStyles(className)}>{children}</div>
}
