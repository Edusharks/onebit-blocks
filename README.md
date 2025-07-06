# One:Bit Extension

The **One:Bit Extension** is a powerful library designed to bring your Micro:bit projects to life! It provides an intuitive way to control sensors, actuators, motors, LEDs, displays, and more using the MakeCode editor. Whether you're building a robot, monitoring the environment, or creating dynamic light shows, One:Bit has you covered!


This extension is developed and maintained by **Edusharks**. Learn more at [edusharks.com](https://www.edusharks.com/).

<p align="center">
<a href="https://www.edusharks.com/" target="_blank">
<img src="https://static.wixstatic.com/media/6c9fb0_2693605153ca466b9186ab5a5cdbe201~mv2.png/v1/fill/w_316,h_110,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Edusharks%20(1).png" alt="Edusharks Logo">
</a>
</p>

---

## 🚀 How to Add to MakeCode
1. Open MakeCode for micro:bit.
2. Create a **New Project**.
3. Click the **gear icon** in the top-right and select **Extensions**.
4. Search or paste the following URL:
```
https://edusharks.github.io/onebit_blocks
```
5. Start using the **One:Bit** blocks in your project!

---

## 🌟 Features

### 🎯 **Pin Control**

- **Digital Pins:** Read and write digital values.
```typescript
One_Bit.digitalRead(One_Bit.DigitalPinPrime.P0)
One_Bit.digitalWrite(One_Bit.DigitalPinPrime.P0, 1)
```

- **Analog Pins:** Read and write analog values.
```typescript
One_Bit.analogRead(One_Bit.AnalogPinPrime.P0)
One_Bit.analogWrite(One_Bit.AnalogPinPrime.P0, 512)
```

---

### 🔧 **Sensors**

- **Ultrasonic Sensor:** Measure distance with sound waves.
```typescript
One_Bit.initializeAndGetUltrasonicDistance(One_Bit.PWM.P0, One_Bit.PWM.P1, One_Bit.Unit.Centimeters)
```

- **IR Sensor:** Detect obstacles or track lines.
```typescript
One_Bit.readIRSensorDigital(One_Bit.DigitalPinPrime.P0)
```

- **DHT11 Sensor:** Monitor temperature and humidity.
```typescript
One_Bit.readTemperature(DigitalPin.P0, One_Bit.tempUnit.celsius)
One_Bit.readHumidity(DigitalPin.P0)
```

- **LDR Sensor:** Measure light intensity.
```typescript
One_Bit.getLDRSensorAnalogValue(One_Bit.AnalogPinPrime.P0)
```

- **Moisture Sensor:** Check soil moisture levels.
```typescript
One_Bit.getMoistureSensorValue(One_Bit.AnalogPinPrime.P0)
```

- **Line Follower Sensor:** Build a line-following robot.
```typescript
One_Bit.readLeftLineFollowerSensor()
One_Bit.readRightLineFollowerSensor()
```

---

### ⚡ **Actuators**

- **Servo Motors:** Control both positional and continuous servos.
```typescript
One_Bit.movePositionalServo(One_Bit.DigitalPinPrime.P0, 90)
One_Bit.moveContinuousServo(One_Bit.DigitalPinPrime.P0, 50)
```

- **DC & Stepper Motors:** Drive motors with speed and direction.
```typescript
One_Bit.moveMotor(One_Bit.Direction.Forward, 100)
One_Bit.moveStepperMotor(One_Bit.StepperType.Nema17, 200, 100)
```

---

### 🌈 **NeoPixel & Rainbow LEDs**

- **LED Strip Control:** Illuminate your projects with colorful effects.
```typescript
One_Bit.initializeRainbow(24)
One_Bit.setRainbowColor(0xFF0000)
One_Bit.rainbowBreathingEffect(5, 0xFF0000)
```

---

### 📟 **OLED Display**

- **Text & Shapes:** Display information on a small screen.
```typescript
One_Bit.init(128, 64)
One_Bit.writeStringAt(0, 0, "Hello!")
One_Bit.drawRectangle(0, 0, 20, 20)
```

---

## 🛠️ **Usage Examples**

### 🚗 **Line Following Robot**
```typescript
basic.forever(function () {
    let leftSensor = One_Bit.readLeftLineFollowerSensor();
    let rightSensor = One_Bit.readRightLineFollowerSensor();
    
    if (leftSensor === 1 && rightSensor === 0) {
        One_Bit.moveWithBias(50, 20); // Turn right
    } else if (leftSensor === 0 && rightSensor === 1) {
        One_Bit.moveWithBias(50, -20); // Turn left
    } else {
        One_Bit.moveWithBias(50, 0); // Move straight
    }
})
```

### 🛡 **Ultrasonic Obstacle Avoidance**
```typescript
basic.forever(function () {
    let distance = One_Bit.initializeAndGetUltrasonicDistance(One_Bit.PWM.P0, One_Bit.PWM.P1, One_Bit.Unit.Centimeters);
    if (distance < 10) {
        One_Bit.stopAllMotors();
    } else {
        One_Bit.move(One_Bit.Direction.Forward, 50);
    }
})
```

### 🌈 **Rainbow LED Effects**
```typescript
One_Bit.initializeRainbow(24)
One_Bit.rainbowBreathingEffect(5, 0xFF0000)
One_Bit.rainbowColorWipe(0x00FF00, 0.1)
One_Bit.rainbowCycle(10)
```

---

## 📄 **License**
This project is licensed under the MIT License. See the LICENSE file for more details.

---

## 🙌 **Acknowledgments**
- **Edusharks** for developing and maintaining this extension. [edusharks.com](https://www.edusharks.com/)
- **MakeCode Team** for the incredible Micro:bit editor.
- **One:Bit Community** for feedback, testing, and continuous improvement.

Got questions or feedback? Drop by our [GitHub repository](https://github.com/edusharks/onebit) or connect with us through the Edusharks website!

Happy coding! 🚀



> Open this page at [https://edusharks.github.io/onebit-blocks/](https://edusharks.github.io/onebit-blocks/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/edusharks/onebit-blocks** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/edusharks/onebit-blocks** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
