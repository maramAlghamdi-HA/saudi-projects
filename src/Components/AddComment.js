import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"
class AddComment extends Component {
  state = {
    userName: "",
    commentBody: "",
  }

  handleChangeName = e => {
    const value = e.target.value
    this.setState({ userName: value })
  }
  handleChangeBody = e => {
    const value = e.target.value
    this.setState({ commentBody: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
    this.mainInput.value = ""
    this.mainTextArea.value = ""
    // this.setState({
    //   userName: " ",
    //   commentBody: " ",
    // })
  }
  render() {
    console.log(this.state)
    return (
      <div className="col-md-6">
        <div className="col-lg-12 text-center">
          <Form id="contactForm" name="sentMessage" onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                ref={ref => (this.mainInput = ref)}
                onChange={this.handleChangeName}
                type="text"
                placeholder="Your Name *"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                ref={ref => (this.mainTextArea = ref)}
                onChange={this.handleChangeBody}
                as="textarea"
                rows={3}
                placeholder="Your Comment *"
                required
              />
            </Form.Group>
            <Button className="btn btn-primary btn-xl text-uppercase  mb-3" type="submit">
              Send comment!
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default AddComment
