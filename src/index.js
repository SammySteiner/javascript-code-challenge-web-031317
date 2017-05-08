// $(document).ready(function(){
//   // your code here!
//   const comments = new CommentList()
//   $('form#note-form').submit(function(e){
//     e.preventDefault()
//     const input = $('input').val()
//     comments.addComment(input)
//     const newComment = comments.render()
//     document.getElementById('comment-list').innerHTML = newComment
//   })
// })
// the above works, but I wanted to just append instead of resetting the entire comments html. So I switched to using  comments objects instead of comment list objects.

$(document).ready(function(){
  // your code here!
  $('form#note-form').submit(function(e){
    e.preventDefault()
    const input = $('input').val()
    comm = new Comment(input)
    const renderedComm = comm.render()
    if ($('#comment-list').val().length === 0) {
      $('#comment-list').append("<h3>Comments</h3>")
    }
    $('#comment-list').append(renderedComm)
  })
})
