import { React, useRef } from "react";
import styles from "./NewKeyword.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import client from "../../../api/client";
import { message } from "antd";
import convBase64 from "../../convert-base64/ConvertBase64";

export default function NewKeyword() {

  const closeModal = () => useRef.current.close();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const img = URL.createObjectURL(data.image[0]);
    const resConv = await convBase64(img);

    client
      .post(
        "/api/usermonitor/set",
        {
          title: data.title,
          name: data.name,
          image: resConv
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        navigate("/successadd")
      })
      .catch(function (error) {
        alert("gagal");
        console.log(error.response.data);
        message.error(error.response.data.msg, [3]);
      });
  };

  return (
    <div className={styles.modal_keyword}>
      <div className={styles.new_keyword}>
        <div className={styles.title_keyword}>
          <h1 className={styles.modal_title}>New Keyword</h1>
        </div>
        <div className={styles.form_keyword}>
          <form className={styles.form_input} onSubmit={handleSubmit(onSubmit)}>
            <input
              className={styles.input_keyword}
              type="text"
              placeholder="Project Name*"
              {...register("title", { required: "title is required" })}
            />
            <input
              className={styles.input_keyword}
              type={"text"}
              placeholder="Keyword*"
              {...register("name", { required: "name is required" })}
            />
            <div className={styles.new_image}>
              <input
                className={styles.input_zone}
                type="file"
                accept="image/*"
                draggable="true"
                {...register("image", { required: "file image is required" })}
              />
            </div>
            <div className={styles.container_button}>
              <Link
                to={"#"}
                onClick={closeModal}
                className={styles.cancel_button}
              >
                Cancel
              </Link>
                <input
                  className={styles.add_button}
                  type={"submit"}
                  value={"Add"}
                />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
