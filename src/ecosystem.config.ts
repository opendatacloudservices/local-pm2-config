const apps: {
  apps: {
    name: string;
    script: string;
    cwd: string;
    watch: boolean;
    out_file: string;
    error_file: string;
    env: {
      PORT: number;
    };
  }[];
} = {
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
      },
    },
  ],
};

export = apps;
