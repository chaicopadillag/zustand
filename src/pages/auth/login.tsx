import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AuthService } from '@/services/auth.service';
import { useAuthStore } from '@/stores/auth';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { useShallow } from 'zustand/react/shallow';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuthUser, setUnauthenticated } = useAuthStore(useShallow((state) => state));

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const { email, password, remember } = event.target as HTMLFormElement;
    const { email, password, remember } = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
      remember: { checked: boolean };
    };
    console.log(email.value, password.value, remember.checked);

    try {
      const authUser = await AuthService.login(email.value, password.value);

      setAuthUser(authUser);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      setUnauthenticated();
      throw Error('Invalid credentials');
    }

    email.value = '';
    password.value = '';
    remember.checked = false;
  };

  return (
    <>
      <h1 className='text-2xl font-semibold mb-4'>Login</h1>

      <form onSubmit={onSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-600'>Email</label>
          <Input type='text' name='email' autoComplete='off' />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-600'>Password</label>
          <Input type='password' name='password' autoComplete='off' />
        </div>

        <div className='mb-4 flex items-center'>
          <input type='checkbox' name='remember' className='text-blue-500' />
          <label className='text-gray-600 ml-2'>Remember Me</label>
        </div>

        <div className='mb-6 text-blue-500'>
          <a href='#' className='hover:underline'>
            Forgot Password?
          </a>
        </div>

        <Button type='submit' className='w-full'>
          Login
        </Button>
      </form>
      <div className='mt-6 text-blue-500 text-center'>
        <a href='#' className='hover:underline'>
          Sign up Here
        </a>
      </div>
    </>
  );
};
