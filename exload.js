"use strict";

(function() {
    $('#clear').on('click', function() {
        $('#nbv').val('');
        $('#arcs').val("");
        $('#blockages').val("");
    });

    $('#load1').on('click', function() {
        $('#nbv').val(16);
        $('#arcs').val(
            "2 1 1" + "\n" + 
            "3 2 1" + "\n" +
            "4 3 1" + "\n" +
            "5 6 1" + "\n" +
            "6 7 1" + "\n" +
            "7 8 1" + "\n" +
            "10 9 1" + "\n" +
            "10 11 1" + "\n" +
            "11 12 1" + "\n" +
            "13 14 1" + "\n" +
            "14 15 1" + "\n" +
            "15 16 1" + "\n" +
            "1 5 1" + "\n" +
            "2 6 1" + "\n" +
            "7 3 1" + "\n" +
            "8 4 1" + "\n" +
            "5 9 1" + "\n" +
            "6 10 1" + "\n" +
            "11 7 1" + "\n" +
            "12 8 1" + "\n" +
            "9 13 1" + "\n" +
            "10 14 1" + "\n" +
            "15 11 1" + "\n" +
            "16 12 1"
        );
        $('#blockages').val(
            "10 11" + "\n" + 
            "10 9" + "\n" + 
            "5 6" + "\n" + 
            "11 12" + "\n" + 
            "7 8" + "\n" + 
            "6 7"
        );
    });

    $('#load2').on('click', function() {
        $('#nbv').val(25);
        $('#arcs').val(
            "1 2 1" + "\n" +
            "3 2 1" + "\n" +
            "3 4 1" + "\n" +
            "5 4 1" + "\n" +
            "6 7 1" + "\n" +
            "7 8 1" + "\n" +
            "8 9 1" + "\n" +
            "9 10 1" + "\n" +
            "12 11 1" + "\n" +
            "13 12 1" + "\n" +
            "14 13 1" + "\n" +
            "15 14 1" + "\n" +
            "17 16 1" + "\n" +
            "18 17 1" + "\n" +
            "19 18 1" + "\n" +
            "19 20 1" + "\n" +
            "21 22 1" + "\n" +
            "22 23 1" + "\n" +
            "23 24 1" + "\n" +
            "25 24 1" + "\n" +
            "6 1 1" + "\n" +
            "2 7 1" + "\n" +
            "8 3 1" + "\n" +
            "4 9 1" + "\n" +
            "10 5 1" + "\n" +
            "11 6 1" + "\n" +
            "7 12 1" + "\n" +
            "13 8 1" + "\n" +
            "9 14 1" + "\n" +
            "10 15 1" + "\n" +
            "16 11 1" + "\n" +
            "12 17 1" + "\n" +
            "18 13 1" + "\n" +
            "14 19 1" + "\n" +
            "20 15 1" + "\n" +
            "16 21 1" + "\n" +
            "17 22 1" + "\n" +
            "23 18 1" + "\n" +
            "24 19 1" + "\n" +
            "20 25 1"
        );
        $('#blockages').val(
            "18 17"
        );
    });
})();
