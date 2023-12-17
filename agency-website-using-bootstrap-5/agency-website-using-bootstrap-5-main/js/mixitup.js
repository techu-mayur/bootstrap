 var filterList = {
        init: function () {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.web, .graphics, .development, .photography'
                }
            });

        }

    };

    // Run the show!
    filterList.init();