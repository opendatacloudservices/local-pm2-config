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
      name: 'local-govdata-harvester',
      script: './build/index.js',
      cwd:
        '/home/sebastian/Sites/OpenDataCloudServices/local-govdata-harvester/',
      watch: false,
      out_file: '/media/data/logs/local-govdata-harvester/out.log',
      error_file: '/media/data/logs/local-govdata-harvester/error.log',
      env: {
        PORT: 3003,
      },
    },
  ],
};

export = apps;
