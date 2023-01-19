// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconDiscount2, IconUsers } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconDiscount2,
    IconUsers
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'campaigns',
            title: 'Campaigns',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconDiscount2,
            breadcrumbs: false
        },
        {
            id: 'customers',
            title: 'Customers',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'inventory',
            title: 'Inventory',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'settings',
            title: 'Settings',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'Company Details',
                    title: 'Company Details',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'appdesign',
                    title: 'App Design',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default utilities;
