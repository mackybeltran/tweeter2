/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(){
function createTweetElement (tweetObj){
  let output = ""
  output += `<article>
          <header>
              <img class="avatar" src="${tweetObj.user.avatars.small}" width="40px" height="40px">
              <h5 class="username">${tweetObj.user.name}</h2>
              <span class="tweeter-handle">${tweetObj.user.handle}</span>
          </header>
          <p class="tweettext">${tweetObj.content.text}</p>
          <footer>

              ${tweetObj.created_at}
            <div class="icons">
              <i class="material-icons">favorite</i>
              <i class="material-icons">cached</i>
              <i class="material-icons">bookmark</i>
            </div>


          </footer>`;
          return output
}
$(".compose").click(function() {
   $(".new-tweet").slideToggle(600);
   $(".tweetText").focus();
 });

function renderTweets(tweets){
  var $tweets = $("#old-tweets").empty();
  tweets.forEach(function(tweet) {
    $($tweets).prepend(createTweetElement(tweet))
  });
}


function loadNewTweet(){
  const formData = $("textarea").val()
    if (!formData.length){
      alert("Please Type Text to Tweet!");
      return;
    } else if (formData.length > 140){
      alert("Max 140 Characters. Try Again.");
      return;
    } $.ajax({
    method: 'POST',
    url: ("/tweets"),
    data: {text: formData}

}).done((loadTweetData))
}




// function addNewUser(){
//   $.ajax({
//     method: 'POST',
//     url: ("/users"),
//     data: {username: username,
//            handle:  handle,
//            password: password,


//     }
//   })
// }

// sample code for AJAX call ==> post to /users
// $(".registerbutton").click(function(event){
//   event.preventDefault()
//   addNewUser()

// }}

$(".tweetbtn").click(function(event){
  event.preventDefault();
  loadNewTweet();
  $("textarea").val("");
})

function loadTweetData() {
  //Make an AJAX GET to /tweets
  //Use the .then from AJAX to get the data and call renderTweets with that data INSIDE the then
  $.ajax({
    method: 'GET',
    url: ("/tweets"),
  }) .then(renderTweets)
}

// renderTweets(data)

loadTweetData();


})

