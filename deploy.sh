#!/bin/bash

update() {
    git pull origin master
    git add -A
    git commit -m "Site updated at $(date +%Y-%m-%dT%H:%M:%S)"
    git push origin master
}

cd build || exit
update
