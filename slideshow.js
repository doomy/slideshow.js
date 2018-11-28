var Slideshow = function(customConfig) {
    var DEFAULT_TICK_INTERVAL = 5000;
    var DEFAULT_TRANSITION_TIME = 800;
    var DEFAULT_BACKGROUND_ELEMENT_ID = 'background';

    var images;
    var index = 0;
    var config = {
        tickInterval: DEFAULT_TICK_INTERVAL,
        transitionTime: DEFAULT_TRANSITION_TIME,
        backgroundElementId: DEFAULT_BACKGROUND_ELEMENT_ID
    };

    if (customConfig) {
        setupConfig(customConfig);
    }

    this.setImages = function(slideshowImages) {
        images = slideshowImages;
    };

    this.run = function() {
        switchImage();
        if (images.length == 1) return;
        setInterval(switchImage, config.tickInterval);
    };

    function setupConfig(customConfig) {
        if (customConfig.tickInterval) {
            config.tickInterval = customConfig.tickInterval;
        }
        if (customConfig.transitionTime) {
            config.transitionTime = customConfig.transitionTime;
        }
        if (customConfig.backgroundElementId) {
            config.backgroundElementId = customConfig.backgroundElementId
        }
    }

    function switchImage() {
        index++;
        if(index > (images.length-1)) {
            index = 0;
        }
        url = images[index];
        var selector = '#'+config.backgroundElementId;
        $(selector).fadeOut(config.transitionTime, function () {
            $(selector).css('background-image', "url("+url+")");
            $(selector).fadeIn(config.transitionTime);
        });
    }
};