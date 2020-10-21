# Version Control

This is a simple script to create a version tag and writes to change log.

### What I'm trying to achive

When you type `npm run version patch` it will:

1. bump the version in the `package.json`
1. write the changes into the `CHANGELOG.md`
1. commit the changes
1. merge into `develop`

### Here is what one of my co-workers came up with.

```bash
# make sure we have the latest develop
git checkout develop;
git pull;

# make sure we have the latest release candidate code from master
git checkout master;
git pull;

# Create new tag
npm version $1;

# Create changelog between newest tag and previous
PreviousAndCurrentGitTag=`git describe --tags \`git rev-list --tags --abbrev=0 --max-count=2\` --abbrev=0`
PreviousGitTag=`echo $PreviousAndCurrentGitTag | cut -f 2 -d ' '`
CurrentGitTag=`echo $PreviousAndCurrentGitTag | cut -f 1 -d ' '`

GitLog=`git log --pretty=format:"* %s (%an)" --abbrev-commit --no-merges ${PreviousGitTag}..${CurrentGitTag}`

echo "### $(echo "${CurrentGitTag}")
$(echo "${GitLog}")

$(cat CHANGELOG.md)" > CHANGELOG.md

git add CHANGELOG.md;
git commit -m "Update Changelog With Commits For $CurrentGitTag";

# adds new Changelog commit to origin/master
git push origin master --tags --no-verify;

# merges tag + Changelog into develop
git checkout develop;
git merge master;

# push new code to origin/develop
git push origin develop --no-verify;
```

We also added to `package.json`

```json
{
    ...
    "scripts": {
        ...
        "version-major": "bash dev-ops/version major",
        "version-minor": "bash dev-ops/version minor",
        "version-patch": "bash dev-ops/version patch"
    }
    ...
}
```

allowing simple versioning `yarn version-patch`.

### Breaking down some of this:

`npm version $1;`

> If run in a git repo, it will also create a version commit and tag. This behavior is controlled by git-tag-version

---

```bash
git describe --tags `git rev-list --tags --abbrev=0 --max-count=2` --abbrev=0
```

This section will return the LAST 2 tags.

**result:**

```
v0.1.0
v0.1.1
```

---

```
git log --pretty=format:"* %s (%an)" --abbrev-commit --no-merges ${PreviousGitTag}..${CurrentGitTag}
```

This finds all the comment messages and who committed them and makes it nice and neat.

**result:**

```
### v0.1.1
* 0.1.1 (Michael Kramer)
* Version Test (Michael Kramer)
* Update Changelog With Commits For v0.1.0 (Michael Kramer)
* start (Michael Kramer)
```
