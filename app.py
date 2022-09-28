from flask import Flask, render_template, jsonify
import time
import busio
import digitalio
import board
import adafruit_mcp3xxx.mcp3008 as MCP
from adafruit_mcp3xxx.analog_in import AnalogIn

app = Flask(__name__)

# create the spi bus
spi = busio.SPI(clock=board.SCK, MISO=board.MISO, MOSI=board.MOSI)

# create the cs (chip select)
cs = digitalio.DigitalInOut(board.D5)

# create the mcp object
mcp = MCP.MCP3008(spi, cs)

# TODO make channels number to be dinamic

chan1 = AnalogIn(mcp, MCP.P1)
chan2 = AnalogIn(mcp, MCP.P2)
chan3 = AnalogIn(mcp, MCP.P3)

# TODO round all chanels in a function

@app.route('/')
def dashboard():
    return render_template("carbono.html")

@app.route('/sensor1', methods = ['POST', 'GET'])
def sensor1():
    return jsonify([round(chan1.voltage, 2), round(chan2.voltage, 2), round(chan3.voltage,2) ])