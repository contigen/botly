import FlexBox from './flex-box'
import { ArrowLeftIcon, ArrowRightIcon } from './icons'

export function Header() {
    return (
        <FlexBox>
            <h3>Insights</h3>
            <FlexBox alignItems='center'>
                {ArrowLeftIcon}
                {ArrowRightIcon}
            </FlexBox>
        </FlexBox>
    )
}
