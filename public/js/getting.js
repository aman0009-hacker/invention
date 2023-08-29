$.ajax({
    url: '/adminChatCount',
    type: 'get',
    dataType: 'JSON',
    success: function(response) {

        if(response!==null  || response!=="" || response.length>0)
        {

            let arr = response.data;

            console.log(arr);
          
          
    
            document.querySelectorAll('tbody tr').forEach(function(row) {
                var dataKey = row.getAttribute('data-key');
              
                
                arr.forEach(function(element) {
                    if(element)
                    {
    
    
                        if (element.user_id === dataKey) {
    
                            if(window.location.pathname === '/admin/auth/user')
                            {
    
                                var elements = row.childNodes[23]; // Replace '.target-node' with the actual selector for the desired child node
                              
                                    elements.classList.add('maindesign');
                            }
        
                               
                                
                            }
                    }
                   
                });
            });
        }
        else
        {

        }
    },
    error: function(xhr, status, error) {
        console.error('Error fetching data:', error);
    }
});


//     const data=Math.random();

// var pageLoadedForURL = localStorage.getItem('pageLoadedForURL');
// console.log(pageLoadedForURL);

// if (!pageLoadedForURL && window.location.pathname === '/admin/auth/user') {
//     // Page hasn't been loaded for this URL, set the flag and reload after a short delay
//     localStorage.setItem('pageLoadedForURL', 'true');

//     setTimeout(function() {
//         location.reload();
//     }, 100);
// }

