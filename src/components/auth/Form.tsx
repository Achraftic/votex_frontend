// import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { GiCubeforce } from 'react-icons/gi'

export default function Form() {
  return (
    <form className='w-96   border border-primary/20 hover:border-primary/70 transition ease-in-out duration-200  px-8 py-14 text-sm rounded-xl  '>
      <div className='flex items-center justify-center flex-col mb-6 gap-2 '>
        <GiCubeforce size={60} className="text-primary mb-5" />
        <h1 className='text-2xl font-semibold'>Yooo , Welcome Back!</h1>
        <p className='text-zinc-300 text-xs'>first time here? <a href="#" className='text-primary'>Sign up</a> </p>

      </div>
      <div className='flex flex-col gap-4'>
        <div >
          <Input
            id="email"
            type="email"
            placeholder="your email"
            required
            className="mt-1"
          />
        </div>

        <div >

          <Input
            id="password"
            type="password"
            placeholder="********"
            required
            className="mt-1"
          />
        </div>


        <Button  size="lg" className='rounded-lg '>
          Submit
        </Button>
      </div>
    </form>
  )
}
