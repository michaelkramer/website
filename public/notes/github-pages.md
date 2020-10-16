# How to deploy to gh-pages

Yes I know there are like a million places on the web to find this info. I wanted to write it in myown words and without other distractions.

## Setup

This is a good description of steps to deploy

ref: https://create-react-app.dev/docs/deployment#github-pages

1. Add the homepage to your `package.json`

```json
"homepage": "https://myusername.github.io/my-app",
```

2. Install the `gh-pages` packages.

```bash
npm install gh-pages --save-dev
```

3. Add to your `scripts` to `package.json`

```json
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

#### Info

the `gh-pages` will deploy `-d` directory `build` to branch `gh-pages` unless you specify. By changing the deploy command to

```json
"deploy": "gh-pages -b master -d build",
```

### Manually deploy

```bash
npm run deploy
```

### Deploy via GitHub Actions

This is a simple deploy action script.

ref: https://github.com/JamesIves/github-pages-deploy-action

1. Add folders `.github/workflows`
2. Make a new yaml `main.yml`

```yaml
name: Build and Deploy
on:
  push:
    branches: [master]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.1 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
        with:
          persist-credentials: false

      - name: Install and Build # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
        run: |
          npm install
          npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@3.6.2
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages # The branch the action should deploy to.
          FOLDER: build # The folder the action should deploy.
          CLEAN: true # Automatically remove deleted files from the deploy branch
```

### `gh-pages` command line help

```bash
Usage: gh-pages [options]

Options:
  -V, --version            output the version number
  -d, --dist <dist>        Base directory for all source files
  -s, --src <src>          Pattern used to select which files to publish (default: "**/*")
  -b, --branch <branch>    Name of the branch you are pushing to (default: "gh-pages")
  -e, --dest <dest>        Target directory within the destination branch (relative to the root) (default: ".")
  -a, --add                Only add, and never remove existing files
  -x, --silent             Do not output the repository url
  -m, --message <message>  commit message (default: "Updates")
  -g, --tag <tag>          add tag to commit
  --git <git>              Path to git executable (default: "git")
  -t, --dotfiles           Include dotfiles
  -r, --repo <repo>        URL of the repository you are pushing to
  -p, --depth <depth>      depth for clone (default: 1)
  -o, --remote <name>      The name of the remote (default: "origin")
  -u, --user <address>     The name and email of the user (defaults to the git config).  Format is "Your Name <email@example.com>".
  -v, --remove <pattern>   Remove files that match the given pattern (ignored if used together with --add). (default: ".")
  -n, --no-push            Commit only (with no push)
  -f, --no-history         Push force new commit without parent history
  --before-add <file>      Execute the function exported by <file> before "git add"
  -h, --help               output usage information
```
