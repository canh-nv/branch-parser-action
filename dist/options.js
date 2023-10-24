"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubOptions = void 0;
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
class GitHubOptions {
    get inputBranchName() {
        var _a;
        const context = github.context;
        if (context.eventName === "pull_request") {
            return (_a = context.payload.pull_request) === null || _a === void 0 ? void 0 : _a.head.ref;
        }
        if (context.eventName === "push") {
            const branchName = context.ref.replace("refs/heads/", "");
            return branchName;
        }
        core.warning("Unable to determine the branch name as the event trigger workflow is not supported.");
        return "";
    }
    get maxBranchNameLength() {
        return Number(core.getInput("maxBranchNameLength")) || 15;
    }
}
exports.GitHubOptions = GitHubOptions;
