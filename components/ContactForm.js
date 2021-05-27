import React, { useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import axios from "axios";

function ContactForm({ setMessage }) {
  const [state, handleSubmit] = useForm("xzbyevqk");
  const statusRef = useRef();

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setMessage(
        "お問い合わせ頂きありがとうございます。1日以内に返信致します。"
      );
      form.reset();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xzbyevqk",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <form
      onSubmit={(e) => handleOnSubmit(e)}
      action={process.env.FORMSPREE__ACTION}
      method="POST"
      className="text-[#fafafa] w-3/4 sm:w-auto sm:col-span-4"
    >
      <p ref={statusRef}></p>

      <label htmlFor="name" className="block">
        お名前：
      </label>
      <input
        id="name"
        type="name"
        name="name"
        className="focus:border-mainP focus:border focus:border-solid w-full rounded-md px-3 mb-3 text-[#333]"
        required
      />

      <label htmlFor="email" className="block">
        メールアドレス：
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="focus:border-mainP focus:border focus:border-solid w-full rounded-md px-3 mb-3 text-[#333]"
        required
      />

      <label htmlFor="message" className="block">
        お問い合わせ内容：
      </label>
      <textarea
        id="message"
        name="message"
        className="focus:border-mainP focus:border focus:border-solid w-full h-40 lg:h-56 rounded-md px-3 py-1 mb-3 text-[#333] resize-none"
        required
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-[#e43f5a] w-full py-1 rounded-md font-jp"
      >
        送信
      </button>
    </form>
  );
}

export default ContactForm;
