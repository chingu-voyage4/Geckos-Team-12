import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/css/landing.css";

export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="s1">
          <div className="catchy-phrase">
            <h1>Grow anything.</h1>
            <h2>SimpleSeed helps you easily grow your own organic food.</h2>
          </div>
          <div className="catchy-footer">
            <div className="catchy-feature">
              <div className="catchy-img">
                <img alt="Feature logo" />
              </div>
              <div className="catchy-content">
                <p>
                  Florem ipsum cuckooflower foxtail lily bloody crane's-bill.
                </p>
              </div>
            </div>
            <div className="catchy-feature">
              <div className="catchy-img">
                <img alt="Feature logo" />
              </div>
              <div className="catchy-content">
                <p>
                  Florem ipsum cuckooflower foxtail lily bloody crane's-bill.
                </p>
              </div>
            </div>
            <div className="catchy-feature">
              <div className="catchy-img">
                <img alt="Feature logo" />
              </div>
              <div className="catchy-content">
                <p>
                  Florem ipsum cuckooflower foxtail lily bloody crane's-bill.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="s2">
          <h1>How does it work?</h1>
          <iframe
            title="SimpleSeed HowTo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9IB1V9H0K6s"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
        <div className="s3">
          <h1 className="features-title">Why use SimpleSeed?</h1>
          <div className="feature">
            <div className="feature-img">
              <img alt="Feature logo" />
            </div>
            <div className="feature-content">
              <p>
                Florem ipsum cuckooflower foxtail lily bloody crane's-bill.
                Thistle florist’s nighmare lavender calla lily prairie gentian
                bogbean. Begonia marigold scots primrose oxlip cotton-grass
                peruvian lily. Spurge anemone, flamingo flower.
              </p>
            </div>
          </div>
          <div className="feature-flip">
            <div className="feature-img-flip">
              <img alt="Feature logo" />
            </div>
            <div className="feature-content-flip">
              <p>
                Florem ipsum cuckooflower foxtail lily bloody crane's-bill.
                Thistle florist’s nighmare lavender calla lily prairie gentian
                bogbean. Begonia marigold scots primrose oxlip cotton-grass
                peruvian lily. Spurge anemone, flamingo flower.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-img">
              <img alt="Feature logo" />
            </div>
            <div className="feature-content">
              <p>
                Florem ipsum cuckooflower foxtail lily bloody crane's-bill.
                Thistle florist’s nighmare lavender calla lily prairie gentian
                bogbean. Begonia marigold scots primrose oxlip cotton-grass
                peruvian lily. Spurge anemone, flamingo flower.
              </p>
            </div>
          </div>
          <div className="feature-flip">
            <div className="feature-img-flip">
              <img alt="Feature logo" />
            </div>
            <div className="feature-content-flip">
              <p>
                Florem ipsum cuckooflower foxtail lily bloody crane's-bill.
                Thistle florist’s nighmare lavender calla lily prairie gentian
                bogbean. Begonia marigold scots primrose oxlip cotton-grass
                peruvian lily. Spurge anemone, flamingo flower.
              </p>
            </div>
          </div>
        </div>

        <div className="s4">
          <h1>Give it a try</h1>
          <div className="s4-1">Login</div>
          <div className="s4-2">SignUp</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated
  };
};

export default connect(mapStateToProps, null)(Landing);
