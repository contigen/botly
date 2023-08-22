import { Divider } from "@nextui-org/divider"
import { Spacer } from "@nextui-org/spacer"
import FlexBox from "./flex-box"
import {
  Box1,
  Calendar,
  Category2,
  Game,
  Home,
  SidebarLeft,
  Wallet3,
} from "iconsax-react"
import Image from "next/image"
import logo from "@/public/supaui.webp"
import { IconButton } from "./icon-button"

const ICONS_COLOR = { color: `#AFAFAF` }
const dividerBg = `bg-[${ICONS_COLOR.color}]`
/* eslint-disable react/jsx-key*/
const ICONS = [
  <Home {...ICONS_COLOR} />,
  <Game {...ICONS_COLOR} />,
  <Calendar {...ICONS_COLOR} />,
  <Wallet3 {...ICONS_COLOR} />,
  <Box1 {...ICONS_COLOR} />,
  <Category2 {...ICONS_COLOR} />,
]
/* eslint-enable react/jsx-key*/

export function Navbar() {
  return (
    <FlexBox
      className='gap-5 rounded-2xl bg-[#1D1D1D] py-4 hidden md:flex'
      direction='column'
      alignItems='center'
    >
      <Image src={logo} alt='logo for botly' width={70} quality={100} />
      <Spacer y={0} />
      {ICONS.map((icon, idx, arr) => (
        <>
          <IconButton
            key={idx}
            className={idx === arr.length - 3 ? `active` : ``}
          >
            {icon}
          </IconButton>
          {icon === arr.at(-2) && (
            <Divider
              orientation='horizontal'
              className='mx-2 bg-[#3B3B3B] w-5 h-[2px]'
            />
          )}
        </>
      ))}
      <FlexBox className='flex-1 pb-4' alignItems='end'>
        <IconButton>
          <SidebarLeft {...ICONS_COLOR} />
        </IconButton>
      </FlexBox>
    </FlexBox>
  )
}
