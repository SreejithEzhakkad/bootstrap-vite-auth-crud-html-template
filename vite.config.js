const path = require('path');
import { resolve } from 'path'

import handlebars from 'vite-plugin-handlebars';

export default {
    root: path.resolve(__dirname, 'src'),
    envDir: './../',
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    plugins: [handlebars({
        partialDirectory: [path.resolve(__dirname, 'src/partials'),path.resolve(__dirname, 'src/layouts')],
    
        })
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                login: resolve(__dirname, 'src/login.html'),
                register: resolve(__dirname, 'src/register.html'),
                forgotPassword: resolve(__dirname, 'src/forgot-password.html'),
                changePassword: resolve(__dirname, 'src/change-password.html'),
            },
            
        },
        outDir: '../dist'
    },
    server: {
        port: 8080,
        hot: true
    }
}