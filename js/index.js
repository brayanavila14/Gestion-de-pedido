$(document).ready(function() {
    function updateDateTime() {
        let now = new Date();
        let year = now.getFullYear();
        let month = (now.getMonth() + 1).toString().padStart(2, '0');
        let day = now.getDate().toString().padStart(2, '0');
        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        
        $('#dateTime').val(`${year}-${month}-${day}T${hours}:${minutes}`);
    }
    setInterval(updateDateTime, 200);
    $('#supplier').focus();
    $('#supplier').keypress(function(event) {
    if (event.keyCode === 13) { 
        event.preventDefault();
        $('#totalSale').focus(); 
    }
    });
    $('#totalSale').keypress(function(event) {
    if (event.keyCode === 13) { 
        event.preventDefault();
        $('#deliveryDate').focus(); 
    }
    });
    
    if (keyCode === 'f1') { 
        pass
    }
    if (keyCode === 'F2') { 
        inputClear();
    }
    $('#btnClear').click(function(event) {
        event.preventDefault();
        inputClear();
    });
    function inputClear() {
        $('#supplier').val('');
        $('#totalSale').val('');
        $('#deliveryDate').val('');
        $('#supplier').focus();
    }
});