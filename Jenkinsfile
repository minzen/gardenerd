pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 3000:3000'
            environment {
                npm_config_cache = 'npm-cache'
            }
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
