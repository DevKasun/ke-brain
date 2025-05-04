import Link from 'next/link';
import { LayoutDashboard, KeyRound } from 'lucide-react';

export function SideMenu() {
	return (
		<div className='w-64 h-full border-r border-border'>
			<nav className='flex flex-col p-4 gap-2'>
				<Link
					href='/protected'
					className='flex items-center gap-2 p-2 rounded-md hover:bg-accent'
				>
					<LayoutDashboard size={20} />
					<span>Dashboard</span>
				</Link>
				<Link
					href='/protected/reset-password'
					className='flex items-center gap-2 p-2 rounded-md hover:bg-accent'
				>
					<KeyRound size={20} />
					<span>Reset Password</span>
				</Link>
			</nav>
		</div>
	);
}
