pipeline {
    agent any

 tools {
        nodejs 'nodejs-lts'  // <-- Use the exact name from Global Tool Configuration
    }


    stages {
        stage('Checkout') {
            steps {
                git branch: 'feature/lab', url: 'https://github.com/psu6510110340/simple-express-app.git'
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
                    sh '''
                        npx sonar-scanner \
                        -Dsonar.projectKey=simple-express-app \
                        -Dsonar.projectName=simple-express-app \
                        -Dsonar.projectVersion=${BUILD_NUMBER} \
                        -Dsonar.sources=. \
                        -Dsonar.exclusions=node_modules/**,coverage/**,**/*.test.js
                    '''
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
