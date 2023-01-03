import React, {useState} from "react"
import lightOff from "../assets/lightOff.png"
import lightOn from "../assets/lightOn.png"
import switchOff from "../assets/switchOff.png"
import switchOn from "../assets/switchOn.png"

const LightSwitch = () => {

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

    // instead of the div with an onClick from before, it'll be a div containing images that run a similar logic (the switch and lightbulb respectively)
    <>
      <div>
      <img src={lightSwitchStatus === "off" ? switchOff : switchOn} onClick={onOff}/>
      <img src={lightSwitchStatus === "off" ? lightOff : lightOn} /> 
      </div>
    </>
  )
}

export default LightSwitch
