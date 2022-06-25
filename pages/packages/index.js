import Link from 'next/link';
import React from 'react'
import {DATA} from "./Data";
const Packages = () => {
    return (
        <div><section class="w3l-breadcrumb">
            <div class="breadcrum-bg py-sm-5 py-4">
                <div class="container py-lg-3">

                    <h2>Packages</h2>
                    <p><Link href="/"><a>Home</a></Link> &nbsp; / &nbsp; Packages</p>

                </div>
            </div>
        </section>

            <section class="w3l-feature-2">
                <div class="grid top-bottom ">
                    <div class="container py-md-5">
                        {/* <h3 class="title-big text-center">Rooms and Cottages at Radiant Resort near Bangalore
                        </h3> */}
                        <div class="middle-section row mt-lg-5 pt-md-3">
                           {DATA.map((item)=>{
                            return( <div class="three-grids-columns col-lg-4 col-md-6 mb-4">
                            <img src={item.image} alt="" class="img-fluid" />
                            <div class="info">
                                <h4><a href="#url"> {item.title}</a></h4>
                                <p>{item.desc}
                                </p>
                                <Link href={item.link}><a class="btn mt-4">Read More </a></Link>
                            </div>
                        </div>)
                           })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Packages;