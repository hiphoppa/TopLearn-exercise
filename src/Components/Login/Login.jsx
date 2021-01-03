import React, { Fragment, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { LoginUser } from '../../Services/userServices';
import { withRouter } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import { Helmet } from 'react-helmet';


const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [, setvalid] = useState('')

    const SimpleValidator = useRef(new SimpleReactValidator({
        messages: {
            required: 'این قسمت باید پر شود.',
            email: "ساختار صحیح ایمیل abc@gmail.com"
        },
        element: message => <div style={{color: 'red'}}>{message}</div>
    }));

    const reset = () => {
        setEmail('');
        setPassword('');
    }

    const Submitted = async e => {
        e.preventDefault();
        const user = {
            email,
            password
        }
        try {
            if (SimpleValidator.current.allValid()) {
                const { status, data } = await LoginUser(user);
                if (status === 200) {
                    toast.success('ورود شما موفقیت آمیز بود.',
                        {
                            position: 'top-right',
                            closeOnClick: true
                        }
                    )
                    console.log(data);
                    reset();
                    history.replace('/')
                }
            } else {
                SimpleValidator.current.showMessages();
                setvalid(1);
            }
        } catch (error) {
            toast.error('ایمیل یا رمز عبور اشتباه است.',
                {
                    position: 'top-right',
                    closeOnClick: true
                }
            )
        }
    }
    return (
        <Fragment>
            <Helmet>
                <title>تاپلرن | صفحه ورود</title>
            </Helmet>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">تاپ لرن</a></li>
                        <li className="breadcrumb-item active" aria-current="page">ورود به سایت</li>
                    </ul>
                </nav>
            </div>

            <main className="client-page">
                <div className="container-content">

                    <header><h2> ورود به سایت </h2></header>

                    <div className="form-layer">

                        <form action="" method="" onSubmit={Submitted}>

                            <div className="input-group">
                                <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="ایمیل"
                                    aria-describedby="email-address"
                                    value={email}
                                    onChange={e => {
                                        setEmail(e.target.value);
                                        SimpleValidator.current.showMessageFor('email')
                                    }}
                                />
                                {SimpleValidator.current.message('email', email, 'required|email')}
                            </div>

                            <div className="input-group">
                                <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                                <input
                                    type="text"
                                    name="password"
                                    className="form-control"
                                    placeholder="رمز عبور "
                                    aria-describedby="password"
                                    value={password}
                                    onChange={p => setPassword(p.target.value)}
                                />
                                {SimpleValidator.current.message('password', password, 'required')}
                            </div>

                            <div className="remember-me">
                                <label><input type="checkbox" name="" />  مرا بخاطر بسپار </label>
                            </div>

                            <div className="link">
                                <a href="/"> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                                <a href="/"> <i className="zmdi zmdi-account"></i> عضویت در سایت </a>
                            </div>

                            <button className="btn btn-success"> ورود به سایت </button>

                        </form>
                    </div>

                </div>
            </main>
        </Fragment>
    );
}

export default withRouter(Login);