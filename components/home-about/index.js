import React from 'react'

const HomeAbout = () => {
	return (
		<section className="w3l-about py-5">
			<div className="container py-sm-4">
				<div className="row">
					<div className="col-lg-6 about-left mb-md-0 mb-5">
						<h3 className="title-big">Welcome To Radiant Resort in Bangalore</h3>
						<h5>We make the best for all our customers.</h5>
						<p className="mt-3">Amidst the hustle and bustle of the silicon valley of India, If you feel that nothing is going right, you should perhaps head to Radiant Resort Bangalore - an oasis of absolute peace and tranquillity, tucked in lush greenery. The tall trees swaying in the gentle breeze, as if singing a welcome song for you; the chirping of the birds hiding in shrubs and behind the trees, will welcome you on your arrival at the resort.</p>
						<a href="about.html" className="btn btn-style btn-primary mt-sm-5 mt-4">Learn About Us</a>
					</div>
					<div className="col-lg-6 about-right position-relative mt-lg-0 mt-5">
						<img src="/about-1.jpg" alt="" className="img-fluid img-border mt-4" />
						<img src="/about.jpg" alt="" className="img-fluid position-absolute img-position" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeAbout