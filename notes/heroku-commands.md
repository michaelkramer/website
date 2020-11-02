# Heroku Commands

### Basic

To login:
`heroku login`

This brings you to a website to login.

### Heroku CI for github to deploy

Heroku uses GIT to signal an new version. You can use `Heroku GIT` or `Github`.

**With Github** it works best if you `enable automated deploy`

but you can do it manually

-- Attempting to have the git deploy on tag change
-- try?

```
jobs:
  repo-sync:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
      with:
        fetch-depth: '0'
        ref: 'master'
    - name: Install SSH key
      uses: shimataro/ssh-key-action@v2
      with:
         key: ${{ secrets.SSH_PRIVATE_KEY }}
         name: id_rsa # optional
         known_hosts: ${{ secrets.KNOWN_HOSTS }}
    - run: |
        git remote add bitbucket git@bitbucket.org:jingzhuyan/new1.git
        git config --global user.email " ****@***"
        git config --global user.name "yanjingzhu"
        git checkout master
        git push -u bitbucket master
```

-- container verion
-- try?

````
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - name: Login to Heroku Container registry
      env:
        HEROKU_API_KEY: ${{ secrets.HEROKU_API_KEY }}
      run: heroku container:login
    - name: Build and push
      env:
        HEROKU_API_KEY: ${{ secrets.HEROKU_API_KEY }}
      run: heroku container:push -a ${{ secrets.HEROKU_APP_NAME }} web
    - name: Release
      env:
        HEROKU_API_KEY: ${{ secrets.HEROKU_API_KEY }}
      run: heroku container:release -a ${{ secrets.HEROKU_APP_NAME }} web
```

### Restart Dyno

````

heroku restart --app michaelkramer-website web.1

```

### Add env variables

```

heroku config:set APP_NAME=website-qa APP_SCHEMA=https APP_HOST=michaelkramer-website.herokuapp.com --app michaelkramer-website

```

### Logs

```

heroku logs --tail --app michaelkramer-website

```

```
