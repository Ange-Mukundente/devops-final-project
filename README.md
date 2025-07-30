# DevOps Summative Phase 3: Full Automated Deployment (CD)

This repository contains the complete implementation for the "Summative Phase 3 - Full Automated Deployment (CD), Operations & Professional Release" assignment. The project demonstrates a professional-grade, fully automated CI/CD pipeline for a Node.js web application.

---

## 🚀 Live Application URLs

*   **Staging Environment:** [http://102.37.145.41](http://102.37.145.41)
*   **Production Environment:** [http://20.87.62.63](http://20.87.62.63)

---

## 📹 Video Demonstration

A full walkthrough of the project, demonstrating a live code change moving from a local branch to the production environment, can be viewed below.

*   **Video Link:** `[Link to your YouTube or LMS video submission will go here]`

---

## ✨ Features & Technical Implementation

This project successfully implements a modern DevOps and DevSecOps workflow with the following key features:

### 1. Continuous Deployment (CD) Pipeline

*   **Fully Automated Workflow:** The pipeline, configured in `.github/workflows/main.yml`, automates all stages from code commit to live deployment.
*   **GitFlow Branching Strategy:**
    *   Commits to the `develop` branch automatically trigger a deployment to the **Staging** environment.
    *   Merges to the `main` branch trigger a deployment to the **Production** environment.
*   **Manual Production Gate:** A manual approval step is required before any code is released to production, ensuring an extra layer of safety and control.

### 2. DevSecOps Integration

*   **Automated Testing:** Unit tests are executed automatically within the pipeline using Jest and Supertest to validate application functionality before any deployment.
*   **Dependency Vulnerability Scanning:** Integrated **Snyk** to automatically scan Node.js dependencies for known security vulnerabilities on every run, preventing insecure code from being deployed.
*   **Secret Management:** All sensitive credentials (Docker Hub tokens, SSH keys, etc.) are securely stored and accessed using GitHub's encrypted secrets.

### 3. Release Management

*   **Conventional Commits:** All commits follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for a clean and readable version history.
*   **Changelog:** A detailed `CHANGELOG.md` is maintained to document all notable changes and releases.

---

## 🛠️ Technology Stack

*   **Application:** Node.js, Express.js, EJS
*   **CI/CD Automation:** GitHub Actions
*   **Containerization:** Docker & Docker Hub
*   **Security Scanning:** Snyk
*   **Automated Testing:** Jest, Supertest
*   **Infrastructure:** Virtual Machines hosted on Microsoft Azure

---

## 本地运行 (Running Locally)

To run this application on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Ange-Mukundente/devops-final-project.git
    cd devops-final-project
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the tests (optional but recommended):**
    ```bash
    npm test
    ```
4.  **Start the application:**
    ```bash
    npm start
    ```
5.  Open your browser and navigate to `http://localhost:3000`.
