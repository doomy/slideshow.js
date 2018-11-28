# slideshow.js

A simple javascript library to cycle backgound images of any element with crossfading effect. 

## Prerequisites

[Jquery](http://jquery.com) is required. Tested with jquery 3.3.1, but any common version should do.


## Getting Started

Download either the minified or non-minified version, and include it in your html page's `<head>` area:

    <script src="js/slideshow.min.js" type="text/javascript"></script>


###Usage

Wherever in your html body area, put the following code:

    var slideshow = new Slideshow({
        tickInterval: 5000, 
        transitionTime: 800,
        backgroundElementId: "background"
    });
    slideshow.setImages(['img/slideshow/001.jpg', 'img/slideshow/002.jpg']);
    slideshow.run();

The interval and transition times are in miliseconds. All the config parameters are optional. You will however likely need to specify at least the html element id.

##License
I don't care. Use it at will. 