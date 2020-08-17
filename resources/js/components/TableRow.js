import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import MyGlobeSetting from './MyGlobeSetting';
import Axios from 'axios';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        let uri = MyGlobeSetting.url + '/api/products/${this.props.obj.id}';
        axios.delete(uri);
        browserHistory.push('/display-item');
    }
    
    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.body}</td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
                        <input type="submit" value="Delete" className="btn btn-danger"></input>
                    </form>

                </td>
            </tr>

        )
    }
}

export default TableRow;