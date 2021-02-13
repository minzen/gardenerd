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
            sh 'docker build -t gardenerd --no-cache .'
            sh 'docker tag gardenerd localhost:3000/gardenerd'
            sh 'docker push localhost:3000/gardenerd'
            sh 'docker rmi -f gardenerd localhost:3000/gardenerd'
        }
    }
}
