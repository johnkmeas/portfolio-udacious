/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /* Change these */
            width: 480,
            suffix: '_480_2x',
            quality: 90
          },
          {
          width: 400,
            suffix: '_400_2x',
            quality: 90
          },
          {
          width: 320,
            suffix: '_320_2x',
            quality: 90
          },
          {
          width: 240,
            suffix: '_240_2x',
            quality: 90
          },
          {
          width: 160,
            suffix: '_160_2x',
            quality: 90
          },
          {
          width: 80,
            suffix: '_80_2x',
            quality: 90
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.png'],
          cwd: 'img/',
          dest: 'images_para/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images_para'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images_para']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
