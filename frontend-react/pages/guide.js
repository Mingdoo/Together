import React from "react";
import Footer from "../components/footer.js";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomLi from "../components/guide/customLi";

function guide() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.3,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        },
      }}
    >
      <div className="flex items-center justify-center mt-5 text-4xl text-center font-extralight hover:font-normal">
        <Link href="/">
          <motion.img
            src="images/svg/Together.svg"
            alt="Together λ‘κ³ "
            className="w-24 text-center hover:cursor-pointer"
            whileHover={{ scale: 1.2 }}
          ></motion.img>
        </Link>
      </div>
      <div className="w-3/5 px-10 py-10 guide-container min-h-fit">
        <div id="guide" className="">
          <p tabIndex="0" className="">
            <strong className="text-3xl">π κ°μ΄λ</strong>
          </p>
          <p className="flex flex-col my-10">
            <img
              src="images/RandomImage.jpg"
              alt="μ΄λ―Έμ§"
              className="mx-auto rounded-3xl"
            ></img>
          </p>
          <p tabIndex="0" className="mt-5">
            Togetherλ μκ° λ° μ²­κ° μ₯μ μΈλ€μ μν νμνμ νλ«νΌμλλ€.
            λκ΅¬λ μ μ²΄μ  μ μ½ μμ΄ μ¬μ© ν  μ μλ νμνμλ₯Ό λͺ©μ μΌλ‘ κ΅¬νλ
            Togetherλ μ¬λ¬λΆλ€μκ² μλ€λ₯Έ μ κ·Όμ±μ μ μν  κ²μλλ€. νΉμ μ ν
            ν΅νμ€μ ν΅μ μ΄ λ¨Ήν΅μ΄ λμ΄ ν λ§λλ λ€λ¦¬μ§ μμλ μ  μμΌμ κ°μ?
            ν μΉ μλ λ³΄μ΄μ§ μλ μ΄λ  μμμ μ²μ ν€μ³λκ° κ²½ν μμΌμ κ°μ?
            Togetherλ μ΄λ° μ λ‘μ¬ν­μ ν΄κ²°νκΈ° μν΄ νμ΄λ¬μ΅λλ€. STTμ TTSκΈ°λ₯
            μ κ³΅ λ° μκ° μ₯μ μΈμ μν UI μ΅μν, κ²½λνλ μ±μΌλ‘ λμ μ κ·Όμ±μ
            ν λλ‘ κ΅¬νλμμ΅λλ€.
          </p>
          <br></br>
          <p tabIndex="0" className="">
            Togetherλ μκ° μ΄μμλ₯Ό μν κ°κ°μ κ΅¬λ³λλ μ»¬λ¬ν€μ μ¬μ©νμ¬
            μκ°μ  ν¨κ³Όλ₯Ό μ¦μ§νμμ΅λλ€. λν, μκ°μ  ν¨κ³Όλ₯Ό λΆκ°νκΈ° μν΄
            μ λλ©μ΄μ ν¨κ³Όλ‘ μ¬μ©μκ° μ΄λ€ μ°½μ ν¬μ»€μ€ νκ³ μλμ§λ₯Ό μ¦κ°μ μΌλ‘
            λ³΄μ¬μ§κ² κ΅¬νλμμ΅λλ€. Togetherλ μ΄λ° ν¨κ³Όμ μΈ μ κ·Όμ±μ λ°νμΌλ‘
            μ¬μ©μλ‘ νμ¬κΈ μ΅κ³ μ κ²½νμ μ μ¬ν©λλ€.
          </p>
          <br></br>
          <div tabIndex="0" className="hover:cursor-zoom-in">
            <strong className="hover:text-slate-700 ">
              μ λ§Ή μκ° μ₯μ μΈμ κ²½μ°, κΈ°μ‘΄μ μ¬μ©νλ TTS λ¦¬λλ₯Ό μ¬μ©νμκ±°λ,
              Togetherμμ μ κ³΅νλ TTS κΈ°λ₯μ μ¬μ©νμ€ μ μμ΅λλ€. TTS λ¦¬λμ
              λν μμΈν μ λ³΄λ μλ TTS λ¦¬λ λ€μ΄λ‘λλ₯Ό μ°Έκ³ νμ¬ μ¬μ©νμκΈ°
              λ°λλλ€.
            </strong>
          </div>
          <br></br>
          <p tabIndex="0">
            μ²­κ° μ₯μ μΈμ κ²½μ°, Togetherκ° μ κ³΅νλ STTκΈ°λ₯μ μ¬μ©νμ¬ λ€λ₯Έ νμ
            μ°Έμ¬μκ° νλ μμ±μ λ§νμ  ννμ μλ§μΌλ‘ μ κ³΅λ°μΌμ€ μ μμ΅λλ€.
          </p>

          <ul className="mx-5 my-5" aria-expanded="false">
            <CustomLi
              text="STT(μμ±μΈμ μλ§) κΈ°λ₯μ μ¬μ©νλ €λ©΄ μ΄λ»κ² ν΄μΌ νμ£ ?"
              description="μμ±μΈμ μλ§ κΈ°λ₯μ Togetherμμ κΈ°λ³ΈμΌλ‘ μ κ³΅νλ κΈ°λ₯μλλ€. νμ νμ λ΄μ μλμΌλ‘ μμ±λλ λ§νμ μΌλ‘ μλ§μ΄ μ κ³΅λλ©°, μκ° μ₯μ μΈμ μνν μν΅μ μν΄ μ±ν λ΄μ©μ΄ μμ±μΌλ‘ μλ λ³νλ  μ μμ΅λλ€."
              key="1"
            ></CustomLi>
            <CustomLi
              text="κΈ°μ‘΄ μ€ν¬λ¦° λ¦¬λλ₯Ό μ¬μ©νκ³  μΆμ΄μ. μ΄λ»κ² ν΄μΌ νμ£ ?"
              key="2"
              description={[
                "κΈ°μ‘΄μ μ¬μ©νλ μ€ν¬λ¦° λ¦¬λκ° μμΌμ  κ²½μ°μλ μ¬μ©νμλ μ€ν¬λ¦° λ¦¬λλ₯Ό μ¬μ©νμλ©΄ λ©λλ€. Togetherμμ μ κ³΅νλ TTSκΈ°λ₯μ μ¬μ©νκ³  μΆμΌμλ©΄, ν κΈμ ν΅ν΄ μμ±ν©μ± κΈ°λ₯μ μ¬μ©νμ€ μ μμ΅λλ€. λν, λ€λ₯Έ μ€ν¬λ¦° λ¦¬λμ μ¬μ©μ΄ νμν κ²½μ°, λ€μκ³Ό κ°μ μ μ°¨λ₯Ό λ°λΌ μ£ΌμκΈ° λ°λλλ€.",
                <br></br>,
                "1. ",
                <a href="http://nvaccess.org" className="text-red-500">
                  Nvaccess
                </a>,
                "μ μ μνμ¬ Download λ§ν¬λ₯Ό ν΄λ¦­νμ¬ NVDAλ₯Ό λ€μ΄λ‘λ λ°μ΅λλ€.",
                <br></br>,
                <img
                  src="guide/download.png"
                  alt="λ€μ΄λ‘λ λ²νΌ"
                  className="mb-5"
                ></img>,
                <img
                  src="guide/NVDAinstall.png"
                  alt="μ»΄ν¨ν°μ NVDA μ€μΉ"
                ></img>,
                <br></br>,
                "2. λ€μ΄λ‘λ λ°μ νμΌμ μ€μΉν©λλ€.",
                <br></br>,
                "3. λ°ννλ©΄μ μλ NVDAλ₯Ό μ€ννλ©΄ TTS κΈ°λ₯μ μ¬μ©νμ€ μ μμ΅λλ€.",
              ]}
            ></CustomLi>
          </ul>
          <div className="flex justify-center">
            <Link href="/" passHref={false}>
              <motion.button
                className="btn rounded-full bg-[#bebbb1] px-5 py-3 hover:font-bold"
                whileHover={{ scale: 1.2 }}
              >
                μ μμμ΄μ!
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default guide;
