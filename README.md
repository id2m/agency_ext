
Demo : [agency_ext](https://d2m.tech/agency_ext/)

### From [StartBoostrap Agency Theme](https://startbootstrap.com/template-overviews/agency/).

[Current Jekyll version](https://github.com/y7kim/agency-jekyll-theme), allows end-users to edit/add posts on Portfolio section. Other sections (services, teams, ..) can only be modified on html, yml files.
Note : on Wordpress, end-users can access all sections contents.




### Propositions :

- end-users can edit/add items on all sections

- a custom editor, served locally or on a Virtualbox, communicate with github server to update the metadata.


#### Demo editor

- [create a new item on service section then update production site](https://drive.google.com/open?id=0B8fHSjalmbNEOWg3eVJrLWtxZmc)

- [modify background section, color and font, then delete these local updates](https://drive.google.com/open?id=0B8fHSjalmbNEQVRmMXctczZpNVE)

#### Limitations :


- build time has grown with plugin jekyll-asset and compress options activated, see [webpacked-jekyll-assets-react](https://github.com/admien33/webpacked-jekyll-assets-react) to get a faster build time. Todo integration. Here requirejs.

- Next step : [clean_agency_demo01](https://github.com/admien33/clean_agency_demo01.git). Editor needs to be adapted. Investigate Jekyll-Netlify-cms solution


#### Installation 

- on Ubuntu 16.04
 
- install Ruby 2.4.2 via rbenv + bundler, https://gorails.com/setup/ubuntu/16.04

- imagemagick :

 	sudo apt-get update
	sudo apt-get install imagemagick

- fork, clone this repo;
- bundle install
- bundle exec jekyll serve ( on build, adapt url on  _config.yml)


Then add, modify md files on folders _agency and _detailed-contents







##### Notes:

- CI travis, adapt deploy.sh, deploy_init.sh, .travis.yml; see _draft/note-travis.md to add  new key env.global.secure with gh-token