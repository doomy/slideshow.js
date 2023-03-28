# slideshow.js

A simple javascript library to cycle background images of any element with various effects. 

## Prerequisites

[Jquery](http://jquery.com) is required. Tested with jquery 3.3.1, but any common version should do.


## Getting Started

Download either the minified or non-minified version, and include it in your html page's `<head>` area:
```html
    <script src="js/slideshow.min.js" type="text/javascript"></script>
```


### Usage

Put the following code anywhere within your page's `<body>` area:
```javascript
    <script>
        var slideshow = new Slideshow({
            tickInterval: 5000, 
            transitionTime: 800,
            backgroundElementId: "background",
            effect: "fadeInOut",
            onTransition: function(imageUrl) { /* transition callback */ }
        });
        slideshow.setImages(['img/slideshow/001.jpg', 'img/slideshow/002.jpg']);
        slideshow.run();
    </script> 
```

The interval and transition times are in miliseconds. 

All the config parameters are optional. If no custom backgroundElementId is provided, "background" is expected.
Effect configuration options are: fadeInOut, slideHorizontal

## License
I don't care. Use it at will. 
