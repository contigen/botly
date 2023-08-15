import { CardWrapper } from './card-wrapper'
import { CardBody } from '@nextui-org/card'

export function AudienceCard() {
  return (
    <CardWrapper>
      <h4>Audience Card</h4>
      <CardBody className='px-0'>
        <h2>68%</h2>
      </CardBody>
    </CardWrapper>
  )
}
