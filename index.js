window.fbAsyncInit = function() {
    FB.init({
        appId      : '1345101055833302',
        status     : true,
        xfbml      : true,
        version    : 'v2.7' // or v2.6, v2.5, v2.4, v2.3
    })

    
    FB.api(
        '/me',
        'GET',
        {"fields":"id,name"},
        function(response) {
           console.log(response) // Insert your code here
        }
      );
} 

console.log('hola')