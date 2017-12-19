import './css/our.css'
import React, {Component} from 'react';
import renderHTML from 'react-render-html';


class Top extends Component {
    render() {
        return (
            renderHTML(`<div class="navbar-fixed menu">
			<nav>
				<div class="nav-wrapper">
					<a href="#" class="logo"><img src="img/logo.png" class="logo-image"/><img src="img/logotype.svg" class="logo-type"/></a>
					<a href="#" data-activates="side-navbar" class="button-collapse"><i class="material-icons">menu</i></a>

					<ul class="right hide-on-med-and-down">
						<li><a href="test.html"  style="color:rgba(255,255,255,.7);font-size: 13px;" ><i class="material-icons left">remove_red_eye</i> View only</a></li>
						<li><a href="test.html" style="color:rgba(255,255,255,.7);font-size: 14px;">Go to docs</a></li>
						<li><a style="width: 40px;" data-position="bottom" data-activates='dropdown1' class="tooltipped dropdown-button" data-tooltip="User settings" href="test.html"><i class="material-icons">more_vert</i></a></li>
						<ul style="font-size: 13px;" id='dropdown1' class='dropdown-content'>
							<li><a href="#!"> Alert subscriptions </a></li>
						  </ul>
						<li><a href="test.html"><img class="circle" style="width: 32px;height:32px;" src="img/profile.jpg"></a></li>
					</ul>
				</div>
			</nav>
		</div>`)
          );
    }
}

export default Top;