import React, { Fragment } from "react";
import PropTypes from "prop-types";

const PageTitle = props => {
  const { title } = props;
  return (
    <Fragment>
      <center>
        <h4>{title}</h4>
      </center>
    </Fragment>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

PageTitle.defaultProps = { 
  title: ''
} 

export default PageTitle;
