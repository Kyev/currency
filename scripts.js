$( document ).ready(function() {

    $(function() {
        $(document).on('click', '.button', getTable);
    });

    CUR1 = localStorage.getItem('currency1');
    CUR2 = localStorage.getItem('currency2');

    $('.conversionRate').load('https://www.google.com/finance?q='+CUR1+CUR2+'&ei=UUJ8V6njIJHDeqDaicAC .pr');
    $('.dataTable').load('https://www.google.com/finance?q='+CUR1+CUR2+'&ei=UUJ8V6njIJHDeqDaicAC .currencies'); // Load table when document is ready

});


function getTable() {

    var currency1 = document.getElementById("currency1").value; // get currency_from value
    var currency2 = document.getElementById("currency2").value; // get currency_to value
    localStorage.setItem('currency1', currency1);
    localStorage.setItem('currency2', currency2);
    httpReq.setRequestHeader('Access-Control-Allow-Headers', '*');
    $('.dataTable').load('https://www.google.com/finance?q='+currency1+currency2+'&ei=UUJ8V6njIJHDeqDaicAC .currencies');
    $('.conversionRate').load('https://www.google.com/finance?q='+currency1+currency2+'&ei=UUJ8V6njIJHDeqDaicAC .pr');

}
