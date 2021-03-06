import React, { memo } from "react";
import Template5BackStyle from "./template5Back.style";

const Template5Back = memo(({ size }) => {
  return (
    <Template5BackStyle>
      <dir className={`${size} cardBack`}>
        <div className={`${size}-rogo`}>
          <div className={`${size}-circle`}>D</div>
          <div className={`${size}-circle`}>G</div>
          <div className={`${size}-circle`}>S</div>
          <div className={`${size}-circle`}>W</div>
        </div>
        <div className={`${size}-info`}>
          <div className={`${size}-important`}>
            <div className={`${size}-name`}>강성훈</div>
            <div className="career">Developer</div>
          </div>
          <div className={`${size}-other`}>
            <div className={`${size}-number`}>
              M. <span>01022372925</span>
            </div>
            <div className={`${size}-email`}>
              E. <span>yolly050101@naver.com</span>
            </div>
            <div className={`${size}-github`}>
              G. <span>github.com/ksh5324</span>
            </div>
          </div>
        </div>
      </dir>
    </Template5BackStyle>
  );
});

export default Template5Back;
