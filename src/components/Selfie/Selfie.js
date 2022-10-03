import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './Selfie.css';

class Selfie extends Component {
    state = {
        imageURL: '',
    }

    videoEle = React.createRef();
    canvasEle = React.createRef();
    imageEle = React.createRef();

    componentDidMount = async () => {
        this.startCamera();
    }

    startCamera = async () => {
        try {
            const stream =  await navigator.mediaDevices.getUserMedia({
                video: true
            });

            this.videoEle.current.srcObject = stream;
            
        } catch(err) {
            console.log(err);
        }
    }


    takeSelfie = async () => {
        // Get the exact size of the video element.
        const width = this.videoEle.current.videoWidth;
        const height = this.videoEle.current.videoHeight;

        // get the context object of hidden canvas
        const ctx = this.canvasEle.current.getContext('2d');

        // Set the canvas to the same dimensions as the video.
        this.canvasEle.current.width = width;
        this.canvasEle.current.height = height;

        // Draw the current frame from the video on the canvas.
        ctx.drawImage(this.videoEle.current, 0, 0, width, height);

        // Get an image dataURL from the canvas.
        const imageDataURL = this.canvasEle.current.toDataURL('image/png');
        this.stopCam();

        this.setState({
            imageURL: imageDataURL
        })
    }

    stopCam = () => {
        const stream = this.videoEle.current.srcObject;
        const tracks = stream.getTracks();
        
        tracks.forEach(track => {
          track.stop();
        });
    }

    backToCam = () => {
        this.setState({
            imageURL: ''
        }, () => {
            this.startCamera();
        })
    }

    

    render() {
        return (<div className="selfie">
            {this.state.imageURL === '' && <div className="cam">
                <video width="1200" height="720" className="video-player" autoPlay={true} ref={this.videoEle}></video>
                <Button className="btn capture-btn" variant="warning" onClick={this.takeSelfie}>Capture
                    <i class="fa fa-camera" aria-hidden="true"></i>
                </Button>
                <Button className="btn capture-btn" variant="warning" onClick={this.stopCam}>Capture
                    <i class="fa fa-camera" aria-hidden="true"></i>
                </Button>
            </div>
            }


            <canvas ref={this.canvasEle} style={{display: 'none'}}></canvas>
            {this.state.imageURL !== '' && <div className="preview">
                <img className="preview-img" src={this.state.imageURL} ref={this.imageEle} />

                <div className="btn-container">
                    <Button className="btn back-btn" onClick={this.backToCam}>Kembali
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    </Button>
                <div className="btn-container2">
                    <Button className="btn download-btn" href={this.state.imageURL} download="">Simpan
                        <i class="fa fa-download" aria-hidden="true"></i>
                    </Button>
                </div>

            </div>
            </div>
            }

        </div>)
    }
}

export default Selfie;