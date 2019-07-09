import React, {Component} from "react";
import {Link} from "react-router-dom";
import history from "../../../history";
import ApiProvider from '../../../../gearUtils/apiMsc'
import CusNVhcCard from './../../../customer/customerData/cusNVhcCard'


const token = localStorage.getItem('auth-token');

let arr =[]
global.SipID = null

export default class budgetForm extends Component {

    state = {
        parts: [{'prtQty':"", "prtDes":"", "prtPrc":""}],
        product: [{'proQty':"", "proDescription":"", "proPrice":""}],
        service: [{'svcDescription':"", "svcPrice":"", "svcSts":"1"}],
        sip:[],
        svcSts:"Orcamento"

    };
    handleChange = (e) => {
        if (["prtQty", "prtDes", "prtPrc"].includes(e.target.getAttribute("b")) ) {
            let parts = [...this.state.parts];
            parts[e.target.dataset.id][e.target.getAttribute("b")] = e.target.value.toUpperCase();
            this.setState({ parts: parts })
        }
        else {
            this.setState({ [e.target.name]: e.target.value.toUpperCase() })
        }
    };
    addCat = (e) => {
        this.setState((prevState) => ({
            parts: [...prevState.parts, {"prtQty":"", "prtDes":"", "prtPrc":""}],
        }));
    };

    handleRemovePrt(idx){
        this.state.parts.splice(idx,1);


        this.setState({part:this.state.parts})
    }
    // parte do produto
    handleChangePro = (e) => {
        if (["proQty", "proDescription", "proPrice"].includes(e.target.getAttribute("b"))) {
            let product = [...this.state.product];
            product[e.target.dataset.id][e.target.getAttribute("b")] = e.target.value.toUpperCase()
            this.setState({product})
        }
    };
    addPro = (e) => {
        this.setState((prevState) => ({
            product: [...prevState.product, {'proQty':"", "proDescription":"", "proPrice":""}],
        }));
    };
    handleRemovePro(idx){
        this.state.product.splice(idx,1);


        this.setState({part:this.state.product})
    }

    // fim parte produto

    // serviço
    handleChangeSvc = (e) => {
        if (["svcDescription", "svcPrice"].includes(e.target.getAttribute("b"))) {
            let service = [...this.state.service];
            service[e.target.dataset.id][e.target.getAttribute("b")] = e.target.value.toUpperCase();
            this.setState({service})
        }
    };
    addSvc = (e) => {
        this.setState((prevState) => ({
            service: [...prevState.service, {'svcDescription':"", "svcPrice":"", "svcSts":"1"}],
        }));
    };
    handleRemoveSvc(idx){
        this.state.service.splice(idx,1);


        this.setState({part:this.state.service})
    }

    // fim serviço
    handleSubmit = (e) => {
        e.preventDefault();};

    Submit = (e) => {
        e.preventDefault();

        const requestInfo = {

            method: 'PUT',
            body: JSON.stringify({
                parts: this.state.parts,
                product: this.state.product,
                service: this.state.service,
                svcSts: this.state.svcSts,




            }),
            headers: new Headers({
                'content-type': 'application/json',
                'Authorization': token,
            })
        };
        let url =ApiProvider.Add+'/auth/sip/'+ global.SipID;
        fetch(url, requestInfo)
            .then(res => {

                if(res.ok){
                    return res.text();
                }else {
                    throw new Error('Não foi possivel.')
                }
            })
            .then(token =>{

                history.push('/ServInProList')

            })
            .catch(error=>{
                this.setState({msg:error.message})
            })
    };

    componentWillMount() {
        const id = this.props.match.params.id

        const requestInfoS = {

            method: 'GET',

            headers: new Headers({

                'Authorization': localStorage.getItem('auth-token'),
            })
        };


        fetch(ApiProvider.Add +"/auth/sip/"+id, requestInfoS)
            .then(res => res.json())
            .then( data => {
                arr = data;
                this.setState({sip:arr})
                global.SipID = this.state.sip._id
            })

    }
    render() {
        let { parts, product,service} = this.state;


        return(

            <form onSubmit={this.handleSubmit} >
                <div className="page-wrapper">

                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3 className="text-primary">Orçamento</h3>
                        </div>

                        <div className="col-md-7 align-self-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                <li className="breadcrumb-item active">Orçamento</li>
                            </ol>
                        </div>
                    </div>


                    <div className="masonry-item col-md-10">
                        <div className="bgc-white p-20 bd">

                            <div className="mT-30">
                                <CusNVhcCard SipCus={this.state.sip}/>
                                <div className="card ">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4>Peças </h4>
                                            <div className="media-body media-text-left">
                                                <button className=" btn cur-p btn-success m-b-10 m-l-5" onClick={this.addCat}><i className="fa fa-plus"
                                                                                                                                 aria-hidden="true"/> Adicionar Peça</button>
                                            </div>
                                        </div>

                                        <div className="row">

                                            <div className="col-md-12 mb-3">
                                                <div className="row">
                                                    <div className="col-md-2 mb-3">
                                                        <label className="fw-500"
                                                               htmlFor="validationCustom06">Qtd.</label>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="fw-500"
                                                               htmlFor="validationCustom06">Descrição</label>
                                                    </div>
                                                    <div className="col-md-2 mb-3">
                                                        <label className="fw-500"
                                                               htmlFor="validationCustom06">Valor</label>
                                                    </div>

                                                </div>
                                                {
                                                    parts.map((val, idx)=> {
                                                        let priceId = `price-${idx}`, qtyId = `cat-${idx}`, ageId = `age-${idx}`
                                                        return (
                                                            <div className="row" key={idx}>

                                                                <div className="col-md-2 mb-3">

                                                                    <input
                                                                        type="number"
                                                                        name="prtQty"
                                                                        data-id={idx}
                                                                        id={qtyId}
                                                                        value={parts[idx].prtQty}
                                                                        className="form-control"
                                                                        b="prtQty"
                                                                        onChange={(e) => this.handleChange(e, idx)}
                                                                    />
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <input
                                                                        type="text"
                                                                        name="prtDes"
                                                                        data-id={idx}
                                                                        id={ageId}
                                                                        value={parts[idx].prtDes}
                                                                        className="form-control"
                                                                        b="prtDes"
                                                                        onChange={(e) => this.handleChange(e, idx)}
                                                                    />
                                                                </div>
                                                                <div className="col-md-2 mb-3">
                                                                    <input
                                                                        type="number"
                                                                        name="prtPrc"
                                                                        data-id={idx}
                                                                        id={priceId}
                                                                        value={parts[idx].prtPrc}
                                                                        className="form-control"
                                                                        b="prtPrc"
                                                                        onChange={(e) => this.handleChange(e, idx)}
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <button className="btn btn-danger " onClick={(e) => this.handleRemovePrt(idx)} ><i className="fa fa-times"/></button>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="card ">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4>Produtos </h4>
                                            <div className="media-body media-text-left">
                                                <button className=" btn cur-p btn-success m-b-10 m-l-5" onClick={this.addPro}><i className="fa fa-plus"
                                                                                                                                 aria-hidden="true"/> Adicionar Produtos</button>
                                            </div>
                                        </div>

                                        <div className="row">

                                            <div className="col-md-12 mb-3">
                                                <div className="row">
                                                    <div className="col-md-2 mb-3">
                                                        <label className="fw-500"
                                                               htmlFor="validationCustom06">Qtd.</label>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="fw-500"
                                                               htmlFor="validationCustom06">Descrição</label>
                                                    </div>
                                                    <div className="col-md-2 mb-3">
                                                        <label className="fw-500"
                                                               htmlFor="validationCustom06">Valor</label>
                                                    </div>

                                                </div>
                                                {
                                                    product.map((val, idx)=> {
                                                        let priceId = `price-${idx}`, proId = `description-${idx}`, qtyId = `qty-${idx}`
                                                        return (
                                                            <div className="row" key={idx}>
                                                                <div className="col-md-2 mb-3">

                                                                    <input
                                                                        type="number"
                                                                        name="qty"
                                                                        data-id={idx}
                                                                        id={qtyId}
                                                                        value={product[idx].proQty}
                                                                        className="form-control"
                                                                        b="proQty"
                                                                        onChange={(e) => this.handleChangePro(e, idx)}
                                                                    />
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <input
                                                                        type="text"
                                                                        name="description"
                                                                        data-id={idx}
                                                                        id={proId}
                                                                        value={product[idx].proDescription}
                                                                        className="form-control"
                                                                        b="proDescription"
                                                                        onChange={(e) => this.handleChangePro(e, idx)}
                                                                    />
                                                                </div>
                                                                <div className="col-md-2 mb-3">
                                                                    <input
                                                                        type="number"
                                                                        name="price"
                                                                        data-id={idx}
                                                                        id={priceId}
                                                                        value={product[idx].price}
                                                                        className="form-control"
                                                                        b="proPrice"
                                                                        onChange={(e) => this.handleChangePro(e, idx)}
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <button className="btn btn-danger " onClick={(e) => this.handleRemovePro(idx)} ><i className="fa fa-times"/></button>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="card ">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4>Serviços </h4>
                                            <div className="media-body media-text-left">
                                                <button className=" btn cur-p btn-success m-b-10 m-l-5" onClick={this.addSvc}><i className="fa fa-plus"
                                                                                                                                 aria-hidden="true"/> Adicionar Serviço</button>
                                            </div>
                                        </div>

                                        <div className="row">

                                            <div className="col-md-12 mb-3">
                                                <div className="row">

                                                    <div className="col-md-8 mb-3">
                                                        <label className="fw-500"
                                                               htmlFor="validationCustom06">Descrição</label>
                                                    </div>
                                                    <div className="col-md-2 mb-3">
                                                        <label className="fw-500"
                                                               htmlFor="validationCustom06">Valor</label>
                                                    </div>

                                                </div>
                                                {
                                                    service.map((val, idx)=> {
                                                        let priceId = `price-${idx}`, svcId = `description-${idx}`
                                                        return (
                                                            <div className="row" key={idx}>

                                                                <div className="col-md-8 mb-3">
                                                                    <input
                                                                        type="text"
                                                                        name="description"
                                                                        data-id={idx}
                                                                        id={svcId}
                                                                        value={service[idx].svcDescription}
                                                                        className="form-control"
                                                                        b="svcDescription"
                                                                        onChange={(e) => this.handleChangeSvc(e, idx)}
                                                                    />
                                                                </div>
                                                                <div className="col-md-2 mb-3">
                                                                    <input
                                                                        type="number"
                                                                        name="price"
                                                                        data-id={idx}
                                                                        id={priceId}
                                                                        value={service[idx].proPrice}
                                                                        className="form-control"
                                                                        b="svcPrice"
                                                                        onChange={(e) => this.handleChangeSvc(e, idx)}
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <button className="btn btn-danger " onClick={(e) => this.handleRemoveSvc(idx)} ><i className="fa fa-times"/></button>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="text-right">
                                    <Link className="btn cur-p btn-info m-b-10 m-l-5" to="/"> Cancelar</Link>


                                    <button className="btn cur-p btn-success m-b-10 m-l-5" onClick={this.Submit} type="submit">Salvar</button>

                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )






    }
}
