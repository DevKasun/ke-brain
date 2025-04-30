import Link from 'next/link'; // Import the Link component
export default async function Home() {
	return (
		<div className='flex items-center justify-center min-h-screen bg-primary-light'>
			<div className='w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800'>
				<div className='flex flex-col space-y-4'>
					<h2 className='text-2xl font-bold text-center text-gray-900 dark:text-white'>
						Welcome to the Ke Brain
					</h2>
					<Link href='/login' className='btn-primary'>
						Login
					</Link>
					<Link href='/signup' className='btn-primary'>
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
}
