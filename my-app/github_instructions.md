# Pushing code to a github repository from the command-line interface

## Table of Contents

<br>

- [Pushing code to a github repository from the command-line interface](#pushing-code-to-a-github-repository-from-the-command-line-interface)
  - [Initializing the current folder as a Github repository](#initializing-the-current-folder-as-a-github-repository)
  - [Adding files to be staged for commit](#adding-files-to-be-staged-for-commit)
  - [Checking the files that will be committed](#checking-the-files-that-will-be-committed)
  - [Committing files to github](#committing-files-to-github)
  - [Adding a github remote that implies which repository the push will be made into.](#adding-a-github-remote-that-implies-which-repository-the-push-will-be-made-into)
  - [Pushing the code to github](#pushing-the-code-to-github)
  - [Giving the branch a name](#giving-the-branch-a-name)
  - [Switching from the current branch to a created branch](#switching-from-the-current-branch-to-a-created-branch)
  - [Creating files on a branch](#creating-files-on-a-branch)
  - [Merging a branch into the default branch](#merging-a-branch-into-the-default-branch)
  - [Deleting a github branch](#deleting-a-github-branch)
  - [Pushing the code to github](#pushing-the-code-to-github)
- [Creating a github branch from the command-line interface](#creating-a-github-branch-from-the-command-line-interface)
  - [Fetching all the branches within a github repository](#fetching-all-the-branches-within-a-github-repository)
  - [Getting the latest version of code just in case changes have been made due to prior commits](#getting-the-latest-version-of-code-just-in-case-changes-have-been-made-due-to-prior-commits)
  - [Updating the branches on github after deleting a branch via command-line-interface](#updating-the-branches-on-github-after-deleting-a-branch-via-command-line-interface)

<br>

## Creating a github repository via the command-line-interface

<br>

Prerequisites

* [Github CLI](https://cli.github.com/)

After installing the Github CLI, type ```gh repo create <name> <--private | --public>```. A repo with the specified name will be created on Github.

<br>

## Initializing the current folder as a Github repository

<br>

Navigate to the folder on your computer and then type the command ```git init```. This will initialize the current folder as a github repository in order for the code within to be pushed to a github-based repository.

<br>

## Adding files to be staged for commit

<br>

Type the following command in your terminal ```git add .``` if you would like to add all the files within the current folder to be staged for commit however you can add specific files by utilizing the command ```git add <file>```.

<br>

## Checking the files that will be committed

<br>

Type ```git status``` to see an output of the file/files that will be committed.

<br>

## Committing files to github

<br>

To commit the staged file/files to github type ```git commit -m "<commit message>" ``` particularly specifying a descriptive message based on the commit for easy identification in the future.

<br>

## Adding a github remote that implies which repository the push will be made into.

<br>

Type the following command in your terminal to add the github repository as a remote ```git remote add <remote name> <remote url>```.

<br>

## Pushing the code to github

<br>

Type ```git push -u <remote name> <branch>``` to push the committed files to github, you should see some output logs to indicate it was successful.

<br>

<br>

# Creating a github branch from the command-line interface

<br>

## Giving the branch a name

<br>

Type ```git branch <name>``` in your command-line to create a new branch.

<br>

## Switching from the current branch to a created branch

<br>

Type ```git checkout <name>``` to switch from your current branch to a branch that you created.

<br>

## Creating files on a branch

<br>

Once you have typed the previous command above then you can start creating a file/files that you would like to be situated on this branch.

<br>

**Follow steps 3, 4 and 5 in order to push this branch to github**

<br>

## Merging a branch into the default branch 

<br>

Type ```git merge``` while on the branch which you would like to merge.

<br>

## Deleting a github branch

<br>

Type ```git branch -d <name>``` to delete the branch however once the branch has not been merged then use the command ```git branch -D <name>```.

<br>

## Fetching all the branches within a github repository

<br>

Type ```git branch fetch``` to retrieve a list of all the branches within the github repository

<br>

## Getting the latest version of code just in case changes have been made due to prior commits

<br>

Type ```git pull <remote name> <branch name>``` to get the latest code from the particular repository just in case there have been changes made.

<br>

## Updating the branches on github after deleting a branch via command-line-interface

<br>

Type ```git push <remote name> --delete <branch name>```. This will update the branches on your github repository.

