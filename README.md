# Corbata

Corbata is a base layer of rules and conventions that act as a starting point for HTML, CSS, and JavaScript for your own projects. I got the idea from [Simon Collison's reusable package concept](http://colly.com/comments/the_process_toolbox_part_seven_convention/). He defines a reusable package as being:

      > a bumper compendium of cascading and connected CSS files, naming conventions, modules, plugins and library scripts that ensure any project led or worked on by any member(s) of a team will stay on convention, and be simpler for anyone else to step into and work with at any time.

My reusable package includes all the things I use in nearly every website I build:

## Markup & Images

*   [Paul Irish's conditional markup](http://paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/)
*   [Viewport Metatag to control layout in mobile browsers](http://developer.apple.com/library/safari/#documentation/appleapplications/reference/safariwebcontent/UsingtheViewport/UsingtheViewport.html)
*   Markup prompting &lt;IE8 users to [upgrade browsers](http://browsehappy.com/) or [install Google Chrome Frame](http://www.google.com/chromeframe/?redirect=true&prefersystemlevel=true)
*   Pre-sized favicon and [Apple touch icons](http://gigaom.com/apple/how-to-create-ios-device-home-screen-icons-for-web-sites/)
*   Google Analytics taken from [HTML5 Boilerplate](http://html5boilerplate.com)

## CSS / Compass / Sass (requires an installation of [Ruby](http://www.ruby-lang.org/en/downloads/) and [Bundler](http://gembundler.com/))

*   Print CSS taken from [HTML5 Boilerplate](http://html5boilerplate.com); this is placed inline at the bottom of the main stylesheet [to avoid required HTTP connection](http://www.phpied.com/delay-loading-your-print-css/)
*   [Nested Media Queries](http://thesassway.com/intermediate/responsive-web-design-in-sass-using-media-queries-in-sass-32\. (Sass)
*   An attempt to follow Nicolas Gallagher's [idiomatic CSS guidelines](https://github.com/necolas/idiomatic-css) for stylesheet organization
*   Paul Irish's idea to [apply box-sizing: border-box to all elements](http://paulirish.com/2012/box-sizing-border-box-ftw)

## JavaScript

*   [Modernizr](http://modernizr.com/)
*   [jQuery](http://www.jquery.com) (via the [Google Code protocol-less reference](http://encosia.com/3-reasons-why-you-should-let-google-host-jquery-for-you/#protocolless))

And a few other things!

        [Download](https://github.com/designerdean/corbata/zipball/master)

        [View on GitHub](https://github.com/designerdean/corbata)
        [Follow me on Twitter](https://twitter.com/designer_dean)
        [Visit my website](http://www.designerdean.com)