import React from 'react'

const HomeAbout = () => {
	return (
		<section class="w3l-about py-5">
			<div class="container py-sm-4">
				<div class="row">
					<div class="col-lg-6 about-left mb-md-0 mb-5">
						<h3 class="title-big">Welcome To Radiant Resort in Bangalore</h3>
						<h5>We make the best for all our customers.</h5>
						<p class="mt-3">Amidst the hustle and bustle of the silicon valley of India, If you feel that nothing is going right, you should perhaps head to Radiant Resort Bangalore - an oasis of absolute peace and tranquillity, tucked in lush greenery. The tall trees swaying in the gentle breeze, as if singing a welcome song for you; the chirping of the birds hiding in shrubs and behind the trees, will welcome you on your arrival at the resort.</p>
						<a href="about.html" class="btn btn-style btn-primary mt-sm-5 mt-4">Learn About Us</a>
					</div>
					<div class="col-lg-6 about-right position-relative mt-lg-0 mt-5">
						<img src="/about-1.jpg" alt="" class="img-fluid img-border mt-4" />
						<img src="/about.jpg" alt="" class="img-fluid position-absolute img-position" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeAbout