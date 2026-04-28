import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';

export default function Logedinmenu() {

    const { auth } = usePage().props;
    const user = auth?.user;

    function logout() {
        router.post('/logout');
    }
    console.log('AUTH:', usePage().props.auth);
    console.log('USER:', usePage().props.auth?.user);


}
