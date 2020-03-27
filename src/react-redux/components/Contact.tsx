import * as React from 'react';
import Footer from './Footer';
import {Prompt} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

interface ToDoListProps {
}


class Contact extends React.Component<ToDoListProps> {
    state = {
        name: '',
        email: '',
        title: '',
        comment: '',
    }

    onChange = (event) => {
     var target= event.target;
     var name = target.name;
     var value = target.value;
     this.setState({
         [name] : value
     });
    }

    onSave = (event) => {
        event.preventDefault();
        const userObject = {
            name: this.state.name,
            email: this.state.email,
            title : this.state.title,
            comment : this.state.comment
        };

        axios.post('http://localhost:3000/api/todos/contact', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ 
            name: '',
             email: '',
            title: '',
            comment: ''
         })
    }
    render() {
        return (
               <div>
                   <Helmet>
                        <title>Contact</title>
                        <meta charSet="utf-8" />
                        <meta name="description" content="A React.js application" />
                    </Helmet>
                   <div className="contact-body">
                   <Prompt
                        when={!!this.state.name}
                        message={'Are you sure?'}
                    />
                       <div className="container">
                           <div className="row">
                               <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                   <div className="contact-info">
                                       <div className="title">
                                           <h2>Contact Info:</h2>
                                       </div>
                                       <div className="content">
                                           <span>
                                           To give give beginning divide, cattle. Give moving<br/> 
                                            won't, there the abundantly she'd she'd brought air<br/> 
                                            upon. Light hath subdue. Life days creature upon<br/> 
                                            first heaven gathering dry.<br/>
                                           </span>
                                       </div>
                                       <div className="address">
                                            <span><b>Address:</b>  10111 Santa Monica Boulevard, LA</span>
                                            <span><b>Phone:</b>  +44 987 065 908</span>
                                            <span><b>Email:</b>  info@Example.com</span>
                                            <span><b>Fax:</b>  +44 987 065 909</span>
                                       </div>
                                   </div>
                               </div>
                               {/* /////////// */}
                               <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                   <form onSubmit={this.onSave}>
                                       <div className="form-group">
                                            <div className="contact-main">
                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                    <input 
                                                        className="form-control" 
                                                        placeholder="Your Name"
                                                        name = "name"
                                                        value = { this.state.name}
                                                        onChange ={ this.onChange }
                                                        />
                                                </div>

                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                    <input 
                                                        className="form-control" 
                                                        placeholder="Your Email"
                                                        name = "email"
                                                        value = { this.state.email}
                                                        onChange = { this.onChange}
                                                        />
                                                </div>
                                            </div>

                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <input 
                                                    className="form-control" 
                                                    placeholder="Your Title"
                                                    name = "title"
                                                    value = { this.state.title}
                                                    onChange ={ this.onChange }
                                                    />
                                            </div>

                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <textarea 
                                                    className="form-control" 
                                                    placeholder="Your Comment"
                                                    name = "comment"
                                                    value = { this.state.comment}
                                                    onChange ={ this.onChange }
                                                    />
                                            </div>
                                            <br/>
                                             
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">   
                                                {/* <a type="submit">
                                                    SEND MESSAGE
                                                </a> */}
                                                <button className="btn btn-primary" type="submit">
                                                    SEND MESSAGE
                                                </button>
                                            </div>
                                       </div>
                                   </form>
                               </div>
                           </div>
                       </div>

                       <div className="container">
                           <div className="row">
                               <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                    <img src={require('../images/map.png')}/>
                               </div>
                           </div>
                       </div>
                   </div>

                   {/*  */}
                   <Footer />
               </div>
        );
    }
}



export default (Contact)