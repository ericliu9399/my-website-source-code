source script/build_all.sh
source script/public_git_init.sh
cd build
git add .
git commit -m "build"
git push -f public master
cd ..