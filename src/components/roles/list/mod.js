import React from 'react';
import Modal from 'react-awesome-modal';

import {fetchApi} from "../../../gearUtils/fetch/fetch";

class Mod extends React.Component {

    refresh(){
        this.props.callback();
        window.location.reload();
    }

    send(event) {
        event.preventDefault();
        const req = {

            body: {

                SceDes: this.SceDes.value,


            },
        };
const url = '/auth/security/roles/'+this.props.role.SceCod;
        fetchApi(url, "PUT",req.body)

            .then(res => {

                if(res.ok){
                    return res.text();
                }
            })
            .catch(error=>{
                this.setState({msg:error.message})
            })
    };

    render() {
        return (
            <Modal visible={this.props.openModal} width="750" height="450" effect="fadeInUp" onClickAway={() => this.props.callback()}>
                <form  id="needs-validation" onSubmit={this.send.bind(this)} >
                    <div className="col-md-12">
                        <div className="card-title mb-5">
                        </div>
                        <div className="card-body">
                            <div className="card-title mb-5">
                                <h4>Dados do papel </h4>

                            </div>
                            <div className="row">

                            <div className="col-md-6 mb-3">

                                <label className="fw-500">Código</label>

                                <p className="form-control-static"> {this.props.role.SceCod} </p>
                            </div>

                                <div className="col-md-6 mb-3">

                                    <label className="fw-500" htmlFor="CusNam">Nome</label>
                                    <p className="form-control-static">{this.props.role.SceNam}  </p>
                                </div>

                            </div>
                            <div className="row">

                            <div className="col-md-12 mb-3">

                                    <label className="fw-500" htmlFor="CusSec">Descrição</label>
                                    <input type="text" className="form-control"  defaultValue={this.props.role.SceDes}  ref={input => this.SceDes = input} />
                                </div>
                            </div>

                        </div>
                        <div className="mb-5">

                        </div>
                        <div className="mb-5">
                        </div>
                        <div className="text-right">
                            <button className="btn cur-p btn-info m-b-10 m-l-5"  onClick={() => this.props.callback()}> Cancelar</button>


                            <button className="btn cur-p btn-success m-b-10 m-l-5" onClick={() => this.refresh()} type="submit">Salvar</button>
                        </div>
                    </div>
                </form>
            </Modal>
        )
    }
}
export default Mod;
