// assets
import { IconReportMoney, IconSettingsAutomation, IconReportAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconReportMoney,
    IconReportAnalytics,
    IconSettingsAutomation
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'reports',
    title: 'Reports',
    caption: 'Reports',
    type: 'group',
    children: [
        {
            id: 'Transactions',
            title: 'Transactions',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconReportMoney,
            breadcrumbs: false
        },
        {
            id: 'Order Ahead',
            title: 'Order Ahead',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconReportAnalytics,
            breadcrumbs: false
        },
        {
            id: 'Automated Reports',
            title: 'Automated Reports',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconSettingsAutomation,
            breadcrumbs: false
        }
    ]
};

export default pages;
