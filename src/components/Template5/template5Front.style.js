import styled from "styled-components";

const Template5Style = styled.div`
  .normal {
    width: 616px;
    height: 351px;
    background: rgba(121, 118, 113, 1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .large {
    width: 1050px;
    height: 598px;
    background: rgba(121, 118, 113, 1);
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 50px;
  }

  .normal-logo {
    width: 233px;
    height: 103px;

    position: relative;

    .normal-circle {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: white;

      display: flex;
      justify-content: center;
      align-items: center;

      font-weight: 600;
      font-size: 31px;
      color: #797671;

      position: absolute;
    }

    .normal-circle:nth-child(1) {
      top: 0;
      left: 0;
    }
    .normal-circle:nth-child(2) {
      bottom: 9px;
      left: 57px;
    }
    .normal-circle:nth-child(3) {
      top: 6px;
      left: 117px;
    }
    .normal-circle:nth-child(4) {
      bottom: 0;
      right: 0;
    }
  }

  .large-logo {
    width: 320px;
    height: 153px;

    position: relative;

    .large-circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: white;

      display: flex;
      justify-content: center;
      align-items: center;

      font-weight: 600;
      font-size: 40px;
      color: #797671;

      position: absolute;
    }

    .large-circle:nth-child(1) {
      top: 0;
      left: 0;
    }
    .large-circle:nth-child(2) {
      bottom: 9px;
      left: 74px;
    }
    .large-circle:nth-child(3) {
      top: 6px;
      left: 147px;
    }
    .large-circle:nth-child(4) {
      bottom: 0;
      right: 0;
    }
  }
`;

export default Template5Style;
