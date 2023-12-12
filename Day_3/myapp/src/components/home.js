import React from "react";
// import Cards from "./cards";
 function home() {
	return (
		<>
			<header>
				<div className="navWrapper" id="home">
					<div className=" clearfix">
						<h2 className="companyName">ラテン</h2>
						<nav className="mainNav clearfix">
							<ul>
								<li><a href="#home">Home</a></li>
								<li><a href="#work" className="smoothScroll">Work</a></li>
								<li><a href="#about" className="smoothScroll">About</a></li>
								<li><a href="#contact" className="smoothScroll">Contact</a></li>
							</ul>
						</nav>
					</div>
				</div>

				<section className="hero">
					<div className="innerWrapper">
						<h1>おいしい食べ物</h1>
						<h3>Mixed Cusines  of western and japanese style</h3>
					</div>
				</section>
			</header>
			
		</>
	);
}
export default home
