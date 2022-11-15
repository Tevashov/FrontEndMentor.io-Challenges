(function() {

    addEventListener( 'DOMContentLoaded', (event) => {
        if ( document.getElementById( 'js-reviews' )) {

            let $reviewsBox = document.getElementById( 'js-reviews' ),
                $reviewsList = $reviewsBox.children,
                len = $reviewsList.length,
                scrollLTR = true,
                i = 0,
                scrollDelta = 0,
                scrollWidth = $reviewsBox.clientWidth,
                bodyWidth = document.body.clientWidth,
                maxScroll = scrollWidth - bodyWidth;

            function setScroll() {

                if ( scrollLTR ) {
                    i++;
                    scrollDelta = scrollDelta + maxScroll / len;
                    if ( scrollDelta > maxScroll ) scrollDelta = maxScroll;
                } else {
                    i--;
                    scrollDelta = scrollDelta - maxScroll / len;
                    if ( scrollDelta < 0 ) scrollDelta = 0;
                }

                $reviewsBox.style.left = '-' + scrollDelta + 'px';
                if ( i == len || i < 1 ) scrollLTR = !scrollLTR;

            }

            if ( scrollWidth > bodyWidth ) doScroll = setInterval( setScroll, 5000 );

            // TODO on window resize check width and do start or stop

        } // :: END getElementsByClassName('cRate-box')
    }); // :: END DOMContentLoaded

})();