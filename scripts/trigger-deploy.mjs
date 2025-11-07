import { execSync } from 'node:child_process'

function sh(cmd) {
  execSync(cmd, { stdio: 'inherit' })
}

function out(cmd) {
  return execSync(cmd, { stdio: ['ignore', 'pipe', 'inherit'], encoding: 'utf-8' }).trim()
}

try {
  // 1) Build the site (local test build)
  sh('npm run docs:build')

  // 2) Check if there are any tracked changes to commit (source changes)
  const status = out('git status --porcelain')
  if (status) {
    // Commit real changes
    sh('git add -A')
    sh('git commit -m "chore: update docs site"')
  } else {
    // No changes in repo -> create an empty commit to trigger GitHub Actions
    sh('git commit --allow-empty -m "ci: trigger deploy"')
  }

  // 3) Push to main -> GitHub Actions builds and publishes to gh-pages
  sh('git push')
} catch (err) {
  process.exitCode = 1
}
