const { execSync } = require("child_process");

const RunModule = (module_name) => {
  const stdout = execSync(`bash scripts/runModule.sh ${module_name}`);
  result = stdout.toString();
  return result;
};

module.exports = { RunModule };
