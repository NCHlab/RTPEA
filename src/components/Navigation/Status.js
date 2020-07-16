import React, { Component } from "react";
import onlineimg from "../Images/online.png";
import offlineimg from "../Images/offline.png";
import { BrowserRouter as Link } from "react-router-dom";

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mongodb_status: "Offline",
      api_status: "Offline"
    };
  }

  componentDidMount = () => {
    fetch(this.props.urlSource+"/dbcheck")
      .then(response => {
        if (response.status === 200) {
          this.setState({ api_status: "Online" });
        } else {
          this.setState({ api_status: "Offline" });
        }
        return response.json();
      })
      .then(data => {
        if (data.Status === "Online") {
          this.setState({ mongodb_status: "Online" });
        } else {
          this.setState({ mongodb_status: "Offline" });
        }
      });
  };

  Error_code = Ecode => {
    if (Ecode === 404) {
      return (
        <div>
          <div style={{borderStyle: "double", borderColor: "red"}}>
            <div style={{fontSize: "1000%"}}>404</div>
            <h1>Page Not found</h1>
            The API Server did not find the page you requested with the PXD entered.
            <br/>
            This is possibly due to the fact that....
          </div>

          <i>Seems you have come to a dead end!. This place leads nowhere.</i>
          <br/>
          Return <Link to="/">Home</Link>

        </div>
      )
    } else if (Ecode === 403) {
      return(
        <div>
          This is a test 403
        </div>
      )
    } else if (Ecode === 404.1) {
      return(
        <div>
          <div style={{borderStyle: "double", borderColor: "red"}}>
            <div style={{fontSize: "1000%"}}>404</div>
            <h1>Page Not found</h1>
          </div>

          <i>Seems you have come to a dead end!. This place leads nowhere.</i>
          <br/>
          Return <Link to="/">Home</Link>

        </div>
      )
    } else {
      return (
        <div>
          This is a test 200
        </div>
        )
    }
  };

  render() {
    return (
      <div className="container background-body2">
        <div>
          {this.Error_code(this.props.error_code)}
        </div>

        <br/>
        <br/>

        <div className="col-md-14">
          <table className="text-justify" align="center" width="24%" border="4">
            <tr>
              <th> Server </th>
              <th> Status</th>
            </tr>
            <tr>
              <td>
                <b>API Server:</b>
              </td>
              <td>
                {this.state.api_status === "Online" ? (
                  <img src={onlineimg} alt="Online!" />
                ) : (
                  <img src={offlineimg} alt="Online!" />
                )}
              </td>
            </tr>
            <tr>
              <td>
                <b>MongoDB Server:</b>
              </td>
              <td>
                {this.state.mongodb_status === "Online" ? (
                  <img src={onlineimg} alt="Online!" />
                ) : (
                  <img src={offlineimg} alt="Online!" />
                )}
              </td>
            </tr>
            <tr>
              <td>
                <b>RetroMiner Server:</b>
              </td>
              <td>
                <img src={onlineimg} alt="Online!" />
              </td>
            </tr>
          </table>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </div>
    );
  }
}

export default Status;
