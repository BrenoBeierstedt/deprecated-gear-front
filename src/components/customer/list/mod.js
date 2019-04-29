import React from 'react';
import Modal from 'react-awesome-modal';
import ApiProvider from "../../../gearUtils/util";
import history from "../../history";

const token = localStorage.getItem('auth-token');




class Mod extends React.Component {

     refresh(){
         this.props.callback();
        window.location.reload();
    }

    send(event) {
        event.preventDefault();

        const requestInfo = {

            method: 'PUT',
            body: JSON.stringify({
                CusNam: this.CusNam.value,
                CusSec: this.CusSec.value,
                CusBdy: this.CusBdy.value,
                CusTyp: this.CusTyp.value,
                CusEma: this.CusEma.value,
                TelAco: this.TelAco.value,
                TelNum: this.TelNum.value,
                Cf1Aco: this.Cf1Aco.value,
                Cf1Num: this.Cf1Num.value,
                CusAdd:[{
                    AddStr: this.AddStr.value,
                    AddZip: this.AddZip.value,
                    AddCit: this.AddCit.value,
                    AddSta: this.AddSta.value,
                    AddCom: this.AddCom.value,
                } ]

            }),
            headers: new Headers({
                'content-type': 'application/json',
                'Authorization': token,
            })
        };
        fetch(ApiProvider.Add+'/auth/customer/'+this.props.cus._id, requestInfo)
            .then(res => {

                if(res.ok){
                    return res.text();
                }else {
                    throw new Error('Não foi possivel.')
                }
            })
            .then(token =>{



            })
            .catch(error=>{
                this.setState({msg:error.message})
            })
    };

    render() {
        return (
            <Modal visible={this.props.openModal} width="1000" height="750" effect="fadeInUp" onClickAway={() => this.props.callback()}>
                <form  id="needs-validation" onSubmit={this.send.bind(this)} >
                    <div className="col-md-12">
                        <div className="card-title mb-5">
                        </div>
                        <div className="card-body">
                            <div className="card-title mb-5">
                                <h4>Dados complementares </h4>

                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">

                                    <label className="fw-500" htmlFor="CusNam">Nome / Razão social</label>
                                    <input type="text" className="form-control" id="CusNam" defaultValue={this.props.cus.CusNam}  ref={input => this.CusNam = input} />
                                </div>


                                <div className="col-md-6 mb-3">

                                    <label className="fw-500" htmlFor="CusSec">CPF/CNPJ</label>
                                    <input type="number" className="form-control"  defaultValue={this.props.cus.CusSec}  ref={input => this.CusSec = input} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 mb-3">
                                    <label className="fw-500" htmlFor="validationCustom01">Tipo pessoa</label>
                                    <div className="btn-group">
                                        <div>
                                            <select id="question_type" className="btn btn-light dropdown-toggle" defaultValue={this.props.cus.CusTyp} ref={input => this.CusTyp = input}>
                                                <option name="fisica">Física</option>
                                                <option name="juricida">Juridica</option>
                                            </select>
                                            <script>
                                                alert($("#question_type option:selected").attr('name'));
                                            </script>
                                        </div>
                                    </div>



                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="fw-500">Data de nasc.</label>
                                    <div className="timepicker-input input-icon form-group">
                                        <div className="input-group">

                                            <input  className="form-control bdc-grey-200 start-date"
                                                    defaultValue={this.props.cus.CusBdy} ref={input => this.CusBdy = input} data-provide="datepicker"/>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-6 mb-3">

                                    <label className="fw-500" htmlFor="validationCustom02">E-mail</label>
                                    <input type="email" className="form-control" id="validationCustom09"
                                           defaultValue={this.props.cus.CusEma} ref={input => this.CusEma = input} />
                                </div>


                            </div>
                            <div className="row">
                                <div className="col-sm-2 mb-3">

                                    <label className="fw-500" htmlFor="validationCustom01">DDD</label>
                                    <input type="number" className="form-control" id="validationCustom17"
                                           defaultValue={this.props.cus.TelAco} ref={input => this.TelAco = input} />
                                </div>
                                <div className="col-md-4 mb-3">

                                    <label className="fw-500" htmlFor="validationCustom01">Telefone</label>
                                    <input type="text" className="form-control" id="validationCustom18"
                                           defaultValue={this.props.cus.TelNum} ref={input => this.TelNum = input} />
                                </div>
                                <div className="col-sm-2 mb-3">

                                    <label className="fw-500" htmlFor="validationCustom01">DDD</label>
                                    <input type="number" className="form-control" id="validationCustom10"
                                           defaultValue={this.props.cus.Cf1Aco} ref={input => this.Cf1Aco = input} />
                                </div>
                                <div className="col-md-4 mb-3">

                                    <label className="fw-500" htmlFor="validationCustom01">Celular</label>
                                    <input type="number" className="form-control" id="validationCustom11"
                                           defaultValue={this.props.cus.Cf1Num}  ref={input => this.Cf1Num = input} />
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">

                                    <label className="fw-500" htmlFor="validationCustom06">Endereço</label>
                                    <input type="text" className="form-control" id="validationCustom06"
                                           defaultValue={this.props.cus.AddStr}   ref={input => this.AddStr = input} />

                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="fw-500" htmlFor="validationCustom07">Complemento</label>

                                    <input type="text" className="form-control" id="validationCustom07"
                                           defaultValue={this.props.cus.AddCom}   ref={input => this.AddCom = input}/>
                                    <div className="invalid-feedback"> Please provide last name.</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="fw-500" htmlFor="validationCustom03">Cidade</label>

                                    <input type="text" className="form-control" id="validationCustom03"
                                           defaultValue={this.props.cus.AddCit} ref={input => this.AddCit = input} />

                                </div>
                                <div className="col-md-3 mb-3">
                                    <label className="fw-500" htmlFor="validationCustom04">Estado</label>

                                    <input type="text" className="form-control" id="validationCustom04"
                                           defaultValue={this.props.cus.AddSta}  ref={input => this.AddSta = input}   />
                                    <div className="invalid-feedback">Insira estado válido.</div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="validationCustom05">CEP</label>

                                    <input type="text" className="form-control" id="validationCustom05"
                                           defaultValue={this.props.cus.AddZip} ref={input => this.AddZip = input} />
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