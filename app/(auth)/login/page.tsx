'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// TODO: need to add setError
	const [error] = useState<string | null>(null);

	const handleLogin = async () => {};

	return (
		<div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-blue-300'>
			<div className='w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800'>
				<h1 className='text-2xl font-bold text-center text-gray-900 dark:text-white'>
					Login
				</h1>
				<form className='space-y-4' onSubmit={handleLogin}>
					{error && (
						<p className='text-sm text-red-500 dark:text-red-400 text-center'>
							{error}
						</p>
					)}
					<div>
						<label
							htmlFor='email'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Email
						</label>
						<input
							type='email'
							name='email'
							id='email'
							className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
							placeholder='name@company.com'
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<label
							htmlFor='password'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Password
						</label>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='••••••••'
							className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button
						type='submit'
						className='w-full px-6 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-colors'
					>
						Log In
					</button>
				</form>
				{/* Add the link below the form */}
				<p className='text-sm font-light text-center text-gray-500 dark:text-gray-400'>
					Don’t have an account yet?{' '}
					<Link
						href='/signup'
						className='font-medium text-green-600 hover:underline dark:text-green-500'
					>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
}
