import { Header } from './(ui)/header'
import { UserCard } from './(ui)/card'
import { Spacer } from '@nextui-org/spacer'

export default function Home() {
  return (
    <main className=''>
      <Header />
      <Spacer y={20} />
      <UserCard />
    </main>
  )
}
