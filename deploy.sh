#!/bin/bash

set -e

update() {
    git init
    git add -A
    git commit -m "Site updated at $(date +%Y-%m-%dT%H:%M:%S)"
    git remote add origin git@github.com:nowtiny/nowtiny.github.io.git
    git remote update
    git merge origin/master --allow-unrelated-histories -X ours --no-edit
    git push origin master
}

cd build || exit
update
