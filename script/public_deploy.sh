npm run build
cd public
rm -r -f .git
git init
git add .
git commit -m "build"
git remote add origin https://github.com/edinliu/test.git
git push -f origin master
cd ..