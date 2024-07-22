import { Radio } from "antd";
import { useContext, useState } from "react"
import { ApiContext } from "../context";

export const Filter = () => {
  const {value, setValue} = useContext(ApiContext);
  const [filter, setFilter] = useState('');
  const [workValue, setWorkValue] = useState(1); 
  const[value2, setValue2] = useState(1);
const filterValue = (e) => {
  setValue(e.target.value);
}
const filterValue2 = (e) => {
  setValue(e.target.value);
}
    return <div className="p-2 h-100">
     <h1 className="text-start">Filters</h1>
     <div>
        <p className="text-start fw-bold fs-5">working schedule</p>
 <Radio.Group onChange={filterValue} className="d-flex flex-column gap-3" value={workValue}>
    <Radio className="text-white" value={"fulltime"}>Full time</Radio>
    <Radio className="text-white" value={"parttime"}>Part time</Radio>
    <Radio className="text-white" value={"internship"}>Internship</Radio>
    <Radio className="text-white" value={"projectwork"}>Project work</Radio>
  </Radio.Group>
     </div>

     <div>
        <p className="text-start my-4 fw-bold fs-5">Employment type</p>
        <Radio.Group onChange={filterValue2} className="d-flex flex-column gap-3" value={value2}>
    <Radio className="text-white" value={"fullday"}>Full day</Radio>
    <Radio className="text-white" value={"shiftwork"}>Shift work</Radio>
    <Radio className="text-white" value={'distantwork'}>Distant work</Radio>
  </Radio.Group>
     </div>
    </div>
}