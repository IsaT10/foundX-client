'use client';

import FormInput from '@/src/components/form/FormInput';
import FormWrapper from '@/src/components/form/FormWrapper';
import { useUserRegistration } from '@/src/hooks/auth.hook';
import registerValidationSchema from '@/src/schema/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { FieldValues, SubmitHandler } from 'react-hook-form';

export default function RegisterPage() {
  const { mutate: handleRegisterUser, isPending } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      profilePhoto:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    };

    console.log('Inside form user data: ', userData);

    handleRegisterUser(userData);
  };

  //   if (isPending) {
  //     //  handle loading state
  //   }

  return (
    <div className='flex h-[calc(100vh-100px)] flex-col items-center justify-center'>
      <h3 className='my-2 text-xl font-bold'>Register with FoundX</h3>
      <p className='mb-4'>Help Lost Items Find Their Way Home</p>
      <div className='w-[35%]'>
        <FormWrapper
          //! Only for development
          defaultValues={{
            name: 'IsaT',
            email: 'isat@gmail.com',
            mobileNumber: '01711223344',
            password: '123456',
          }}
          resolver={zodResolver(registerValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className='py-3'>
            <FormInput label='Name' name='name' size='sm' />
          </div>
          <div className='py-3'>
            <FormInput label='Email' name='email' size='sm' />
          </div>
          <div className='py-3'>
            <FormInput label='Mobile Number' name='mobileNumber' size='sm' />
          </div>
          <div className='py-3'>
            <FormInput
              label='Password'
              name='password'
              size='sm'
              type='password'
            />
          </div>

          <Button
            className='my-3 w-full rounded-md bg-default-900 text-default'
            size='lg'
            type='submit'
          >
            Registration
          </Button>
        </FormWrapper>
        <div className='text-center'>
          Already have an account ? <Link href={'/login'}>Login</Link>
        </div>
      </div>
    </div>
  );
}
