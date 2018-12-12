import React from "react";
import HomeContent from "./shared/HomeContent";
// import HomeNav from "./shared/HomeNav";

const HomeItem = (props) => (
  <div className="box">
    <HomeContent limit={150} {...props}>
      {/* <HomeNav
        date={props.date}
        status={props.status}
        to={{
          pathname: `/home/${props.path}`,
          state: { props }
        }}
      /> */}
    </HomeContent>
  </div>
);

export default HomeItem;
