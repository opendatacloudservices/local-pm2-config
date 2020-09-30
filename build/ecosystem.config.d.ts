declare const apps: {
    apps: {
        name: string;
        script: string;
        cwd: string;
        watch: boolean;
        out_file: string;
        error_file: string;
        env: {
            PORT: number;
            NODE_ENV: string;
        };
    }[];
};
export = apps;
