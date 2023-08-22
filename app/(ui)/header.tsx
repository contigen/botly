import FlexBox from './flex-box'
import { icons } from './icons'
import { Avatar } from '@nextui-org/avatar'
import { IconButton } from './icon-button'

const { AddIcon, ArrowLeftIcon, ArrowRightIcon, SearchIcon, NotificationIcon } =
  icons

export function Header() {
  return (
    <FlexBox className='' justifyContent='between'>
      <FlexBox className=''>
        <h3>Insights</h3>
        <FlexBox alignItems='center' justifyContent='around' className=''>
          {ArrowLeftIcon}
          {ArrowRightIcon}
        </FlexBox>
      </FlexBox>
      <IconsList />
    </FlexBox>
  )
}

const IconsList = () => (
  <FlexBox
    className='hidden basis-1/4 md:flex'
    justifyContent='evenly'
    alignItems='center'
  >
    <IconButton>{AddIcon}</IconButton>
    <IconButton>{SearchIcon}</IconButton>
    <IconButton>{NotificationIcon}</IconButton>
    <Avatar size='sm' isBordered isFocusable as='button' />
  </FlexBox>
)
