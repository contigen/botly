import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { ArrowRight2 } from 'iconsax-react'
import { Spacer } from '@nextui-org/spacer'
import FlexBox from './flex-box'
import Image from 'next/image'
import charSrc from '@/public/botly-3d-character.webp'

const ArrowRightIcon = <ArrowRight2 size='16' />
const USERS_METRICS = [
  {
    title: 'Active User',
    value: 678,
    percentage: 32,
  },
  {
    title: 'New',
    value: 256,
    percentage: 48,
  },
  {
    title: 'Cancelled',
    value: 12,
    percentage: 48,
  },
]

export function UserCard() {
  return (
    <Card isFooterBlurred className='relative border rounded-3xl' shadow='none'>
      <FlexBox className='w-full' justifyContent='evenly'>
        <CardBody className='static'>
          <h1>
            Unlock Pro <br />
            Insights
          </h1>
          <Spacer y={4} />
          <FlexBox justifyContent='between'>
            <Button endContent={ArrowRightIcon} radius='sm' size='sm'>
              View earning
            </Button>
          </FlexBox>
        </CardBody>
        <div>
          <Image
            src={charSrc}
            alt='An illustration of a 3D character standing in motion, as if running, holding a laptop, wearing stylish glasses, a backpack, and a backwards cap, projecting a tech-savvy and adventurous persona'
            height={300}
            placeholder='blur'
            priority
            className=''
          />
        </div>
      </FlexBox>
      <Spacer y={4} />
      <CardFooter className='bg-zinc-50 rounded-2xl w-auto m-3'>
        {USERS_METRICS.map(({ title, value, percentage }) => (
          <FlexBox key={title} className='w-full' justifyContent='evenly'>
            <FlexBox direction='column'>
              <span className='text-lg font-bold'>{title}</span>
              <div className='[&>*]:inline-block [&>*]:align-top'>
                <h2 className='font-bold leading-none'>{value}</h2>
                <span
                  className={`text-xs ${
                    title === `Cancelled` ? 'text-red-500' : 'text-emerald-600'
                  }`}
                >
                  {percentage}%
                </span>
              </div>
            </FlexBox>
          </FlexBox>
        ))}
      </CardFooter>
    </Card>
  )
}
