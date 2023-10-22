import * as core from "@actions/core";

export interface Options {
  inputBranchName: string;
  maxBranchNameLength: number;
}

export class GitHubOptions implements Options {
  get inputBranchName(): string {
    return core.getInput("inputBranchName");
  }

  get maxBranchNameLength(): number {
    return Number(core.getInput("maxBranchNameLength")) || 15;
  }
}
