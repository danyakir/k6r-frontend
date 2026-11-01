# K6 Cloud Runner UI

<div align="center"> 
    <a href="#"><img class="img-no-border" src="/src/assets/icons/logo.svg" alt="Logo" width="200" style="border:0"></a>
    <h1></h1>
</div>

### Welcome to the frontend of K6 Cloud Runner

The only platform which runs, monitors and keeps track of your load testing.
The frontend was created with vite + react and Chakra UI as a component framework.

## Enviorement Params

| Variable Name          | Description                              | Default Value                                                                     |
| ---------------------- | ---------------------------------------- | --------------------------------------------------------------------------------- |
| **SERVER_BASE_URL**    | The URL of the server                    | `http://localhost:3000`                                                           |
| **SERVER_LOGIN_ROUTE** | The route for login in server            | `/oauth/login`                                                                    |
| **GRAFANA_BASE_URL**   | The grafana base url including dashboard | `https://grafana.k6.example.com/d/your-dashboard-id/k6-prometheus` |

## Run Locally

```sh
git clone https://github.com/danyakir/k6r-frontend.git
cd ./k6-cloud-runner-ui
npm install
npm run dev
```

if you want to edit the default env prams create an `.env.local` file. **Don't change the .env file - it needs to remain the same for the vite-env abilities.**

## Deploy

The gitlab ci allows you to build and deploy your version into [quay](https://registry.example.com/repository/k6r/k6-cloud-runner-ui).

If you run the pipeline without adding a `APP_VERSION` variable it's version and image tag will be the last prod version with the pipeline ID in the format of `1.0.0-dev-2611113`. this format is meant for nonprod images, so before you deploy to prod make sure to add `APP_VERSION`.
When a version is sealed add your wanted `APP_VERSION`.

After deploying an image:
In quay - move the wanted tag (`np` or `prod`)
In openshift - trigger pods rollout / delete the running pods.

To see and edit deployments configuration go to our [helm charts](https://github.com/danyakir/k6r-helm-charts)

## Roadmap

Go to the list [here](https://docs.example.com/k6r/roadmap)

## Visuals

Go to the list [here](https://docs.example.com/k6r/visuals)

## Contributing

Made by **Dan Yakir**
