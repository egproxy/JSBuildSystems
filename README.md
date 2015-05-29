Example of both Grunt and Gulp

NPM REFRESHER
=============
  
`npm list <name> version`  
Useful for ascertaining version of module  
  
`npm install <name> --save-dev`  
Can run this instead and npm will automatically add it to package.json  
so you don't have to know the version  
  
  
SEMVER
======
Versioning for package.json is based off semver  
`man 7 semver` for documentation  
  
^ Don't allow update to version on left most non-zero digit  
~ Allow change to patch level, if patch level not given use minor  
  
Example:  
 - no patch level: 1.2  
 - yes patch level: 1.2.3  
  
To make life easier, use `x` for catch all  
x.x.x  
  
  
GRUNT CONTRIB WATCH
===================
Needs grunt watch daemon to be running to constantly monitor for  
changes, not sure how effective/efficient it is. Using up alot of  
CPU that's for sure.  
Still have no idea what spawn child processes does but okay..  

