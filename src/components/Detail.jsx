import React from "react";
import "../styles/Detail.scss";
function Detail(props) {
  const { AddForm, Grid, dato } = props;

  const { id } = dato;
  return (
    <div className="detail">
      <AddForm id={id}></AddForm>
      <Grid id={id}></Grid>
    </div>
  );
}

export default Detail;
