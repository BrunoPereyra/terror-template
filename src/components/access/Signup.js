import React, { useState } from "react";
import svc from "../../services";
import "../../static/styles/Signup.css"

export default function Signup() {
    const [Isignup, setIsignup] = useState({
        nameUser: "",
        password: "",
        fullName: "",
    });
    const HandleSubmit = async (e) => {
        e.preventDefault();
        if ((  !(Isignup.nameUser.length > 3)
            || !(Isignup.password.length > 5)
            || !(Isignup.fullName.length > 5)
            )) {
            console.log("error");
        } else {
            console.log(Isignup);
            svc.signup(Isignup).then(r => {
                if (r.ress === "user save") {
                    svc.login(Isignup).then(ress => {
                        window.localStorage.setItem(
                            "loggedAppUser", JSON.stringify(ress)
                        )
                    })
                }
                setIsignup({
                    nameUser: "",
                    password: "",
                    fullName: "",
                });
            }).catch(err => {
                console.log(err);
            })
        }

    };
    const HandleChange = (e) => {
        setIsignup({
            ...Isignup,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div id="signup">
            <div id="panel_signup">
                <h3>Log in to your account</h3>
                <form onSubmit={HandleSubmit} id="form_registration">
                    <label htmlFor="nameUser">Name user:</label>
                    <input
                        value={Isignup.nameUser}
                        onChange={HandleChange}
                        type="text"
                        placeholder="Name user"
                        id="name_user"
                        className="Isignup"
                        name="nameUser"
                        autoComplete="on"
                    />
                    <label htmlFor="fullName">Full name:</label>
                    <input
                        value={Isignup.fullName}
                        onChange={HandleChange}
                        type="text"
                        placeholder="Full Name"
                        id="full_name"
                        className="Isignup"
                        name="fullName"
                        autoComplete="on"
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        value={Isignup.password}
                        onChange={HandleChange}
                        type="password"
                        placeholder="password"
                        id="password"
                        className="Isignup"
                        name="password"
                        autoComplete="off"
                    />
             
                </form>
            </div>
        </div>
    );
}
