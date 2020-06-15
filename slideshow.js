var Slideshow = function(customConfig) {
    var DEFAULT_TICK_INTERVAL = 5000;
    var DEFAULT_TRANSITION_TIME = 800;
    var DEFAULT_BACKGROUND_ELEMENT_ID = 'background';
    var EFFECT_FADE_IN_OUT = 'fadeInOut';
    var EFFECT_SLIDE_HORIZONTAL = 'slideHorizontal';

    var images;
    var index = 0;
    var config = {
        tickInterval: DEFAULT_TICK_INTERVAL,
        transitionTime: DEFAULT_TRANSITION_TIME,
        backgroundElementId: DEFAULT_BACKGROUND_ELEMENT_ID,
        effect: EFFECT_FADE_IN_OUT
    };

    if (customConfig) {
        setupConfig(customConfig);
    }

    this.setImages = function(slideshowImages) {
        images = slideshowImages;
    };

    this.run = function() {
        init();
        if (images.length == 1) return;
        setInterval(switchImage, config.tickInterval);
    };

    function init() {
        url = images[index];
        $('#'+config.backgroundElementId).css('background-image', "url("+url+")");
    }

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

        if (customConfig.effect) {
            config.effect = customConfig.effect;
        }
    }

    function switchImage() {
        index++;
        if(index > (images.length-1)) {
            index = 0;
        }
        url = images[index];
        var selector = '#'+config.backgroundElementId;
        switch (config.effect) {
            case EFFECT_FADE_IN_OUT:
                $(selector).fadeOut(config.transitionTime, function () {
                    $(selector).css('background-image', "url("+url+")");
                    $(selector).fadeIn(config.transitionTime);
                });
                return;
            case EFFECT_SLIDE_HORIZONTAL:
                var origWidth = $(selector).width();
                var origHeight = $(selector).height();
                var origBackgroundSize = $(selector).css('background-size');

                $(selector).append($("<div id='temporaryBgMask' style='position:absolute; width:"+ origWidth + "px; height: " + origHeight + "px; left: 0;'></div>"));
                $("#temporaryBgMask").append($("<div id='tbmRel' style='overflow: hidden; width: 100%; height: 100%; position: relative;' />"))
                $("#tbmRel").append($("<div id='temporaryBg' style='position:absolute; background-image:url("+url+"); width:"+ origWidth + "px; height: " + origHeight + "px; left: "+  (0-origWidth) + "px;background-size:" + origBackgroundSize +"'></div>"));
                $("#temporaryBg").animate({left:0}, config.transitionTime, function () {
                    $(selector).css('background-image', "url("+url+")");
                    $("#temporaryBgMask").remove();
                    $("#tbmRel").remove();
                    $("#temporaryBg").remove();
                });
        }
    }
};
