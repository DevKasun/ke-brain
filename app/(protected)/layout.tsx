import { SideMenu } from '@/components/side-menu';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const supabase = await createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return redirect('/sign-in');
	}

	return (
		<div className='flex h-[calc(100vh-4rem)] w-full'>
			<SideMenu />
			<div className='flex-1 overflow-auto p-8'>{children}</div>
		</div>
	);
}
