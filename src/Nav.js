import './css/side.css'
import React, {Component} from 'react';
import renderHTML from 'react-render-html';

class Nav extends Component {
    render() {
        return (
            renderHTML(`<div class="nav-wrapper">
			<ul class="side-nav fixed" id="side-navbar" style="height: calc(100% - 48px - 56px);width: 256px;">
				<li class="nav-item .it" id="first" style="background-color: rgb(250, 250, 250);border-bottom-style: solid; border-width: 1px ; width: 250px;">
						<a style="display: inline-block;width: 187px; color: #039be5;border-right: 1px;border-right-style: solid; border-color: rgba(0,0,0,0.54) " href="#" class="side">
							<span>
								<i class="material-icons" style="margin-right: 12px;">home</i>
								Overview
							</span>
						</a>
						<a href="#" style="padding-left: 0px;margin-top: 10px;margin-left: 10px;  width: 24px;height: 24px;padding: 0px 0; display: inline-block;" data-position="bottom" data-activates='dropdown2' class="tooltipped dropdown-button" data-tooltip="settings"> 
							<i class="material-icons" >settings</i>
						</a>
						<ul style="font-size: 13px;" id='dropdown2' class='dropdown-content'>
								<li><a href="#!">Project settings</a></li>
								<li class="divider"></li>
								<li style="height:28px !important;margin-left: 16px">
									<lable style="font-size: 13px;margin-bottom: 16px; color: rgba(0,0,0,0.54)">Managed in Google Cloud Console</lable>
									<img src="img/cloud_24dp.png" style="height: 24px;width: 24px;margin-left: 8px;">
								</li>
								<li><a href="#!">Users and permissions</a></li>						</ul>
				</li>	
				<li class="it">
					<a href="#" class="sss">
							<i class="material-icons">equalizer</i>
							Analytics	
					</a>	
				</li>	
				<div class="c5e-nav-heading" id="DEVELOP">DEVELOP</div>
				<li class = "divider"  style="display: none"></li>
				
				<li class="it">
						<a href="#" class="sss">
								<i class="material-icons">supervisor_account</i>								Authentication	
						</a>	
				</li>
				<li class="it">
						<a href="#" class="sss">
								<i class="material-icons">dns</i>		
								Database	
						</a>	
				</li>
				<li class="it">
						<a href="#" class="sss">
								<i class="material-icons">perm_media</i>		
							Storage	
						</a>	
				</li>

				<li class="it">
						<a href="#" class="sss">
								<i class="material-icons">public</i>		
								Hosting	
						</a>	
				</li>
				<li class="it">
						<a href="#" class="sss">
								<i class="material-icons">settings_ethernet</i>
																Functions	
						</a>	
				</li>
				<li class="it">
						<a href="#" class="sss">
								<i class="material-icons">assignment_turned_in</i>		
								Test Lab	
						</a>	
				</li>
				<li class="it">
						<a href="#" class="sss">
								<i class="material-icons">bug_report</i>		
								Crash Reporting	
						</a>	
				</li>
				<li class="it">
						<a href="#" class="sss">
								<i class="material-icons">access_time</i>
																Performance	
						</a>	
				</li>
				<div class="c5e-nav-heading" id="DEVELOP2">GROW</div>
				<li class = "divider"  style="display: none"></li>
				
				<li class="it">
						<a href="#" class="sss">
								<i class="material-icons">message</i>		
								Notifications	
						</a>	
				</li>
				<li class="it">
						<a href="#" class="sss">
								<i class="material-icons">perm_media</i>		
								Remote Config	
						</a>	
				</li>
				<li class="it">
						<a href="#" class="sss">
								<i class="material-icons">link</i>		
								Dynamic Links	
						</a>	
				</li>
				<div class="c5e-nav-heading aaa" id="DEVELOP3">EARN</div>
				<li class = "divider"  style="display: none"></li>
				
				<li class="it">
						<a href="#" class="sss">
								<i class="material-icons">perm_media</i>		
								AdMob	
						</a>	
				</li>																
				
			</ul>
			<div class="side-nav fixed" id="upgrade" style="line-height: 16px;" >
					<div layout="column" flex="" class="layout-column flex" style="display: inline"> 
						<div style="font-size: 14px;color: rgba(0,0,0,0.54);display: inline">
							Spark
						</div> 
						<a href="test.html" class="right" onclick="side-navbar1()" style="margin-right: -12px;padding: 8px 12px; height: 32px;width: 83px;font-size: 13px;background-color:white;border: none;color: rgb(3,155,229);font-style:oblique">
							<strong>
								UPGRADE
							</strong>
						</a>
						<div style="font-size:12px;color: rgba(0,0,0,0.54);display: inline">
							<span><br>
								Free
							</span>
							 $0/month
						</div> 
					</div>
			</div>
			<button class="right side-nav fixed arrow" id="a1" style="line-height: 16px;padding: 10px 16px;background-color: white;border: none;height: 44px;" onclick="close1()">
					<i class="material-icons" style="width:24px;height:24px">keyboard_arrow_left</i>
			</button>
			<button class="right side-nav fixed arrow" id="a2" style="line-height: 16px;padding: 10px 16px;background-color: white;border: none;height: 44px;display: none;width: 68px;" onclick="open1()">
					<i class="material-icons" style="width:24px;height:24px">keyboard_arrow_right</i>
			</button>
		</div>`)
          );
    }
}
export default Nav;