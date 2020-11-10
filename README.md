# hello-cr

- **Demo URL: [https://hello-cr-3bjudp7n7q-ue.a.run.app/](https://hello-cr-3bjudp7n7q-ue.a.run.app/)**
- **Blog post: [Quickstart: Continuous deployment to Google Cloud Run using Github Actions](https://dev.to/pcraig3/quickstart-continuous-deployment-to-google-cloud-run-using-github-actions-fna)**

## Overview

This repository is a reference implementation for using Github Actions to continuously deploy a Node.JS application.

The deployment configuration is described in [`.github/workflows/deploy.yml`](https://github.com/pcraig3/hello-cr/blob/main/.github/workflows/deploy.yml). Whenever the `main` branch is updated, it will:

- log in to <abbr title="google Cloud Platform">GCP</abbr> as [a service account](https://cloud.google.com/iam/docs/understanding-service-accounts)
- build and push a container, tagging it with the git `SHA`
- deploy the container

The app itself is based on the sample application used in [Google's "Build and Deploy" Quickstart for Cloud Run](https://cloud.google.com/run/docs/quickstarts/build-and-deploy#writing).

The repo is MIT-licensed, so you are free to use or modify it however you like.
