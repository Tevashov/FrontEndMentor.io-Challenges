(function() {

    addEventListener('DOMContentLoaded', (event) => {
        if (document.getElementsById('js-ntf-markRead')) {

            let $markReadBtn = document.getElementById("js-cRate-submit"),
                $unreadElems = document.querySelectorAll(".ntf-unread");

            $markReadBtn.setAttribute('disabled', '');

            function markReadRequest(elements) {
                elements.forEach((el) => {
                    // send HTTPrequest or something like that
                });
                if (true) markReadMessages(elements);
            }

            function markReadMessages(elements) {
                $ratedMsg.innerHTML = value;
                $rateBox.classList.toggle('is-hidden');
                $thanksBox.classList.toggle('is-hidden');
            }

            $markReadBtn.addEventListener("click", (event) => {
                event.preventDefault();
                markReadRequest($unreadElems);
            });

        } // :: END getElementsByClassName('cRate-box')
    }); // :: END DOMContentLoaded

})();