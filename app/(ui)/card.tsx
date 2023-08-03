import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { ArrowRight2 } from 'iconsax-react'
import { Spacer } from '@nextui-org/spacer'
import {Flexbox} from './flex-box'

const ArrowRightIcon = <ArrowRight2 size='16' />

export function UserCard() {
  return (
    <Card>
      <CardHeader>
        <h1>Unlock Pro Insights</h1>
      </CardHeader>
      <Spacer y={4} />
      <Button endContent={ArrowRightIcon} radius='sm' size='sm'>
        View earning
      </Button>
      <CardFooter>
        <FlexBox>
          <sup><Arrow2 size='14'/>32%</sup>
          <span>678</span>
          </FlexBox>
      </CardFooter>
    </Card>
  )
}
