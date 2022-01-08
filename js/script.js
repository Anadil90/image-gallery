   let win = $(window),
   sidebar = document.getElementById('sidebar');

// hide sidebar when screen width <= 793px
$(window).on('resize', function(){
    if (win.width() <= 793) {
        // set display of sidebar section to none 
        $('.sidebar-section').css({
            'display': 'none'
        })

        $('#social-icons-footer').css({
            'display': 'inline-block'
        })
    
    }else{
        $('.sidebar-section').css({
            'display': 'block'
        })

        $('#social-icons-footer').css({
            'display': 'none'
        })
    }
})
