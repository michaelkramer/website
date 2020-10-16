# Say you accidentally pushed your .env files 🤦‍♂️

This is ok, here is what you do.

Create a new orphan branch "not part of the history"

```
git checkout --orphan temp_branch
```

Add all to new commit

```
git add -A
git commit -am "The first commit"
```

Delete the `master` branch

```
git branch -D master
```

Rename the `temp_branch` to `master`

```
git branch -m master
```

Forcefully update the remote repository

```
git push -f origin master
```
