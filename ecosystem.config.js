module.exports = {


    apps: [
        // First application
        {
            name: 'fg',
            script: 'npm start',
            env: {
                COMMON_VARIABLE:
                    'true'
            },
            env_production: {

                NODE_ENV:
                    'production'

            }

        },

    ],



    /**
    
    * Deployment section
    
    * http://pm2.keymetrics.io/docs/usage/deployment/
    
    */

    deploy: {

        production: {

            key: '/Users/Juico/.ssh/id_rsa',

            user: 'ubuntu',

            // key: "/Users/Juico/.ssh/id_rsa",

            host: ['3.16.14.183'],

            ref: 'origin/master',

            ssh_options: ["StrictHostKeyChecking=no", "PasswordAuthentication=no", "ForwardAgent=yes"],

            repo: 'git@github.com:nalnir/Feeling-Good.git',

            path: '/feeling-good',

            'pre-setup':
                "ls -la; sudo mkdir /feeling-good ; sudo chown -R ubuntu.ubuntu /feeling-good ; " +
                "sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - ; " +
                "sudo apt-get install -y nodejs ; " +
                "sudo npm install pm2 -g ; ",
            'pre-deploy':
                'sudo mkdir /feeling-good ; ' +
                'sudo mkdir /feeling-good/source ; sudo mkdir /feeling-good/shared ;' +
                'sudo chown -R ubuntu.ubuntu /feeling-good',
            'pre-deploy-local':
                "echo 'This is a local executed command'",
            'post-deploy':
                'sudo npm install && ' +
                'sudo pm2 reload ecosystem.config.js --env production '
             //   'sudo pm2 restart ch && ' +
             //   'sudo pm2 start'
        },
    }
};