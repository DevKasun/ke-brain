import Link from 'next/link'; // Import the Link component
export default async function Home() {
	return (
		<div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-blue-300'>
			<div className='flex flex-col space-y-4'>
				<Link
					href='/login'
					className='px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-center'
				>
					Login
				</Link>
				<Link
					href='/signup'
					className='px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-center'
				>
					Sign Up
				</Link>
			</div>
		</div>
	);
}
