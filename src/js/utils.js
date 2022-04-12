/**
 * Dummy utility class to demonstrate a basic JS
 * structure and assoiciated test
 * @param {Object} params - containing:
 * @param {String} homePagePath - the pathname of the homepage (defaults to '/')
 */
class Utils {
  isHomePage() {
    return document.location.pathname === this.params.homePagePath;
  }
  constructor() {}
}

module.exports = Utils;
