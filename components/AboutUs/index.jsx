import React from "react";
import CustomList from "../CustomList";
import styles from "./AboutUs.module.scss";
import ButtonBlue from "../ButtonBlue";
import { useTrans } from "../../hooks/useTrans";
import { useOpenHandlers } from "../../hooks/useOpenHandlers";
import PaymentForm from "../PaymentForm";

export default function AboutUs() {

  const { open, onOpen, onClose } = useOpenHandlers(false);

  const { trans } = useTrans();

  return (
    <>
      <PaymentForm open={open} onClose={onClose} />
      <div id="minutiae">
        <div className={styles["aboutUs_container"]}>
          <h1 className={styles["aboutUs_title"]}>
            {trans('aboutUs_title')}
            <span>{trans('aboutUs_title_2')}</span>
          </h1>

          <div className={styles["aboutUs_blocks"]}>
            <div className={styles["aboutUs_block"]}>
              <div className={styles["aboutUs_block_img"]}>
                <img src="images/vestInWork/img_1.png" alt="" />
              </div>
              <h2 className={styles["aboutUs_block_h2"]}>
                {trans('armored_plate')}
              </h2>
              <p className={styles["aboutUs_block_p"]}>
                {trans('armored_plate_desc')}
              </p>
            </div>
            <div className={styles["aboutUs_block"]}>
              <div className={styles["aboutUs_block_img"]}>
                <img src="images/vestInWork/img_2.png" alt="" />
              </div>
              <h2 className={styles["aboutUs_block_h2"]}>
                {trans('splinter_proof')}
              </h2>
              <p className={styles["aboutUs_block_p"]}>
                {trans('splinter_proof_desc')}
              </p>
            </div>
            <div className={styles["aboutUs_block"]}>
              <div className={styles["aboutUs_block_img"]}>
                <img src="images/vestInWork/img_3.png" alt="" />
              </div>
              <h2 className={styles["aboutUs_block_h2"]}>
                {trans('internal_coating')}
              </h2>
              <p className={styles["aboutUs_block_p"]}>
                {trans('internal_coating_desc')}
              </p>
            </div>
            <div className={styles["aboutUs_block"]}>
              <div className={styles["aboutUs_block_img"]}>
                <img src="images/vestInWork/img_4.png" alt="" />
              </div>
              <h2 className={styles["aboutUs_block_h2"]}>
                {trans('plate_carrier')}
              </h2>
              <p className={styles["aboutUs_block_p"]}>
                {trans('plate_carrier_desc')}
              </p>
            </div>
            <div className={styles["aboutUs_block"]}>
              <div className={styles["aboutUs_block_img"]}>
                <img src="images/vestInWork/img_5.png" alt="" />
              </div>
              <h2 className={styles["aboutUs_block_h2"]}>
                {trans('testing_of')}
              </h2>
              <p className={styles["aboutUs_block_p"]}>
                {trans('testing_of_desc')}
              </p>
            </div>
            <div className={styles["aboutUs_block"]}>
              <div className={styles["aboutUs_block_img"]}>
                <img src="images/vestInWork/img_6.png" alt="" />
              </div>
              <h2 className={styles["aboutUs_block_h2"]}>
                {trans('system_of_urgent')}
              </h2>
              <p className={styles["aboutUs_block_p"]}>
                {trans('system_of_urgent_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
