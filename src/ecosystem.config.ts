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
      max: 10,
      env: {
        PORT: 3003,
        NODE_ENV: 'production',
      },
    },
    {
      name: 'local-orchestration',
      script: './build/index.js',
      cwd: '/home/sebastian/Sites/OpenDataCloudServices/local-orchestration/',
      watch: false,
      out_file: '/media/data/logs/local-orchestration/out.log',
      error_file: '/media/data/logs/local-orchestration/error.log',
      exec_mode: 'fork',
      max: 1,
      env: {
        PORT: 3004,
        NODE_ENV: 'production',
      },
    },
    {
      name: 'local-postgres-backup',
      script: './build/index.js',
      cwd: '/home/sebastian/Sites/OpenDataCloudServices/local-postgres-backup/',
      watch: false,
      out_file: '/media/data/logs/local-postgres-backup/out.log',
      error_file: '/media/data/logs/local-postgres-backup/error.log',
      exec_mode: 'fork',
      max: 1,
      env: {
        PORT: 3005,
        NODE_ENV: 'production',
      },
    },
    {
      name: 'local-import-data',
      script: './build/index.js',
      cwd: '/home/sebastian/Sites/OpenDataCloudServices/local-import-data/',
      watch: false,
      out_file: '/media/data/logs/local-import-data/out.log',
      error_file: '/media/data/logs/local-import-data/error.log',
      exec_mode: 'fork',
      max: 1,
      env: {
        PORT: 3006,
        NODE_ENV: 'production',
      },
    },
  ],
};

export = apps;
