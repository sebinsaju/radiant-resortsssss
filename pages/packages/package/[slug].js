import { useRouter } from 'next/router';
import React from 'react'
import { Data } from './Data';
const Package = () => {
    const route = useRouter();
    const data = {};
    if (route.query.slug === "buffet-lunch") {
        data = Data[0];
    }if (route.query.slug === "exclusive-breakfast") {
        data = Data[1];
    }if (route.query.slug === "all-day") {
        data = Data[2];
    }if (route.query.slug === "couple-buffet") {
        data = Data[3];
    }
    return (
        <section className="w3l-roomsingleblock1 py-5">
            <div className="container py-sm-4">
                <div className="row">
                    <div className="col-lg-7 roomsingle">
                        <h3 className="title-small">{data.title}</h3>
                        <p>{data.desc}</p><br/>
                        <h6><span classNameName='font-weight-bolder'>Rate</span>:{data.rate}</h6>
                        <ul className="w3l-right-book mt-4">
                            {data.inc.map((item) => {
                                return (<li><span className="fa fa-check" aria-hidden="true"></span>{item.item}</li>)
                            })}
                        </ul>
                    </div>
                    <div className="col-lg-5 mt-lg-0 mt-4">
                        <img src={data.image} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Package;