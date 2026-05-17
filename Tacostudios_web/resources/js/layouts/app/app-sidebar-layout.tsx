import { AppContent } from '@/components/prefets/app-content';
import { AppShell } from '@/components/prefets/app-shell';
import { AppSidebar } from '@/components/prefets/app-sidebar';
import { AppSidebarHeader } from '@/components/prefets/app-sidebar-header';
import type { AppLayoutProps } from '@/types';

export default function AppSidebarLayout({
    children,
    breadcrumbs = [],
}: AppLayoutProps) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
        </AppShell>
    );
}
