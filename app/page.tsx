import { Header } from './(ui)/header'
import { Spacer } from '@nextui-org/spacer'
import { Cards } from './(ui)/cards'
import { Navbar } from './(ui)/navbar'
import FlexBox from './(ui)/flex-box'
import { DataTable } from './(ui)/data-table'

export default function Home() {
  return (
    <FlexBox className='gap-2'>
      <Navbar />
      <section className='flex-1 pt-2'>
        <Header />
        <Spacer y={20} />
        <main>
          <Cards />
        </main>
        <Spacer y={5} />
        <DataTable />
      </section>
    </FlexBox>
  )
}
