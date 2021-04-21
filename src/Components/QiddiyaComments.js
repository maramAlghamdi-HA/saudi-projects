import React, { Component } from "react"
import { Card, Spinner } from "react-bootstrap"

import "../styles/css/CommentStyle.css"
import AddComment from "./AddComment"
import firebase from "./firebase"

class QiddiyaComments extends Component {
  state = {
    projectsComments: null,
  }
  componentDidMount() {
    firebase
      .database()
      .ref("Qiddiya")
      .once("value")
      .then(comments => {
        const commentData = comments.val()
        console.log(commentData)

        const commentsArray = []
        for (let key in commentData) {
          commentsArray.push({ ...commentData[key], id: key })
        }
        this.setState({ projectsComments: commentsArray })
      })
  }
  handleSubmit = data => {
    firebase
      .database()
      .ref("Qiddiya")
      .push({
        userName: data.userName,
        commentBody: data.commentBody,
      })
      .then(() => {
        firebase
          .database()
          .ref("Qiddiya")
          .once("value")
          .then(comments => {
            const commentData = comments.val()
            console.log(commentData)

            const commentsArray = []
            for (let key in commentData) {
              commentsArray.push({ ...commentData[key], id: key })
            }
            this.setState({ projectsComments: commentsArray })
          })
      })
  }

  render() {
    let commentsOutput
    if (this.state.projectsComments === null) {
      commentsOutput = (
        <Spinner animation="border" role="status" className="mx-auto">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    } else {
      commentsOutput = this.state.projectsComments.map(comment => (
        <Card key={comment.id} className="mb-3">
          <Card.Header>{comment.userName}</Card.Header>
          <Card.Body>
            <Card.Text>{comment.commentBody}</Card.Text>
          </Card.Body>
        </Card>
      ))
    }
    return (
      <>
        <section className="page-section" id="Comments" style={this.props.bgColorToComment}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Tell Us your Opinion!</h2>
                <h3 className="section-subheading text-muted">About this project</h3>
              </div>
            </div>
            <div className="row">
              <AddComment handleSubmit={this.handleSubmit} />
              <div
                className="col-md-6 overflow-auto scrollbar scrollbar-warning"
                id="divContainer"
                style={{
                  backgroundColor: "rgba(255,255,255, 0.3)",
                  borderRadius: "5px",
                  height: "340px",
                  padding: "15px",
                }}
              >
                {commentsOutput}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
export default QiddiyaComments
