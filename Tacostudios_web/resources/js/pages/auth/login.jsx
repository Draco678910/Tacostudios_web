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

            <form
                onSubmit={submit}
                className="flex flex-col gap-6 p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 shadow-lg"
            >

                {/* EMAIL */}
                <div className="grid gap-2">
                    <Label htmlFor="email" className="text-sm uppercase tracking-widest text-secondary">
                        Email
                    </Label>

                    <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        autoFocus
                        required
                        className="bg-surface-container rounded-xl p-5 text-on-surface border border-outline-variant/20 focus:border-primary focus:ring-0 transition-all"
                    />

                    <InputError message={errors.email} />
                </div>

                {/* PASSWORD */}
                <div className="grid gap-2">
                    <Label htmlFor="password" className="text-sm uppercase tracking-widest text-secondary">
                        Password
                    </Label>

                    <Input
                        id="password"
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        required
                        className="bg-surface-container rounded-xl p-5 text-on-surface border border-outline-variant/20 focus:border-primary focus:ring-0 transition-all"
                    />

                    <InputError message={errors.password} />
                </div>

                {/* REMEMBER */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container/40 border border-outline-variant/10">
                    <Checkbox
                        id="remember"
                        checked={data.remember}
                        onCheckedChange={(checked) => setData('remember', checked)}
                    />
                    <Label htmlFor="remember" className="text-on-surface-variant">
                        Recorda'm
                    </Label>
                </div>

                {/* SUBMIT */}
                <Button
                    disabled={processing}
                    className="w-full py-5 text-black font-bold bg-primary hover:bg-primary/90 rounded-xl transition-all"
                >
                    {processing && <Spinner />}
                    Log in
                </Button>

                {/* RESET PASSWORD */}
                {canResetPassword && (
                    <TextLink href={route('password.request')} className="text-sm text-secondary hover:underline">
                        Forgot password?
                    </TextLink>
                )}

                {/* REGISTER */}
                {canRegister && (
                    <TextLink href={route('register')} className="text-sm text-secondary hover:underline">
                        Create account
                    </TextLink>
                )}

                {/* STATUS */}
                {status && (
                    <p className="text-green-400 text-sm font-medium">
                        {status}
                    </p>
                )}

            </form>
        </AuthLayout>
    );
}