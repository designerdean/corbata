Corbata
========================

Corbata is a base layer of rules and conventions that act as a starting point for HTML, CSS, and JavaScript for your own projects. I got the idea from [Simon Collison's reusable package concept](http://colly.com/comments/the_process_toolbox_part_seven_convention/). He defines a reusable package as being:

> a bumper compendium of cascading and connected CSS files, naming conventions, modules, plugins and library scripts that ensure any project led or worked on by any member(s) of a team will stay on convention, and be simpler for anyone else to step into and work with at any time.

Outside of the common (and some custom) CSS resets, Corbata does not have any default styling. It's just meant to act as a starting place for responsive and organized HTML as well as DRY, readable, and modular CSS (through Sass). It also allows for CoffeeScript. Corbata is similar to, and inspired by, [HTML5 Boilerplate](http://html5boilerplate.com).

Corbata uses [Gulp](http://gulpjs.com) to make automation easier. I've only set it up for compiling Sass and CoffeeScript, but [it can do a whole lot more than that](http://gulpjs.com/plugins). So, you will need to install a few things:

- Install [Node & NPM](http://nodejs.org)
- Install [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started)

After everything is installed, open the terminal and cd into the directory where you have placed Corbata. Run "npm install". Then, simply run "gulp". This will watch and automatically compile all the Sass and CoffeeScript files into CSS and JavaScript. Then, navigate to localhost:8080.