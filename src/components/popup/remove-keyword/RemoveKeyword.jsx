import { React, useRef } from "react";
import styles from "./RemoveKeyword.module.css";
import { useForm } from "react-hook-form";
import client from "../../../api/client";
import { Link, useNavigate } from "react-router-dom";

export default function RemoveKeyword({ allMonitor }) {
  const ref = useRef();
  const closeModal = () => ref.current.close();
  const nav = useNavigate();
  

  // handle form signup
  const { handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    client
      .delete(
        `api/usermonitor/delete/${allMonitor.profile_id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        nav("/successremove");
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data);
      });
  };

  return (
    <div className={styles.modal_remove}>
      <div className={styles.remove_keyword}>
        <div className={styles.wrapper_title}>
          <h1 className={styles.title_keyword}>Keyword</h1>
        </div>
        <div className={styles.wrapper_desc}>
          <p className={styles.desc}>
            {`Apakah Anda yakin ingin menghapus keyword ${allMonitor.profile} ?`}
          </p>
        </div>
        <div className={styles.buttons}>
          <Link to={"#"} onClick={closeModal} className={styles.cancel_button}>
            Cancel
          </Link>
          <Link
            to={"/monitoring"}
            onClick={handleSubmit(onSubmit)}
            className={styles.remove_button}
          >
            Remove
          </Link>
        </div>
      </div>
    </div>
  );
}
