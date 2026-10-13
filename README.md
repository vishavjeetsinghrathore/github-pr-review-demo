# GitHub PR Review Demo

A small JavaScript project for testing an n8n GitHub Pull Request AI Review workflow.

## Run locally
Requires Node.js 18+.

```bash
npm install
npm test
npm start
```

## Suggested n8n test
1. Push this repository to GitHub.
2. Create a branch named `test/buggy-discount`.
3. Change the safe return line in `src/pricing.js` as shown in `examples/buggy-pr-change.md`.
4. Open a pull request.
5. Check the n8n execution: PR Trigger -> Get file's Diffs -> Create target Prompt -> Code Review Agent -> GitHub review comment.
6. Confirm the AI comment identifies the discount bug and explains its impact.

Do not merge the intentionally buggy change.
