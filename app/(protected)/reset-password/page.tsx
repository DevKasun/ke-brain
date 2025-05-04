import { resetPasswordAction } from '@/app/actions';
import { FormMessage, Message } from '@/components/form-message';
import { SubmitButton } from '@/components/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default async function ResetPassword(props: {
	searchParams: Promise<Message>;
}) {
	const searchParams = await props.searchParams;
	return (
		<div className='max-w-md'>
			<form className='flex flex-col w-full gap-2'>
				<h1 className='text-2xl font-medium'>Reset password</h1>
				<p className='text-sm text-foreground/60 mb-4'>
					Please enter your new password below.
				</p>
				<Label htmlFor='password'>New password</Label>
				<Input
					type='password'
					name='password'
					placeholder='New password'
					required
				/>
				<Label htmlFor='confirmPassword'>Confirm password</Label>
				<Input
					type='password'
					name='confirmPassword'
					placeholder='Confirm password'
					required
				/>
				<SubmitButton formAction={resetPasswordAction}>
					Reset password
				</SubmitButton>
				<FormMessage message={searchParams} />
			</form>
		</div>
	);
}
