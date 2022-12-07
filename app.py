from flask import Flask, render_template, jsonify
import busio
import digitalio
import board
import adafruit_mcp3xxx.mcp3008 as MCP
from adafruit_mcp3xxx.analog_in import AnalogIn


NUM_SENSORS = 10

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

# create the spi bus
spi = busio.SPI(clock=board.SCK, MISO=board.MISO, MOSI=board.MOSI)

# create the cs (chip select)
cs = digitalio.DigitalInOut(board.D5)
cs2 = digitalio.DigitalInOut(board.D6)

# create the mcp object
mcp = MCP.MCP3008(spi, cs)
mcp2 = MCP.MCP3008(spi, cs2)

@app.route('/')
def dashboard():
    return render_template("carbono.html")

sensorList = []
for iSensor in range(NUM_SENSORS):
    if iSensor < 8:
        sensorList.append(AnalogIn(mcp, getattr(MCP, 'P' + str(iSensor))))
    else:
        print(iSensor)
        sensorList.append(AnalogIn(mcp2, getattr(MCP, 'P' + str(iSensor-8))))

print(sensorList[8].voltage)

def linear_interpolation(point, x_data, y_data):

  # Find the two known data points that x lies between
    for i in range(len(x_data) - 1):
        if x_data[i] <= point <= x_data[i + 1]:
          # Perform interpolation using the known data points
          x0 = x_data[i]
          x1 = x_data[i + 1]
          y0 = y_data[i]
          y1 = y_data[i + 1]
          y = y0 + (point - x0) * (y1 - y0) / (x1 - x0)

          # Return the interpolated value
          return y

  # If point is outside the range of known data points, return None
    return None

x1 = [0, 1.1, 2, 3, 4]
y1 = [0, 10, 20, 30, 40]


@app.route('/sensor1', methods = ['POST', 'GET'])
def sensor2():
    return jsonify([linear_interpolation(round(sensor.voltage, 2), x1, y1) for sensor in sensorList])
