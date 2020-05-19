source script/build_all.sh
source script/public_copy.sh
cd public
git add .
git commit -m "build"
git push -u public master
cd ..