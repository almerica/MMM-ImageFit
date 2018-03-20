/* global Module */

/* Magic Mirror
 * Module: iFrame
 *
 * By Almerica
 * MIT Licensed.
 */

Module.register("MMM-ImageFit",{
    // Default module config.
    defaults: {
        height:"100%",
        width:"100%",
        updateInterval: 0.5 * 60 * 1000,
        url: ["http://icons.wunderground.com/webcamramdisk/e/w/EW4722/1/current.jpg?1521576346"],
    },

    start: function () {
        self = this;
        var count = 0;
        if (this.config.url.length > 0 ) {
            setInterval( function () {
                self.updateDom(1000);
                console.log('update' + count++)
            }, this.config.updateInterval);
        }
    },
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    resume: function() {
        console.log("Resuming");
        return this.getDom();
    },

    // Override dom generator.
    getDom: function() {
        var img = document.createElement("img");
        img.style = "width:100%;height:100%";
        var url_index = 0;
        var repeat = true;
        while(repeat) {
            url_index = this.getRandomInt(0,this.config.url.length);
            futureURL = this.config.url[url_index];
            img.src = futureURL;
            repeat = false;
        }
        return img;
    }

});
