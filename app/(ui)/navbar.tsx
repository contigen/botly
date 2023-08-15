import { Divider } from '@nextui-org/divider'
import { Button } from '@nextui-org/button'
import {Spacer} from '@nextui-org/spacer'
import FlexBox from './flex-box'
import { icons } from './icons'
import { Category2, Game, Home } from 'iconsax-react'
import Image from 'next/image'
import logo from '@/public/supaui.webp'

const ICONS = [
  <Home color='#d9e3f0' />,
  <Game size='32' color='#d9e3f0' />,
  <Category2 size='32' color='#d9e3f0' />,
]

export function Navbar() {
  return (
    <FlexBox className='m-2 border rounded-xl bg-black/95 gap-4' direction='column' alignItems='center'>
      <Image src={logo} alt='logo for botly' width={80} quality={100} />
      <Spacer y={2} />
        {ICONS.map((icon, idx) => (
          <Button key={idx} isIconOnly className='bg-transparent'>
            {icon}
            <Divider orientation='vertical' />
          </Button>
        ))}
    </FlexBox>
  )
}
