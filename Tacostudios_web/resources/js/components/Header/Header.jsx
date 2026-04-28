// Header
import { usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Header() {
    const { auth } = usePage().props;
    const user = auth?.user;

    function logout() {
        router.post('/logout');
    }
    console.log('AUTH:', usePage().props.auth);
    console.log('USER:', usePage().props.auth?.user);
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl no-border transition-colors duration-300 shadow-[0_20px_40px_rgba(199,153,255,0.08)]">
            <div className="flex justify-between items-center px-8 h-20 max-w-full">
                <a href="/">
                    <div className="text-2xl font-bold tracking-tighter text-[#c799ff] font-['Space_Grotesk']">
                        Logo
                    </div>
                </a>


                <div className="hidden md:flex items-center space-x-10 font-['Space_Grotesk'] tracking-tight">
                    <a className="text-white/70 hover:text-white transition-all duration-200" href="/">Pagina Principal</a>
                    <a className="text-white/70 hover:text-white transition-all duration-200" href="/botiga">Botiga</a>
                    <a className="text-white/70 hover:text-white transition-all duration-200" href="/noticias">Noticies</a>
                    <a className="text-white/70 hover:text-white transition-all duration-200" href="#">Sobre nossaltres</a>
                </div>



                {user ? (
                    <div className="flex items-center gap-6">
                        <Menu as="div" className="relative inline-block ">
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5  bg-white/10 px-3 py-2 text-sm font-semibold inset-ring-1 inset-ring-white/5 text-white/70 hover:bg-white/5 p-2 rounded-lg hover:animate-rainbowGlow transition-shadow duration-500 active:scale-90">
                                Options
                            </MenuButton>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                <div className="py-1">
                                    <MenuItem>

                                        <a
                                            href="#"
                                            className="px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden flex flex-wrap"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <p className=' ml-1' >Opcions del compte</p>

                                        </a>

                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                        >
                                            Support
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                        >
                                            License
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <button
                                            onClick={logout}
                                            type="submit"
                                            className="flex flex-wrap w-full px-4 py-2 text-left text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                            </svg>
                                            <p className=' ml-1'>Sign out</p>

                                        </button>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </Menu>
                    </div>
                ) : (
                    <div className="flex items-center gap-5">
                        <a href="/login" className=' w-6/12 justify-center  bg-white/10 px-3 text-sm font-semibold inset-ring-1 inset-ring-white/5 text-white/70 hover:bg-white/5 p-2 rounded-lg hover:animate-rainbowGlow transition-shadow duration-500 active:scale-90'><p>Login</p></a>
                        <a href="/register" className='w-6/12 justify-center   bg-white/10 px-3 text-sm font-semibold inset-ring-1 inset-ring-white/5 text-white/70 hover:bg-white/5 p-2 rounded-lg hover:animate-rainbowGlow transition-shadow duration-500 active:scale-90'><p>Sign in</p></a>
                    </div>
                )}
            </div>
        </nav >
    );
}
