import React from "react";
import styled from "styled-components";

const Slotbox = styled.div`
  height: 100%;
  .slot-box {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    margin-top: 13px;
    border-radius: 14px;
    box-shadow: 0px 2px 4px rgba(147, 204, 181, 1);
    .title {
      margin-left: 24px;
      font-size: 16px;
    }
  }
`;

const SlotBox = function SlotBox(props: {
  title?: string;
  children: JSX.Element;
}): JSX.Element {
  return (
    <Slotbox>
      <div className="slot-box">
        <p className="title">{props.title}</p>
        {props.children}
      </div>
    </Slotbox>
  );
};

export default SlotBox;
