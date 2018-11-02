'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _isExactVersion = require('is-exact-version');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _readPackageJson = require('./read-package-json');

var _readPackageJson2 = _interopRequireDefault(_readPackageJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const d = (0, _debug2.default)('electron-forge:project-resolver');

exports.default = (() => {
  var _ref = (0, _bluebird.coroutine)(function* (dir) {
    let mDir = dir;
    let prevDir;
    while (prevDir !== mDir) {
      prevDir = mDir;
      const testPath = _path2.default.resolve(mDir, 'package.json');
      d('searching for project in:', mDir);
      if (yield _fsExtra2.default.pathExists(testPath)) {
        const packageJSON = yield (0, _readPackageJson2.default)(mDir);

        if (packageJSON.devDependencies && packageJSON.devDependencies['electron-prebuilt-compile']) {
          const version = packageJSON.devDependencies['electron-prebuilt-compile'];
          if (!(0, _isExactVersion.isExactVersion)(version)) {
            throw `You must depend on an EXACT version of "electron-prebuilt-compile" not a range (got "${version}")`;
          }
        } else {
          throw 'You must depend on "electron-prebuilt-compile" in your devDependencies';
        }

        if (packageJSON.config && packageJSON.config.forge) {
          d('electron-forge compatible package.json found in', testPath);
          return mDir;
        }
      }
      mDir = _path2.default.dirname(mDir);
    }
    return null;
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvcmVzb2x2ZS1kaXIuanMiXSwibmFtZXMiOlsiZCIsImRpciIsIm1EaXIiLCJwcmV2RGlyIiwidGVzdFBhdGgiLCJwYXRoIiwicmVzb2x2ZSIsImZzIiwicGF0aEV4aXN0cyIsInBhY2thZ2VKU09OIiwiZGV2RGVwZW5kZW5jaWVzIiwidmVyc2lvbiIsImNvbmZpZyIsImZvcmdlIiwiZGlybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsTUFBTUEsSUFBSSxxQkFBTSxpQ0FBTixDQUFWOzs7c0NBRWUsV0FBT0MsR0FBUCxFQUFlO0FBQzVCLFFBQUlDLE9BQU9ELEdBQVg7QUFDQSxRQUFJRSxPQUFKO0FBQ0EsV0FBT0EsWUFBWUQsSUFBbkIsRUFBeUI7QUFDdkJDLGdCQUFVRCxJQUFWO0FBQ0EsWUFBTUUsV0FBV0MsZUFBS0MsT0FBTCxDQUFhSixJQUFiLEVBQW1CLGNBQW5CLENBQWpCO0FBQ0FGLFFBQUUsMkJBQUYsRUFBK0JFLElBQS9CO0FBQ0EsVUFBSSxNQUFNSyxrQkFBR0MsVUFBSCxDQUFjSixRQUFkLENBQVYsRUFBbUM7QUFDakMsY0FBTUssY0FBYyxNQUFNLCtCQUFnQlAsSUFBaEIsQ0FBMUI7O0FBRUEsWUFBSU8sWUFBWUMsZUFBWixJQUErQkQsWUFBWUMsZUFBWixDQUE0QiwyQkFBNUIsQ0FBbkMsRUFBNkY7QUFDM0YsZ0JBQU1DLFVBQVVGLFlBQVlDLGVBQVosQ0FBNEIsMkJBQTVCLENBQWhCO0FBQ0EsY0FBSSxDQUFDLG9DQUFlQyxPQUFmLENBQUwsRUFBOEI7QUFDNUIsa0JBQU8sd0ZBQXVGQSxPQUFRLElBQXRHO0FBQ0Q7QUFDRixTQUxELE1BS087QUFDTCxnQkFBTSx3RUFBTjtBQUNEOztBQUVELFlBQUlGLFlBQVlHLE1BQVosSUFBc0JILFlBQVlHLE1BQVosQ0FBbUJDLEtBQTdDLEVBQW9EO0FBQ2xEYixZQUFFLGlEQUFGLEVBQXFESSxRQUFyRDtBQUNBLGlCQUFPRixJQUFQO0FBQ0Q7QUFDRjtBQUNEQSxhQUFPRyxlQUFLUyxPQUFMLENBQWFaLElBQWIsQ0FBUDtBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRyIsImZpbGUiOiJ1dGlsL3Jlc29sdmUtZGlyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgeyBpc0V4YWN0VmVyc2lvbiB9IGZyb20gJ2lzLWV4YWN0LXZlcnNpb24nO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcmVhZFBhY2thZ2VKU09OIGZyb20gJy4vcmVhZC1wYWNrYWdlLWpzb24nO1xuXG5jb25zdCBkID0gZGVidWcoJ2VsZWN0cm9uLWZvcmdlOnByb2plY3QtcmVzb2x2ZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGRpcikgPT4ge1xuICBsZXQgbURpciA9IGRpcjtcbiAgbGV0IHByZXZEaXI7XG4gIHdoaWxlIChwcmV2RGlyICE9PSBtRGlyKSB7XG4gICAgcHJldkRpciA9IG1EaXI7XG4gICAgY29uc3QgdGVzdFBhdGggPSBwYXRoLnJlc29sdmUobURpciwgJ3BhY2thZ2UuanNvbicpO1xuICAgIGQoJ3NlYXJjaGluZyBmb3IgcHJvamVjdCBpbjonLCBtRGlyKTtcbiAgICBpZiAoYXdhaXQgZnMucGF0aEV4aXN0cyh0ZXN0UGF0aCkpIHtcbiAgICAgIGNvbnN0IHBhY2thZ2VKU09OID0gYXdhaXQgcmVhZFBhY2thZ2VKU09OKG1EaXIpO1xuXG4gICAgICBpZiAocGFja2FnZUpTT04uZGV2RGVwZW5kZW5jaWVzICYmIHBhY2thZ2VKU09OLmRldkRlcGVuZGVuY2llc1snZWxlY3Ryb24tcHJlYnVpbHQtY29tcGlsZSddKSB7XG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSBwYWNrYWdlSlNPTi5kZXZEZXBlbmRlbmNpZXNbJ2VsZWN0cm9uLXByZWJ1aWx0LWNvbXBpbGUnXTtcbiAgICAgICAgaWYgKCFpc0V4YWN0VmVyc2lvbih2ZXJzaW9uKSkge1xuICAgICAgICAgIHRocm93IGBZb3UgbXVzdCBkZXBlbmQgb24gYW4gRVhBQ1QgdmVyc2lvbiBvZiBcImVsZWN0cm9uLXByZWJ1aWx0LWNvbXBpbGVcIiBub3QgYSByYW5nZSAoZ290IFwiJHt2ZXJzaW9ufVwiKWA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93ICdZb3UgbXVzdCBkZXBlbmQgb24gXCJlbGVjdHJvbi1wcmVidWlsdC1jb21waWxlXCIgaW4geW91ciBkZXZEZXBlbmRlbmNpZXMnO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFja2FnZUpTT04uY29uZmlnICYmIHBhY2thZ2VKU09OLmNvbmZpZy5mb3JnZSkge1xuICAgICAgICBkKCdlbGVjdHJvbi1mb3JnZSBjb21wYXRpYmxlIHBhY2thZ2UuanNvbiBmb3VuZCBpbicsIHRlc3RQYXRoKTtcbiAgICAgICAgcmV0dXJuIG1EaXI7XG4gICAgICB9XG4gICAgfVxuICAgIG1EaXIgPSBwYXRoLmRpcm5hbWUobURpcik7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuIl19