// JavaScript Document

$(document).ready(function(e) {



$('.cus').each(function (_, self) {

    jQuery({

        Counter: 0

    }).animate({

        Counter: $(self).text()

    }, {

        duration: 3000,

        easing: 'swing',

        step: function () {

            $(self).text(Math.ceil(this.Counter));

        }

    });

});

$('.campaign').each(function (_, self) {

    jQuery({

        Counter: 0

    }).animate({

        Counter: $(self).text()

    }, {

        duration: 3000,

        easing: 'swing',

        step: function () {

            $(self).text(Math.ceil(this.Counter));

        }

    });

});



$('#bankadmin').each(function (_, self) {

    jQuery({

        Counter: 0

    }).animate({

        Counter: $(self).text()

    }, {

        duration: 3000,

        easing: 'swing',

        step: function () {

            $(self).text(Math.ceil(this.Counter));

        }

    });

});



$('.parentmer').each(function (_, self) {

    jQuery({

        Counter: 0

    }).animate({

        Counter: $(self).text()

    }, {

        duration: 2000,

        easing: 'swing',

        step: function () {

            $(self).text(Math.ceil(this.Counter));

        }

    });

});


$('.locationmer').each(function (_, self) {

    jQuery({

        Counter: 0

    }).animate({

        Counter: $(self).text()

    }, {

        duration: 2000,

        easing: 'swing',

        step: function () {

            $(self).text(Math.ceil(this.Counter));

        }

    });

});



$('.bank').each(function (_, self) {

    jQuery({

        Counter: 0

    }).animate({

        Counter: $(self).text()

    }, {

        duration: 3000,

        easing: 'swing',

        step: function () {

            $(self).text(Math.ceil(this.Counter));

        }

    });

});


$('.loc').each(function (_, self) {

    jQuery({

        Counter: 0

    }).animate({

        Counter: $(self).text()

    }, {

        duration: 2000,

        easing: 'swing',

        step: function () {

            $(self).text(Math.ceil(this.Counter));

        }

    });

});











	

   

});