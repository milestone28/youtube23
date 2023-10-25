import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const message =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sit amet odit ea quia doloremque sapiente explicabo, placeat quam dolores quaerat porro voluptas ex commodi exercitationem molestiae deleniti sequi consectetur?";

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>

        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>

          <tr className="active">
            <td>Gary Yu</td>
            <td><Link to='/message/1' className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
            <td></td>
          </tr>
          <tr className="active">
            <td>Gary Yu</td>
            <td><Link to='/message/1' className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
            <td></td>
          </tr>

          <tr>
            <td>Gary Yu</td>
            <td>{message.substring(0, 100)}...</td>
            <td>1 day ago</td>
            
            <td></td>
          </tr>

          <tr>
            <td>Gary Yu</td>
            <td>{message.substring(0, 100)}...</td>
            <td>1 day ago</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
