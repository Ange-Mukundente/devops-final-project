# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2025-07-30

### Added
- **Production Deployment:** Implemented a full, automated deployment to a dedicated production environment.
- **Manual Approval Gate:** Configured the production deployment job to require manual approval in GitHub Actions, ensuring release safety.
- **Branch-Based Deployment:** Finalized the pipeline logic to trigger staging deployments from the `develop` branch and production deployments from the `main` branch.
- **Full Test Suite:** Integrated a full testing suite using Jest and Supertest, run automatically on every push.
- **DevSecOps Integration:** Added automated dependency vulnerability scanning using Snyk to the CI pipeline.

### Changed
- **Refactored Application:** Separated the Node.js server logic (`server.js`) from the application logic (`src/app.js`) to enable reliable automated testing.
- **Improved Pipeline Structure:** Separated staging and production deployment logic into distinct jobs for clarity and independent execution.

## [0.2.0] - 2025-07-29

### Added
- **Automated Staging Deployment:** Created the first end-to-end continuous deployment pipeline, which automatically deploys the application to a live staging URL.
- **SSH Integration:** Integrated the `appleboy/ssh-action` to securely connect and run Docker commands on a remote server.

### Fixed
- **Server Configuration:** Corrected server-side SSH daemon settings (`sshd_config`) and user permissions for the Docker daemon (`usermod -aG docker`) to allow successful remote deployments.
- **Firewall Rules:** Configured Network Security Group (NSG) rules in the cloud provider to allow inbound HTTP traffic on Port 80, making the deployed application accessible.
- **Persistent Workflow Failures:** Resolved numerous workflow syntax errors through iterative debugging, culminating in a stable and reliable pipeline definition.

## [0.1.0] - 2025-07-28

### Added
- **Initial Application:** Created the basic Node.js and Express web application with an EJS view.
- **Containerization:** Wrote the initial `Dockerfile` to containerize the application.
- **Core CI Pipeline:** Set up the initial GitHub Actions workflow to automatically build the Docker image and push it to Docker Hub.
- **Project Documentation:** Created the initial `README.md` and this `CHANGELOG.md`.
