# local-pm2-config
configuration file for pm2 node process management

This repo is used to build and manage the processes through pm2, but the resulting package is also loaded into other services, so that the services know on which port each service is running, so they can communicate to one another. Therefore, the `src/ecosystem.config.ts` file contains setup-specific values. If you want to use a similar system, simply fork it or include it as a local package. This repo should rather be an example for how we are managing our services locally.

```
pm2 unstart
pm2 startup
```

```
pm2 monit
```

```
pm2 restart build/ecosystem.config.js
pm2 save
```