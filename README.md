# Intro to Python

Please find the deployed site [here](https://uniexeterrse.github.io/intro-to-python/).

## Source details

This repository is based off of the University of Exeter `UoE-workshop-template` repository. This template uses Jekyll and GitHub pages to create a workshop guide.

## Ruby & local testing

Jekyll is a ruby Gem. A simple Gemfile has been added. To test the site locally, clone the repository, and run the following (on macOS). Ensure `ruby` and `bundle` have been installed, and then run the following from the project root:

`bundle config set --local path 'vendor/bundle'`

`bundle install`

`bundle exec jekyll serve`

Then open the site at the default server address of `http://127.0.0.1:4000`.

## JavaScript and bootstrap

Most of the styling for the site is found in `_sass/jekyll-theme-slate.scss`. JavaScript, Jquery, and and `bootstrap.css` have been added for the sole purpose of create unfolding and unfolding solution blocks, with bootstrap icons next to them. This has been lifted from the Carpentries Python lesson repository, and probably contains far more fluff than it needs.
