const Generator = require('yeoman-generator');


module.exports = class extends Generator {
  installDependencies() {
    this.addDevDependencies(
      [
        {"prettier": '2.7.1'},
        {"eslint": '8.18.0'},
        {"eslint-config-prettier": '8.5.0'},
        {"eslint-config-standard": '1.0.2'},
        {"eslint-config-next": '12.1.6'},
        {"eslint-plugin-import": '2.26.0'},
        {"eslint-plugin-node": '11.1.0'},
        {"eslint-plugin-prettier": '4.0.0'},
        {"eslint-plugin-promise": '6.0.0' },
        {"eslint-plugin-react": '7.30.1'},
        {"eslint-plugin-react-hooks": '4.6.0'},
        {"@typescript-eslint/parser": '5.29.0'},
        {"@typescript-eslint/eslint-plugin": '5.29.0'},
      ]
    );
  }

  eslint() {
    this.fs.copy(this.templatePath(".eslintrc"), this.destinationPath(".eslintrc"));
  }
};