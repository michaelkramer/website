# Git situations that you might run into.

## Say you accidentally pushed your .env files

This is ok, you can fix this. Your .env hold your sensitive data, but this could also be any file you don't want there. Here is what you do.

Create a new orphan branch "not part of the history"

```
git checkout --orphan temp_branch
```

Add all to new commit

```
git add -A
git commit -am "The first commit"
```

Delete the `name_branch` branch

```
git branch -D name_branch
```

Rename the `temp_branch` to `name_branch`

```
git branch -m name_branch
```

Forcefully update the remote repository

```
git push -f origin name_branch
```

## So you changed your .gitignore but the files are still being pushed??

You will have to clear the existing git `cache` first.

### Remove the cache of all the files

```
git rm -r --cached .
```

### Remove the cache of specific file

```
git rm -r --cached <file_name.ext>
```

Once you clear the existing cache, add/stage file/files in the current directory and commit

```
git add . // To add all the files
git add <file_name.ext> // To add specific file
git commit -m "Suitable Message"
```

This works for both adding a file that was once ignored as well as ignoring a file that was once tracked
