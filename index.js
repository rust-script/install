const core = require('@actions/core');
const github = require('@actions/github');

try {
  const version = core.getInput('version');
  console.log(`Version: ${version}!`);
} catch (error) {
  core.setFailed(error.message);
}
