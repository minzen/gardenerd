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
        stage('build') {
            steps {
                echo 'Building gardenerd'
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                echo 'Executing gardenerd tests'
            }
        }
        stage('deploy') {
            steps {
                echo 'Deploying software'
            }
        }
    }
}
