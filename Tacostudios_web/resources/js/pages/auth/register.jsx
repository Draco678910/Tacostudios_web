import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/prefets/input-error';
import PasswordInput from '@/components/prefets/password-input';
import TextLink from '@/components/prefets/text-link';
import { Button } from '@/components/prefets/ui/button';
import { Input } from '@/components/prefets/ui/input';
import { Label } from '@/components/prefets/ui/label';
import { Spinner } from '@/components/prefets/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes';
import { store } from '@/routes/register';

export default function Register() {
    return (
        <AuthLayout
            title="Create an account"
            description="Enter your details below to create your account"
        >
            <Head title="Register" />

            <Form
                {...store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="flex flex-col gap-6 p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 shadow-lg"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">

                            {/* NAME */}
                            <div className="grid gap-2">
                                <Label htmlFor="name" className="text-sm uppercase tracking-widest text-secondary">
                                    Name
                                </Label>

                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="name"
                                    name="name"
                                    placeholder="Full name"
                                    className="bg-surface-container rounded-xl p-5 text-on-surface border border-outline-variant/20 focus:border-primary focus:ring-0 transition-all"
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            {/* EMAIL */}
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-sm uppercase tracking-widest text-secondary">
                                    Email address
                                </Label>

                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    name="email"
                                    placeholder="email@example.com"
                                    className="bg-surface-container rounded-xl p-5 text-on-surface border border-outline-variant/20 focus:border-primary focus:ring-0 transition-all"
                                />

                                <InputError message={errors.email} />
                            </div>

                            {/* PASSWORD */}
                            <div className="grid gap-2">
                                <Label htmlFor="password" className="text-sm uppercase tracking-widest text-secondary">
                                    Password
                                </Label>

                                <PasswordInput
                                    id="password"
                                    required
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    name="password"
                                    placeholder="Password"
                                    className="bg-surface-container rounded-xl p-5 text-on-surface border border-outline-variant/20 focus:border-primary focus:ring-0 transition-all"
                                />

                                <InputError message={errors.password} />
                            </div>

                            {/* CONFIRM PASSWORD */}
                            <div className="grid gap-2">
                                <Label htmlFor="password_confirmation" className="text-sm uppercase tracking-widest text-secondary">
                                    Confirm password
                                </Label>

                                <PasswordInput
                                    id="password_confirmation"
                                    required
                                    tabIndex={4}
                                    autoComplete="new-password"
                                    name="password_confirmation"
                                    placeholder="Confirm password"
                                    className="bg-surface-container rounded-xl p-5 text-on-surface border border-outline-variant/20 focus:border-primary focus:ring-0 transition-all"
                                />

                                <InputError message={errors.password_confirmation} />
                            </div>

                            {/* BUTTON */}
                            <Button
                                type="submit"
                                className="mt-2 w-full py-5 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-all"
                                tabIndex={5}
                                data-test="register-user-button"
                            >
                                {processing && <Spinner />}
                                Create account
                            </Button>

                        </div>

                        {/* FOOTER */}
                        <div className="text-center text-sm text-on-surface-variant">
                            Already have an account?{' '}
                            <TextLink
                                href={login()}
                                tabIndex={6}
                                className="text-secondary hover:underline"
                            >
                                Log in
                            </TextLink>
                        </div>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}