module.exports = function (grunt) {
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: './templates/lib', //ライブラリの配置先のディレクトリ
          layout: 'byType',
          install: true, //grunt実行時にbower installを実行するかどうか
          verbose: false, // ログの詳細を出すかどうか
          cleanTargetDir: false, // targetDirを削除するかどうか
          cleanBowerDir: false // bowerのcomponentsディレクトリを削除するかどうか
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-bower-task');
};