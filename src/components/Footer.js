import React from 'react';
import styled from 'styled-components/macro';
import { Link } from "react-router-dom";



const Foot = styled.div`
min-height: 22vh;
background: #ebebeb;
`;

const TopLink = styled.div`
padding: 15px 30px;
border-bottom: 1px
solid #dadce0;
font-size: 15px;
color: #70757a;
`;

const BottomLink = styled.div`
padding: 15px 30px;

font-size: 15px;
color: #70757a;
ul {
	list-style-type: none;
  margin-top: 15px;
  padding: 0;
	
  }
  ul li {
	float: left;
	
	
  }
  ul li a {
	padding:15px;

	text-decoration: none;
	
	color: #70757a;
	
  }
  ul li a:hover {
	
	text-decoration: underline;
	
	color: #70757a;
	
  }
`;
const Footer = () => {
	return (
		<Foot>
			<TopLink>
				Nigeria
			</TopLink>	
			<BottomLink>
			<ul>
			
			<li><Link to="/">About</Link></li>
			<li><Link to="/">Advertising</Link></li>
			<li><Link to="/">Business</Link></li>
			<li><Link to="/">How search works</Link></li>
			
			</ul>
			</BottomLink>

		</Foot>
	)
}






export default Footer
