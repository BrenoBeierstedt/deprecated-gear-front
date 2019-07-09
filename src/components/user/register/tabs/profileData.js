import React, {Component} from "react";


export default class profileData extends Component {
render(){
    const {fullName, email,username, password, confirmPassword, handleProfileChange} = this.props;

        return(
            <div className="p-20">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-500"
                                   htmlFor="validationCustom02">Nome completo</label>
                            <input type="text" className="form-control"
                                   value={fullName}
                                   name="fullName" defaultValue={this.props.user.fullName} onChange={handleProfileChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-500"
                                   htmlFor="validationCustom01">Usuário</label>
                            <input type="text" className="form-control"
                                   value={username}
                                   name="username" defaultValue={this.props.user.username} onChange={handleProfileChange}/>
                        </div>
                    </div>
                    <div className="row">

                    <div className="col-md-6 mb-3">
                            <label className="fw-500"
                                   htmlFor="validationCustom02">E-mail</label>
                            <input type="email" className="form-control"
                                   value={email}
                                   name="email"defaultValue={this.props.user.email} onChange={handleProfileChange} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-500"
                                   htmlFor="validationCustom02">Senha</label>
                            <input type="password"  className="form-control"
                                   value={password}
                                   name="password" placeholder=""defaultValue={this.props.user.password} onChange={handleProfileChange} />
                        </div>
                    </div>
                    <div className="row">

                    <div className="col-md-6 mb-3">
                            <label className="fw-500" htmlFor="validationCustom02">Confirme
                                senha</label>
                            <input type="password" className="form-control"
                                   value={confirmPassword}
                                   name = "confirmPassword" placeholder="" defaultValue={this.props.user.confirmPassword}onChange={handleProfileChange} />
                        </div>
                    </div>


                </div>
            </div>

)}}

