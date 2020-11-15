$(document).ready(function () {
    var myRules =
        {
            height:
                {
                    required: true,
                    min: 59,
                    max: 79,
                    digits: true
                },

            weight:
                {
                required: true,
                min: 88,
                max: 353,
                digits: true
                }
        }

        var myMessages =
            {
                height: {
                    required: "Height is required.",
                    min: "Minimum height is 59.",
                    max: "Maximum height is 73.",
                    digits: "Height must be a number."
                },
            weight: {
                required: "Weight is required.",
                min: "Minimum weight is 88.",
                max: "Maximum weight is 353.",
                digits: "Weight must be a number."
            }
            }

    $("form").validate(
        {
            submitHandler: bmiOutput,
            rules: myRules,
            messages: myMessages,
        }
    );

    function bmiOutput() {
        $("form").submit(bmiOutput);
        var height = $("input[name=height]").val();
        var weight = $("input[name=weight]").val();
        var bmi = ((weight / (height * height)) * 703);

        switch (bmi)
        {
            case (bmi < 18.5):
                $("#message").text("Your BMI is: " + bmi.toFixed(2) + " and you are underweight.");
                break;

            case (bmi >= 18.5 && bmi <25):
                $("#message").text("Your BMI is: " + bmi.toFixed(2) + " and you are at a normal weight.");
                break;

            case (bmi >= 25 && bmi < 30):
                $("#message").text("Your BMI is: " + bmi.toFixed(2) + " and you are overweight.");
                break;

            case (bmi >= 30):
                $("#message").text("Your BMI is: " + bmi.toFixed(2) + " and you are obese.");
                break;
        }
    }

});