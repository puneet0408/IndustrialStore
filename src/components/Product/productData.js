import PricisionMuch from "../../images/machined-component-250x250.jpg";
import PregressivePress from "../../images/progressive-press-tool-250x250.jpg";
import AutomaticSpm from "../../images/automatic-spm-machine-250x250.jpg";
import vmc from "../../images/vmc-machine-job-work-250x250.jpg";
import axle from "../../images/automotive-axle-shafts-250x250.jpg";
import Iron from "../../images/cast-iron-jig-fixture-250x250.jpg";
import Pressed from "../../images/press-component-250x250.jpg";
import Machining from "../../images/Machining-Jig-Fixture.jpg";
import Clamp from "../../images/clamp-weld-fixture.jpg";
import hydraulic from "../../images/Hudraulic-Clamping-JIg-Fixture.jpg";
import Cnc from "../../images/cnc-machine-fixture.jpg";
import Automated from "../../images/Automated-checking-fixture.jpg";
import Welding from "../../images/Welding-jig-fixture-500x500.jpg";
import PrecisionTurn from "../../images/precision-turned-components.jpg";
import CncPrecision from "../../images/CNC-Precision-turned-component.jpg";
import CncTurned from "../../images/cnc-turned-components-250x250.jpg";
import CncMuch from "../../images/cnc-machining-component.jpg";
import VmcMachine from "../../images/VMC-precision-machined-component.jpg";
import CncTurnMach from "../../images/cnc-turn-mill-machined-components.jpg";
import PunchPress from "../../images/punch-press-tool.jpg";
import precisionPress from "../../images/precision-press-tool.jpg";

const data = [
  {
    key: 1,
    ProductName: "Jig Fixture",
    Img: Iron,
    Machine: "Cast-iron-jig-fixture",
    piece: "12000 / piece",
    material: " material :",
    materialName: "Cast iron",
    Hardness: " Hardness : ",
    HardnessData: "20-50 HRC",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "100-300 MPa",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
  {
    key: 2,
    ProductName: "Jig Fixture",
    Img: Machining,
    Machine: "Machining Jig Fixture",
    piece: "500 / piece",
    material: " material :",
    materialName: "Cast iron",
    Hardness: " Hardness : ",
    HardnessData: "20-50 HRC",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "100-300 MPa",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
  {
    key: 3,
    ProductName: "Jig Fixture",
    Img: Clamp,
    Machine: "Clamp welding Jig Fixture",
    piece: "2Lakhs / piece",
    material: " material :",
    materialName: "Stainless Steel",
    Grade: " Grade : ",
    GradeData: "SS304",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
  {
    key: 4,
    ProductName: "Jig Fixture",
    Img: hydraulic,
    Machine: "Hydraulic Clamping Jig Fixture",
    piece: "2Lakhs / piece",
    material: " material :",
    materialName: "Stainless Steel",
    Grade: " Grade : ",
    GradeData: "SS304",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
  {
    key: 5,
    ProductName: "Jig Fixture",
    Img: Cnc,
    Machine: "CNC Machining Jig Fixture ",
    piece: "2Lakhs /Unit",
    material: " material :",
    materialName: "Stainless Steel",
    Grade: " Grade : ",
    GradeData: "SS304",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
    Hardness: " Hardness : ",
    HardnessData: "20-80 HRC",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
  {
    key: 6,
    ProductName: "Jig Fixture",
    Img: Automated,
    Machine: "Automated Checking Jig Fixture",
    piece: "2Lakhs /Unit",
    material: " material :",
    materialName: "Stainless Steel",
    Grade: " Grade : ",
    GradeData: "SS304",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
    Hardness: " Hardness : ",
    HardnessData: "20-80 HRC",
  },
  {
    key: 7,
    ProductName: "Jig Fixture",
    Img: Welding,
    Machine: "Welding Jig Fixture ",
    piece: "2Lakhs /Unit",
    material: " material :",
    materialName: "Stainless Steel",
    Grade: " Grade : ",
    GradeData: "SS304",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
    Hardness: " Hardness : ",
    HardnessData: "20-80 HRC",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
  },
  {
    key: 8,
    ProductName: "Turned Components",
    Img: CncTurned,
    Machine: "CNC Turned Components",
    piece: "200 / piece",
    material: " material :",
    materialName: "StainLess Steel",
    Hardness: " Hardness : ",
    HardnessData: "20-80 HRC",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
    corrosionResistance: "Corrosion Resistance : ",
    corrosionResistanceData: "yes",
    Grade: " Grade : ",
    GradeData: "SS304",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
  {
    key: 9,
    ProductName: "Turned Components",
    Img: PrecisionTurn,
    Machine: "Precision Turned Components",
    piece: "200 / piece",
    material: " material :",
    materialName: "StainLess Steel",
    Hardness: " Hardness : ",
    HardnessData: "20-80 HRC",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
    corrosionResistance: "Corrosion Resistance : ",
    corrosionResistanceData: "yes",
    Grade: " Grade : ",
    GradeData: "SS304",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
  {
    key: 10,
    ProductName: "Turned Components",
    Img: CncPrecision,
    Machine: " CNC Precision Turned Components",
    piece: "200 / piece",
    material: " material :",
    materialName: "StainLess Steel",
    Hardness: " Hardness : ",
    HardnessData: "20-80 HRC",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
    corrosionResistance: "Corrosion Resistance : ",
    corrosionResistanceData: "yes",
    Grade: " Grade : ",
    GradeData: "SS304",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
  {
    key: 11,
    Img: PricisionMuch,
    ProductName: "Machine Components",
    Machine: "Precision Machined Components",
    piece: "200 / piece",
    material: " material :",
    materialName: "StainLess Steel",
    Hardness: " Hardness : ",
    HardnessData: "20-80 HRC",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
    corrosionResistance: "Corrosion Resistance : ",
    corrosionResistanceData: "yes",
    Grade: " Grade : ",
    GradeData: "SS304",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
  {
    key: 12,
    Img: CncMuch,
    ProductName: "Machine Components",
    Machine: "CNC Machined Components",
    piece: "200 / piece",
    material: " material :",
    materialName: "StainLess Steel",
    Hardness: " Hardness : ",
    HardnessData: "20-80 HRC",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
    corrosionResistance: "Corrosion Resistance : ",
    corrosionResistanceData: "yes",
    Grade: " Grade : ",
    GradeData: "SS304",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
  {
    key: 13,
    Img: VmcMachine,
    ProductName: "Machine Components",
    Machine: "VMC Precision Machined Components",
    piece: "200 / piece",
    material: " material :",
    materialName: "StainLess Steel",
    Hardness: " Hardness : ",
    HardnessData: "20-80 HRC",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
    corrosionResistance: "Corrosion Resistance : ",
    corrosionResistanceData: "yes",
    Grade: " Grade : ",
    GradeData: "SS304",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
  {
    key: 14,
    Img: CncTurnMach,
    ProductName: "Machine Components",
    Machine: "CNC Turn Mill Machined Components",
    piece: "200 / piece",
    material: " material :",
    materialName: "StainLess Steel",
    Hardness: " Hardness : ",
    HardnessData: "20-80 HRC",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
    corrosionResistance: "Corrosion Resistance : ",
    corrosionResistanceData: "yes",
    Grade: " Grade : ",
    GradeData: "SS304",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
  {
    key: 15,
    Img: PregressivePress,
    ProductName: "Press Tool",
    Machine: "Progressive Press Tool",
    piece: "1.5 Lakhs /unit",
    material: " material :",
    materialName: "StainLess Steel",
    Hardness: " Hardness : ",
    HardnessData: "20-80 HRC",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
    RustProf: "Rust proof : ",
    RustData: "yes",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
  {
    key: 16,
    Img: PunchPress,
    ProductName: "Press Tool",
    Machine: "Punch Press Tool",
    piece: "1.5 Lakhs /unit",
    material: " material :",
    materialName: "StainLess Steel",
    Hardness: " Hardness : ",
    HardnessData: "20-80 HRC",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
  {
    key: 17,
    Img: precisionPress,
    ProductName: "Press Tool",
    Machine: "Precision Press Tool",
    piece: "1.5 Lakhs /unit",
    material: " material :",
    materialName: "StainLess Steel",
    Hardness: " Hardness : ",
    HardnessData: "20-80 HRC",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
    Grade: " Grade : ",
    GradeData: "SS304",
  },
  {
    key: 18,
    Img: AutomaticSpm,
    ProductName: "SPM Machine",
    Machine: "Automatic SPM Machine",
    piece: "3 Lakhs /unit",
    material: " material :",
    materialName: "Mild Steel",
    Voltage: " Voltage : ",
    voltageData: "380V",
    PowerSource: "Power Source : ",
    PoweSourceData: "Electric",
    frequency: "Frequency : ",
    FrequencyData: "50-60Hz",
  },
  {
    key: 19,
    Img: vmc,
    ProductName: "VMC Machine",
    Machine: "VMC Machine Job Work",
    piece: "400 / hour",
    material: " material :",
    materialName: "Stainless Steel",
    ServiceMode: " Service Mode : ",
    Service: "offline",
    Feature: "Feature : ",
    FeatureData: "Timely execution",
    ServiceType: "Service Type : ",
    ServiceData: "VMC Machine Job Work",
  },
  {
    key: 20,
    Img: axle,
    ProductName: "Axle Shafts",
    Machine: " Automotive Axle Shaft",
    piece: "1000 / piece",
    material: " material :",
    materialName: "Stainless Steel",
    Hardness: " Hardness : ",
    HardnessData: "20-80 HRC",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
  {
    key: 21,
    Img: Pressed,
    ProductName: "Pressed Components",
    Machine: "Precision Pressed Components",
    piece: "100 / piece",
    material: " material :",
    materialName: "Mild Steel",
    SurfaceFinishing: "Surface Finishing : ",
    SurfaceData: "Zinc plated",
    TensileStrength: "Tensile Strength : ",
    TensileStrengthData: "400-600 MPa",
    Toterance: "Toterence : ",
    ToteranceData: "+/-0.01mm",
  },
];
export default data;
