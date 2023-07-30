import FlexBox from './flex-box'
import { icons } from './icons'
import { Avatar } from '@nextui-org/avatar'

const { AddIcon, ArrowLeftIcon, ArrowRightIcon, SearchIcon, NotificationIcon } =
    icons

export function Header() {
    return (
        <FlexBox className='' justifyContent='between'>
            <FlexBox className=''>
                <h3>Insights</h3>
                <FlexBox
                    alignItems='center'
                    justifyContent='around'
                    className=''
                >
                    {ArrowLeftIcon}
                    {ArrowRightIcon}
                </FlexBox>
            </FlexBox>
            <IconsList />
        </FlexBox>
    )
}

const IconsList = () => (
    <FlexBox className='basis-1/4' justifyContent='evenly'>
        {NotificationIcon}
        {SearchIcon} {AddIcon}
        <Avatar size='sm' isBordered isFocusable />
    </FlexBox>
)
