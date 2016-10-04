var pkg         = require('../../package.json');
var gutil       = require('gulp-util');
var chalk       = gutil.colors;
var notifier    = require('node-notifier');

var shellPrefix = '$';

function drawFlag () {

  // American Flag in ASCII
  //
  gutil.log(
    chalk.blue('xxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
    chalk.red('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    chalk.blue('xxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
    chalk.white('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    chalk.blue('xxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
    chalk.red('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    chalk.blue('xxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
    chalk.white('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    chalk.blue('xxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
    chalk.red('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    chalk.blue('xxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
    chalk.white('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    chalk.blue('xxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
    chalk.red('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    chalk.white('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    chalk.red('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    chalk.white('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    chalk.red('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    chalk.white('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );
  gutil.log(
    chalk.red('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  );

}

function notify (title, message, wait) {
  notifier.notify({
    title: title,
    message: message,
    icon: 'assets/img/favicons/favicon-192.png',
    wait: wait,
  });
}

module.exports = {

  pkg: {

    name: pkg.name,
    version: pkg.version,

  },

  dirName: pkg.name + '-' + pkg.version,

  logIntroduction: function (message) {

    message = message || 'Draft U.S. Web Design Standards Documentation';

    gutil.log(
      gutil.colors.yellow('v' + pkg.version),
      message
    );
    drawFlag();

  },

  logCommand: function (name, message) {

    gutil.log(
      shellPrefix,
      gutil.colors.cyan(name),
      gutil.colors.magenta(message)
    );

  },

  logHelp: function (name, message) {

    gutil.log(
      shellPrefix,
      gutil.colors.cyan(name),
      gutil.colors.yellow(message)
    );

  },

  logData: function (name, message) {

    gutil.log(
      gutil.colors.cyan(name),
      gutil.colors.yellow(message)
    );

  },

  logError: function (name, message) {

    gutil.log(
      gutil.colors.red(name),
      gutil.colors.yellow(message)
    );
    notify(this.dirName + ' gulp ' + name, message, true);

  },

  logMessage: function (name, message) {

    gutil.log(
      gutil.colors.cyan(name),
      gutil.colors.green(message)
    );
    notify(this.dirName + ' gulp ' + name, message, false);

  },

};
