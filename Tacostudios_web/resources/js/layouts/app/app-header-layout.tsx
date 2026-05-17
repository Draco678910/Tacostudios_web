import { AppContent } from '@/components/prefets/app-content';
import { AppHeader } from '@/components/prefets/app-header';
import { AppShell } from '@/components/prefets/app-shell';
import type { AppLayoutProps } from '@/types';

export default function AppHeaderLayout({
    children,
    breadcrumbs,
}: AppLayoutProps) {
    return (
        <AppShell variant="header">
            <AppHeader breadcrumbs={breadcrumbs} />
            <AppContent variant="header">{children}</AppContent>
        </AppShell>
    );
}
