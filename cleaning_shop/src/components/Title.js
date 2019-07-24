import React, {Component} from 'react';
import styled from 'styled-components';
import '../App.css';

export default function Title({title}){
  return(
  <div className="row myRow">
    <div className="col-10 mx-auto my-2 text-center  myCol">
      <h1 className="font-weight-bold myTitle text-title texDeepBlue">{title}</h1>
    </div>
  </div>
);
}
