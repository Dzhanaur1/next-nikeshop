import { setUnvivble } from "@/redux/slices/popupSlice";
import { postFeedack } from "@/services/feedback";
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const PopupForm = ({ products }) => {
  const popupVisible = useSelector((state) => state.popupSlice);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (clientData, event) => {
    const data = {
      clientData,
      products,
    };
    // console.log(JSON.stringify(data));
    postFeedack(data);
    event.target.reset();
  };
  return (
    <div
      className={popupVisible ? "popup__wrapper visible " : "popup__wrapper"}
    >
      <form className="popup form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__inner">
          <div className="form__item">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              name="name"
              id="name"
              {...register("name", { required: true })}
            />
            {errors?.name && <span>{errors?.name.message}</span>}
          </div>

          <div className="form__item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("email", {
                required: "Поле Email обязательно",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Неверный формат Email",
                },
              })}
            />
            {errors?.email && <span>{errors?.email.message}</span>}
          </div>

          <div className="form__item">
            <label htmlFor="message">Сообщение</label>
            <textarea
              name="message"
              id="message"
              {...register("message", {
                required: "Поле Сообщение обязательно",
              })}
            />
            {errors?.message && <span>{errors?.message.message}</span>}
          </div>
          <div className="form__btns">
            <button
              onClick={() => dispatch(setUnvivble())}
              className="cancel--btn btn--light button "
            >
              Назад
            </button>
            <button className="button btn--light" type="submit">
              Отправить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PopupForm;
