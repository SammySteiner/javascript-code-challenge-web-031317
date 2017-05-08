class CommentList {
  constructor() {
    this.commsArr = []
  }

  render() {
    const renderedCommsArr = this.commsArr.map( comm => {
      return comm.render()
    }).join('')
    return `<ul>${renderedCommsArr}</ul>`
  }

  // returns a string of a ul. Inside of the ul, the comment list should include the return value of the render method of all of it's comments.

  addComment(string) {
    const newComment = new Comment(string)
    this.commsArr.push(newComment)
    console.log ("comment added!")
  }

}
