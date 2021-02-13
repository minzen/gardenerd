pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        npm_config_cache = 'npm-cache'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                docker build -t gardenerd:${BUILD_NUMBER} --no-cache .
                docker tag gardenerd:${BUILD_NUMBER} gardenerd:latest
                docker push localhost:3000/gardenerd
                docker rmi -f gardenerd localhost:3000/gardenerd
            }
        }
    }
}
