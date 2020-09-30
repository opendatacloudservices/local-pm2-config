"use strict";
const apps = {
    apps: [
        {
            name: 'local-ckan-harvester',
            script: './build/index.js',
            cwd: '/home/sebastian/Sites/OpenDataCloudServices/local-ckan-harvester/',
            watch: false,
            out_file: '/media/data/logs/local-ckan-harvester/out.log',
            error_file: '/media/data/logs/local-ckan-harvester/error.log',
            env: {
                PORT: 3003,
                NODE_ENV: 'production',
            },
        },
    ],
};
module.exports = apps;
//# sourceMappingURL=ecosystem.config.js.map