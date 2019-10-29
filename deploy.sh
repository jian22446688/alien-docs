### 
# @Description: 文件及简介
 # @Author: Cary
 # @Date: 2019-10-09 09:21:43
 # @FilePath: f:\vue-project\alien-docs\deploy.sh
 ###
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll

git init
git add -A
git commit -m 'deploy'

git push -f "https://${access_token}@github.com/jian22446688/alien-docs.git" master:gh-pages

cd -
