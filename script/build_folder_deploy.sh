npm run build
source script/build_folder_git_init.sh
cd build
git add .
git commit -m "build"
git push -u deploy master
cd ..