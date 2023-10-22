import * as core from "@actions/core";
import { Options } from "./options";

function parseBranch(originalBranchName: string, maxBranchLength: number) {
  console.log("max: ", maxBranchLength);
  const parsedBranchName = originalBranchName
    .replace(/\./g, "-")
    .replace(/_/g, "-")
    .replace(/\//g, "-")
    .toLowerCase();

  return parsedBranchName.substring(0, maxBranchLength).replace(/-$/g, "");
}

export function run(options: Options) {
  const tlDomainCompatible = parseBranch(
    options.inputBranchName,
    options.maxBranchNameLength
  );

  core.info(`tlDomainCompatible: ${tlDomainCompatible}`);

  core.setOutput("tlDomainCompatible", tlDomainCompatible);
}
