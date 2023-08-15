import { AudienceCard } from './audience-card'
import FlexBox from './flex-box'
import { MemberCard } from './member-card'
import { UserCard } from './user-card'

export function Cards() {
  return (
    <FlexBox className='gap-2 md:[&>*]:flex-1'>
      <UserCard />
      <FlexBox direction='column' className='gap-2'>
        <MemberCard />
        <AudienceCard />
      </FlexBox>
    </FlexBox>
  )
}
