import React, { Component } from "react";

// import Axios, { axios } from "axios";
import { Modal } from "react-bootstrap";

class PortfolioListMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            isOpen: false,
            projIndex: 0,
            PortfolioListContent: [
                {
                    image: 'image-1',
                    imageL: '/assets/images/project/portfolio_large.png',
                    projectUrl: '',
                    targetUrl: 'http://localhost:3000',
                    imageUrl: '',
                    category: 'Development',
                    title: 'Online Portfolio',
                    description: 'A portfolio website built with React, along with a dedicated back server handling information resending.'
                },
            ]
        }
    }

    // componentDidMount() {
    //     const IP = '127.0.0.1';
    //     const PORT = '5000';

    //     this.state.PortfolioListContent.forEach(element => {
    //         Axios.get(`http://${IP}:${PORT}/capture?url=${element.targetUrl}`)
    //             .then(res => {
    //                 const imageHash = res.data.hashcode;
    //                 console.log(imageHash);
    //                 element.setState({targetUrl: `http://${IP}:${PORT}//images/${imageHash}`});
    //             })
    //             .catch(error => {
    //                 if (error.response) {
    //                     // The request was made and the server responded with a status code
    //                     // that falls out of the range of 2xx
    //                     console.log(error.response.data);
    //                     console.log(error.response.status);
    //                     console.log(error.response.headers);
    //                   } else if (error.request) {
    //                     // The request was made but no response was received
    //                     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //                     // http.ClientRequest in node.js
    //                     console.log(error.request);
    //                   } else {
    //                     // Something happened in setting up the request that triggered an Error
    //                     console.log('Error', error.message);
    //                   }
    //                   console.log(error.config);
    //             })
    //     });
    // }

    handleClose = () => this.setState({isOpen: false});

    render() {
        const { column, styevariation } = this.props;
        const list = this.state.PortfolioListContent.slice(0, this.props.item);
        const { isOpen, projIndex } = this.state;

        return (
            <React.Fragment>
                {isOpen && (
                    <Modal
                        show={isOpen}
                        onHide={this.handleClose}
                        backdrop="static"
                        keyboard={false}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        scrollable={false}
                        centered
                    >
                        <Modal.Header closeButton>
                            <h4 style={{fontSize: '35px',
                                        margin: '5px 3px 8px 8px'}}>
                                {this.state.PortfolioListContent[projIndex].title}
                            </h4>
                        </Modal.Header>
                        <Modal.Body>

                            <img src={this.state.PortfolioListContent[projIndex].imageL} alt="project"/>
                            <p style={{marginTop: '20px'}}>
                                {this.state.PortfolioListContent[projIndex].description}
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <a className="rn-btn btn-solid" 
                                href={this.state.PortfolioListContent[projIndex].projectUrl}>
                                View Details
                            </a>
                        </Modal.Footer>
                    </Modal>
                )}

                {list.map((value, index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div
                                    className={`thumbnail ${value.image}`}
                                    // style={{
                                    //     backgroundImage: `url(http://${IP}:${PORT}/capture?url=${value.targetUrl})`,
                                    // }}
                                />
                                <div
                                    className={`bg-blr-image ${value.image}`}
                                    // style={{
                                    //     backgroundImage: `url(http://${IP}:${PORT}/capture?url=${value.targetUrl})`,
                                    // }}
                                />
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href="/portfolio-details">{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" 
                                            href="/portfolio-details" 
                                            onClick={ (event) => {
                                                console.log(index);
                                                this.setState({isOpen: true, projIndex: index});
                                                event.preventDefault();
                                            }
                                            }>
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </React.Fragment>
        )
    }
}
export default PortfolioListMe;