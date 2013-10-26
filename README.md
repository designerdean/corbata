# Corbata

Corbata is a base layer of rules and conventions that act as a starting point for HTML, CSS, and JavaScript for your own projects. I got the idea from [Simon Collison's reusable package concept](http://colly.com/comments/the_process_toolbox_part_seven_convention/). He defines a reusable package as being:

> a bumper compendium of cascading and connected CSS files, naming conventions, modules, plugins and library scripts that ensure any project led or worked on by any member(s) of a team will stay on convention, and be simpler for anyone else to step into and work with at any time.

Outside of the common (and some custom) CSS resets, Corbata does not have any default styling. It's just meant to act as a starting place for responsive and organized HTML as well as DRY, readable, and modular CSS (through Sass and Compass). It also allows for CoffeeScript. Corbata is similar to, and inspired by, [HTML5 Boilerplate](http://html5boilerplate.com).

Corbata uses a Gemfile to manage Sass, Compass, and CoffeeScript. So, you will need to install a few things:

- [Ruby](https://www.ruby-lang.org/en/downloads)
- [Bundler](http://bundler.io)
- [Sass & Compass](http://thesassway.com/beginner/getting-started-with-sass-and-compass)
- [CoffeeScript](http://coffeescript.org)

During development, you will need to have terminal watch for changes to your Sass and CoffeeScript files so that they can be compiled to CSS and JavaScript.

If you prefer Grunt over Ruby, [check out the the Grunt version of Corbata](https://github.com/designerdean/corbata/tree/grunt).