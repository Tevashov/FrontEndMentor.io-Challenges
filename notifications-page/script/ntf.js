(function() {

    addEventListener('DOMContentLoaded', (event) => {
        if (!!document.getElementById('js-ntf-markRead')) {

            let $markReadBtn = document.getElementById("js-ntf-markRead"),
                $unreadCounter = document.querySelectorAll(".ntf__hdr-counter"),
                $unreadElems = document.querySelectorAll(".ntf-unread");

            function markReadRequest(elements) {
                /* :: Server-side stuff here
                elements.forEach((el) => {  });
                */
                if (true) markReadMessages(elements);
            }

            function markReadMessages(elements) {
                elements.forEach((el) => { el.classList.remove('ntf-unread'); } );
                $unreadCounter[0].innerHTML = '0';
                $unreadCounter[0].classList.add('is-hidden');
                $markReadBtn.classList.add('is-hidden');
            }

            $markReadBtn.addEventListener("click", (event) => {
                event.preventDefault();
                markReadRequest($unreadElems);
            });

        } // :: END getElementsByClassName('js-ntf-markRead')
    }); // :: END DOMContentLoaded

})();