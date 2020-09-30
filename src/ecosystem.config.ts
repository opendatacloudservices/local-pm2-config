const apps: {
  apps: {
    name: string;
    script: string;
    cwd: string;
    watch: boolean;
    out_file: string;
    error_file: string;
    exec_mode: string;
    max: number;
    env: {
      PORT: number;
      NODE_ENV: string;
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
      exec_mode: 'fork',
      max: 5,
      env: {
        PORT: 3003,
        NODE_ENV: 'production',
      },
    },
  ],
};

export = apps;
