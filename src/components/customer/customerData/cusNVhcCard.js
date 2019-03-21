


import React, {Component} from "react";




const cusNVhcCard = props =>


    <div className="col-md-13">
        <div className="card p-30">
            <div className="media">

                <div className="row col-md-13">
                    <div className="col-lg-1 mb-3 ">
                    <i className="fa fa-wrench f-s-40 color-primary"/>
                    </div>


                <div className=" col-md-3 mb-3  ">
                    <h2>Cód. Serviço</h2>
                    <p>{props.SipCus._id}</p>
                </div>
                    <div className="col-md-3 mb-3 ">
                        <h2>Cliente</h2>
                        <p className="m-b-0 col-md-0">{props.SipCus.SipCus}</p>
                    </div>
                <div className="col-md-3 mb-3 ">
                    <h2>Veiculo</h2>
                    <p className="m-b-0 col-md-0">{props.SipCus.MdlNam}</p>
                </div>
                    <div className="col-md-2 mb-3 ">
                        <h2>Placa</h2>
                        <p className="m-b-0 col-md-0">{props.SipCus.CvnPlt}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;

export  default  cusNVhcCard;