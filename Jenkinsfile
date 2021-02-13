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
                sh '/usr/local/bin/docker build -t gardenerd --no-cache .'
                sh '/usr/local/bin/docker tag gardenerd localhost:3000/gardenerd'
                sh '/usr/local/bin/docker push localhost:3000/gardenerd'
                sh '/usr/local/bin/docker rmi -f gardenerd localhost:3000/gardenerd'
            }
        }
    }
}
