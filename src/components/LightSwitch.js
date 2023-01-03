import React, {useState} from "react"

const LightSwitch = (props) => {

  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")

  const [colorStatus, setColorStatus] = useState("white")

  const onOff = () => {
    if (lightSwitchStatus === "off") {
      setLightSwitchStatus("on")
      setColorStatus("yellow")
    } else {
      setLightSwitchStatus("off")
      setColorStatus("white")
    }
  }

  return (
    <>
      <div className="lightbulb" onClick={onOff} style={{backgroundColor: colorStatus}}>{lightSwitchStatus}</div>
    </>
  )
}

export default LightSwitch
