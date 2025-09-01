pipeline {
    agent any

 tools {
        nodejs 'nodejs-lts'  // <-- Use the exact name from Global Tool Configuration
    }


    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/psu6510110340/simple-express-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'npx sonar-scanner -Dsonar.projectKey=simple-express-app'
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}
