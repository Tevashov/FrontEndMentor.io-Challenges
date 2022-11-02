(function() {

    addEventListener('DOMContentLoaded', (event) => {
        if (document.getElementsByClassName('cRate-box')) {

            let selectedValue = null,
                $rateBox   = document.getElementById("js-cRate-form"),
                $thanksBox = document.getElementById("js-cRate-thanks"),
                $rateInput = document.querySelectorAll("input[name='rate']"),
                $submitBtn = document.getElementById("js-cRate-submit"),
                $ratedMsg  = document.getElementById("js-cRate-value");

            $submitBtn.setAttribute('disabled', '');

            function submitResults(value) {
                // send HTTPrequest or something like that
                if (true) thankYou(value);
            }

            function thankYou(value) {
                $ratedMsg.innerHTML = value;
                $rateBox.classList.toggle('is-hidden');
                $thanksBox.classList.toggle('is-hidden');
            }

            $rateInput.forEach((el) => {
                el.addEventListener('change', (event) => {
                    selectedValue = event.target.value;
                    $submitBtn.removeAttribute('disabled');
                });
            });

            $submitBtn.addEventListener("click", (event) => {
                event.preventDefault();
                submitResults(selectedValue);
            });

        } // :: END getElementsByClassName('cRate-box')
    }); // :: END DOMContentLoaded

})();