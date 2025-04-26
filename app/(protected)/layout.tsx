import React from 'react';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='flex h-screen bg-[#111827]'>
			<Sidebar />

			<div className='flex flex-col flex-1'>
				<Navbar />
				<main className='flex-1 p-6 overflow-y-auto bg-[#1F2937] text-gray-200'>
					{children}
				</main>
			</div>
		</div>
	);
}
