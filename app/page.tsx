import { Button } from '@nextui-org/button'
import { Header } from './(ui)/header'
import { ArrowRight2 } from 'iconsax-react'

const ArrowRightIcon = <ArrowRight2 size='16' />

export default function Home() {
    return (
        <main className=''>
            <Header />
            <h1>
                Unlock Pro <br />
                Using Botly &mdash; the new
                <span className='text-blue-600'> AI</span> dashboard tool
            </h1>
            <Button>View earning {ArrowRightIcon}</Button>
            <div className='bg-gradient-to-tr from-[#DAC2E5] via-[#FBDDB7] to-[#D6DCD1] p-10 rounded-2xl'>
                <h2>Available Balance</h2>
            </div>
        </main>
    )
}
