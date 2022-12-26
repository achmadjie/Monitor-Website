import React, { useState } from "react";
import "normalize.css";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import monitor_logo from "../../asset/image/monitor_logo.png";
import monitor_background from "../../asset/image/monitor_background.png";
import { message } from 'antd';
import styles from "./Signup.module.css";


export default function Signup({funcHeadFoot}) {
  funcHeadFoot(false)

  const navigate = useNavigate();

  // handle form signup
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log("name : " + data.name)
    console.log("email : " + data.email)
    console.log("password : " + data.password)
    console.log("confirm Password : " + data.confirm_password)
    axios
      .post("https://apidm.tms.my.id/api/register", {
        name: data.name,
        email: data.email,
        password: data.password
      })
      .then(function (response) {
        console.log(response);
        message.success("Signup Berhasil", [5])
        navigate("/login", { replace: true });
      })
      .catch(function (error) {
        console.log(error);
        message.error(error.response.data.error, [5])
      }); 
  };

  // handle pass eye
  const [pass_eye, set_pass_eye] = useState(false);

  const handle_pass_click = () => {
    set_pass_eye(!pass_eye);
  };

  // handle confirm pass eye
  const [pass_confirm_eye, set_confirm_pass_eye] = useState(false);

  const handle_confirm_pass_click = () => {
    set_confirm_pass_eye(!pass_confirm_eye);
  };

  // handle validate pass
  const pass = watch("password");

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_background}>
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
      <div className={styles.signup_form_desktop}>
        <p className={styles.signup_text}>Create new account.</p>
        <div className={styles.signup_form}>
          <p className={styles.login_link}>
            Already have an account? &nbsp; <Link to="/login">Login</Link>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.name_email_form}>
              <div className={styles.name_form}>
                <input
                  className={styles.name_email}
                  type={"text"}
                  placeholder="Name*"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <p className={styles.error_mess}>
                    Name is required*
                  </p>
                )}
              </div>
              <div className={styles.email_form}>
                <input
                  className={styles.name_email}
                  type={"email"}
                  placeholder="Email*"
                  {...register("email", {
                    required: "Email is required*",
                  })}
                />
                {errors.email && (
                  <p className={styles.error_mess}>
                    {errors.email.message}
                  </p>
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
                <div className={styles.confirm_form}>
                  <input
                    className={styles.password}
                    type={pass_confirm_eye === false ? "password" : "text"}
                    placeholder="Confirm Password*"
                    onPaste={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                    {...register("confirm_password", {
                      required: "Confirm password is required*",
                      validate: (value) =>
                        value === pass || "The password is not match",
                    })}
                  />
                  {errors.confirm_password && (
                    <p className={styles.error_mess}>
                      {errors.confirm_password.message}
                    </p>
                  )}
                  <div className={styles.eye_pass_confirm}>
                    {pass_confirm_eye === false ? (
                      <FaRegEyeSlash
                        onClick={handle_confirm_pass_click}
                        className={styles.eye}
                      />
                    ) : (
                      <FaRegEye
                        onClick={handle_confirm_pass_click}
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
                value="Create account"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}