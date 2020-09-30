declare const apps: {
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
};
export = apps;
