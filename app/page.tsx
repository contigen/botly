import { Button } from '@nextui-org/button'
import { Volume } from './(ui)/icons'
import { ArrowRight2, Home as HomeIcon } from 'iconsax-react'

export default function Home() {
    return (
        <main className=''>
            <h1>
                Unlock Pro <br />
                Using Botly &mdash; the new
                <span className='text-blue-600'> AI</span> dahsboard tool
            </h1>
            <Button>View earnings</Button>
            <Volume />
            <div className='bg-gradient-to-tr from-[#DAC2E5] via-[#FBDDB7] to-[#D6DCD1] p-10 rounded-2xl'>
                <h2>Available Balance</h2>
                <span className='text-red-500'>hello 〉</span>
                <ArrowRight2 size='32' color='#d9e3f0' />
                <HomeIcon size='32' color='#d9e3f0' variant='TwoTone' />
            </div>
        </main>
    )
}
