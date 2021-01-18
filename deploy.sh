#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 复制CNAME文件到发布目录,自定义域名
cp CNAME docs/.vuepress/dist

# 进入生成的文件夹
cd docs/.vuepress/dist

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:BoBoooooo/Element-Pro-Crud-Doc.git master:gh-pages

cd -
