import React from "react";

function Hello(props) {
  return (
    <div>
      안녕하세요. 저는 {props.name}입니다. 내 나이는 {props.age} 입니다
    </div>
  );
}
Hello.defaultProps = {
  name: "이름없음"
};
export default Hello;
