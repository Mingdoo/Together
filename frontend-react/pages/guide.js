import React from "react";
import Footer from "../components/footer.js";
import Image from "next/image";
import RandomImage from "../public/images/RandomImage.jpg";
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
      <div className="flex text-center justify-center items-center mt-5 text-4xl font-extralight hover:font-normal">
        <Link href="/">
          <motion.img
            src="images/svg/Together.svg"
            alt="Together 로고"
            className="w-24 text-center hover:cursor-pointer"
            whileHover={{ scale: 1.2 }}
          ></motion.img>
        </Link>
      </div>
      <div className="guide-container px-10 py-10 w-3/5 min-h-fit">
        <div id="guide" className="">
          <p className="">
            <strong className="text-3xl">📖 가이드</strong>
          </p>
          <p className="my-10 flex flex-col">
            <Image
              src={RandomImage}
              alt="이미지"
              className="mx-auto rounded-3xl"
            ></Image>
          </p>
          <p className="mt-5">
            Together는 시각 및 청각 장애인들을 위한 화상회의 플랫폼입니다.
            누구나 신체적 제약 없이 사용 할 수 있는 화상회의를 목적으로 구현된
            Together는 여러분들에게 색다른 접근성을 제시할 것입니다. 혹시 전화
            통화중에 통신이 먹통이 되어 한 마디도 들리지 않았던 적 있으신가요?
            한 치 앞도 보이지 않는 어둠 속에서 숲을 헤쳐나간 경험 있으신가요?
            Together는 이런 애로사항을 해결하기 위해 태어났습니다. STT와 TTS기능
            제공 및 시각 장애인을 위한 UI 최소화, 경량화된 앱으로 높은 접근성을
            토대로 구현되었습니다.
          </p>
          <br></br>
          <p className="">
            Together는 색각 이상자를 위한 각각의 구별되는 컬러톤을 사용하여
            시각적 효과를 증진하였습니다. 또한, 시각적 효과를 부각하기 위해
            애니메이션 효과로 사용자가 어떤 창에 포커스 하고있는지를 즉각적으로
            보여지게 구현되었습니다. Together는 이런 효과적인 접근성을 바탕으로
            사용자로 하여금 최고의 경험을 선사합니다.
          </p>
          <br></br>
          <div className="hover:cursor-zoom-in">
            <strong className="hover:text-slate-700 ">
              전맹 시각 장애인의 경우, 기존에 사용하는 TTS 리더를 사용하시거나,
              Together에서 제공하는 TTS 기능을 사용하실 수 있습니다. TTS 리더에
              대한 자세한 정보는 이 단락을 클릭하거나, 아래 TTS 리더 다운로드를
              통해 사용하시기 바랍니다.
            </strong>
          </div>
          <br></br>
          <p>
            청각 장애인의 경우, Together가 제공하는 STT기능을 사용하여 다른 회의
            참여자가 하는 음성을 말풍선 형태의 자막으로 제공받으실 수 있습니다.
          </p>

          <ul className="my-5 mx-5">
            <CustomLi
              text="STT(음성인식 자막) 기능을 사용하려면 어떻게 해야 하죠?"
              description="음성인식 자막 기능은 Together에서 기본으로 제공하는 기능입니다. 화상 회의 내에 자동으로 생성되는 말풍선으로 자막이 제공되며, 말풍선 기능의 사용이 필요하지 않은 경우, 토글 버튼을 통해 자막 기능을 끌 수 있습니다."
              key="1"
            ></CustomLi>
            <CustomLi
              text="기존 스크린 리더를 사용하고 싶어요. 어떻게 해야 하죠?"
              key="2"
              description={[
                "기존에 사용하던 스크린 리더가 있으신 경우에는 사용하시는 스크린 리더를 사용하시면 됩니다. Together에서 제공하는 TTS기능을 사용하고 싶으시면, 토글을 통해 음성합성 기능을 사용하실 수 있습니다. 또한, 다른 스크린 리더의 사용이 필요한 경우, 다음과 같은 절차를 따라 주시기 바랍니다.",
                <br></br>,
                "1. ",
                <a href="http://nvaccess.org" className="text-red-500">
                  Nvaccess
                </a>,
                "에 접속하여 Download 링크를 클릭하여 NVDA를 다운로드 받습니다.",
                <br></br>,
                <img
                  src="guide/download.png"
                  alt="다운로드 버튼"
                  className="mb-5"
                ></img>,
                <img
                  src="guide/NVDAinstall.png"
                  alt="컴퓨터에 NVDA 설치"
                ></img>,
                <br></br>,
                "2. 다운로드 받은 파일을 설치합니다.",
                <br></br>,
                "3. 바탕화면에 있는 NVDA를 실행하면 TTS 기능을 사용하실 수 있습니다.",
              ]}
            ></CustomLi>
          </ul>
          <div className="flex justify-center">
            <Link href="/" passHref={false}>
              <motion.button
                className="btn rounded-full bg-[#bebbb1] px-5 py-3 hover:font-bold"
                whileHover={{ scale: 1.2 }}
              >
                잘 알았어요!
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
