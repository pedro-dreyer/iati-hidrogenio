const darkBlue  = "#106e7d"; 
const lightBlue  = "#3cb1c3"; 
const darkYellow  = "#ad8305"; 
const lightYellow  = "#ffcb2f"; 
const darkGreen  = "#155724"; 
const lightGreen  = "#28a745"; 

function updateBattery(id, value){

  if (value == 0){
    var list = document.getElementById(id)
    list.getElementsByClassName("battery_1")[0].style.backgroundColor = darkBlue
    list.getElementsByClassName("battery_2")[0].style.backgroundColor = darkGreen 
    list.getElementsByClassName("battery_3")[0].style.backgroundColor = darkGreen
    list.getElementsByClassName("battery_4")[0].style.backgroundColor = darkGreen
    list.getElementsByClassName("battery_5")[0].style.backgroundColor = darkGreen
    list.getElementsByClassName("battery_6")[0].style.backgroundColor = darkYellow
  }

  if (value == 1){

    var list = document.getElementById(id)
    list.getElementsByClassName("battery_1")[0].style.backgroundColor = lightBlue
    list.getElementsByClassName("battery_2")[0].style.backgroundColor = darkGreen 
    list.getElementsByClassName("battery_3")[0].style.backgroundColor = darkGreen
    list.getElementsByClassName("battery_4")[0].style.backgroundColor = darkGreen
    list.getElementsByClassName("battery_5")[0].style.backgroundColor = darkGreen
    list.getElementsByClassName("battery_6")[0].style.backgroundColor = darkYellow
  }

  if (value == 2) {

    var list = document.getElementById(id)
    list.getElementsByClassName("battery_1")[0].style.backgroundColor = lightBlue
    list.getElementsByClassName("battery_2")[0].style.backgroundColor = lightGreen 
    list.getElementsByClassName("battery_3")[0].style.backgroundColor = darkGreen
    list.getElementsByClassName("battery_4")[0].style.backgroundColor = darkGreen
    list.getElementsByClassName("battery_5")[0].style.backgroundColor = darkGreen
    list.getElementsByClassName("battery_6")[0].style.backgroundColor = darkYellow

  }

  if (value == 3) {

    var list = document.getElementById(id)
    list.getElementsByClassName("battery_1")[0].style.backgroundColor = lightBlue
    list.getElementsByClassName("battery_2")[0].style.backgroundColor = lightGreen 
    list.getElementsByClassName("battery_3")[0].style.backgroundColor = lightGreen
    list.getElementsByClassName("battery_4")[0].style.backgroundColor = darkGreen
    list.getElementsByClassName("battery_5")[0].style.backgroundColor = darkGreen
    list.getElementsByClassName("battery_6")[0].style.backgroundColor = darkYellow
  }

  if (value == 4) {

    var list = document.getElementById(id)
    list.getElementsByClassName("battery_1")[0].style.backgroundColor = lightBlue
    list.getElementsByClassName("battery_2")[0].style.backgroundColor = lightGreen 
    list.getElementsByClassName("battery_3")[0].style.backgroundColor = lightGreen
    list.getElementsByClassName("battery_4")[0].style.backgroundColor = lightGreen
    list.getElementsByClassName("battery_5")[0].style.backgroundColor = darkGreen
    list.getElementsByClassName("battery_6")[0].style.backgroundColor = darkYellow
  }

  if (value == 5) {

    var list = document.getElementById(id)
    list.getElementsByClassName("battery_1")[0].style.backgroundColor = lightBlue
    list.getElementsByClassName("battery_2")[0].style.backgroundColor = lightGreen 
    list.getElementsByClassName("battery_3")[0].style.backgroundColor = lightGreen
    list.getElementsByClassName("battery_4")[0].style.backgroundColor = lightGreen
    list.getElementsByClassName("battery_5")[0].style.backgroundColor = lightGreen
    list.getElementsByClassName("battery_6")[0].style.backgroundColor = darkYellow
  }

  if (value == 6) {

    var list = document.getElementById(id)
    list.getElementsByClassName("battery_1")[0].style.backgroundColor = lightBlue
    list.getElementsByClassName("battery_2")[0].style.backgroundColor = lightGreen 
    list.getElementsByClassName("battery_3")[0].style.backgroundColor = lightGreen
    list.getElementsByClassName("battery_4")[0].style.backgroundColor = lightGreen
    list.getElementsByClassName("battery_5")[0].style.backgroundColor = lightGreen
    list.getElementsByClassName("battery_6")[0].style.backgroundColor = lightYellow
  }

}

updateBattery("sinal_ac_battery", 0)
updateBattery("sensor_h2_1_battery", 0)
updateBattery("sw_hidropneumatica_battery", 0)

