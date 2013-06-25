
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    
    's3-generate': {
      dest: 's3.js',
      key: 'a',
      secret: 'b',
      bucket: 'c'
    }
  });

  grunt.loadNpmTasks('grunt-commonjs-aws-s3');

  return grunt.registerTask('default', ['s3-generate']);
};
