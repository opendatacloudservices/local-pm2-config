"use strict";
const apps = {
    apps: [
        {
            name: 'local-govdata-harvester',
            script: './build/index.js',
            cwd: '/home/sebastian/Sites/OpenDataCloudServices/local-govdata-harvester/',
            watch: false,
            out_file: '/media/data/logs/local-govdata-harvester/out.log',
            error_file: '/media/data/logs/local-govdata-harvester/error.log',
            env: {
                PORT: 3003,
            },
        },
    ],
};
module.exports = apps;
//# sourceMappingURL=ecosystem.config.js.map