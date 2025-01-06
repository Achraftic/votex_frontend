// import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { GiCubeforce } from 'react-icons/gi'
import { NavLink } from 'react-router'

type FormProps = {
  type: "login" | "signup",
}
export default function Form({ type = "login" }: FormProps) {
  return (
    <form className='w-96   border border-primary/20 hover:border-primary/70 transition ease-in-out duration-200  px-8 py-14 text-sm rounded-xl  '>
      <div className='flex items-center justify-center flex-col mb-6 gap-2 '>
        <GiCubeforce size={60} className="text-primary mb-5" />
        <h1 className='text-2xl font-semibold'>Yooo , Welcome Back!</h1>
        {type === "login" ? <p className='text-zinc-300 text-xs'>Don't have an account? <NavLink to="/signup" className='text-primary'>Sign up</NavLink> </p> : <p className='text-zinc-300 text-xs'>Already have an account? <NavLink to="/login" className='text-primary'>Login</NavLink> </p>}


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
        {type === "signup" &&
          <div >

            <Input
              id="Cpassword"
              type="password"
              placeholder="confirm password"
              required
              className="mt-1"
            />
          </div>
        }

        <Button size="lg" className='rounded-lg '>
          {type === "login" ? "Login" : "Sign Up"}
        </Button>
      </div>
    </form>
  )
}
