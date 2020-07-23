import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header";
import VisibilitySensor from "react-visibility-sensor";
import { FlowerSpinner } from "react-epic-spinners";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const HomeLayout = (props) => {
  const [loading, setLoading] = React.useState(true);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) setTimeout(() => setLoading(false), 1500);
  };
  return (
    <div>
      {loading ? (
        <div>
          <Loading></Loading>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <VisibilitySensor onChange={onVisibilityChange}>
              <FlowerSpinner color="#ffffff" size={70} />
            </VisibilitySensor>
          </div>
        </div>
      ) : (
        <div>
          <Fragment>
            <Header />
            {props.children}
            <Footer />
          </Fragment>
        </div>
      )}
    </div>
  );
};

const HomeTemplate = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        );
      }}
    />
  );
};

export default HomeTemplate;
