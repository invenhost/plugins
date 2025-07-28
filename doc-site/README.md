# docsite

This site is based on Antora and automatically build by Cloudflare pages.

To build the site run
```bash
npx antora antora-playbook.yml
```

Set `GIT_CREDENTIALS` to your GitHub token to access private repositories.
```bash
GIT_CREDENTIALS='https://my-github-token:@github.com,https://oauth2:my-gitlab-token@gitlab.com'
npx antora antora-playbook.yml
```