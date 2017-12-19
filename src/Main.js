import './css/our.css'
import React, {Component} from 'react';
import renderHTML from 'react-render-html';


class Main extends Component {
    render() {
        return (
            renderHTML(`<div class="padding-remaining" id="main1" style="padding-left: 300px;background-color: #cfd8dc; height: 100%;width: 100%">
            <div style="padding: 10px;"> Discover Firebase </div>
            <div class="row">
                    <div class="col s12 m7" style="display: inline-block;width: 317px;">
                            <div class="card small">
                              <div class="card-image">
                                <img src="img/a.png">
                              </div>
                              <div class="card-content" style="padding: 16px;">
                                  <span style="font-size: 20px;font-weight:bold;">Analytics</span>
                                <p style="color: rgba(0,0,0,0.54);">Get detailed analytics to measure and analyze how users engage with your app</p>
                              </div>
                              <div class="card-action" style="padding: 12px 16px;">
                                    <a href="#" style="margin: 0; float: right;color: #039be5">GET STARTED</a>
                                    <a href="#" style="text-decoration: underline;float: left;color: #039be5;font-size: 14 !important;">Learn more
                                            
                                            </a>
                                  </div>
                            </div>
                          </div>						
                          <div class="col s12 m7" style="display: inline-block;width: 317px;">
                                <div class="card small">
                                  <div class="card-image">
                                    <img src="img/auth.png">
                                  </div>
                                  <div class="card-content" style="padding: 16px;">
                                      <span style="font-size: 20px;font-weight:bold;">Authentication</span>
                                    <p style="color: rgba(0,0,0,0.54);">Authenticate and manage users from a variety of providers without server-side code</p>
                                  </div>
                                  <div class="card-action" style="padding: 12px 16px;">
                                        <a href="#" style="margin: 0; float: right;color: #039be5">GET STARTED</a>
                                        <a href="#" style="text-decoration: underline;float: left;color: #039be5;font-size: 14 !important;">Learn more
                                                
                                                </a>
                                      </div>
                                </div>
                              </div>						
                              <div class="col s12 m7" style="display: inline-block;width: 317px;">
                                    <div class="card small">
                                      <div class="card-image">
                                        <img src="img/database.png">
                                      </div>
                                      <div class="card-content" style="padding: 16px;">
                                          <span style="font-size: 20px;font-weight:bold;">Database</span>
                                        <p style="color: rgba(0,0,0,0.54);">Store and sync data in realtime across all connected clients</p>
                                      </div>
                                      <div class="card-action" style="padding: 12px 16px;">
                                            <a href="#" style="margin: 0; float: right;color: #039be5">GET STARTED</a>
                                            <a href="#" style="text-decoration: underline;float: left;color: #039be5;font-size: 14 !important;">Learn more
                                                    
                                                    </a>
                                          </div>
                                    </div>
                                  </div>
                  </div>
                  
    </div>`)
          );
    }
}

export default Main;