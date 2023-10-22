import * as core from "@actions/core";
import * as github from "@actions/github";

export interface Options {
  inputBranchName: string;
  maxBranchNameLength: number;
}

export class GitHubOptions implements Options {
  get inputBranchName(): string {
    const context = github.context;

    if (context.eventName === "pull_request") {
      return context.payload.pull_request?.head.ref;
    }

    if (context.eventName === "push") {
      const branchName = context.ref.replace("refs/heads/", "");
      return branchName;
    }

    core.warning(
      "Unable to determine the branch name as the event trigger workflow is not supported."
    );
    return "";
  }

  get maxBranchNameLength(): number {
    return Number(core.getInput("maxBranchNameLength")) || 15;
  }
}
