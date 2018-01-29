// Item types
export const REPORT_TABLE = 'REPORT_TABLE';
export const CHART = 'CHART';
export const MAP = 'MAP';
export const EVENT_REPORT = 'EVENT_REPORT';
export const EVENT_CHART = 'EVENT_CHART';
export const APP = 'APP';
export const REPORTS = 'REPORTS';
export const RESOURCES = 'RESOURCES';
export const USERS = 'USERS';
export const MESSAGES = 'MESSAGES';
export const TEXT = 'TEXT';

// Domain types
export const DOMAIN_TYPE_AGGREGATE = 'AGGREGATE';
export const DOMAIN_TYPE_TRACKER = 'TRACKER';

// Visualization types
export const VISUALIZATION_TYPE_TABLE = 'TABLE';
export const VISUALIZATION_TYPE_CHART = 'CHART';
export const VISUALIZATION_TYPE_MAP = 'MAP';

// Item type map
export const itemTypeMap = {
    [REPORT_TABLE]: {
        id: REPORT_TABLE,
        endPointName: 'reportTables',
        propName: 'reportTable',
        countName: 'reportTableCount',
        pluralTitle: 'Report tables',
        plugin: global.reportTablePlugin,
        domainType: DOMAIN_TYPE_AGGREGATE,
        visualizationType: VISUALIZATION_TYPE_TABLE,
    },
    [CHART]: {
        id: CHART,
        endPointName: 'charts',
        propName: 'chart',
        countName: 'chartCount',
        pluralTitle: 'Charts',
        plugin: global.chartPlugin,
        domainType: DOMAIN_TYPE_AGGREGATE,
        visualizationType: VISUALIZATION_TYPE_CHART,
    },
    [MAP]: {
        id: MAP,
        endPointName: 'maps',
        propName: 'map',
        countName: 'mapCount',
        pluralTitle: 'Maps',
        plugin: global.mapPlugin,
        domainType: DOMAIN_TYPE_AGGREGATE,
        visualizationType: VISUALIZATION_TYPE_MAP,
    },
    [EVENT_REPORT]: {
        id: EVENT_REPORT,
        endPointName: 'eventReports',
        propName: 'eventReport',
        countName: 'eventReportCount',
        pluralTitle: 'Event reports',
        plugin: global.eventReportPlugin,
        domainType: DOMAIN_TYPE_TRACKER,
        visualizationType: VISUALIZATION_TYPE_TABLE,
    },
    [EVENT_CHART]: {
        id: EVENT_CHART,
        endPointName: 'eventCharts',
        propName: 'eventChart',
        countName: 'eventChartCount',
        pluralTitle: 'Event charts',
        plugin: global.eventChartPlugin,
        domainType: DOMAIN_TYPE_TRACKER,
        visualizationType: VISUALIZATION_TYPE_CHART,
    },
    [APP]: {
        endPointName: 'apps',
        propName: 'app',
        countName: 'appCount',
        pluralTitle: 'Apps',
    },
    [REPORTS]: {
        id: REPORTS,
        endPointName: 'reports',
        propName: 'reports',
        countName: 'reportCount',
        pluralTitle: 'Reports',
    },
    [RESOURCES]: {
        id: RESOURCES,
        endPointName: 'resources',
        propName: 'resources',
        countName: 'resourceCount',
        pluralTitle: 'Resources',
    },
    [USERS]: {
        id: USERS,
        endPointName: 'users',
        propName: 'users',
        countName: 'userCount',
        pluralTitle: 'Users',
    },
    [TEXT]: {
        id: TEXT,
        propName: 'text',
    },
    [MESSAGES]: {
        propName: 'messages',
    },
};
