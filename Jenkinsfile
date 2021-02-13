pipeline {
    agent {
        docker {
            image 'node:14.15.5-alpine3.10'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
