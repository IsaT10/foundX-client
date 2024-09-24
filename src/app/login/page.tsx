'use client';
import FormInput from '@/src/components/form/FormInput';
import FormWrapper from '@/src/components/form/FormWrapper';
import { loginValidationSchema } from '@/src/schema/login.schema';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, SubmitHandler } from 'react-hook-form';

const LoginPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className='flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center'>
      <h3 className='my-2 text-2xl font-bold'>Login with FoundX</h3>
      <p className='mb-4'>Welcome Back! Let&lsquo;s Get Started</p>
      <div className='w-[35%]'>
        <FormWrapper
          onSubmit={onSubmit}
          resolver={zodResolver(loginValidationSchema)}
        >
          <div className='py-3'>
            <FormInput name='email' label='Email' type='email' />
          </div>
          <div className='py-3'>
            <FormInput name='password' label='Password' type='password' />
          </div>

          <Button
            className='my-3 w-full rounded-md bg-default-900 font-semibold text-default'
            size='lg'
            type='submit'
          >
            Login
          </Button>
        </FormWrapper>
        <div className='text-center'>
          Don&lsquo;t have account ? <Link href={'/register'}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
