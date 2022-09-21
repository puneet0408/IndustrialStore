import React from "react";
import "./cardModel.css";
function CardModel(props) {
  console.log(props);
  return (
    <div
      className="cardModel"
      onClick={() => (props.onClose ? props.onClose() : "")}
    >
      <div className="modalbody" onClick={(e) => e.stopPropagation()}>
        <img className="modelBodyImg" src={props.cardInfo.Img} />
        <div className="model_btn" >
          <button className="readMore" >Read More</button>
          <button className="Query" >ask for Qurey</button>
        </div>
        <div className="modelDetails" >
        <h2> {props.cardInfo.Machine} </h2>
        <p>
          {" "}
          <span className="heading">{props.cardInfo.material}</span>
          {props.cardInfo.materialName}
        </p>
        <p>
          {" "}
          <span className="heading">{props.cardInfo.Grade}</span>
          {props.cardInfo.GradeData}
        </p>
        <p>
          {" "}
          <span className="heading">{props.cardInfo.Hardness}</span>
          {props.cardInfo.HardnessData}
        </p>
        <p>
          {" "}
          <span className="heading">{props.cardInfo.TensileStrength}</span>
          {props.cardInfo.TensileStrengthData}
        </p>
        <p>
          {" "}
          <span className="heading">{props.cardInfo.Toterance}</span>
          {props.cardInfo.ToteranceData}
        </p>
        <p>
          {" "}
          <span className="heading">{props.cardInfo.corrosionResistance}</span>
          {props.cardInfo.corrosionResistanceData}
        </p>
        <p>
          {" "}
          <span className="heading">{props.cardInfo.RustProf}</span>
          {props.cardInfo.RustData}
        </p>
        <p>
          {" "}
          <span className="heading">{props.cardInfo.PowerSource}</span>
          {props.cardInfo.powerSourceData}
        </p>
        <p>
          {" "}
          <span className="heading">{props.cardInfo.frequency}</span>
          {props.cardInfo.FrequencyData}
        </p>
        <p>
          {" "}
          <span className="heading">{props.cardInfo.ServiceType}</span>
          {props.cardInfo.ServiceData}
        </p>
        <p>
          {" "}
          <span className="heading">{props.cardInfo.Feature}</span>
          {props.cardInfo.FeatureData}
        </p>
        <p>
          {" "}
          <span className="heading">{props.cardInfo.Voltage}</span>
          {props.cardInfo.voltageData}
        </p>
        <p>
          {" "}
          <span className="heading">{props.cardInfo.SurfaceFinishing}</span>
          {props.cardInfo.SurfaceData}
        </p>
        </div>
      </div>
    </div>
  );
}
export default CardModel;
