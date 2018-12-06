import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Router from "./layout/Router";
import Site from "./layout/Site";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";

const Layout = ({ children }) => (
  <Site>
    <Helmet
      title="Nichola Ward Portfolio"
      meta={[
        {
          name: "description",
          content: "Nichola Ward's CV site to show off my work"
        },
        {
          name: "keywords",
          content: "resume, blog, porfolio"
        }
      ]}
      script={[
        { src: "https://use.fontawesome.com/releases/v5.0.4/js/all.js" }
      ]}
      link={[
        {
          rel: "stylesheet",
          href:
            "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        }
      ]}
    />
    <Header />
    <Content>{<Router />}</Content>
    <Footer />
  </Site>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
