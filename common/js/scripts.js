document.addEventListener("DOMContentLoaded", function () {
    const stepMenuOne = document.querySelector(".step-menu1");
    const stepMenuTwo = document.querySelector(".step-menu2");
    const stepMenuThree = document.querySelector(".step-menu3");

    const stepOne = document.querySelector(".step-1");
    const stepTwo = document.querySelector(".step-2");
    const stepThree = document.querySelector(".step-3");

    const formSubmitBtn = document.querySelector(".btn");
    const formBackBtn = document.querySelector(".back-btn");

    const confirmBtns = document.querySelectorAll(".confirm-btn");

    function goToStep(currentStep, nextStep) {
        currentStep.classList.remove("active");
        nextStep.classList.add("active");
    }

    confirmBtns.forEach(btn => {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            confirmBtns.forEach(btn => {
                if (btn !== this) {
                    btn.classList.remove("active");
                }
            });
            this.classList.toggle("active");
        });
    });

    formSubmitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if (stepMenuOne.classList.contains("active")) {
            goToStep(stepMenuOne, stepMenuTwo);
            goToStep(stepOne, stepTwo);
            formBackBtn.classList.add("active");
        } else if (stepMenuTwo.classList.contains("active")) {
            goToStep(stepMenuTwo, stepMenuThree);
            goToStep(stepTwo, stepThree);
            formSubmitBtn.textContent = "Submit";
        } else if (stepMenuThree.classList.contains("active")) {
            document.querySelector("form").submit();
        }
    });

    formBackBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if (stepMenuTwo.classList.contains("active")) {
            goToStep(stepMenuTwo, stepMenuOne);
            goToStep(stepTwo, stepOne);
            formBackBtn.classList.remove("active");
        } else if (stepMenuThree.classList.contains("active")) {
            goToStep(stepMenuThree, stepMenuTwo);
            goToStep(stepThree, stepTwo);
            formSubmitBtn.textContent = "Continue";
        }
    });
});
