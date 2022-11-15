(function() {
    addEventListener( 'DOMContentLoaded', (event) => {

        if ( document.getElementById( 'js-reviews' )) {

            let $reviewsBox = document.getElementById( 'js-reviews' ),
                len = $reviewsBox.children.length,
                scrollLTR = true,
                i = 0,
                scrollDelta = 0,
                scrollWidth = $reviewsBox.clientWidth,
                bodyWidth = document.body.clientWidth,
                maxScroll = scrollWidth - bodyWidth;

            function setScroll() {
                if ( scrollLTR ) {
                    i++;
                    scrollDelta = ( scrollDelta > maxScroll ) ? maxScroll : scrollDelta + maxScroll / len;
                } else {
                    i--;
                    scrollDelta = ( scrollDelta < 0 ) ? 0 : scrollDelta - maxScroll / len
                }
                if ( i == len || i < 1 ) scrollLTR = !scrollLTR;
                $reviewsBox.style.left = '-' + scrollDelta + 'px';
            }

            if ( scrollWidth > bodyWidth ) doScroll = setInterval( setScroll, 5000 );
            // TODO on window resize check width and do start or stop

        } // :: END getElementById( 'js-reviews' )

    }); // :: END DOMContentLoaded
})();