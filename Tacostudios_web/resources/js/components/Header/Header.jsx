// Header
import { usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import AppLogoIcon from '@/components/prefets/app-logo-icon';
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

export default function Header() {
    const { auth } = usePage().props;
    const user = auth?.user;
    const [open, setOpen] = useState(false);
    function logout() {
        router.post('/logout');
    }

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

                    {/* LOGO */}
                    <a href="/" className="flex items-center w-2/6">
                        <AppLogoIcon />
                    </a>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-8 font-['Space_Grotesk']">
                        <a className="text-sm text-white/70 hover:text-white transition-colors" href="/">
                            Pagina Principal
                        </a>

                        <a className="text-sm text-white/70 hover:text-white transition-colors" href="/botiga">
                            Botiga
                        </a>

                        <a className="text-sm text-white/70 hover:text-white transition-colors" href="/noticias">
                            Noticies
                        </a>

                        <a className="text-sm text-white/70 hover:text-white transition-colors" href="/aboutus">
                            Sobre nosaltres
                        </a>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-4">

                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setOpen(true)}
                            className="md:hidden text-white"
                        >
                            <MenuIcon size={28} />
                        </button>

                        {/* AUTH */}
                        {user ? (
                            <Menu as="div" className="relative">
                                <MenuButton className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-all">
                                    {user.name}
                                </MenuButton>

                                <MenuItems className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-zinc-900/95 backdrop-blur-xl shadow-2xl overflow-hidden">

                                    <MenuItem>
                                        <a
                                            href="/user-menu"
                                            className="block px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                                        >
                                            Opcions del compte
                                        </a>
                                    </MenuItem>

                                    <MenuItem>
                                        <a
                                            href="/biblioteca"
                                            className="block px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                                        >
                                            Biblioteca
                                        </a>
                                    </MenuItem>

                                    {user.is_admin && (
                                        <MenuItem>
                                            <a
                                                href="/admin"
                                                className="block px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                                            >
                                                Administració
                                            </a>
                                        </MenuItem>
                                    )}

                                    <MenuItem>
                                        <button
                                            onClick={logout}
                                            className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                                        >
                                            Tancar sessió
                                        </button>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        ) : (
                            <div className="hidden md:flex items-center gap-3">
                                <a
                                    href="/login"
                                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-all"
                                >
                                    Iniciar sessió
                                </a>

                                <a
                                    href="/register"
                                    className="rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90 transition-all"
                                >
                                    Registrar-se
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* MOBILE MENU */}
            {open && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col">

                    {/* TOP BAR */}
                    <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
                        <AppLogoIcon />

                        <button
                            onClick={() => setOpen(false)}
                            className="text-white"
                        >
                            <X size={30} />
                        </button>
                    </div>

                    {/* LINKS */}
                    <div className="flex flex-col items-center justify-center flex-1 gap-8 font-['Space_Grotesk']">

                        <a
                            href="/"
                            className="text-3xl font-semibold text-white/80 hover:text-white transition-colors"
                        >
                            Pagina Principal
                        </a>

                        <a
                            href="/botiga"
                            className="text-3xl font-semibold text-white/80 hover:text-white transition-colors"
                        >
                            Botiga
                        </a>

                        <a
                            href="/noticias"
                            className="text-3xl font-semibold text-white/80 hover:text-white transition-colors"
                        >
                            Noticies
                        </a>

                        <a
                            href="/aboutus"
                            className="text-3xl font-semibold text-white/80 hover:text-white transition-colors"
                        >
                            Sobre nosaltres
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}