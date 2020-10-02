import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Header = () => {
	return (<StaticQuery
		query={graphql`
	      query {
					logo: file(relativePath: { eq: "images/logo3.png" }) {
						name
						childImageSharp {
							fixed(width: 40) {
								...GatsbyImageSharpFixed_withWebp
							}
						}
					}
	      }
	    `}
		render={data => (
			<header>
				<div className="wrapper">
					<Link to="/" className="logo">
						{/* <img src={logoImage} />  */}
						<Img className="logo-image"
							alt={data.logo.name}
							fixed={data.logo.childImageSharp.fixed} />
						<span className="godot">godot</span>labs
		      </Link>
					<div className="right">
						<Link to="/" className="btn">
							Assets
			  		</Link>
						<Link to="/tutorials" className="btn">
							Tutorials
			  		</Link>
						<Link to="/jobs" className="btn">
							Jobs
			  		</Link>
						<Link to="/services" className="btn">
							Services
						</Link>
						{/* 
						<div className="dropdown">
							<div className="menu-handle btn">Jobs</div>
							<div className="menu left">
								<Link to="/hiring" className="item btn">
									Hiring
				  			</Link>
								<Link to="/jobs" className="item btn">
									Looking for Work
				  			</Link>
								<Link to="/gigs" className="item btn">
									Gigs
				  			</Link>
								<Link to="/services" className="item btn">
									Services
				  			</Link>
							</div>
						</div> */}
						{/* <div className="dropdown">
							<div className="menu-handle btn">Resources</div>
							<div className="menu">
								<Link to="/custom-assets" className="item btn">
									Custom Assets
				  			</Link>
							</div>
						</div> */}

						{/* <Link to="/about" className="btn">
							<FontAwesomeIcon icon={["fas", "question-circle"]} />
						</Link> */}
					</div>
					{/* End right */}
					<div className="clearfix" />
				</div>
				{/* End main wrapper */}
			</header>
		)}
	/>
	)
}

export default Header

