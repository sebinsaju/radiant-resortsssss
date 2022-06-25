import React from 'react'

const StandardRoom = () => {
    return (
        <div>
            <section className="w3l-roomsingleblock1 py-5">
                <div className="container py-sm-4">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-6">
                            <img src="/standard-room1.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img src="/images/room2.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-6 roomsingle mt-lg-0 mt-4">
                            <h3 className="title-small">Standard Rooms</h3>
                            <p className="roomsingle mt-3">StandardRooms at Radiant Resort Bangalore are among the basic room types and come with utmost comfort. The rooms are spaciously appointed and well-furnished and come at reasonable prices. Our rooms have large windows overlooking the Bannerghatta National Park and come with all modern conveniences.<br />Each room can accommodate 2 adults and 1 child.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-roomsingleblock1 py-5">
                <div className="container py-sm-4">
                    <div className="row">
                        <div className="col-lg-7 roomsingle">
                            <h3 className="title-small">Amenities</h3>
                            <ul className="w3l-right-book mt-4">
                                <li><a hef="#url"><span className="fa fa-check" aria-hidden="true"></span>Television</a></li>
                                <li><a hef="#url"><span className="fa fa-check" aria-hidden="true"></span>Wardrobe</a></li>
                                <li><a hef="#url"><span className="fa fa-check" aria-hidden="true"></span>Complimentary Wi-Fi
                                </a></li>
                                <li><a hef="#url"><span className="fa fa-check" aria-hidden="true"></span>Complimentary Breakfast
                                </a></li>
                                <li><a hef="#url"><span className="fa fa-check" aria-hidden="true"></span>Laundry Service
                                </a></li>
                                <li><a hef="#url"><span className="fa fa-check" aria-hidden="true"></span>24-hour Cold and Hot Water
                                </a></li>
                                <li><a hef="#url"><span className="fa fa-check" aria-hidden="true"></span>Complimentary Bottled Water
                                </a></li>
                            </ul>
                        </div>
                        <div className="col-lg-5 mt-lg-0 mt-4">
                            <img src="/room-1.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default StandardRoom;