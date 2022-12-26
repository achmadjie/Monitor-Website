import React, { useState } from "react";
import monitor_logo from "../../asset/image/monitor_logo.png";
import monitor_background from "../../asset/image/monitor_background.png";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import client from "../../api/client";
import styles from "./Login.module.css";

export default function Login({ funcHeadFoot }) {
  funcHeadFoot(false);

  const navigate = useNavigate();

  // handle form signup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    client
      .post("/api/login", {
        email: data.email,
        password: data.password
      })
      .then(function (response) {
        console.log(response);
        message.success("Login Berhasil", [3]);
        localStorage.setItem("name", response.data.success.name);
        localStorage.setItem("token", response.data.success.token);
        navigate("/monitoring", { replace: true });
        funcHeadFoot(true);
      })
      .catch(function (error) {
        console.log(error.response.data);
        message.error(error.response.data.msg, [3]);
      });
  };

  // handle pass eye
  const [pass_eye, set_pass_eye] = useState(false);

  const handle_pass_click = () => {
    set_pass_eye(!pass_eye);
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_background}>
        <img
          className={styles.monitor_background}
          src={monitor_background}
          alt="monitor_background"
        />
        <img
          className={styles.monitor_logo}
          src={monitor_logo}
          alt="monitor_logo"
        />
      </div>
      <div className={styles.login_form_desktop}>
        <p className={styles.login_text}>Login.</p>
        <div className={styles.login_form}>
          <p className={styles.signup_link}>
            Don't have an account? &nbsp; <Link to={"/Signup"}>Register</Link>  
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.email_pass_form}>
              <div className={styles.email_form}>
                <input
                  className={styles.email}
                  type={"email"}
                  placeholder="Email*"
                  {...register("email", {
                    required: "Email is required*",
                  })}
                />
                {errors.email && (
                  <p className={styles.error_mess}>{errors.email.message}</p>
                )}
              </div>
              <div className={styles.pass_container}>
                <div className={styles.password_form}>
                  <input
                    className={styles.password}
                    type={pass_eye === false ? "password" : "text"}
                    placeholder="Password*"
                    {...register("password", {
                      required: "Password is required*",
                      minLength: {
                        value: 8,
                        message: "Minimum Length is 8",
                      },
                      maxLength: {
                        value: 20,
                        message: "Maximum Length is 20",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className={styles.error_mess}>
                      {errors.password.message}
                    </p>
                  )}
                  <div className={styles.eye_pass}>
                    {pass_eye === false ? (
                      <FaRegEyeSlash
                        onClick={handle_pass_click}
                        className={styles.eye}
                      />
                    ) : (
                      <FaRegEye
                        onClick={handle_pass_click}
                        className={styles.eye}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.submit_button}>
              <input
                className={styles.submit_form}
                type={"submit"}
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
