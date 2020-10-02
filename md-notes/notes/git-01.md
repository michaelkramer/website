<!-- Git Refresh .gitignore files -->

# So you changed your .gitignore but the files are still being pushed??

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
