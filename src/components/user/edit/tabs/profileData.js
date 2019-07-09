import React, {Component} from "react";


export default class profileData extends Component {

    render() {

        return (

            <div className="p-20">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-500"
                                   htmlFor="validationCustom01">Usuário</label>
                            <input type="text" className="form-control"
                                   id="validationCustom02" ref={input => this.username = input} required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="fw-500"
                                   htmlFor="validationCustom02">E-mail</label>
                            <input type="text" className="form-control"
                                   id="validationCustom02" ref={input => this.email = input} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-500"
                                   htmlFor="validationCustom02">Senha</label>
                            <input type="password" className="form-control"
                                   id="validationCustom14" placeholder="" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="fw-500" htmlFor="validationCustom02">Confirme
                                senha</label>
                            <input type="password" className="form-control"
                                   id="validationCustom15" placeholder="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div>
                                <label className="fw-500 text-center"
                                       htmlFor="validationCustom01">Situação
                                    Usuário</label>
                            </div>
                            <div className="btn-group text-center">
                                <div>
                                    <select id="question_type"
                                            className="btn btn-light dropdown-toggle">
                                        <option name="fisica">Ativo</option>
                                        <option name="fisica">Inativo</option>
                                    </select>
                                    <script>
                                        alert($("#question_type
                                        option:selected").attr('name'));
                                    </script>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};