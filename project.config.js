module.exports = class ProjectConfig {
  constructor(mix) {
    this.mix = mix;
    this.publicPath = 'dist/';
    /**
     * Clean out the public path directory on each build
     *
     * @var {boolean}
     */
    this.clean = true;

    this.html = {
      path: 'src/index.html'
    }

    /**
     * JS files to be
     *
     * @var {array}
     */
    this.js = {
      enable: true,
      vue: false,
      react: false,
      files: [
        'src/app.js',
        'src/vendor.js',
      ],
      output: `${this.publicPath}/app.js`
    };

    /**
     * SCSS config to be compiled to css
     *
     * @var {object}
     */
    this.scss = {
      enable: true,
      files: [
        'src/app.scss',
      ]
    };

    this.version = {
      /**
       * Toggle versioning for you application.
       * @var {boolean}
       */
      enable: true,
      /**
       * Configure the delimiters used for hashing
       * @var {object}
       */
      delimiter: {
        left: '[[',
        right: ']]',
      }
    }
  }
  /**
   * Enable Versioning for assets
   *
   * @returns {boolean}
   */
  isVersioned() {
    return (this.version.enable && this.mix.inProduction());
  }
}
