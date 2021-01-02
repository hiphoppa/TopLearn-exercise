import React, { Fragment, useRef, useState } from 'react';
import { toast } from "react-toastify";
import { registerUser } from '../../Services/userServices';
import SimpleReactValidator from "simple-react-validator";

const Register = () => {
    const [fullname, setfullname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [, setvalid] = useState('')
    const [confirm, setconfirm] = useState(false)

    const SimpleValidator = useRef(new SimpleReactValidator({
        messages: {
            required: 'باید این قسمت پر شود.',
            min: 'حداقل 6 کاراکتر وارد کنید',
            email: 'ساختار صحیح ایمیل abc@gmail.com'
        },
        element: message => <div style={{ color: 'red' }}>{message}</div>
    }))

    const reset = () => {
        setfullname('');
        setemail('');
        setpassword('');
    }
    const Submited = async e => {
        e.preventDefault();
        const user = {
            fullname,
            email,
            password
        }
        console.log(user);
        try {
            if (SimpleValidator.current.allValid() && confirm) {
                const { status, data } = await registerUser(user)
                if (status === 201) {
                    toast.success(`${fullname} عزیز، ثبت نام شما با موفقیت انجام شد`,
                        {
                            position: 'top-right',
                            closeOnClick: true
                        })
                    console.log(data);
                    reset();
                }
            } else {
                SimpleValidator.current.showMessages();
                setvalid(1)
            }
        } catch (error) {
            console.log(error);
            toast.error(`مشکلی پیش آمده`,
                {
                    position: 'top-right',
                    closeOnClick: true
                }
            )
        }
    }

    return (
        <Fragment>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">تاپ لرن</a></li>
                        <li className="breadcrumb-item active" aria-current="page">عضویت در سایت</li>
                    </ul>
                </nav>
            </div>

            <main className="client-page">
                <div className="container-content">

                    <header><h2> عضویت در سایت </h2></header>

                    <div className="form-layer">

                        <form action="" method="" onSubmit={Submited}>

                            <div className="input-group">
                                <span className="input-group-addon" id="username"><i className="zmdi zmdi-account"></i></span>
                                <input
                                    name="fullname"
                                    type="text"
                                    value={fullname}
                                    className="form-control"
                                    placeholder="نام و نام خانوادگی"
                                    aria-describedby="username"
                                    onChange={e => {
                                        setfullname(e.target.value)
                                        SimpleValidator.current.showMessageFor('fullname')
                                    }}
                                />
                                {SimpleValidator.current.message('fullname', fullname, 'required|min:6')}
                            </div>

                            <div className="input-group">
                                <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    className="form-control"
                                    placeholder="ایمیل"
                                    aria-describedby="email-address"
                                    onChange={e => {
                                        setemail(e.target.value)
                                        SimpleValidator.current.showMessageFor('email')
                                    }}
                                />
                                {SimpleValidator.current.message("email", email, 'required|email')}
                            </div>

                            <div className="input-group">
                                <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                                <input
                                    type="text"
                                    name="password"
                                    value={password}
                                    className="form-control"
                                    placeholder="رمز عبور "
                                    aria-describedby="password"
                                    onChange={e => {
                                        setpassword(e.target.value);
                                        SimpleValidator.current.showMessageFor('password')
                                    }}
                                />
                                {SimpleValidator.current.message('password', password, 'required|min:6')}
                            </div>

                            <div className="accept-rules">
                                <label>
                                    <input
                                        type="checkbox"
                                        name=""
                                        onChange={e => setconfirm(!confirm)}
                                    />
                                      قوانین و مقررات سایت را میپذیرم
                                    </label>
                            </div>

                            <div className="link">
                                <a href=""> <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                                <a href=""> <i className="zmdi zmdi-account"></i> ورود به سایت </a>
                            </div>

                            <button className="btn btn-success"> عضویت در سایت </button>

                        </form>
                    </div>

                </div>
            </main>
        </Fragment>
    );
}

export default Register;