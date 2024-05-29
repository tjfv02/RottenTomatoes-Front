import { IconDashboard, IconHammer, IconHome, IconReport, IconSettings, IconUser } from '@tabler/icons-react';

interface Pagina {
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any; //? any o unknow, revisar
    url: string;
}

interface PaginasPorRol {
    Admin: Pagina[];
    Customer: Pagina[];
    User: Pagina[];
}

export const menuLinks: PaginasPorRol = {
    Admin: [
        {
            title: 'Inicio',
            icon: (
                <IconHome/>
            ),
            url: 'HomePage',
        },
        {
            title: 'Dashboards',
            icon: (
                <IconDashboard/>
            ),
            url: 'Dashboards',
        },
        {
            title: 'Mantenimientos',
            icon: (
                <IconSettings/>
            ),
            url: 'Maintenance',
        },
        {
            title: 'Usuarios',
            icon: (
                <IconUser/>
            ),
            url: 'Users',
        },
        {
            title: 'Proyectos',
            icon: (
                <IconHammer/>
            ),
            url: 'Projects',
        },
        {
            title: 'Reportes',
            icon: (
                <IconReport/>
            ),
            url: 'Reports',
        },
    ],
    Customer: [
        {
            title: 'Pantalla Principal',
            icon: (
                <IconHome/>
            ),
            url: 'HomePage',
        },
    ],
    User: [
        {
            title: 'Pantalla Principal',
            icon: (
                <IconHome/>
            ),
            url: 'HomePage',
        },
    ]
    
};
