import React, { Component } from 'react';

class App extends Component {
  state = {
    remove: false,
    data: [
      {
          id: "1",
          userName: "John ",
          startDate: "12/01/2019 ",
          endDate: "22/01/2019 "
      },
      {
          id: "2",
          userName: "Dave ",
          startDate: "02/02/2019 ",
          endDate: "03/02/2019 "
      },
      {
          id: "3",
          userName: "Philip ",
          startDate: "05/01/2019 ",
          endDate: "13/01/2019 "
      },
      {
          id: "4",
          userName: "Grace ",
          startDate: "13/01/2019 ",
          endDate: "19/01/2019 "
      }
    ]
  }

  handleApprove = (e) => {
    console.log("approved")
    this.HandleDelete(e)
    console.log(e.target)
  }

  handleDecline = (e) => {
    console.log("declined")
    this.HandleDelete(e)
  }

  HandleDelete = (e) => {
    this.setState({data: this.state.data.filter(function(data) {
      return data.id !== e.target.id
  })});
}


render() {
  // const decline = () => {
  //   console.log(`Sorry your request was declined`)
  // } 

  const { data } = this.state;
  
  const leaveRequests = data.map(request => {
    return (
      <div id={request.id}>
        {request.userName}
        {request.startDate}
        {request.endDate}
        <button id={request.id} onClick={this.handleApprove} value={}>Approve</button>
        <button id={request.id} onClick={this.handleDecline}>Decline</button>
      </div>
    )
  })

    return (
      <ul>
        {leaveRequests}
      </ul>
    );
  }
}

export default App;
