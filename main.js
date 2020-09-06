$(document).ready(function () {
    $(".form-wrapper").hide();
    $(".footer-form").hide();
    $(".right-table").hide();

    $(function () {
        $("#selectable").selectable();
        $("#selectableChassis").selectable();
    });

    $('.btn-save').click(function () {
        saveFile();
    });

    $(".btn-home").on('click', function () {
        location.reload();
    });

    $(".btn-competitors-js").on('click', function () {
        $(".main-wrapper").hide();
        $(".footer-wrapper").hide();
        $("h1").text("Constant parameters");
        $(".form-wrapper").fadeIn(1000);
        $(".footer-form").fadeIn(1000);
        $(".right-table").fadeIn(1000);
    });

    $(".btn-back").on('click', function () {
        $(".main-wrapper").fadeIn(1000);
        $(".footer-wrapper").fadeIn(1000);
        $("h1").text("TCO calculator");
        $(".form-wrapper").hide();
        $(".footer-form").hide();
        $(".right-table").hide();
    });

    $(".btn-only-js").on('click', function () {
        $(".main-wrapper").hide();
        $(".footer-wrapper").hide();
        $("h1").text("Constant parameters");
        $(".form-wrapper").fadeIn(1000);
        $(".footer-form").fadeIn(1000);
    });

    function operational(n1, n2, n3, n4) {
        return n1 * n2 + n3 + (n4 * 24);
    }

    function perMonth(m1, m2, m3, m4) {
        return (m1 + m2 + m3 + m4) / 24;
    }


    $(".btn-next").on('click', function (event) {
        var form_data = $("#myForm").serializeArray();
        var error_free = true;
        for (var input in form_data) {
            var element = $("#myForm" + form_data[input]['name']);
            if (element.length == -1) {
                alert('empty');
            }
            var valid = element.hasClass("valid");
            var error_element = $("span", element);
            if (!valid) {
                error_element.removeClass("error").addClass("error_show");
                error_free = false;
            } else {
                error_element.removeClass("error_show").addClass("error");
            }
        }
        if (!error_free) {
            event.preventDefault();
        } else {
            alert('No errors: Form will be submitted');
        }
    });



    $('#dmp').on('input', function () {
        var input = $(this);
        var is_null = input.val();
        if (is_null) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    $('#ompd').on('input', function () {
        var input = $(this);
        var is_null = input.val();
        if (is_null) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#odpm').on('input', function () {
        var input = $(this);
        var is_num = input.val();
        if (is_num) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    $('#mpm').on('input', function () {
        var input = $(this);
        var is_null = input.val();
        if (is_null) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#mpy').on('input', function () {
        var input = $(this);
        var is_null = input.val();
        if (is_null) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#vlt').on('input', function () {
        var input = $(this);
        var re = /^[0-9]{1,2}[:.,-]?$/;
        var is_num = re.test(input.val());
        if (is_num) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    $('#irpm').on('input', function () {
        var input = $(this);
        var re = /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/;
        var is_num = re.test(input.val());
        if (is_num) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#dpp').on('input', function () {
        var input = $(this);
        var is_null = input.val();
        if (is_null) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    $('#rep').on('input', function () {
        var input = $(this);
        var is_null = input.val();
        if (is_null) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    $('#yrc').on('input', function () {
        var input = $(this);
        var is_null = input.val();
        if (is_null) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#rcm').on('input', function () {
        var input = $(this);
        var is_null = input.val();
        if (is_null) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });


    //saveFile

    let saveFile = () => {

        const version = document.getElementById('ver');
        const consCost = document.getElementById('cons-cost');
        const Ocost = document.getElementById('cost');
        const TCOpm = document.getElementById('per-month');

        const name = document.getElementById('comp-name');
        const consCost2 = document.getElementById('cons-cost2');
        const Ocost2 = document.getElementById('cost2');
        const TCOpm2 = document.getElementById('per-month2');

        let data =
            '\r TCO Mercedes:  \r\n ' +
            '\r Version: ' + version.innerText + ' \r\n ' +
            'Constant parameters: ' + consCost.innerText + ' \r\n ' +
            'Operational Costs: ' + Ocost.innerText + ' \r\n ' +
            'TCO per month: ' + TCOpm.innerText + ' \r\n ' +
            '\r TCO Competitor: ' + name.value + ' \r\n ' +
            'Constant parameters: ' + consCost2.innerText + ' \r\n ' +
            'Operational Costs: ' + Ocost2.innerText + ' \r\n ' +
            'TCO per month: ' + TCOpm2.innerText + ' \r\n ';


        const textToBLOB = new Blob([data], {
            type: 'text/plain'
        });
        const sFileName = 'result.txt';

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        } else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
    }

});