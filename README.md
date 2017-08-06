
Demo : [agency_ext](https://d2m.tech/agency_ext/)

### From [StartBoostrap Agency Theme](https://startbootstrap.com/template-overviews/agency/).

[Current Jekyll version](https://github.com/y7kim/agency-jekyll-theme), allows end-users to edit/add posts on Portfolio section. Other sections (services, teams, ..) can only be modified on html, yml files.
Note : on Wordpress, end-users can access all sections contents.



### Propositions :

- end-users can edit/add items on all sections

- a custom editor, served locally on a Virtualbox, communicate with github server to update the metadata.


#### Demo editor

- [create a new item on service section then update production site](https://drive.google.com/open?id=0B8fHSjalmbNEOWg3eVJrLWtxZmc)

- [modify background section, color and font, then delete these local updates](https://drive.google.com/open?id=0B8fHSjalmbNEQVRmMXctczZpNVE)




#### Limitations :

- at this time, main contribution is kept private : liquid lib to access metadata on build, custom editor

- build time has grown with plugin jekyll-asset and compress options activated, see [webpacked-jekyll-assets-react](https://github.com/admien33/webpacked-jekyll-assets-react) to get a faster build time. Todo integration.

- Next step : [clean_agency_demo01](https://github.com/admien33/clean_agency_demo01.git). Editor needs to be adapted.