import React, { Component } from "react";
import { Modal } from "react-bootstrap";
class ContactMe extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            show: false
        };
    }

    postData(url) {
        return fetch(url, {
            body: JSON.stringify(this.state),
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
              'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        })
        .then(response => {return response.ok})
        .catch(error => console.error('Error:', error));
    }

    // popup
    handleClose = () => this.setState({show: false});
    handleOpen = (event) => {
        const IP = '3.85.1.73';
        // const IP = '127.0.0.1';

        if (this.postData(`https://${IP}/contact`)) {
            this.setState({show: true});
        }
        event.preventDefault();
    };

    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-12 order-2 order-lg-1">
                            <div className="section-title text-center mb--50">
                                <h2 className="title">{this.props.contactTitle}</h2>
                            </div>
                            <div className="form-wrapper">
                                <form onSubmit={this.handleOpen}>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.name}
                                            onChange={(e)=>{this.setState({name: e.target.value});}}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.email}
                                            onChange={(e)=>{this.setState({email: e.target.value});}}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.subject}
                                            onChange={(e)=>{this.setState({subject: e.target.value});}}
                                            placeholder="Write a Subject"
                                        />
                                    </label>

                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.message}
                                            onChange={(e)=>{this.setState({message: e.target.value});}}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" >Submit</button>
                                    
                                    <Modal
                                        show={this.state.show}
                                        onHide={this.handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                    >
                                        <Modal.Header closeButton>
                                        <Modal.Title>Thank you!</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>I will get back to you as soon as possible</Modal.Body>
                                        <Modal.Footer>
                                        <button className="rn-btn btn-solid" onClick={this.handleClose}>Close</button>
                                        </Modal.Footer>
                                    </Modal>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactMe;