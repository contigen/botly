import { Button } from '@nextui-org/button'
import { Volume } from './icons'

export default function Home() {
    return (
        <main className=''>
            <h3>Insights</h3>
            <h1>
                Unlock Pro Insights <br />
                Using Botly &mdash; the new
                <span className='text-blue-600'> AI</span> dahsboard tool
            </h1>
            <Button>View earnings</Button>
            <Volume />
            <div className='bg-gradient-to-tr from-[#DAC2E5] via-[#FBDDB7] to-[#D6DCD1] p-10 rounded-2xl'>
                <h2>Testing Gradients</h2>
            </div>
        </main>
    )
}
