# slideshow.js

A simple javascript library to cycle background images of any element with crossfading effect. 

## Prerequisites

[Jquery](http://jquery.com) is required. Tested with jquery 3.3.1, but any common version should do.


## Getting Started

Download either the minified or non-minified version, and include it in your html page's `<head>` area:

    <script src="js/slideshow.min.js" type="text/javascript"></script>


### Usage

Put the following code anywhere within your page's `<body>` area:
    
    <script>
        var slideshow = new Slideshow({
            tickInterval: 5000, 
            transitionTime: 800,
            backgroundElementId: "background"
        });
        slideshow.setImages(['img/slideshow/001.jpg', 'img/slideshow/002.jpg']);
        slideshow.run();
    </script>

The interval and transition times are in miliseconds. All the config parameters are optional. You will however likely need to specify at least the html element id.

##License
I don't care. Use it at will. 