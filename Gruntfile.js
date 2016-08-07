module.exports = function(grunt) {

grunt.initConfig  ({
    shell:{
     first: {  command: [
        'mkdir db',
        'mkdir lololo',
         ].join('&')
         },
    },
});

grunt.loadNpmTasks('grunt-shell');
   grunt.registerTask('first', ['shell:first']); 
};