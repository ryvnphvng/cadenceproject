import React, { Component } from "react";

import Carousel from "../Carousel";
import MenuBar from "../MenuBar";

import PageLink from "../common/PageLink";

import "./styles.scss";

class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          caption: 'Learn more about this Intern Showcase event: https://bit.ly/2Yfzb1M',
          date: 'OCT 15',
          img: require("../../assets/imgs/Asset 13.svg")
        },
        {
          caption: 'Cadence CEO Lip-Bu Tan gave a keynote at the imec FutureSummits event where he shared his vision for the industry and semiconductor design and highlighted the collaboration between IMEC and #Cadence.',
          date: 'OCT 15',
          img: require("../../assets/imgs/Asset 15.svg")
        },
        {
          caption: 'In support of #WomeninSTEM, #Cadence sponsors conferences like VerveCon and IEEE Women in Engineering ILC. Cadence\'s Meera Collier reflects on her experiences at these events in this blog post: https://bit.ly/2YSCkkk #WomenatCadence',
          date: 'OCT 05',
          img: require("../../assets/imgs/Asset 19.svg")
        },
        {
          caption: 'Next Post...',
          date: 'OCT 03',
          img: require("../../assets/imgs/Asset 19.svg")
        },
        {
          caption: 'Next Post...',
          date: 'OCT 01',
          img: require("../../assets/imgs/Asset 19.svg")
        }
      ]
    }
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="main-view">
        <div className="content">
          <MenuBar />
          <div className="top-banner">
            <span className="title">UNLEASH IMAGINATION</span>
            <span className="caption">
              Find out how Cadence is accelerating electronic innovation to
              transform the world
            </span>
            <button className="watch-button">Watch Video</button>
          </div>
          <div className="links">
            <PageLink
              icon={require("../../assets/imgs/Cadence Live.svg")}
              text={"Cadence Live"}
            />
            <PageLink
              icon={require("../../assets/imgs/Download.svg")}
              text={"Download"}
            />
            <PageLink
              icon={require("../../assets/imgs/Careers.svg")}
              text={"Careers"}
            />
            <PageLink
              icon={require("../../assets/imgs/Training.svg")}
              text={"Training"}
            />
            <PageLink
              icon={require("../../assets/imgs/Newsroom.svg")}
              text={"Newsroom"}
            />
            <PageLink
              icon={require("../../assets/imgs/Resource Library.svg")}
              text={"Resource Library"}
            />
          </div>
          <div className="intelli-zone-banner">
            <div className="title">Intelligent Design Zone</div>
            <div className="video-content">
              <div className="first-content">
                <img
                  className="content-img"
                  alt="img"
                  src={require("../../assets/imgs/Group 54.svg")}
                />
                <span className="content-title">
                  Find And Fix System Hot Spots
                </span>
                <a className="content-link" href="">
                  Watch Video
                </a>
              </div>
              <div className="second-content">
                <img
                  className="content-img"
                  alt="img"
                  src={require("../../assets/imgs/Asset 3.svg")}
                />
                <div className="content-title">Build 7nm SoCs 3 Months</div>
                <a className="content-link" href="">
                  Watch Video
                </a>
              </div>
              <div className="third-content">
                <img
                  className="content-img"
                  alt="img"
                  src={require("../../assets/imgs/Group 53.svg")}
                />
                <div className="content-title">Intelligence At The Edge</div>
                <a className="content-link" href="">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
          <div className="toshiba-banner">
            <div className="logo">
              <img alt="img" src={require("../../assets/imgs/Asset 6.svg")} />
              <img alt="img" src={require("../../assets/imgs/Asset 8.svg")} />
              <img alt="img" src={require("../../assets/imgs/Asset 9 1.svg")} />
            </div>
            <div className="left">
              <span className="spotlight-text">PARTNER SPOTLIGHT</span>
              <span className="headline-text">
                Toshiba And Cadence Team on AI applications At The Edge
              </span>
              <span className="caption-text">
                Next Generation Driver Assist SoC
              </span>
              <button className="learn-button">Learn More</button>
            </div>
            <img
              className="right"
              alt="img"
              src={require("../../assets/imgs/Asset 5 1.svg")}
            />
          </div>
          <div className="drive-cadence-tech">
            <img
              className="icon"
              alt="img"
              src={require("../../assets/imgs/Frame.svg")}
            />
            <div className="title">
              Driving Innovation With Cadence Technology
            </div>
            <div className="banners">
              <div className="artificial-intel">
                <div className="caption">
                  <span className="text">ARTIFICIAL INTELLIGENCE</span>
                </div>
              </div>
              <div className="aerospace-defense">
                <div className="caption">
                  <span className="text">
                    AEROSPACE <br /> & DEFENSE
                  </span>
                </div>
              </div>
              <div className="automotive">
                <div className="caption">
                  <span className="text">AUTOMOTIVE</span>
                </div>
              </div>
              <div className="systems-subsystems">
                <div className="caption">
                  <span className="text">
                    5G SYSTEMS <br /> & SUBSYSTEMS
                  </span>
                </div>
              </div>
              <div className="cadence-cloud">
                <div className="caption">
                  <span className="text">
                    CADENCE <br /> CLOUD
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Carousel
            posts={posts}
          />
          <div className="bottom-banner">
            <div className="top">
              <div className="column">
                <span className="title">Products</span>
                <a className="link" href="">Digital Design & Signoff</a>
                <a className="link" href="">Verification</a>
                <a className="link" href="">Custom IC</a>
                <a className="link" href="">IP</a>
                <a className="link" href="">IC Package</a>
                <a className="link" href="">All Products</a>
              </div>
              <div className="column">
                <span className="title">Company</span>
                <a className="link" href="">Cadence Overview</a>
                <a className="link" href="">Investor Relations</a>
                <a className="link" href="">Alliances</a>
                <a className="link" href="">Executive Team</a>
                <a className="link" href="">Events</a>
                <a className="link" href="">Career</a>
              </div>
              <div className="column">
                <span className="title">News</span>
                <a className="link" href="">Press Releases</a>
                <a className="link" href="">Newsroom</a>
                <a className="link" href="">Blogs</a>
                <a className="link" href="">Forums</a>
              </div>
              <div className="column">
                <span className="title">Contact Us</span>
                <a className="link" href="">General Inquiry</a>
                <a className="link" href="">Customer Support</a>
                <a className="link" href="">Media Relations</a>
                <a className="link" href="">Global Office Locator</a>
              </div>
              <div className="column fortune-img" />
              <div className="column end">
                <span className="great-place">A Great Place to Do Great Work</span>
                <span className="fifth-year">Fifth year on the FORTUNE 100 list</span>
                <a className="link" href="">Our Culture</a>
                <a className="link" href="">Join the Team</a>
              </div>
            </div>
            <div className="bottom">
              <span className="subscribe-text">Subscribe to monthly newsletter</span>
              <input className="email-input" placeholder="Email" type="text" />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
          <div className="footer">
            <span className="copyright">
              © 2019 Cadence Design System, Inc All Rights Reserved
            </span>
            <a className="link" href="">
              Terms of Use
            </a>
            <div className="divider" />
            <a className="link" href="">
              Privacy Policy
            </a>
            <div className="divider" />
            <a className="link" href="">
              US Trademarks
            </a>
            <div className="divider" />
            <a className="link" href="">
              Sitemap
            </a>
            <div className="social-media">
              <span className="connect">Connect with Us</span>
              <i className="fa fa-facebook" />
              <i className="fa fa-twitter" />
              <i className="fa fa-linkedin" />
              <i className="fa fa-youtube-play" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainView;
