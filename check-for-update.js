const npmApi = require('npm-api');
const semver = require('semver');
const process = require('process');
const npm = new npmApi();
const reactWindow = npm.repo('react-window');

reactWindow.package().then((pkgJson) => {
  let version = pkgJson.version;
  if (semver.satisfies(semver.coerce(version), '>=1.9.0')) {
    throw new Error(`react-window ${version} has been released, please uninstall this fork and reinstall react-window.`);
  } else {
    console.log(`\nMost recent react-window version is ${version}, DynamicList not yet available on npm.`);
    console.log('This fork package will inform you when react-window @ 1.9.0 is available. \n')
  }
}).catch((err) => {
  console.log(`\n${err}\n`);
  process.exit(1)
});