import LoginForm from '../ui/LoginForm';
import { Metadata } from 'next';
import { Suspense } from 'react';
 
export const metadata : Metadata = {
  title: 'Login',
}

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
        </div>
        <Suspense>
          <LoginForm />
          <button className="mt-4 w-full h-10 hover:cursor-pointer bg-white border border-gray-500 rounded-md justify-center" >
            <span className='my-aut text-2x'>Register</span>
          </button>
        </Suspense>
      </div>
    </main>
  );
}