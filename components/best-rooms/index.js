import React from 'react'

const BestRooms = () => {
    return (
        <div class="best-rooms py-5">
            <div class="container py-lg-5 py-sm-4">
                <h3 class="title-big text-center">Best Rooms</h3>
                <div class="ban-content-inf row py-lg-3">
                    <div class="maghny-gd-1 col-lg-6">
                        <div class="maghny-grid">
                            <figure class="effect-lily">
                                <img class="img-fluid" src="/delux-room.jpg" alt="" />
                                <figcaption class="w3set-hny">
                                    <div>
                                        <h4 class="top-text">Deluxe Rooms (AC)
                                        </h4>
                                        {/* <p>From 20$ </p> */}
                                    </div>
                                </figcaption>
                            </figure>
                            <div class="room-info">
                                <h3 class="room-title"><a href="room-single.html">Deluxe Rooms (AC)</a></h3>
                                <ul class="mb-3">
                                    <li><span class="fa fa-users"></span> 2 Guests</li>
                                    <li><span class="fa fa-bed"></span> Double bed</li>
                                    <li><span class="fa fa-bed"></span> 15sqft</li>
                                </ul>
                                <p>Spaciously built and elegantly furnished, Deluxe Rooms come with air conditioning and are the perfect retreat for the two of you.</p>
                                <a href="#book" class="btn btn-style btn-primary mt-sm-4 mt-3">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="maghny-gd-1 col-lg-6 mt-lg-0 mt-4">
                        <div class="row">
                            <div class="maghny-gd-1 col-6">
                                <div class="maghny-grid">
                                    <figure class="effect-lily border-radius">
                                        <img class="img-fluid" src="/standard-room.jpg" alt="" />
                                        <figcaption>
                                            <div>
                                                <h4>Standard Rooms</h4>
                                                {/* <p>From 20$ </p> */}
                                            </div>

                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div class="maghny-gd-1 col-6">
                                <div class="maghny-grid">
                                    <figure class="effect-lily border-radius">
                                        <img class="img-fluid" src="/club-rooms.jpg" alt="" />
                                        <figcaption>
                                            <div>
                                                <h4>
                                                    Club Rooms</h4>
                                                {/* <p>From 20$ </p> */}
                                            </div>

                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div class="maghny-gd-1 col-6 mt-4">
                                <div class="maghny-grid">
                                    <figure class="effect-lily border-radius">
                                        <img class="img-fluid" src="/suit-room.jpg" alt="" />
                                        <figcaption>
                                            <div>
                                                <h4>Suites</h4>
                                                {/* <p>From 20$ </p> */}
                                            </div>

                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div class="maghny-gd-1 col-6 mt-4">
                                <div class="maghny-grid">
                                    <figure class="effect-lily border-radius">
                                        <img class="img-fluid" src="/woodhouse.jpg" alt="" />
                                        <figcaption>
                                            <div>
                                                <h4>Wood House</h4>
                                                {/* <p>From 20$ </p> */}
                                            </div>

                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestRooms;