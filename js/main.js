// // Listen for form submit
// document.getElementById('myForm').addEventListener('submit', saveBookmark);

// // Save Bookmark
// function saveBookmark(e){
//   // Get form values
//   var siteName =document.getElementById('siteName').value;
//   var siteUrl =document.getElementById('siteUrl').value;

//   if(!validateForm(siteName, siteUrl)){
//     return false;
//   }

//   var bookmark = {
//     name: siteName,
//     url: siteUrl
//   }

//   /*
//     // Local Storage Test
//     localStorage.setItem('test', 'Hello World');
//     console.log(localStorage.getItem('test'));
//     localStorage.removeItem('test');
//     console.log(localStorage.getItem('test'));
//   */

//   // Test if bookmarks is null
//   if(localStorage.getItem('bookmarks') === null){
//     // Init array
//     var bookmarks = [];
//     // Add to array
//     bookmarks.push(bookmark);
//     // Set to localStorage
//     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
//   } else {
//     // Get bookmarks from localStorage
//     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//     // Add bookmark to array
//     bookmarks.push(bookmark);
//     // Re-set back to localStorage
//     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
//   }

//   // Clear form
//   document.getElementById('myForm').reset();

//   // Re-fetch bookmarks
//   fetchBookmarks();

//   // Prevent form from submitting
//   e.preventDefault();
// }

// // Delete bookmark
// function deleteBookmark(url){
//   // Get bookmarks from localStorage
//   var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//   // Loop throught bookmarks
//   for(var i =0;i < bookmarks.length;i++){
//     if(bookmarks[i].url == url){
//       // Remove from array
//       bookmarks.splice(i, 1);
//     }
//   }
//   // Re-set back to localStorage
//   localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

//   // Re-fetch bookmarks
//   fetchBookmarks();
// }

// // Fetch bookmarks
// function fetchBookmarks(){
//   // Get bookmarks from localStorage
//   var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//   // Get output id
//   var bookmarksResults = document.getElementById('bookmarksResults');

//   // Build output
//   bookmarksResults.innerHTML = '';
//   for(var i = 0; i < bookmarks.length; i++){
//     var name = bookmarks[i].name;
//     var url = bookmarks[i].url;

//     bookmarksResults.innerHTML += '<div class="well">'+
//                                   '<h3>'+name+
//                                   ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
//                                   ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
//                                   '</h3>'+
//                                   '</div>';
//   }
// }

// // Validate Form
// function validateForm(siteName, siteUrl){
//   if(!siteName || !siteUrl){
//     alert('Please fill in the form');
//     return false;
//   }

//   var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
//   var regex = new RegExp(expression);

//   if(!siteUrl.match(regex)){
//     alert('Please use a valid URL');
//     return false;
//   }

//   return true;
// }







//listen for submit 
document.getElementById('myForm').addEventListener('submit',saveBookmark);

function saveBookmark(e){
    //prevent default behavior
    e.preventDefault();
    
    //get the form values
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteUrl').value;

    //validate Form Input
    //will return eather true or false
    if(!validateForm(siteName,siteURL)){
        //interupt|leave saveBoomark Function
        return false;
    }
    //create an Obj for Localstorage
    var bookmark = {
        name:siteName,
        url:siteURL
    }
    
    //Local Storage Example
    //:>Local Storage only stores STINGS
    //localStorage.setItem('TEST','Hello World');

    //Find out if bookmark is null 
    // Test if bookmarks is null
    if(localStorage.getItem('bookmarks') === null){
        // Init array
        var bookmarks = [];
        // Add to array
        bookmarks.push(bookmark);
        // Set to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from localStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to array
        bookmarks.push(bookmark);
        // Re-set back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); 
    }
    //re-fetch local storache
    fetchBookmarks();
}

function fetchBookmarks(){
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //Get HTML Output Element
    var bookmarkOutput = document.getElementById('bookmarkResults');      
        bookmarkOutput.innerHTML='';

        for(var i=0; i<bookmarks.length;i++){
            var name = bookmarks[i].name;
            var url = bookmarks[i].url;
            console.log(url);

                bookmarkOutput.innerHTML += '<div class="well">' +
                                                '<h3>' + name +                                                 
                                                ' <a class="btn btn-default" target="_blank" href="' + url + '">visit</a>' + 
                  ' <a onClick="deleteBookmark(\'' + url +'\')" class="btn btn-danger" href="#">delete</a>' + 
                                                '</h3>' + 
                                            '</div>';            

        }

}

function deleteBookmark(url){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for(var i=0; i< bookmarks.length; i++){
        if(bookmarks[i].url==url){
            //@splice i=StartPos | 1 (number of elements to splice out)
            bookmarks.splice(i,1);
        }

    }
    // reset the local storage after the loop
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // re-fetch the local storage to update the html
    fetchBookmarks();

}

//Validate Form input
function validateForm(siteName, siteUrl){
  if(!siteName || !siteUrl){
      alert('Please fill in the form');
      return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)){
      alert('Please use a valid URL');
      return false;
  }

  return true;
}






















