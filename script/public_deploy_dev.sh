source script/build_all.sh
source script/public_git_init.sh
cd public
git add .
git commit -m "build"
git push -u dev master
cd ..