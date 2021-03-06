module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
        public: {
            files: [
                {src: 'bower_components/bootstrap/dist/css/bootstrap.min.css', dest: 'app/assets/css/bootstrap.min.css'},
                {src: 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', dest: 'app/assets/fonts/glyphicons-halflings-regular.eot'},
                {src: 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', dest: 'app/assets/fonts/glyphicons-halflings-regular.svg'},
                {src: 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', dest: 'app/assets/fonts/glyphicons-halflings-regular.ttf'},
                {src: 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', dest: 'app/assets/fonts/glyphicons-halflings-regular.woff'},
                {src: 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', dest: 'app/assets/fonts/glyphicons-halflings-regular.woff2'},
                {src: 'bower_components/angular-route/angular-route.min.js', dest: 'app/assets/js/angular-route.min.js'},
                {src: 'bower_components/bootstrap/dist/js/bootstrap.min.js', dest: 'app/assets/js/bootstrap.min.js'},
                {src: 'bower_components/jquery/dist/jquery.min.js', dest: 'app/assets/js/jquery.min.js'},
                {src: 'bower_components/angular/angular.min.js', dest: 'app/assets/js/angular.min.js'},
            ],
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};