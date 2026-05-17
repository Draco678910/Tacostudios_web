import { useForm, Head } from '@inertiajs/react';
import AuthLayout from '@/layouts/auth-layout';
import { Button } from '@/components/prefets/ui/button';
import { Input } from '@/components/prefets/ui/input';
import { Label } from '@/components/prefets/ui/label';
import InputError from '@/components/prefets/input-error';
import { Checkbox } from '@/components/prefets/ui/checkbox';
import { Spinner } from '@/components/prefets/ui/spinner';
import TextLink from '@/components/prefets/text-link';


export default function Login({ canResetPassword, canRegister, status }) {

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    function submit(e) {
        e.preventDefault();
        post('/login');
    }

    return (
        <AuthLayout
            title="Log in"
            description="Enter your email and password"
        >
            <Head title="Login" />

            <form onSubmit={submit} className="flex flex-col gap-6">

                {/* EMAIL */}
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        autoFocus
                        required
                    />
                    <InputError message={errors.email} />
                </div>

                {/* PASSWORD */}
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} />
                </div>

                {/* REMEMBER */}
                <div className="flex items-center gap-2">
                    <Checkbox id="remember"
                        checked={data.remember}
                        onCheckedChange={(checked) => setData('remember', checked)}
                    />
                    <Label htmlFor="remember">Recorda'm</Label>
                </div>

                {/* SUBMIT */}
                <Button disabled={processing} type="submit">
                    {processing && <Spinner />}
                    Log in
                </Button>

                {/* RESET PASSWORD */}
                {canResetPassword && (
                    <TextLink href={route('password.request')}>
                        Forgot password?
                    </TextLink>
                )}

                {/* REGISTER */}
                {canRegister && (
                    <TextLink href={route('register')}>
                        Create account
                    </TextLink>
                )}

                {/* STATUS */}
                {status && (
                    <p className="text-green-600 text-sm">{status}</p>
                )}

            </form>
        </AuthLayout>
    );
}