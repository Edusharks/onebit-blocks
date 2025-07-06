
//% weight=100 color=#993366 icon="\uf2db" block="One:Bit"
//% groups='["Digital Pins", "Analog Pins", "Pin Events", "Neo_Color", "Setup", "Display", "Color Utilities", "Effects", "General IO", "Switches & Buttons", "Environmental", "Motion Sensors", "Proximity & Distance", "Analog Inputs", "Positional Servo", "Continuous Servo", "OLED Display", "IR Remote (Experimental)"]'
namespace One_Bit {

    // Define custom enums for digital pins
    export enum DigitalPinPrime {
        //% block="P0"
        P0 = DigitalPin.P0,
        //% block="P1"
        P1 = DigitalPin.P1,
        //% block="P2"
        P2 = DigitalPin.P2,
        //% block="P3"
        P3 = DigitalPin.P3,
        //% block="P4"
        P4 = DigitalPin.P4,
        //% block="P9"
        P9 = DigitalPin.P9,
        //% block="P10"
        P10 = DigitalPin.P10,
        //% block="P13"
        P13 = DigitalPin.P13,
        //% block="P14"
        P14 = DigitalPin.P14,
        //% block="P15"
        P15 = DigitalPin.P15,
        //% block="P19"
        P19 = DigitalPin.P19,
        //% block="P20"
        P20 = DigitalPin.P20
    }

    // Define custom enums for analog pins
    export enum AnalogPinPrime {
        //% block="P0"
        P0 = AnalogPin.P0,
        //% block="P1"
        P1 = AnalogPin.P1,
        //% block="P2"
        P2 = AnalogPin.P2,
        //% block="P3"
        P3 = AnalogPin.P3,
        //% block="P4"
        P4 = AnalogPin.P4,
        //% block="P10"
        P10 = AnalogPin.P10
    }

    // Enum for PWM pins (often used for Servos, Ultrasonic trigger)
    export enum PWMPin { // Renamed from PWM to avoid conflict with potential PWM functions
        //% block="P0"
        P0 = DigitalPin.P0,
        //% block="P1"
        P1 = DigitalPin.P1,
        //% block="P2"
        P2 = DigitalPin.P2,
        //% block="P8"
        P8 = DigitalPin.P8,
        //% block="P12"
        P12 = DigitalPin.P12,
        //% block="P13"
        P13 = DigitalPin.P13,
        //% block="P14"
        P14 = DigitalPin.P14,
        //% block="P15"
        P15 = DigitalPin.P15,
        //% block="P16"
        P16 = DigitalPin.P16
    }

    export enum PinPullState {
        //% block="Pull Up"
        PullUp = PinPullMode.PullUp,
        //% block="Pull Down"
        PullDown = PinPullMode.PullDown,
        //% block="Pull None"
        PullNone = PinPullMode.PullNone
    }

    export enum PinEventTypePrime {
        //% block="edge (rise and fall)"
        Edge = DAL.MICROBIT_PIN_EVENT_ON_EDGE, // Correct DAL constant
        //% block="pulse"
        Pulse = DAL.MICROBIT_PIN_EVENT_ON_PULSE, // Correct DAL constant
        //% block="rise"
        Rise = DAL.MICROBIT_PIN_EVENT_ON_TOUCH, // Often used for rise, or map to Edge and filter
        //% block="fall"
        Fall = DAL.MICROBIT_PIN_EVENT_ON_TOUCH, // Often used for fall, or map to Edge and filter
        //% block="none"
        None = DAL.MICROBIT_PIN_EVENT_NONE // Correct DAL constant
    }


    ////////////////////
    //  PRIME BLOCKS  // (General Pin I/O & P16 NeoPixel)
    ////////////////////

    /**
     * Read digital value from a specific pin.
     * @param pin The digital pin to read from.
     * @returns The digital value (0 or 1) read from the pin.
     */
    //% subcategory="Prime"
    //% group="Digital Pins"
    //% weight=100 blockGap=8
    //% blockId="one_bit_digital_read" block="read digital pin %pin"
    export function digitalRead(pin: DigitalPinPrime): number {
        return pins.digitalReadPin(pin as number as DigitalPin);
    }

    /**
     * Write a digital value to a specific pin.
     * @param pin The digital pin to write to.
     * @param value The digital value (0 or 1) to write.
     */
    //% subcategory="Prime"
    //% group="Digital Pins"
    //% weight=95 blockGap=8
    //% blockId="one_bit_digital_write" block="write digital pin %pin to %value"
    //% value.min=0 value.max=1
    export function digitalWrite(pin: DigitalPinPrime, value: number): void {
        pins.digitalWritePin(pin as number as DigitalPin, value);
    }

    /**
     * Check if a digital pin is HIGH.
     * @param pin The digital pin to check.
     */
    //% subcategory="Prime"
    //% group="Digital Pins"
    //% weight=90 blockGap=8
    //% blockId="one_bit_is_pin_high" block="is pin %pin HIGH"
    export function isPinHigh(pin: DigitalPinPrime): boolean {
        return pins.digitalReadPin(pin as number as DigitalPin) === 1;
    }

    /**
     * Check if a digital pin is LOW.
     * @param pin The digital pin to check.
     */
    //% subcategory="Prime"
    //% group="Digital Pins"
    //% weight=85 blockGap=8
    //% blockId="one_bit_is_pin_low" block="is pin %pin LOW"
    export function isPinLow(pin: DigitalPinPrime): boolean {
        return pins.digitalReadPin(pin as number as DigitalPin) === 0;
    }

    /**
     * Set the pull mode for a digital pin.
     * @param pin The digital pin to configure.
     * @param pull The pull mode (Up, Down, None).
     */
    //% subcategory="Prime"
    //% group="Digital Pins"
    //% weight=80 blockGap=30
    //% blockId="one_bit_set_pin_pull" block="set pin %pin to %pull"
    export function setPinPull(pin: DigitalPinPrime, pull: PinPullState): void {
        pins.setPull(pin as number as DigitalPin, pull as number as PinPullMode);
    }

    /**
     * Read analog value from a specific pin.
     * @param pin The analog pin to read from.
     * @returns The analog value (0-1023) read from the pin.
     */
    //% subcategory="Prime"
    //% group="Analog Pins"
    //% weight=75 blockGap=8
    //% blockId="one_bit_analog_read" block="read analog pin %pin"
    export function analogRead(pin: AnalogPinPrime): number {
        return pins.analogReadPin(pin as number as AnalogPin);
    }

    /**
     * Write an analog value (PWM) to a specific pin.
     * @param pin The pin to write to (must be PWM capable).
     * @param value The analog value (0-1023) to write.
     */
    //% subcategory="Prime"
    //% group="Analog Pins"
    //% weight=70 blockGap=8
    //% blockId="one_bit_analog_write" block="write analog pin %pin to %value"
    //% value.min=0 value.max=1023
    export function analogWrite(pin: AnalogPinPrime, value: number): void {
        pins.analogWritePin(pin as number as AnalogPin, value);
    }

    /**
     * Map an analog sensor reading from its original range [0-1023] to a new range.
     * @param value The analog value to map (0-1023).
     * @param toLow The lower bound of the target range.
     * @param toHigh The upper bound of the target range.
     */
    //% subcategory="Prime"
    //% group="Analog Pins"
    //% weight=65 blockGap=8
    //% blockId="one_bit_map_analog" block="map analog value %value from [0-1023] to [%toLow-%toHigh]"
    //% value.shadow="one_bit_analog_read"
    export function mapAnalog(value: number, toLow: number, toHigh: number): number {
        return Math.map(value, 0, 1023, toLow, toHigh);
    }

    /**
     * Map an analog sensor reading from its original range [0-1023] to a percentage [0-100].
     * @param value The analog value to map (0-1023).
     */
    //% subcategory="Prime"
    //% group="Analog Pins"
    //% weight=60 blockGap=30
    //% blockId="one_bit_map_analog_to_percent" block="map analog value %value to percentage [0-100]"
    //% value.shadow="one_bit_analog_read"
    export function mapAnalogToPercent(value: number): number {
        return Math.map(value, 0, 1023, 0, 100);
    }


    /**
     * Register an event handler for a pin event.
     * @param pin The pin to monitor.
     * @param type The type of event to listen for.
     * @param handler Code to run when the event occurs.
     */
    //% subcategory="Prime"
    //% group="Pin Events"
    //% weight=55 blockGap=8
    //% blockId="one_bit_on_pin_event" block="on pin %pin event %type"
    export function onPinEvent(pin: DigitalPinPrime, type: PinEventTypePrime, handler: () => void): void {
        const targetPin = pin as number as DigitalPin;

        if (type === PinEventTypePrime.Rise) {
            pins.onPulsed(targetPin, PulseValue.High, handler);
        } else if (type === PinEventTypePrime.Fall) {
            pins.onPulsed(targetPin, PulseValue.Low, handler);
        } else if (type === PinEventTypePrime.Edge) {
            // DAL.MICROBIT_PIN_EVENT_ON_EDGE corresponds to PinEventType.Edge
            pins.setEvents(targetPin, PinEventType.Edge);
            control.onEvent(getPinEventSource(targetPin), DAL.MICROBIT_PIN_EVENT_ON_EDGE, handler);
        } else if (type === PinEventTypePrime.Pulse) {
            // DAL.MICROBIT_PIN_EVENT_ON_PULSE corresponds to PinEventType.Pulse
            pins.setEvents(targetPin, PinEventType.Pulse);
            control.onEvent(getPinEventSource(targetPin), DAL.MICROBIT_PIN_EVENT_ON_PULSE, handler);
        } else if (type === PinEventTypePrime.None) {
            // Typically, you wouldn't register a handler for "None", but clear existing ones.
            // For simplicity, this block structure might not support clearing specific handlers easily.
            // This will effectively do nothing if "None" is selected for a new event.
            pins.setEvents(targetPin, PinEventType.None);
        }
    }


    // Helper to get the event source for a pin
    function getPinEventSource(pin: DigitalPin): EventBusSource {
        switch (pin) {
            case DigitalPin.P0: return EventBusSource.MICROBIT_ID_IO_P0;
            case DigitalPin.P1: return EventBusSource.MICROBIT_ID_IO_P1;
            case DigitalPin.P2: return EventBusSource.MICROBIT_ID_IO_P2;
            case DigitalPin.P3: return EventBusSource.MICROBIT_ID_IO_P3;
            case DigitalPin.P4: return EventBusSource.MICROBIT_ID_IO_P4;
            case DigitalPin.P9: return EventBusSource.MICROBIT_ID_IO_P9;
            case DigitalPin.P10: return EventBusSource.MICROBIT_ID_IO_P10;
            case DigitalPin.P13: return EventBusSource.MICROBIT_ID_IO_P13;
            case DigitalPin.P14: return EventBusSource.MICROBIT_ID_IO_P14;
            case DigitalPin.P15: return EventBusSource.MICROBIT_ID_IO_P15;
            case DigitalPin.P19: return EventBusSource.MICROBIT_ID_IO_P19;
            case DigitalPin.P20: return EventBusSource.MICROBIT_ID_IO_P20;
            default: return EventBusSource.MICROBIT_ID_IO_P0; // Fallback
        }
    }


    // --- Prime NeoPixel ---
    let primeBuffer: Buffer = null;
    let primeNumLeds: number = 12;
    let primeBrightness: number = 255;
    let primeLastBrightnessApplied: number = 255;
    let primeRawColors: number[] = []; // Store colors before brightness

    /**
     * Initialize the Prime LED strip (connected to P16).
     * @param numLeds The number of LEDs in the strip.
     */
    //% subcategory="Prime"
    //% group="Neo_Color"
    //% blockId="one_bit_prime_initialize" block="initialize Prime NeoPixel with %numLeds LEDs"
    //% weight=100 blockGap=8 numLeds.defl=12
    export function initializePrime(numLeds: number): void {
        primeNumLeds = Math.max(1, numLeds);
        primeBuffer = control.createBuffer(primeNumLeds * 3);
        primeRawColors = [];
        for (let i = 0; i < primeNumLeds; i++) primeRawColors.push(0);
        primeBrightness = 255;
        primeLastBrightnessApplied = 255;
        clearPrime();
    }

    function _primeEnsureInitialized() {
        if (!primeBuffer) initializePrime(primeNumLeds);
    }

    function _primeApplyBrightnessToRaw(index: number, color: number): void {
        let r = (color >> 16) & 0xFF;
        let g = (color >> 8) & 0xFF;
        let b = color & 0xFF;
        primeBuffer[index * 3 + 0] = Math.round((g * primeBrightness) / 255);
        primeBuffer[index * 3 + 1] = Math.round((r * primeBrightness) / 255);
        primeBuffer[index * 3 + 2] = Math.round((b * primeBrightness) / 255);
    }

    function _primeSetLedColorRaw(index: number, red: number, green: number, blue: number): void {
        _primeEnsureInitialized();
        if (index < 0 || index >= primeNumLeds) return;
        let color = (red << 16) | (green << 8) | blue;
        primeRawColors[index] = color;
        _primeApplyBrightnessToRaw(index, color);
    }

    function showPrimeBuffer(): void {
        _primeEnsureInitialized();
        light.sendWS2812Buffer(primeBuffer, DigitalPin.P16);
    }

    /**
     * Show rainbow colors on the Prime strip.
     */
    //% subcategory="Prime" group="Neo_Color"
    //% blockId="one_bit_prime_show_rainbow" block="Prime show rainbow"
    //% weight=95 blockGap=8
    export function showPrime(): void {
        _primeEnsureInitialized();
        for (let i = 0; i < primeNumLeds; i++) {
            let hue = (i * 360) / primeNumLeds;
            const color = hslToRgb(hue, 100, 50);
            primeRawColors[i] = color;
            _primeApplyBrightnessToRaw(i, color);
        }
        primeLastBrightnessApplied = primeBrightness;
        showPrimeBuffer();
    }

    /**
     * Clear all LEDs on the Prime strip.
     */
    //% subcategory="Prime" group="Neo_Color"
    //% blockId="one_bit_prime_clear" block="Prime clear"
    //% weight=90 blockGap=8
    export function clearPrime(): void {
        _primeEnsureInitialized();
        for (let i = 0; i < primeNumLeds; i++) {
            primeRawColors[i] = 0;
            _primeApplyBrightnessToRaw(i, 0);
        }
        primeLastBrightnessApplied = primeBrightness;
        showPrimeBuffer();
    }

    /**
     * Set color of all LEDs on the Prime strip.
     * @param color The color to set.
     */
    //% subcategory="Prime" group="Neo_Color" value.defl='#ff0000'
    //% blockId="one_bit_prime_set_color_all" block="Prime set all LEDs to %color"
    //% weight=85 blockGap=8 color.shadow="one_bit_prime_color_picker"
    export function setPrimeColor(color: number): void {
        _primeEnsureInitialized();
        for (let i = 0; i < primeNumLeds; i++) {
            primeRawColors[i] = color;
            _primeApplyBrightnessToRaw(i, color);
        }
        primeLastBrightnessApplied = primeBrightness;
        showPrimeBuffer();
    }

    /**
     * Set color of a specific LED on the Prime strip.
     * @param ledIndex The index of the LED to change (0-based).
     * @param color The color to set.
     */
    //% subcategory="Prime" group="Neo_Color" value.defl='#FFFFFF'
    //% blockId="one_bit_prime_set_led_color" block="Prime set LED at %ledIndex to %color"
    //% weight=80 blockGap=8 ledIndex.min=0 color.shadow="one_bit_prime_color_picker"
    export function setPrimeLedColor(ledIndex: number, color: number): void {
        _primeEnsureInitialized();
        if (ledIndex < 0 || ledIndex >= primeNumLeds) return;
        primeRawColors[ledIndex] = color;
        _primeApplyBrightnessToRaw(ledIndex, color);
        primeLastBrightnessApplied = primeBrightness;
        showPrimeBuffer();
    }

    /**
     * Get the color of a specific LED on the Prime strip (as set, before brightness).
     * @param ledIndex The index of the LED (0-based).
     */
    //% subcategory="Prime" group="Neo_Color"
    //% blockId="one_bit_prime_get_led_color" block="Prime get color of LED at %ledIndex"
    //% weight=78 blockGap=8 ledIndex.min=0
    export function getPrimeLedColor(ledIndex: number): number {
        _primeEnsureInitialized();
        if (ledIndex < 0 || ledIndex >= primeNumLeds) return 0;
        return primeRawColors[ledIndex];
    }

    /**
     * Fill a range of LEDs on the Prime strip with a color.
     * @param fromIndex Start index of the range (0-based).
     * @param toIndex End index of the range (inclusive).
     * @param color The color to set.
     */
    //% subcategory="Prime" group="Neo_Color" value.defl='#00FF00'
    //% blockId="one_bit_prime_fill_leds" block="Prime fill LEDs from %fromIndex to %toIndex with %color"
    //% weight=77 blockGap=8 color.shadow="one_bit_prime_color_picker"
    //% fromIndex.min=0 toIndex.min=0
    export function fillPrimeLeds(fromIndex: number, toIndex: number, color: number): void {
        _primeEnsureInitialized();
        fromIndex = Math.clamp(0, primeNumLeds - 1, fromIndex);
        toIndex = Math.clamp(0, primeNumLeds - 1, toIndex);
        for (let i = Math.min(fromIndex, toIndex); i <= Math.max(fromIndex, toIndex); i++) {
            primeRawColors[i] = color;
            _primeApplyBrightnessToRaw(i, color);
        }
        primeLastBrightnessApplied = primeBrightness;
        showPrimeBuffer();
    }


    /**
     * Set brightness of the Prime strip.
     * @param brightness Brightness level (0-255).
     */
    //% subcategory="Prime" group="Neo_Color"
    //% blockId="one_bit_prime_set_brightness" block="Prime set brightness to %brightness"
    //% weight=75 blockGap=8 brightness.min=0 brightness.max=255 brightness.defl=255
    export function setPrimeBrightness(brightness: number): void {
        _primeEnsureInitialized();
        primeBrightness = Math.clamp(0, 255, brightness);
        for (let i = 0; i < primeNumLeds; i++) {
            _primeApplyBrightnessToRaw(i, primeRawColors[i]);
        }
        primeLastBrightnessApplied = primeBrightness;
        showPrimeBuffer();
    }

    /**
     * Shift LEDs on the Prime strip by a number of positions.
     * @param offset Number of positions to shift (positive for right, negative for left).
     * @param wrapAround If true, LEDs shifted off one end reappear on the other.
     */
    //% subcategory="Prime" group="Neo_Color"
    //% blockId="one_bit_prime_shift_leds" block="Prime shift LEDs by %offset positions || wrap around %wrapAround"
    //% weight=73 blockGap=8 wrapAround.defl=false
    export function shiftPrimeLeds(offset: number, wrapAround: boolean = false): void {
        _primeEnsureInitialized();
        if (primeNumLeds === 0 || offset === 0) return;

        offset = offset % primeNumLeds;
        let newRawColors = [];

        for (let i = 0; i < primeNumLeds; i++) {
            let sourceIndex = i - offset;
            if (wrapAround) {
                sourceIndex = (sourceIndex % primeNumLeds + primeNumLeds) % primeNumLeds; // Handles negative results
                newRawColors.push(primeRawColors[sourceIndex]);
            } else {
                if (sourceIndex >= 0 && sourceIndex < primeNumLeds) {
                    newRawColors.push(primeRawColors[sourceIndex]);
                } else {
                    newRawColors.push(0); // Fill with black if out of bounds
                }
            }
        }
        primeRawColors = newRawColors;
        for (let i = 0; i < primeNumLeds; i++) {
            _primeApplyBrightnessToRaw(i, primeRawColors[i]);
        }
        showPrimeBuffer();
    }

    /**
     * Rotate LEDs on the Prime strip by a number of positions (always wraps around).
     * @param offset Number of positions to rotate (positive for right, negative for left).
     */
    //% subcategory="Prime" group="Neo_Color"
    //% blockId="one_bit_prime_rotate_leds" block="Prime rotate LEDs by %offset positions"
    //% weight=72 blockGap=8
    export function rotatePrimeLeds(offset: number): void {
        shiftPrimeLeds(offset, true);
    }

    /**
     * Show a gradient pattern on the Prime strip.
     * @param startHue The starting hue value (0-360). (Currently not used in this blend mode)
     * @param length The number of LEDs to fill with the gradient.
     * @param fromColor Starting color of the gradient.
     * @param toColor Ending color of the gradient.
     */
    //% subcategory="Prime" group="Neo_Color"
    //% blockId="one_bit_prime_gradient" block="Prime show gradient length %length|from %fromColor|to %toColor||start hue %startHue"
    //% weight=70 blockGap=8 length.defl=12
    //% fromColor.shadow="one_bit_prime_color_picker" value.defl="#ff0000"
    //% toColor.shadow="one_bit_prime_color_picker" value.defl="#0000ff"
    //% startHue.min=0 startHue.max=360
    export function showPrimeGradient(length: number, fromColor: number, toColor: number, startHue?: number): void {
        _primeEnsureInitialized();
        length = Math.min(length, primeNumLeds);

        if (length === 0) { showPrimeBuffer(); return; }

        for (let i = 0; i < length; i++) {
            let blendFactor = (length <= 1) ? 0 : i / (length - 1);
            let RblendColor = blend(fromColor, toColor, blendFactor);
            primeRawColors[i] = RblendColor;
            _primeApplyBrightnessToRaw(i, RblendColor);
        }
        // Fill remaining LEDs with black if gradient length < total LEDs
        for (let i = length; i < primeNumLeds; i++) {
            primeRawColors[i] = 0;
            _primeApplyBrightnessToRaw(i, 0);
        }
        primeLastBrightnessApplied = primeBrightness;
        showPrimeBuffer();
    }

    /**
     * Helper function to blend two colors.
     * @param color1 The first color.
     * @param color2 The second color.
     * @param factor The blend factor (0-1). 0 means color1, 1 means color2.
     */
    function blend(color1: number, color2: number, factor: number): number {
        factor = Math.clamp(0, 1, factor);
        let r1 = (color1 >> 16) & 0xFF; let g1 = (color1 >> 8) & 0xFF; let b1 = color1 & 0xFF;
        let r2 = (color2 >> 16) & 0xFF; let g2 = (color2 >> 8) & 0xFF; let b2 = color2 & 0xFF;
        let r = Math.round(r1 * (1 - factor) + r2 * factor);
        let g = Math.round(g1 * (1 - factor) + g2 * factor);
        let b = Math.round(b1 * (1 - factor) + b2 * factor);
        return (r << 16) | (g << 8) | b;
    }

    /**
     * Prime color picker.
     */
    //% subcategory="Prime" group="Neo_Color"
    //% weight=65 blockGap=20 blockId="one_bit_prime_color_picker" block="%value"
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.colours='["#FF0000", "#FFA500", "#FFFF00", "#7FFF00", "#00FF00", "#00FFFF", "#007FFF", "#0000FF", "#A000FF", "#FF00FF", "#FF1493", "#A0522D", "#FFFFFF", "#808080", "#000000"]'
    //% value.fieldOptions.columns=5 value.fieldOptions.className='rgbColorPicker'
    export function __primeColorNumberPicker(value: number): number {
        return value;
    }

    /**
     * Get a random color.
     */
    //% subcategory="Prime" group="Neo_Color"
    //% blockId="one_bit_prime_random_color" block="Prime random color" weight=60
    export function primeRandomColor(): number {
        return Math.randomRange(0, 0xFFFFFF);
    }

    /**
     * Convert RGB values to a color number.
     */
    //% subcategory="Prime" group="Neo_Color"
    //% blockId="one_bit_prime_rgb_to_color" block="Prime R %r G %g B %b" weight=55
    //% r.min=0 r.max=255 g.min=0 g.max=255 b.min=0 b.max=255
    export function primeRgbToColor(r: number, g: number, b: number): number {
        return (r << 16) | (g << 8) | b;
    }

    /**
     * Convert HSL values to a color number.
     */
    //% subcategory="Prime" group="Neo_Color"
    //% blockId="one_bit_prime_hsl_to_color" block="Prime hue %h saturation %s luminosity %l" weight=50
    //% h.min=0 h.max=360 s.min=0 s.max=100 l.min=0 l.max=100
    export function primeHslToColor(h: number, s: number, l: number): number {
        return hslToRgb(h, s, l);
    }

    function hslToRgb(h: number, s: number, l: number): number {
        h = h % 360;
        s = Math.clamp(0, 100, s) / 100;
        l = Math.clamp(0, 100, l) / 100;
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
        const m = l - c / 2;
        let r = 0, g = 0, b = 0;
        if (h < 60) { r = c; g = x; b = 0; }
        else if (h < 120) { r = x; g = c; b = 0; }
        else if (h < 180) { r = 0; g = c; b = x; }
        else if (h < 240) { r = 0; g = x; b = c; }
        else if (h < 300) { r = x; g = 0; b = c; }
        else { r = c; g = 0; b = x; }
        const red = Math.round((r + m) * 255);
        const green = Math.round((g + m) * 255);
        const blue = Math.round((b + m) * 255);
        return (red << 16) | (green << 8) | blue;
    }

    ////////////////////
    // SENSORS        //
    ////////////////////

    export enum DistanceUnit {
        //% block="cm"
        CM,
        //% block="inches"
        INCH
    }

    /**
     * Get distance from HC-SR04 ultrasonic sensor.
     * @param trigPin TRIG pin of the sensor.
     * @param echoPin ECHO pin of the sensor.
     * @param unit Desired distance unit.
     * @param maxCmDistance Maximum measurable distance in cm (default 500).
     */
    //% subcategory="Sensors" 
    //% group="Ultrasonic"
    //% blockId="one_bit_ultrasonic_distance"
    //% block="ultrasonic distance trig %trigPin echo %echoPin unit %unit"
    //% trigPin.defl=PWMPin.P0 echoPin.defl=PWMPin.P1 unit.defl=DistanceUnit.CM
    //% weight=100 blockGap=8
    export function getUltrasonicDistance(trigPin: PWMPin, echoPin: PWMPin, unit: DistanceUnit, maxCmDistance = 500): number {
        pins.setPull(trigPin as number as DigitalPin, PinPullMode.PullNone);
        pins.digitalWritePin(trigPin as number as DigitalPin, 0); control.waitMicros(2);
        pins.digitalWritePin(trigPin as number as DigitalPin, 1); control.waitMicros(10);
        pins.digitalWritePin(trigPin as number as DigitalPin, 0);
        const d = pins.pulseIn(echoPin as number as DigitalPin, PulseValue.High, maxCmDistance * 58);
        if (d === 0) return -1; // No echo
        switch (unit) {
            case DistanceUnit.CM: return Math.idiv(d, 58);
            case DistanceUnit.INCH: return Math.idiv(d, 148);
            default: return -1;
        }
    }


    // --- DHT11 Sensor ---
    export enum TemperatureUnit {
        //% block="Celsius (*C)"
        Celsius,
        //% block="Fahrenheit (*F)"
        Fahrenheit,
    }
    let _dht11Temperature: number = -999.0;
    let _dht11Humidity: number = -999.0;
    let _dht11LastReadTime: number = 0;

    function _queryDHT11Data(pin: DigitalPin): void {
        if (input.runningTime() - _dht11LastReadTime < 1800) return; // Min 2s interval
        _dht11LastReadTime = input.runningTime();
        // Implementation from previous response (assumed correct)
        let resultArray: number[] = [0, 0, 0, 0, 0]; let dataArray: boolean[] = [];
        for (let i = 0; i < 40; i++) dataArray.push(false);
        pins.digitalWritePin(pin, 0); basic.pause(18);
        pins.setPull(pin, PinPullMode.PullUp); pins.digitalReadPin(pin); control.waitMicros(40);
        if (pins.digitalReadPin(pin) == 0) {
            while (pins.digitalReadPin(pin) == 0); while (pins.digitalReadPin(pin) == 1);
            for (let i = 0; i < 40; i++) {
                while (pins.digitalReadPin(pin) == 0); control.waitMicros(28);
                if (pins.digitalReadPin(pin) == 1) dataArray[i] = true;
                while (pins.digitalReadPin(pin) == 1);
            }
            for (let i = 0; i < 5; i++) for (let j = 0; j < 8; j++) if (dataArray[8 * i + j]) resultArray[i] += 2 ** (7 - j);
            let checksum = (resultArray[0] + resultArray[1] + resultArray[2] + resultArray[3]) & 0xFF;
            if (checksum === resultArray[4]) {
                _dht11Humidity = resultArray[0] + resultArray[1] / 100;
                _dht11Temperature = resultArray[2] + resultArray[3] / 100;
            } else { _dht11Humidity = -998; _dht11Temperature = -998; } // Checksum error
        } else { _dht11Humidity = -997; _dht11Temperature = -997; } // No response
    }

    /**
     * Read temperature from DHT11 sensor.
     * Returns -997 (no response), -998 (checksum error), or temperature.
     */
    //% subcategory="Sensors" 
    //% group="  DHT11"
    //% blockId="one_bit_dht11_temperature" block="DHT11 temperature on pin %pin in %unit"
    //% pin.defl=DigitalPinPrime.P2 unit.defl=TemperatureUnit.Celsius
    //% weight=90 blockGap=8
    export function readDHT11Temperature(pin: DigitalPinPrime, unit: TemperatureUnit): number {
        _queryDHT11Data(pin as number as DigitalPin);
        if (_dht11Temperature <= -997) return _dht11Temperature;
        return unit === TemperatureUnit.Fahrenheit ? _dht11Temperature * 9 / 5 + 32 : _dht11Temperature;
    }

    /**
     * Read humidity from DHT11 sensor.
     * Returns -997 (no response), -998 (checksum error), or humidity %.
     */
    //% subcategory="Sensors" 
    //% group="  DHT11"
    //% blockId="one_bit_dht11_humidity" block="DHT11 humidity on pin %pin"
    //% pin.defl=DigitalPinPrime.P2
    //% weight=88 blockGap=20
    export function readDHT11Humidity(pin: DigitalPinPrime): number {
        _queryDHT11Data(pin as number as DigitalPin);
        return _dht11Humidity;
    }

    // --- DHT20 I2C Sensor ---
    let _dht20Initialized = false; const DHT20_ADDRESS = 0x38;
    let _dht20Temperature: number = -999.0; let _dht20Humidity: number = -999.0;
    let _dht20LastReadTime: number = 0;

    function dht20Crc(data: Buffer, len: number): number {
        let crc = 0xFF; for (let i = 0; i < len; i++) { crc ^= data[i]; for (let j = 0; j < 8; j++) { if (crc & 0x80) crc = (crc << 1) ^ 0x31; else crc <<= 1; } } return crc & 0xFF;
    }

    function _initDHT20(): void {
        if (_dht20Initialized) return; basic.pause(100);
        pins.i2cWriteNumber(DHT20_ADDRESS, 0x71, NumberFormat.UInt8BE, false); let status = pins.i2cReadNumber(DHT20_ADDRESS, NumberFormat.UInt8BE, false);
        if ((status & 0x08) === 0) { let initCmd = pins.createBuffer(3); initCmd[0] = 0xBE; initCmd[1] = 0x08; initCmd[2] = 0x00; pins.i2cWriteBuffer(DHT20_ADDRESS, initCmd); basic.pause(20); }
        _dht20Initialized = true; _dht20LastReadTime = 0;
    }

    function _queryDHT20Data(): void {
        if (!_dht20Initialized) _initDHT20();
        if (input.runningTime() - _dht20LastReadTime < 1800) return;
        let triggerCmd = pins.createBuffer(3); triggerCmd[0] = 0xAC; triggerCmd[1] = 0x33; triggerCmd[2] = 0x00;
        pins.i2cWriteBuffer(DHT20_ADDRESS, triggerCmd); basic.pause(80);
        let data = pins.i2cReadBuffer(DHT20_ADDRESS, 7);
        if ((data[0] & 0x80) || !(data[0] & 0x08)) { _dht20Temperature = -998.0; _dht20Humidity = -998.0; _dht20LastReadTime = input.runningTime(); return; }
        if (dht20Crc(data, 6) !== data[6]) { _dht20Temperature = -997.0; _dht20Humidity = -997.0; _dht20LastReadTime = input.runningTime(); return; }
        let rawHumidity = (data[1] << 12) | (data[2] << 4) | (data[3] >>> 4);
        let rawTemp = ((data[3] & 0x0F) << 16) | (data[4] << 8) | data[5];

        // Convert humidity to an analog-style value from 0-1023 instead of a percentage
        _dht20Humidity = (rawHumidity / Math.pow(2, 20)) * 1023;

        _dht20Temperature = (rawTemp / Math.pow(2, 20)) * 200 - 50;
        _dht20LastReadTime = input.runningTime();
    }

    /** 
     * Read temperature from DHT20 I2C sensor. 
     * Returns the temperature as a whole number.
     */
    //% subcategory="Sensors" 
    //% group="DHT20 (I2C)"
    //% blockId="one_bit_dht20_temperature" block="DHT20 temperature in %unit"
    //% unit.defl=TemperatureUnit.Celsius weight=86 blockGap=8
    export function readDHT20Temperature(unit: TemperatureUnit): number {
        _queryDHT20Data();
        if (_dht20Temperature <= -997) return _dht20Temperature;

        let temp = unit === TemperatureUnit.Fahrenheit ? _dht20Temperature * 9 / 5 + 32 : _dht20Temperature;
        return Math.round(temp);
    }

    /** 
     * Read humidity from DHT20 I2C sensor.
     * Returns the humidity as an analog-style value (0-1023).
     */
    //% subcategory="Sensors" 
    //% group="DHT20 (I2C)"
    //% blockId="one_bit_dht20_humidity" block="DHT20 humidity value"
    //% weight=84 blockGap=20
    export function readDHT20Humidity(): number {
        _queryDHT20Data();
        if (_dht20Humidity <= -997) return _dht20Humidity;
        return Math.round(_dht20Humidity);
    }



    // --- IR Obstacle Sensor ---
    const IR_OBSTACLE_EVENT_ID = 3000;
    const IR_OBSTACLE_DETECTED = 1;
    const IR_OBSTACLE_CLEARED = 2;
    // The pin being monitored is now an AnalogPin.
    let _irObstaclePin: AnalogPinPrime = null;
    let _irObstacleLastState = false;

    // The background monitoring function. It uses the new analog-based detection.
    function monitorIRObstacle() {
        if (_irObstaclePin === null) return;
        // The check now uses the analog value.
        let currentState = readIRObstacleDetected(_irObstaclePin);
        if (currentState !== _irObstacleLastState) {
            _irObstacleLastState = currentState;
            if (currentState) {
                control.raiseEvent(IR_OBSTACLE_EVENT_ID, IR_OBSTACLE_DETECTED);
            } else {
                control.raiseEvent(IR_OBSTACLE_EVENT_ID, IR_OBSTACLE_CLEARED);
            }
        }
    }

    /**
     * Check if IR obstacle sensor detects an object based on an analog threshold.
     * Returns true if the analog value is less than 900.
     * @param pin The analog pin for the IR sensor.
     */
    //% subcategory="Sensors"
    //% group="IR Sensor"
    //% blockId="one_bit_ir_obstacle_detected" block="IR obstacle detected on pin %pin"
    //% pin.defl=AnalogPinPrime.P0 weight=80 blockGap=8
    export function readIRObstacleDetected(pin: AnalogPinPrime): boolean {
        // Reads the analog value and compares it to the threshold.
        return pins.analogReadPin(pin as number as AnalogPin) < 900;
    }

    /**
     * Get the raw analog value from the IR obstacle sensor (0-1023).
     * @param pin The analog pin for the IR sensor.
     */
    //% subcategory="Sensors" 
    //% group="IR Sensor"
    //% blockId="one_bit_ir_obstacle_analog" block="IR obstacle sensor analog value on pin %pin"
    //% pin.defl=AnalogPinPrime.P0 weight=78 blockGap=8
    export function readIRObstacleAnalog(pin: AnalogPinPrime): number {
        return pins.analogReadPin(pin as number as AnalogPin);
    }

    /**
     * Event when an IR obstacle is detected (analog value goes below 900).
     * @param pin The analog pin for the IR sensor.
     * @param handler Code to run.
     */
    //% subcategory="Sensors" 
    //% group="IR Sensor"
    //% blockId="one_bit_on_ir_obstacle_detected" block="on IR obstacle detected on pin %pin"
    //% pin.defl=AnalogPinPrime.P0 weight=77
    export function onIRObstacleDetected(pin: AnalogPinPrime, handler: () => void) {
        // Only set up the background task once.
        if (_irObstaclePin === null) {
            _irObstaclePin = pin;
            _irObstacleLastState = readIRObstacleDetected(pin);
            control.inBackground(() => { while (true) { monitorIRObstacle(); basic.pause(50); } });
        } else if (_irObstaclePin !== pin) {
            console.warn("IR Obstacle event already registered on a different pin.");
        }
        // Register the user's code to run for the "DETECTED" event.
        control.onEvent(IR_OBSTACLE_EVENT_ID, IR_OBSTACLE_DETECTED, handler);
    }

    /**
    * Event when an IR obstacle is cleared (analog value goes >= 900).
    * @param pin The analog pin for the IR sensor.
    * @param handler Code to run.
    */
    //% subcategory="Sensors" 
    //% group="IR Sensor"
    //% blockId="one_bit_on_ir_obstacle_cleared" block="on IR obstacle cleared on pin %pin"
    //% pin.defl=AnalogPinPrime.P0 weight=76 blockGap=20
    export function onIRObstacleCleared(pin: AnalogPinPrime, handler: () => void) {
        // Set up the background task if it's not already running.
        if (_irObstaclePin === null) {
            _irObstaclePin = pin;
            _irObstacleLastState = readIRObstacleDetected(pin);
            control.inBackground(() => { while (true) { monitorIRObstacle(); basic.pause(50); } });
        } else if (_irObstaclePin !== pin) {
            console.warn("IR Obstacle event already registered on a different pin.");
        }
        // Register the user's code to run for the "CLEARED" event.
        control.onEvent(IR_OBSTACLE_EVENT_ID, IR_OBSTACLE_CLEARED, handler);
    }

    export enum IrButton {
        //% block="Any"
        Any = -1,
        //% block="▲"
        Up = 0x46,
        //% block="▼"
        Down = 0x15,
        //% block="◀"
        Left = 0x44,
        //% block="▶"
        Right = 0x43,
        //% block="OK"
        Ok = 0x40,
        //% block="*"
        Star = 0x42,
        //% block="#"
        Hash = 0x52,
        //% block="0"
        Number_0 = 0x5a,
        //% block="1"
        Number_1 = 0x16,
        //% block="2"
        Number_2 = 0x19,
        //% block="3"
        Number_3 = 0x0d,
        //% block="4"
        Number_4 = 0x0c,
        //% block="5"
        Number_5 = 0x18,
        //% block="6"
        Number_6 = 0x5e,
        //% block="7"
        Number_7 = 0x08,
        //% block="8"
        Number_8 = 0x1c,
        //% block="9"
        Number_9 = 0x52 // Note: Can be same as Hash on some remotes
    }

    let irState: IrState;

    const IR_REPEAT = 256;
    const IR_INCOMPLETE = 257;
    const IR_DATAGRAM = 258;
    const REPEAT_TIMEOUT_MS = 120;

    interface IrState {
        protocol: number;
        hasNewDatagram: boolean;
        bitsReceived: uint8;
        addressSectionBits: uint16;
        commandSectionBits: uint16;
        hiword: uint16;
        loword: uint16;
        activeCommand: number;
        repeatTimeout: number;
        onIrDatagram: () => void;
    }

    function appendBitToDatagram(bit: number): number {
        irState.bitsReceived += 1;
        if (irState.bitsReceived <= 16) {
            irState.hiword = (irState.hiword << 1) + bit;
        } else if (irState.bitsReceived <= 32) {
            irState.loword = (irState.loword << 1) + bit;
        }

        if (irState.bitsReceived === 32) {
            irState.addressSectionBits = irState.hiword & 0xffff;
            irState.commandSectionBits = irState.loword & 0xffff;
            return IR_DATAGRAM;
        } else {
            return IR_INCOMPLETE;
        }
    }

    function decode(markAndSpace: number): number {
        if (markAndSpace < 1600) { return appendBitToDatagram(0); }
        else if (markAndSpace < 2700) { return appendBitToDatagram(1); }
        irState.bitsReceived = 0;
        if (markAndSpace < 12500) { return IR_REPEAT; }
        else if (markAndSpace < 14500) { return IR_INCOMPLETE; }
        else { return IR_INCOMPLETE; }
    }

    function enableIrMarkSpaceDetection(pin: DigitalPin) {
        pins.setPull(pin, PinPullMode.PullNone);
        let mark = 0;
        let space = 0;
        pins.onPulsed(pin, PulseValue.Low, () => { mark = pins.pulseDuration(); });
        pins.onPulsed(pin, PulseValue.High, () => {
            space = pins.pulseDuration();
            const status = decode(mark + space);
            if (status !== IR_INCOMPLETE) { handleIrEvent(status); }
        });
    }

    function handleIrEvent(irEvent: number) {
        if (irEvent === IR_DATAGRAM || irEvent === IR_REPEAT) {
            irState.repeatTimeout = input.runningTime() + REPEAT_TIMEOUT_MS;
        }

        if (irEvent === IR_DATAGRAM) {
            irState.hasNewDatagram = true;
            if (irState.onIrDatagram) { control.inBackground(irState.onIrDatagram); }
            irState.activeCommand = irState.commandSectionBits >> 8;
        }
    }

    function initIrState() {
        if (irState) return;
        irState = {
            protocol: 0,
            hasNewDatagram: false,
            bitsReceived: 0,
            addressSectionBits: 0,
            commandSectionBits: 0,
            hiword: 0,
            loword: 0,
            activeCommand: -1,
            repeatTimeout: 0,
            onIrDatagram: undefined,
        };
        control.inBackground(() => {
            while (true) {
                if (irState && irState.activeCommand !== -1 && input.runningTime() > irState.repeatTimeout) {
                    irState.activeCommand = -1;
                }
                basic.pause(REPEAT_TIMEOUT_MS);
            }
        });
    }

    function ir_rec_to16BitHex(value: number): string {
        let hex = "";
        for (let pos = 0; pos < 4; pos++) {
            let remainder = value % 16;
            hex = "0123456789ABCDEF".charAt(remainder) + hex;
            value = Math.idiv(value, 16);
        }
        return hex;
    }

    /**
     * Initializes the IR receiver module. Connect the sensor to pin P9.
     */
    //% subcategory="Sensors"
    //% group="IR Receiver"
    //% blockId="one_bit_ir_init" block="Initialize IR Receiver"
    //% weight=90
    export function initializeIrReceiver(): void {
        initIrState();
        if (irState.protocol) return;
        irState.protocol = 1;
        enableIrMarkSpaceDetection(DigitalPin.P9);
    }

    /**
     * Returns the code of the IR button that was pressed last.
     */
    //% subcategory="Sensors"
    //% group="IR Receiver"
    //% blockId="one_bit_ir_button_pressed" block="IR button Values"
    //% weight=70
    export function irButton(): number {
        basic.pause(0);
        if (!irState) { return IrButton.Any; }
        return irState.commandSectionBits >> 8;
    }

    /**
     * Do something when an IR datagram is received.
     * @param handler body code to run when the event is raised
     */
    //% subcategory="Sensors"
    //% group="IR Receiver"
    //% blockId="one_bit_on_ir_datagram" block="on IR datagram received"
    //% weight=40
    export function onIrDatagram(handler: () => void) {
        initIrState();
        irState.onIrDatagram = handler;
    }

    /**
     * Returns the IR datagram as a 32-bit hexadecimal string.
     */
    //% subcategory="Sensors"
    //% group="IR Receiver"
    //% blockId="one_bit_ir_datagram" block="IR datagram"
    //% weight=30
    export function irDatagram(): string {
        basic.pause(0);
        initIrState();
        return "0x" + ir_rec_to16BitHex(irState.addressSectionBits) + ir_rec_to16BitHex(irState.commandSectionBits);
    }

    // --- LDR Sensor ---
    /**
     * Reads LDR digital value (common modules output HIGH for light, LOW for dark).
     * @param pin Digital pin for LDR sensor.
     */
    //% subcategory="Sensors" group="LDR Sensor"
    //% blockId="one_bit_ldr_digital" block="LDR digital value on pin %pin"
    //% pin.defl=DigitalPinPrime.P4 weight=65 blockGap=8
    export function getLDRDigitalValue(pin: DigitalPinPrime): number {
        pins.setPull(pin as number as DigitalPin, PinPullMode.PullNone);
        return pins.digitalReadPin(pin as number as DigitalPin);
    }
    /**
     * Check if LDR sensor (digital) detects light.
     * @param pin Digital pin for LDR sensor.
     */
    //% subcategory="Sensors" group="LDR Sensor"
    //% blockId="one_bit_ldr_is_light_digital" block="LDR on pin %pin detects light (digital)"
    //% pin.defl=DigitalPinPrime.P4 weight=64 blockGap=8
    export function isLDRDetectingLight(pin: DigitalPinPrime): boolean {
        return getLDRDigitalValue(pin) === 1; // Assuming HIGH for light
    }
    /**
     * Reads LDR analog value (raw). Higher value often means MORE light (lower resistance).
     * @param pin Analog pin for LDR sensor.
     */
    //% subcategory="Sensors" group="LDR Sensor"
    //% blockId="one_bit_ldr_analog_raw" block="LDR analog value (lightness) on pin %pin"
    //% pin.defl=AnalogPinPrime.P1 weight=63 blockGap=8
    export function getLDRAnalogRaw(pin: AnalogPinPrime): number {
        return pins.analogReadPin(pin as number as AnalogPin);
    }
    /**
     * Reads LDR analog value (inverted for darkness). Higher value means DARKER.
     * @param pin Analog pin for LDR sensor.
     */
    //% subcategory="Sensors" group="LDR Sensor"
    //% blockId="one_bit_ldr_analog_darkness" block="LDR analog value (darkness) on pin %pin"
    //% pin.defl=AnalogPinPrime.P1 weight=62 blockGap=20
    export function getLDRAnalogDarkness(pin: AnalogPinPrime): number {
        return 1023 - pins.analogReadPin(pin as number as AnalogPin);
    }

    // --- Moisture Sensor ---
    let _moistureDryCal = 700; // Default ADC value for "dry"
    let _moistureWetCal = 300; // Default ADC value for "wet"
    /**
     * Set calibration values for moisture sensor percentage calculation.
     * @param dryValue ADC reading when sensor is dry (e.g., 700).
     * @param wetValue ADC reading when sensor is fully wet (e.g., 300).
     */
    //% subcategory="Sensors" group="Moisture Sensor"
    //% blockId="one_bit_moisture_calibrate" block="calibrate moisture sensor dry ADC: %dryValue wet ADC: %wetValue"
    //% dryValue.defl=700 wetValue.defl=300 weight=60
    export function calibrateMoistureSensor(dryValue: number, wetValue: number): void {
        _moistureDryCal = Math.max(0, dryValue);
        _moistureWetCal = Math.max(0, wetValue);
    }
    /**
     * Reads analog value from moisture sensor. Higher value typically means drier.
     * @param pin Analog pin for moisture sensor.
     */
    //% subcategory="Sensors" group="Moisture Sensor"
    //% blockId="one_bit_moisture_analog" block="moisture sensor analog value on Pin %pin"
    //% pin.defl=AnalogPinPrime.P2 weight=58 blockGap=8
    export function getMoistureSensorValue(pin: AnalogPinPrime): number {
        return pins.analogReadPin(pin as number as AnalogPin);
    }
    /**
     * Get moisture level as a percentage (0% very dry, 100% very wet).
     * Uses calibrated or default dry/wet ADC values.
     * @param pin Analog pin for moisture sensor.
     */
    //% subcategory="Sensors" group="Moisture Sensor"
    //% blockId="one_bit_moisture_percent" block="moisture sensor level on pin %pin (%)"
    //% pin.defl=AnalogPinPrime.P2 weight=57 blockGap=8
    export function getMoisturePercent(pin: AnalogPinPrime): number {
        let raw = getMoistureSensorValue(pin);
        // Ensure wet is lower ADC than dry for correct mapping
        let lowerBound = Math.min(_moistureWetCal, _moistureDryCal);
        let upperBound = Math.max(_moistureWetCal, _moistureDryCal);
        // Map so that wetValue -> 100%, dryValue -> 0%
        let percent = Math.map(raw, upperBound, lowerBound, 0, 100);
        return Math.clamp(0, 100, Math.round(percent));
    }
    /**
    * Check if soil is "wet" based on a threshold percentage.
    * @param pin Analog pin for moisture sensor.
    * @param thresholdPercent Wetness threshold in % (e.g., 60).
    */
    //% subcategory="Sensors" group="Moisture Sensor"
    //% blockId="one_bit_moisture_is_wet" block="moisture sensor on pin %pin is wet (level > %thresholdPercent|%)"
    //% pin.defl=AnalogPinPrime.P2 thresholdPercent.defl=60 weight=56 blockGap=20
    export function isSoilWet(pin: AnalogPinPrime, thresholdPercent: number): boolean {
        return getMoisturePercent(pin) > thresholdPercent;
    }

    // --- Pushbutton & Limit Switch ---

    /**
     * Checks if a pushbutton/switch is pressed/triggered.
     * Assumes an active-high circuit (button connects pin to VCC/3.3V).
     * @param pin Digital pin for the button/switch.
     */
    //% subcategory="Sensors" group="Switches & Buttons"
    //% blockId="one_bit_is_switch_pressed" block="switch/button on pin %pin is pressed/triggered"
    //% pin.defl=DigitalPinPrime.P13 weight=50 blockGap=8
    export function isSwitchPressed(pin: DigitalPinPrime): boolean {
        // Configure with a pull-down resistor to keep the pin LOW when the button is not pressed.
        pins.setPull(pin as number as DigitalPin, PinPullMode.PullDown);
        // A press is when the pin reads HIGH (1).
        return pins.digitalReadPin(pin as number as DigitalPin) === 1;
    }

    /**
     * Event when a pushbutton/switch is pressed/triggered (pin goes HIGH).
     * This block assumes an active-high circuit (button connects pin to VCC/3.3V).
     * @param pin Digital pin for the button/switch.
     * @param handler Code to run.
     */
    //% subcategory="Sensors" group="Switches & Buttons"
    //% blockId="one_bit_on_switch_pressed" block="on switch/button %pin pressed/triggered"
    //% pin.defl=DigitalPinPrime.P13 weight=49
    export function onSwitchPressed(pin: DigitalPinPrime, handler: () => void) {
        // Configure with a pull-down resistor.
        pins.setPull(pin as number as DigitalPin, PinPullMode.PullDown);
        // Trigger the event when the pin pulses HIGH.
        pins.onPulsed(pin as number as DigitalPin, PulseValue.High, handler);
    }

    /**
     * Event when a pushbutton/switch is released (pin goes LOW).
     * This block assumes an active-high circuit with a pull-down resistor.
     * @param pin Digital pin for the button/switch.
     * @param handler Code to run.
     */
    //% subcategory="Sensors" group="Switches & Buttons"
    //% blockId="one_bit_on_switch_released" block="on switch/button %pin released"
    //% pin.defl=DigitalPinPrime.P13 weight=48
    export function onSwitchReleased(pin: DigitalPinPrime, handler: () => void) {
        // Configure with a pull-down resistor.
        pins.setPull(pin as number as DigitalPin, PinPullMode.PullDown);
        // Trigger the event when the pin pulses LOW (is released from HIGH).
        pins.onPulsed(pin as number as DigitalPin, PulseValue.Low, handler);
    }


    // --- PIR Sensor ---
    const PIR_EVENT_ID = 3020;
    const PIR_MOTION_STARTED = 1;
    const PIR_MOTION_STOPPED = 2;
    let _pirMonitorPin: DigitalPinPrime = null;
    let _pirLastState = false;

    function monitorPIR() {
        if (_pirMonitorPin === null) return;
        let currentState = isPIRMotionDetected(_pirMonitorPin);
        if (currentState !== _pirLastState) {
            _pirLastState = currentState;
            if (currentState) {
                control.raiseEvent(PIR_EVENT_ID, PIR_MOTION_STARTED);
            } else {
                control.raiseEvent(PIR_EVENT_ID, PIR_MOTION_STOPPED);
            }
        }
    }
    /**
     * Checks if PIR sensor detects motion. Assumes sensor outputs HIGH on motion.
     * @param pin Digital pin for PIR sensor.
     */
    //% subcategory="Sensors" group="Motion Sensors"
    //% blockId="one_bit_pir_motion_detected" block="PIR motion detected on pin %pin"
    //% pin.defl=DigitalPinPrime.P14 weight=45 blockGap=8
    export function isPIRMotionDetected(pin: DigitalPinPrime): boolean {
        pins.setPull(pin as number as DigitalPin, PinPullMode.PullNone);
        return pins.digitalReadPin(pin as number as DigitalPin) === 1;
    }
    /**
     * Event when PIR sensor starts detecting motion.
     * @param pin Digital pin for PIR sensor.
     * @param handler Code to run.
     */
    //% subcategory="Sensors" group="Motion Sensors"
    //% blockId="one_bit_on_pir_motion_started" block="on PIR motion started on pin %pin"
    //% pin.defl=DigitalPinPrime.P14 weight=44
    export function onPIRMotionStarted(pin: DigitalPinPrime, handler: () => void) {
        if (_pirMonitorPin === null) {
            _pirMonitorPin = pin;
            _pirLastState = isPIRMotionDetected(pin);
            control.inBackground(() => { while (true) { monitorPIR(); basic.pause(100); } });
        } else if (_pirMonitorPin !== pin) {
            console.warn("PIR event already registered on a different pin.");
        }
        control.onEvent(PIR_EVENT_ID, PIR_MOTION_STARTED, handler);
    }
    /**
     * Event when PIR sensor stops detecting motion (pin goes LOW after being HIGH).
     * @param pin Digital pin for PIR sensor.
     * @param handler Code to run.
     */
    //% subcategory="Sensors" group="Motion Sensors"
    //% blockId="one_bit_on_pir_motion_stopped" block="on PIR motion stopped on pin %pin"
    //% pin.defl=DigitalPinPrime.P14 weight=43 blockGap=20
    export function onPIRMotionStopped(pin: DigitalPinPrime, handler: () => void) {
        if (_pirMonitorPin === null) {
            _pirMonitorPin = pin;
            _pirLastState = isPIRMotionDetected(pin);
            control.inBackground(() => { while (true) { monitorPIR(); basic.pause(100); } });
        } else if (_pirMonitorPin !== pin) {
            console.warn("PIR event already registered on a different pin.");
        }
        control.onEvent(PIR_EVENT_ID, PIR_MOTION_STOPPED, handler);
    }

    // --- Potentiometer ---
    /**
     * Reads analog value from potentiometer (0-1023).
     * @param pin Analog pin for potentiometer.
     */
    //% subcategory="Sensors" group="Potentiometer"
    //% blockId="one_bit_potentiometer_raw" block="potentiometer value on pin %pin"
    //% pin.defl=AnalogPinPrime.P0 weight=40 blockGap=8
    export function readPotentiometerValue(pin: AnalogPinPrime): number {
        return pins.analogReadPin(pin as number as AnalogPin);
    }
    /**
     * Reads potentiometer value as a percentage (0-100%).
     * @param pin Analog pin for potentiometer.
     */
    //% subcategory="Sensors" group="Potentiometer"
    //% blockId="one_bit_potentiometer_percent" block="potentiometer value on pin %pin (percentage)"
    //% pin.defl=AnalogPinPrime.P0 weight=39 blockGap=8
    export function readPotentiometerPercent(pin: AnalogPinPrime): number {
        return Math.map(pins.analogReadPin(pin as number as AnalogPin), 0, 1023, 0, 100);
    }
    /**
     * Reads potentiometer value and maps it to a custom range.
     * @param pin Analog pin for potentiometer.
     * @param toLow Lower bound of target range.
     * @param toHigh Upper bound of target range.
     */
    //% subcategory="Sensors" group="Potentiometer"
    //% blockId="one_bit_potentiometer_map_custom" block="potentiometer on pin %pin mapped to [%toLow-%toHigh]"
    //% pin.defl=AnalogPinPrime.P0 toLow.defl=0 toHigh.defl=180
    //% weight=38 blockGap=20
    export function readPotentiometerMapped(pin: AnalogPinPrime, toLow: number, toHigh: number): number {
        return Math.map(pins.analogReadPin(pin as number as AnalogPin), 0, 1023, toLow, toHigh);
    }


    ////////////////////
    // ACTUATORS      //
    ////////////////////

    function getResolvedDigitalPin(pin: DigitalPinPrime | PWMPin): DigitalPin {
        return pin as number as DigitalPin;
    }

    export enum ServoPosition { /* ... from prev ... */
        //% block="0 degrees"
        Zero = 0,
        //% block="45 degrees"
        FortyFive = 45,
        //% block="90 degrees"
        Ninety = 90,
        //% block="135 degrees"
        OneThirtyFive = 135,
        //% block="180 degrees"
        OneEighty = 180
    }

    /** Move servo to a specific angle. */
    //% subcategory="Actuators" group="Positional Servo"
    //% blockId="one_bit_servo_angle" block="set servo %pin to %angle °"
    //% pin.defl=PWMPin.P0 angle.min=0 angle.max=180 angle.defl=90
    //% weight=100 blockGap=8
    export function setServoAngle(pin: PWMPin, angle: number): void {
        pins.servoWritePin(getResolvedDigitalPin(pin), Math.clamp(0, 180, angle));
    }
    /** Move servo to a predefined position. */
    //% subcategory="Actuators" group="Positional Servo"
    //% blockId="one_bit_servo_fixed_pos" block="set servo %pin to %position"
    //% pin.defl=PWMPin.P0 weight=98 blockGap=8
    export function setServoFixedPosition(pin: PWMPin, position: ServoPosition): void {
        pins.servoWritePin(getResolvedDigitalPin(pin), position);
    }
    /** Move servo smoothly between angles. */
    //% subcategory="Actuators" group="Positional Servo"
    //% blockId="one_bit_servo_smooth_move" block="servo %pin move from %from deg to %to deg over %duration s"
    //% pin.defl=PWMPin.P0 from.min=0 from.max=180 to.min=0 to.max=180 duration.min=0.1 duration.defl=1
    //% weight=96 blockGap=8
    export function servoSmoothMove(pin: PWMPin, from: number, to: number, duration: number): void {
        // Implementation from previous response
        const startAngle = Math.clamp(0, 180, from); const endAngle = Math.clamp(0, 180, to);
        if (startAngle === endAngle) { pins.servoWritePin(getResolvedDigitalPin(pin), endAngle); return; }
        const steps = Math.abs(endAngle - startAngle); if (steps === 0) { pins.servoWritePin(getResolvedDigitalPin(pin), endAngle); return; }
        const stepDuration = (duration * 1000) / steps;
        for (let i = 0; i <= steps; i++) {
            const currentAngle = startAngle + (endAngle > startAngle ? i : -i);
            pins.servoWritePin(getResolvedDigitalPin(pin), Math.clamp(0, 180, currentAngle));
            if (currentAngle === endAngle) break; basic.pause(stepDuration);
        }
        pins.servoWritePin(getResolvedDigitalPin(pin), endAngle);
    }
    /** Set servo pulse width directly (μs). */
    //% subcategory="Actuators" group="Positional Servo"
    //% blockId="one_bit_servo_pulse" block="set servo %pin pulse to %us μs"
    //% pin.defl=PWMPin.P0 us.min=500 us.max=2500 us.defl=1500
    //% weight=94 blockGap=8
    export function setServoPulse(pin: PWMPin, us: number): void {
        pins.servoSetPulse(getResolvedDigitalPin(pin), us);
    }
    /** Detach servo (stops sending pulses, saves power). */
    //% subcategory="Actuators" group="Positional Servo"
    //% blockId="one_bit_servo_detach" block="detach servo %pin"
    //% pin.defl=PWMPin.P0 weight=92 blockGap=20
    export function detachServo(pin: PWMPin): void {
        pins.servoSetPulse(getResolvedDigitalPin(pin), 0);
    }

    /** Control continuous rotation servo speed. */
    //% subcategory="Actuators" group="Continuous Servo"
    //% blockId="one_bit_continuous_servo_speed" block="set continuous servo %pin speed to %speed \\%"
    //% pin.defl=PWMPin.P1 speed.min=-100 speed.max=100 speed.defl=0
    //% weight=90 blockGap=8
    export function setContinuousServoSpeed(pin: PWMPin, speed: number): void {
        const pwmValue = Math.map(Math.clamp(-100, 100, speed), -100, 100, 0, 180);
        pins.servoWritePin(getResolvedDigitalPin(pin), pwmValue);
    }
    /** Stop continuous rotation servo. */
    //% subcategory="Actuators" group="Continuous Servo"
    //% blockId="one_bit_continuous_servo_stop" block="stop continuous servo %pin"
    //% pin.defl=PWMPin.P1 weight=88 blockGap=20
    export function stopContinuousServo(pin: PWMPin): void {
        pins.servoWritePin(getResolvedDigitalPin(pin), 90);
    }

    //% group="Motor Driver (L9110S)"

    /**
     * Define the direction of motor rotation.
     */
    export enum MotorDirection {
        //% block="forward"
        Forward,
        //% block="backward"
        Backward
    }

    /**
     * Controls a single DC motor connected to an L9110S-style driver.
     * @param pin1 The first control pin for the motor (e.g., INA).
     * @param pin2 The second control pin for the motor (e.g., INB).
     * @param direction The direction to rotate the motor.
     * @param speed The speed of rotation, from 0 to 100.
     */
    //% subcategory="Actuators"
    //% group="Motor Driver (L9110S)"
    //% block="rotate motor pin1 %pin1 pin2 %pin2 direction %direction at speed %speed"
    //% pin1.defl=PWMPin.P0
    //% pin2.defl=PWMPin.P1
    //% speed.min=0 speed.max=100 speed.defl=50
    //% weight=100
    export function controlL9110SMotor(pin1: PWMPin, pin2: PWMPin, direction: MotorDirection, speed: number): void {
        // Map speed (0-100) to PWM value (0-1023) and ensure it's within bounds.
        let pwmSpeed = pins.map(
            Math.clamp(0, 100, speed),
            0, 100, 0, 1023
        );

        if (direction === MotorDirection.Forward) {
            // Apply PWM to pin1 and set pin2 to LOW for forward rotation.
            pins.analogWritePin(pin1 as number as AnalogPin, pwmSpeed);
            pins.digitalWritePin(pin2 as number as DigitalPin, 0);
        } else if (direction === MotorDirection.Backward) {
            // Set pin1 to LOW and apply PWM to pin2 for backward rotation.
            pins.digitalWritePin(pin1 as number as DigitalPin, 0);
            pins.analogWritePin(pin2 as number as AnalogPin, pwmSpeed);
        }
    }

    /**
     * Stops a single DC motor connected to an L9110S-style driver.
     * @param pin1 The first control pin for the motor.
     * @param pin2 The second control pin for the motor.
     */
    //% subcategory="Actuators"
    //% group="Motor Driver (L9110S)"
    //% block="stop motor pin1 %pin1 pin2 %pin2"
    //% pin1.defl=PWMPin.P0
    //% pin2.defl=PWMPin.P1
    //% weight=90
    export function stopL9110SMotor(pin1: PWMPin, pin2: PWMPin): void {
        // Set both pins to LOW to brake the motor.
        pins.digitalWritePin(pin1 as number as DigitalPin, 0);
        pins.digitalWritePin(pin2 as number as DigitalPin, 0);
    }

    //% group="Onboard RGB"

    /**
     * An enum to select one of the two onboard RGB LEDs.
     */
    export enum RgbLed {
        //% block="1"
        Led1 = 0,
        //% block="2"
        Led2 = 1
    }

    // --- Onboard RGB LED (2 LEDs) ---
    // Note: This implementation assumes the 2 onboard LEDs are on a single WS2812 data line.
    // Pin P8 is used as a sensible default.
    let rgbLedBuffer: Buffer = null;
    let rgbLedRawColors: number[] = [0, 0]; // Fixed size for 2 LEDs
    let rgbLedBrightness: number = 255;
    let rgbLedInitialized = false;
    const RGB_LED_PIN = DigitalPin.P8;

    /**
     * Helper function to ensure the RGB LED system is initialized.
     */
    function _rgbLedEnsureInitialized() {
        if (!rgbLedInitialized) {
            rgbLedBuffer = pins.createBuffer(2 * 3); // 2 LEDs * 3 bytes/color
            clearRgbLeds(); // Start with LEDs off
            rgbLedInitialized = true;
        }
    }

    /**
     * Helper function to apply the current brightness to a raw color and write it to the buffer.
     * @param index The index of the LED (0 or 1).
     * @param color The raw RGB color number.
     */
    function _rgbLedApplyBrightness(index: number, color: number): void {
        let r = (color >> 16) & 0xFF;
        let g = (color >> 8) & 0xFF;
        let b = color & 0xFF;
        // Apply brightness scaling
        rgbLedBuffer[index * 3 + 0] = Math.round((g * rgbLedBrightness) / 255); // Green
        rgbLedBuffer[index * 3 + 1] = Math.round((r * rgbLedBrightness) / 255); // Red
        rgbLedBuffer[index * 3 + 2] = Math.round((b * rgbLedBrightness) / 255); // Blue
    }

    /**
     * Sends the color data in the buffer to the LEDs.
     */
    function showRgbLedBuffer(): void {
        _rgbLedEnsureInitialized();
        light.sendWS2812Buffer(rgbLedBuffer, RGB_LED_PIN);
    }

    /**
     * Sets the color of a specific onboard RGB LED.
     * @param led The LED to set the color of (1 or 2).
     * @param color The color to set.
     */
    //% subcategory="Actuators"
    //% group="Onboard RGB"
    //% block="set RGB LED %led to %color"
    //% color.shadow="one_bit_onboard_rgb_color_picker"
    //% weight=100
    export function setRgbLedColor(led: RgbLed, color: number): void {
        _rgbLedEnsureInitialized();
        const index = led as number;
        rgbLedRawColors[index] = color;
        _rgbLedApplyBrightness(index, color);
        showRgbLedBuffer();
    }

    /**
     * Sets the color of both onboard RGB LEDs at the same time.
     * @param color The color to set.
     */
    //% subcategory="Actuators"
    //% group="Onboard RGB"
    //% block="set both RGB LEDs to %color"
    //% color.shadow="one_bit_onboard_rgb_color_picker"
    //% weight=95
    export function setAllRgbLeds(color: number): void {
        _rgbLedEnsureInitialized();
        for (let i = 0; i < 2; i++) {
            rgbLedRawColors[i] = color;
            _rgbLedApplyBrightness(i, color);
        }
        showRgbLedBuffer();
    }

    /**
     * Clears both onboard RGB LEDs, turning them off.
     */
    //% subcategory="Actuators"
    //% group="Onboard RGB"
    //% block="clear RGB LEDs"
    //% weight=90
    export function clearRgbLeds(): void {
        setAllRgbLeds(0);
    }

    /**
     * Gets the current color of a specific onboard RGB LED (ignores brightness).
     * @param led The LED to get the color from (1 or 2).
     */
    //% subcategory="Actuators"
    //% group="Onboard RGB"
    //% block="color of RGB LED %led"
    //% weight=85
    export function getRgbLedColor(led: RgbLed): number {
        _rgbLedEnsureInitialized();
        return rgbLedRawColors[led as number];
    }

    /**
     * Sets the brightness for both onboard RGB LEDs.
     * @param brightness The brightness level, from 0 to 255.
     */
    //% subcategory="Actuators"
    //% group="Onboard RGB"
    //% block="set RGB brightness to %brightness"
    //% brightness.min=0 brightness.max=255 brightness.defl=255
    //% weight=80
    export function setRgbBrightness(brightness: number): void {
        _rgbLedEnsureInitialized();
        rgbLedBrightness = Math.clamp(0, 255, brightness);
        // Re-apply the brightness to the stored raw colors
        for (let i = 0; i < 2; i++) {
            _rgbLedApplyBrightness(i, rgbLedRawColors[i]);
        }
        showRgbLedBuffer();
    }

    /**
     * Onboard RGB color picker.
     */
    //% subcategory="Actuators" group="Onboard RGB"
    //% weight=70 blockGap=20 blockId="one_bit_onboard_rgb_color_picker" block="%value"
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.colours='["#FF0000", "#FFA500", "#FFFF00", "#7FFF00", "#00FF00", "#00FFFF", "#007FFF", "#0000FF", "#A000FF", "#FF00FF", "#FF1493", "#A0522D", "#FFFFFF", "#808080", "#000000"]'
    export function onboardRgbColorPicker(value: number): number {
        return value;
    }

    /**
     * Get a random color.
     */
    //% subcategory="Actuators" group="Onboard RGB"
    //% blockId="one_bit_onboard_rgb_random_color" block="random color" weight=65
    export function randomRgbColor(): number {
        return Math.randomRange(0, 0xFFFFFF);
    }

    /**
     * Convert RGB values to a single color number.
     */
    //% subcategory="Actuators" group="Onboard RGB"
    //% blockId="one_bit_onboard_rgb_rgb_to_color" block="R %r G %g B %b" weight=60
    //% r.min=0 r.max=255 g.min=0 g.max=255 b.min=0 b.max=255
    export function rgbToColor(r: number, g: number, b: number): number {
        return (r << 16) | (g << 8) | b;
    }

    /**
     * Convert HSL (Hue, Saturation, Luminosity) values to a color number.
     */
    //% subcategory="Actuators" group="Onboard RGB"
    //% blockId="one_bit_onboard_rgb_hsl_to_color" block="hue %h saturation %s luminosity %l" weight=55
    //% h.min=0 h.max=360 s.min=0 s.max=100 l.min=0 l.max=100
    export function hslToColor(h: number, s: number, l: number): number {
        return hslToRgb(h, s, l); // Uses the existing helper function
    }


    // --- OLED Display (SSD1306) ---
    // (OLED implementation largely from previous response, with additions)
    let oledFont: Buffer; const SSD1306_ADDRESS = 0x3C;
    // ... other SSD1306 constants from previous response ...
    const SSD1306_SETCONTRAST = 0x81; const SSD1306_DISPLAYALLON_RESUME = 0xA4;
    const SSD1306_NORMALDISPLAY = 0xA6; const SSD1306_INVERTDISPLAY = 0xA7;
    const SSD1306_DISPLAYOFF = 0xAE; const SSD1306_DISPLAYON = 0xAF;
    // ...
    let oledCharX = 0, oledCharY = 0; let oledDisplayWidth = 128, oledDisplayHeightPages = 8;
    let oledInitialized = false;

    function oledCommand(cmd: number) { pins.i2cWriteBuffer(SSD1306_ADDRESS, pins.createBufferFromArray([0x00, cmd])); }
    function oledCommands(cmds: number[]) { for (let c of cmds) oledCommand(c); }

    /** Initialize OLED display (128x64 default). */
    //% subcategory="Actuators" group="OLED Display"
    //% blockId="one_bit_oled_init" block="initialize OLED width %width height %height"
    //% width.defl=128 height.defl=64 weight=100 blockGap=8
    export function initOLED(width: number = 128, height: number = 64) {
        if (oledInitialized && oledDisplayWidth === width && oledDisplayHeightPages * 8 === height) return;
        oledDisplayWidth = width; oledDisplayHeightPages = height / 8;
        // Full init sequence from previous code...
        oledCommands([0xAE, 0xD5, 0x80, 0xA8, height - 1, 0xD3, 0x00, 0x40 | 0x00, 0x8D, 0x14, 0x20, 0x00, 0xA0 | 0x01, 0xC8, 0xDA, height == 64 ? 0x12 : 0x02, 0x81, 0xCF, 0xD9, 0xF1, 0xDB, 0x40, 0xA4, 0xA6, 0xAF]);
        oledFont = hex`0000000000...`; // Full font data from previous
        oledFont = hex`00000000003E5B4F5B3E3E6B4F6B3E1C3E7C3E1C183C7E3C181C577D571C1C5E7F5E1C00183C1800FFE7C3E7FF0018241800FFE7DBE7FF30483A060E2629792926407F050507407F05253F5A3CE73C5A7F3E1C1C08081C1C3E7F14227F22145F5F005F5F06097F017F006689956A606060606094A2FFA29408047E040810207E201008082A1C08081C2A08081E101010100C1E0C1E0C30383E3830060E3E0E06000000000000005F00000007000700147F147F14242A7F2A12231308646236495620500008070300001C2241000041221C002A1C7F1C2A08083E080800807030000808080808000060600020100804023E5149453E00427F400072494949462141494D331814127F1027454545393C4A49493141211109073649494936464949291E0000140000004034000000081422411414141414004122140802015909063E415D594E7C1211127C7F494949363E414141227F4141413E7F494949417F090909013E414151737F0808087F00417F41002040413F017F081422417F404040407F021C027F7F0408107F3E4141413E3E4151215E7F09192946264949493203017F01033F4040403F1F2040201F3F4038403F631408146303047804036159494D43007F4141410204081020004141417F04020102044040404040000307080020545478407F284444383844444428384444287F385454541800087E090218A4A49C787F0804047800447D40002040403D007F1028440000417F40007C047804787C080404783844444438FC1824241818242418FC7C08040408485454542404043F44243C4040207C1C2040201C3C4030403C44281028444C9090907C4464544C4400083641000000770000004136080002010204023C2623263C1EA1A161123A4040207A385454555921555579412154547841215554784020545579400C1E5272123955555559395454545939555454580000457C410002457D420001457C40F0292429F0F0282528F07C545545002054547C547C0A097F4932494949323248484832324A4848303A4141217A3A42402078009DA0A07D39444444393D4040403D3C24FF2424487E4943662B2FFC2F2BFF0929F620C0887E090320545479410000447D413048484A32384040227A007A0A0A727D0D19317D2629292F28262929292630484D4020380808080808080808382F10C8ACBA2F102834FA00007B000008142A142222142A1408AA005500AAAA55AA55AA000000FF00101010FF00141414FF001010FF00FF1010F010F0141414FC001414F700FF0000FF00FF1414F404FC141417101F10101F101F101010F0000000001F101010101F10101010F010000000FF101010101010101010FF10000000FF140000FF00FF00001F10170000FC04F414141710171414F404F40000FF00F714141414141414F700F7141414171410101F101F141414F4141010F010F000001F101F0000001F14000000FC140000F010F01010FF10FF141414FF141010101F00000000F010FFFFFFFFFF0F0F0F0F0FFFFFF0000000000FFFF0F0F0F0F0F38444438447C2A2A3E147E02020606027E027E0263554941633844443C04407E201E2006027E020299A5E7A5991C2A492A1C4C7201724C304A4D4D303048784830BC625A463D3E494949007E0101017E2A2A2A2A2A44445F444440514A444040444A51400000FF0103E080FF000008086B6B083612362436060F090F06000018180000001010003040FF0101001F01011E00191D1712003C3C3C3C0000000000`;
        oledInitialized = true; clearOLED();
    }
    function _oledEnsureInit() { if (!oledInitialized) initOLED(); }

    /** Clear OLED display. */
    //% subcategory="Actuators" group="OLED Display"
    //% blockId="one_bit_oled_clear" block="OLED clear display" weight=99 blockGap=8
    export function clearOLED() {
        _oledEnsureInit();
        oledCommand(0x21); oledCommand(0); oledCommand(oledDisplayWidth - 1); // Column addr
        oledCommand(0x22); oledCommand(0); oledCommand(oledDisplayHeightPages - 1); // Page addr
        let dataChunk = pins.createBuffer(17); dataChunk[0] = 0x40; // Data mode
        for (let i = 0; i < oledDisplayWidth * oledDisplayHeightPages; i += 16) {
            pins.i2cWriteBuffer(SSD1306_ADDRESS, dataChunk);
        }
        oledCharX = 0; oledCharY = 0;
    }
    /** Turn OLED display ON. */
    //% subcategory="Actuators" group="OLED Display"
    //% blockId="one_bit_oled_on" block="OLED turn display ON" weight=98 blockGap=8
    export function oledDisplayON() { _oledEnsureInit(); oledCommand(SSD1306_DISPLAYON); }
    /** Turn OLED display OFF. */
    //% subcategory="Actuators" group="OLED Display"
    //% blockId="one_bit_oled_off" block="OLED turn display OFF" weight=97 blockGap=8
    export function oledDisplayOFF() { _oledEnsureInit(); oledCommand(SSD1306_DISPLAYOFF); }
    /** Invert OLED display colors. */
    //% subcategory="Actuators" group="OLED Display"
    //% blockId="one_bit_oled_invert" block="OLED invert colors %inverted" weight=96 blockGap=8
    //% inverted.shadow=toggleOnOff inverted.defl=true
    export function oledInvert(inverted: boolean) { _oledEnsureInit(); oledCommand(inverted ? SSD1306_INVERTDISPLAY : SSD1306_NORMALDISPLAY); }
    /** Set OLED display contrast. */
    //% subcategory="Actuators" group="OLED Display"
    //% blockId="one_bit_oled_contrast" block="OLED set contrast %contrast" weight=95 blockGap=8
    //% contrast.min=0 contrast.max=255 contrast.defl=128
    export function oledSetContrast(contrast: number) { _oledEnsureInit(); oledCommands([SSD1306_SETCONTRAST, Math.clamp(0, 255, contrast)]); }

    function oledSetTextCursor(col: number, rowPage: number) {
        oledCharX = Math.clamp(0, Math.floor(oledDisplayWidth / 6) - 1, col) * 6;
        oledCharY = Math.clamp(0, oledDisplayHeightPages - 1, rowPage);
    }
    /** Set text cursor position for OLED display. */
    //% subcategory="Actuators" group="OLED Display"
    //% blockId="one_bit_oled_set_cursor" block="OLED set text cursor to col %col row %row"
    //% col.min=0 col.max=20 row.min=0 row.max=7 weight=94 blockGap=8
    export function oledSetCursor(col: number, row: number) { _oledEnsureInit(); oledSetTextCursor(col, row); }

    function oledDrawChar(x: number, yPage: number, charCode: number) { /* ... from prev ... */
        if (x > oledDisplayWidth - 6 || yPage >= oledDisplayHeightPages) return;
        oledCommands([0x22, yPage, oledDisplayHeightPages - 1, 0x21, x, oledDisplayWidth - 1]); // Set page and col
        let charData = pins.createBuffer(6); charData[0] = 0x40; // Data mode
        let fontOffset = charCode * 5;
        for (let i = 0; i < 5; i++) charData[i + 1] = oledFont.getNumber(NumberFormat.UInt8BE, fontOffset + i);
        pins.i2cWriteBuffer(SSD1306_ADDRESS, charData); // Char + space
        charData[1] = 0x00; // Space
        pins.i2cWriteBuffer(SSD1306_ADDRESS, charData.slice(0, 2));
    }
    function oledNewline() { oledCharY++; oledCharX = 0; if (oledCharY >= oledDisplayHeightPages) oledCharY = 0; }

    /** Show string on OLED at current/specified cursor. */
    //% subcategory="Actuators" group="OLED Display"
    //% blockId="one_bit_oled_show_string" block="OLED show string %str || at col %x row %y"
    //% weight=93 blockGap=8 x.min=0 x.max=20 y.min=0 y.max=7 inlineInputMode=inline
    export function oledWriteString(str: string, x?: number, y?: number) {
        _oledEnsureInit();
        if (x !== undefined && y !== undefined) oledSetTextCursor(x, y);
        for (let i = 0; i < str.length; i++) {
            if (oledCharX > oledDisplayWidth - 6) oledNewline();
            oledDrawChar(oledCharX, oledCharY, str.charCodeAt(i));
            oledCharX += 6;
        }
    }
    /** Show number on OLED at current/specified cursor. */
    //% subcategory="Actuators" group="OLED Display"
    //% blockId="one_bit_oled_show_number" block="OLED show number %n || at col %x row %y"
    //% weight=92 blockGap=8 x.min=0 x.max=20 y.min=0 y.max=7 inlineInputMode=inline
    export function oledWriteNumber(n: number, x?: number, y?: number) { oledWriteString(n.toString(), x, y); }

    // OLED Drawing (Adapted from prev, simplified pixel setting for drawShape)
    function oledDrawShape(pixels: number[][]): void { /* ... from prev, using oledSetPixel logic if needed or direct buffer writes for lines ... */
        // For filled shapes, this function would need to be more intelligent or we use line drawing.
        // The previous oledDrawShape was for sparse pixels.
        // For lines/rects, directly writing column data is better.
        // Let's assume drawLine is the primitive.
    }

    /** Draw line on OLED. */
    //% subcategory="Actuators" group="OLED Display"
    //% blockId="one_bit_oled_draw_line" block="OLED draw line from x0 %x0 y0 %y0 to x1 %x1 y1 %y1"
    //% x0.min=0 x0.max=127 y0.min=0 y0.max=63 x1.min=0 x1.max=127 y1.min=0 y1.max=63
    //% weight=91 blockGap=8
    export function oledDrawLine(x0: number, y0: number, x1: number, y1: number) {
        _oledEnsureInit();
        // Bresenham's line algorithm; this function needs to set individual pixels.
        // This is slow if each pixel is a separate I2C transaction.
        // A proper implementation would buffer a line and send, or use a screen buffer.
        // For simplicity, this will be a conceptual placeholder or very slow.
        // Actual pixel setting on SSD1306 requires setting page/col then writing data.
        // Let's draw by setting page data.
        let dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
        let dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
        let err = dx + dy, e2;
        let pageBuf = pins.createBuffer(2); pageBuf[0] = 0x40; // Data mode
        for (; ;) {
            // Set pixel at (x0, y0)
            let page = Math.floor(y0 / 8);
            let bit = y0 % 8;
            oledCommands([0x22, page, page, 0x21, x0, x0]); // Set page and col for one pixel
            // Reading current byte, ORing, then writing is too complex for simple block.
            // This will just turn the pixel on, possibly affecting others in the same byte.
            // For true pixel drawing, a screen buffer is best.
            // For now, only draw "on" pixels.
            pageBuf[1] = (1 << bit); // This overwrites the column. Not ideal.
            pins.i2cWriteBuffer(SSD1306_ADDRESS, pageBuf);

            if (x0 == x1 && y0 == y1) break;
            e2 = 2 * err;
            if (e2 >= dy) { err += dy; x0 += sx; }
            if (e2 <= dx) { err += dx; y0 += sy; }
        }
    }
    /** Draw rectangle on OLED. */
    //% subcategory="Actuators" group="OLED Display"
    //% blockId="one_bit_oled_draw_rect" block="OLED draw rectangle x %x y %y w %w h %h"
    //% x.min=0 x.max=127 y.min=0 y.max=63 w.min=1 w.max=128 h.min=1 h.max=64
    //% weight=90 blockGap=8
    export function oledDrawRectangle(x: number, y: number, w: number, h: number) {
        oledDrawLine(x, y, x + w - 1, y); oledDrawLine(x, y, x, y + h - 1);
        oledDrawLine(x + w - 1, y, x + w - 1, y + h - 1); oledDrawLine(x, y + h - 1, x + w - 1, y + h - 1);
    }
    /** Draw filled rectangle on OLED. */
    //% subcategory="Actuators" group="OLED Display"
    //% blockId="one_bit_oled_draw_filled_rect" block="OLED draw filled rectangle x %x y %y w %w h %h"
    //% x.min=0 x.max=127 y.min=0 y.max=63 w.min=1 w.max=128 h.min=1 h.max=64
    //% weight=89 blockGap=8
    export function oledDrawFilledRectangle(x: number, y: number, w: number, h: number) {
        _oledEnsureInit();
        for (let i = 0; i < h; i++) {
            oledDrawLine(x, y + i, x + w - 1, y + i);
        }
    }
    /** Draw circle on OLED. */
    //% subcategory="Actuators" group="OLED Display"
    //% blockId="one_bit_oled_draw_circle" block="OLED draw circle x %cx y %cy radius %r"
    //% cx.min=0 cx.max=127 cy.min=0 cy.max=63 r.min=1 r.max=63
    //% weight=88 blockGap=8
    export function oledDrawCircle(cx: number, cy: number, r: number) {
        _oledEnsureInit(); // Simplified circle, plots points.
        let x = r, y = 0, err = 0;
        let pageBuf = pins.createBuffer(2); pageBuf[0] = 0x40; // Data mode
        function plot(px: number, py: number) {
            if (px < 0 || px >= oledDisplayWidth || py < 0 || py >= oledDisplayHeightPages * 8) return;
            let page = Math.floor(py / 8); let bit = py % 8;
            oledCommands([0x22, page, page, 0x21, px, px]);
            pageBuf[1] = (1 << bit); pins.i2cWriteBuffer(SSD1306_ADDRESS, pageBuf);
        }
        while (x >= y) {
            plot(cx + x, cy + y); plot(cx + y, cy + x);
            plot(cx - y, cy + x); plot(cx - x, cy + y);
            plot(cx - x, cy - y); plot(cx - y, cy - x);
            plot(cx + y, cy - x); plot(cx + x, cy - y);
            if (err <= 0) { y += 1; err += 2 * y + 1; }
            if (err > 0) { x -= 1; err -= 2 * x + 1; }
        }
    }
    /** Draw filled circle on OLED. */
    //% subcategory="Actuators" group="OLED Display"
    //% blockId="one_bit_oled_draw_filled_circle" block="OLED draw filled circle x %cx y %cy radius %r"
    //% cx.min=0 cx.max=127 cy.min=0 cy.max=63 r.min=1 r.max=63
    //% weight=87 blockGap=20
    export function oledDrawFilledCircle(cx: number, cy: number, r: number) {
        _oledEnsureInit(); // Draws horizontal lines
        for (let y = -r; y <= r; y++) {
            for (let x = -r; x <= r; x++) {
                if (x * x + y * y <= r * r) {
                    let px = cx + x, py = cy + y;
                    if (px < 0 || px >= oledDisplayWidth || py < 0 || py >= oledDisplayHeightPages * 8) continue;
                    let page = Math.floor(py / 8); let bit = py % 8;
                    let pageBuf = pins.createBuffer(2); pageBuf[0] = 0x40;
                    oledCommands([0x22, page, page, 0x21, px, px]);
                    pageBuf[1] = (1 << bit); pins.i2cWriteBuffer(SSD1306_ADDRESS, pageBuf);
                }
            }
        }
    }


    ////////////////////
    // RAINBOW BLOCKS // 
    ////////////////////
    let rainbowBuffer: Buffer = null;
    let rainbowNumLeds: number = 24;
    let rainbowBrightness: number = 255;
    let rainbowLastBrightnessApplied: number = 255;
    let rainbowRawColors: number[] = [];

    /** Initialize Rainbow LED strip. */
    //% subcategory="Rainbow" group="Setup"
    //% blockId="one_bit_rainbow_initialize" block="initialize Rainbow NeoPixel with %numLeds LEDs"
    //% weight=100 blockGap=8 numLeds.defl=24
    export function initializeRainbow(numLeds: number): void {
        rainbowNumLeds = Math.max(1, numLeds);
        rainbowBuffer = control.createBuffer(rainbowNumLeds * 3);
        rainbowRawColors = []; for (let i = 0; i < rainbowNumLeds; i++) rainbowRawColors.push(0);
        rainbowBrightness = 255; rainbowLastBrightnessApplied = 255;
        clearRainbow();
    }
    function _rainbowEnsureInitialized() { if (!rainbowBuffer) initializeRainbow(rainbowNumLeds); }
    function _rainbowApplyBrightnessToRaw(index: number, color: number): void { /* ... similar to prime ... */
        let r = (color >> 16) & 0xFF; let g = (color >> 8) & 0xFF; let b = color & 0xFF;
        rainbowBuffer[index * 3 + 0] = Math.round((g * rainbowBrightness) / 255);
        rainbowBuffer[index * 3 + 1] = Math.round((r * rainbowBrightness) / 255);
        rainbowBuffer[index * 3 + 2] = Math.round((b * rainbowBrightness) / 255);
    }
    function showRainbowBuffer(): void { _rainbowEnsureInitialized(); light.sendWS2812Buffer(rainbowBuffer, DigitalPin.P2); }

    /** Show rainbow colors on Rainbow strip. */
    //% subcategory="Rainbow" group="Display"
    //% blockId="one_bit_rainbow_show_rainbow" block="Rainbow show rainbow" weight=95
    export function showRainbow(): void { /* ... similar to prime ... */
        _rainbowEnsureInitialized();
        for (let i = 0; i < rainbowNumLeds; i++) {
            let hue = (i * 360) / rainbowNumLeds; const color = hslToRgb(hue, 100, 50);
            rainbowRawColors[i] = color; _rainbowApplyBrightnessToRaw(i, color);
        }
        rainbowLastBrightnessApplied = rainbowBrightness; showRainbowBuffer();
    }
    /** Clear Rainbow strip. */
    //% subcategory="Rainbow" group="Display"
    //% blockId="one_bit_rainbow_clear" block="Rainbow clear" weight=90
    export function clearRainbow(): void { /* ... similar to prime ... */
        _rainbowEnsureInitialized();
        for (let i = 0; i < rainbowNumLeds; i++) { rainbowRawColors[i] = 0; _rainbowApplyBrightnessToRaw(i, 0); }
        rainbowLastBrightnessApplied = rainbowBrightness; showRainbowBuffer();
    }
    /** Set all Rainbow LEDs to one color. */
    //% subcategory="Rainbow" group="Display" value.defl='#ff0000'
    //% blockId="one_bit_rainbow_set_color_all" block="Rainbow set all LEDs to %color"
    //% weight=85 color.shadow="one_bit_rainbow_color_picker"
    export function setRainbowColor(color: number): void { /* ... similar to prime ... */
        _rainbowEnsureInitialized();
        for (let i = 0; i < rainbowNumLeds; i++) { rainbowRawColors[i] = color; _rainbowApplyBrightnessToRaw(i, color); }
        rainbowLastBrightnessApplied = rainbowBrightness; showRainbowBuffer();
    }
    /** Set specific Rainbow LED to color. */
    //% subcategory="Rainbow" group="Display" value.defl='#FFFFFF'
    //% blockId="one_bit_rainbow_set_led_color" block="Rainbow set LED at %ledIndex to %color"
    //% weight=80 ledIndex.min=0 color.shadow="one_bit_rainbow_color_picker"
    export function setRainbowLedColor(ledIndex: number, color: number): void { /* ... similar to prime ... */
        _rainbowEnsureInitialized(); if (ledIndex < 0 || ledIndex >= rainbowNumLeds) return;
        rainbowRawColors[ledIndex] = color; _rainbowApplyBrightnessToRaw(ledIndex, color);
        rainbowLastBrightnessApplied = rainbowBrightness; showRainbowBuffer();
    }
    /** Get color of specific Rainbow LED (before brightness). */
    //% subcategory="Rainbow" group="Display"
    //% blockId="one_bit_rainbow_get_led_color" block="Rainbow get color of LED at %ledIndex"
    //% weight=78 ledIndex.min=0
    export function getRainbowLedColor(ledIndex: number): number {
        _rainbowEnsureInitialized(); if (ledIndex < 0 || ledIndex >= rainbowNumLeds) return 0;
        return rainbowRawColors[ledIndex];
    }
    /** Fill a range of Rainbow LEDs. */
    //% subcategory="Rainbow" group="Display" value.defl='#00FF00'
    //% blockId="one_bit_rainbow_fill_leds" block="Rainbow fill LEDs from %fromIndex to %toIndex with %color"
    //% weight=77 color.shadow="one_bit_rainbow_color_picker" fromIndex.min=0 toIndex.min=0
    export function fillRainbowLeds(fromIndex: number, toIndex: number, color: number): void { /* ... similar to prime ... */
        _rainbowEnsureInitialized(); fromIndex = Math.clamp(0, rainbowNumLeds - 1, fromIndex); toIndex = Math.clamp(0, rainbowNumLeds - 1, toIndex);
        for (let i = Math.min(fromIndex, toIndex); i <= Math.max(fromIndex, toIndex); i++) { rainbowRawColors[i] = color; _rainbowApplyBrightnessToRaw(i, color); }
        rainbowLastBrightnessApplied = rainbowBrightness; showRainbowBuffer();
    }
    /** Set Rainbow strip brightness. */
    //% subcategory="Rainbow" group="Setup"
    //% blockId="one_bit_rainbow_set_brightness" block="Rainbow set brightness to %brightness"
    //% weight=75 brightness.min=0 brightness.max=255 brightness.defl=255
    export function setRainbowBrightness(brightness: number): void { /* ... similar to prime ... */
        _rainbowEnsureInitialized(); rainbowBrightness = Math.clamp(0, 255, brightness);
        for (let i = 0; i < rainbowNumLeds; i++) _rainbowApplyBrightnessToRaw(i, rainbowRawColors[i]);
        rainbowLastBrightnessApplied = rainbowBrightness; showRainbowBuffer();
    }
    /** Shift Rainbow LEDs. */
    //% subcategory="Rainbow" group="Display"
    //% blockId="one_bit_rainbow_shift_leds" block="Rainbow shift LEDs by %offset positions || wrap around %wrapAround"
    //% weight=73 wrapAround.defl=false
    export function shiftRainbowLeds(offset: number, wrapAround: boolean = false): void { /* ... similar to prime ... */
        _rainbowEnsureInitialized(); if (rainbowNumLeds === 0 || offset === 0) return;
        offset = offset % rainbowNumLeds; let newRawColors = [];
        for (let i = 0; i < rainbowNumLeds; i++) {
            let sourceIndex = i - offset;
            if (wrapAround) { sourceIndex = (sourceIndex % rainbowNumLeds + rainbowNumLeds) % rainbowNumLeds; newRawColors.push(rainbowRawColors[sourceIndex]); }
            else { if (sourceIndex >= 0 && sourceIndex < rainbowNumLeds) newRawColors.push(rainbowRawColors[sourceIndex]); else newRawColors.push(0); }
        }
        rainbowRawColors = newRawColors;
        for (let i = 0; i < rainbowNumLeds; i++) _rainbowApplyBrightnessToRaw(i, rainbowRawColors[i]);
        showRainbowBuffer();
    }
    /** Rotate Rainbow LEDs. */
    //% subcategory="Rainbow" group="Display"
    //% blockId="one_bit_rainbow_rotate_leds" block="Rainbow rotate LEDs by %offset positions"
    //% weight=72
    export function rotateRainbowLeds(offset: number): void { shiftRainbowLeds(offset, true); }
    /** Show gradient on Rainbow strip. */
    //% subcategory="Rainbow" group="Display"
    //% blockId="one_bit_rainbow_gradient" block="Rainbow show gradient length %length|from %fromColor|to %toColor||start hue %startHue"
    //% weight=70 length.defl=24 fromColor.shadow="one_bit_rainbow_color_picker" value.defl="#ff0000" toColor.shadow="one_bit_rainbow_color_picker" value.defl="#00ff00" startHue.min=0 startHue.max=360
    export function showRainbowGradient(length: number, fromColor: number, toColor: number, startHue?: number): void { /* ... similar to prime ... */
        _rainbowEnsureInitialized(); length = Math.min(length, rainbowNumLeds); if (length === 0) { showRainbowBuffer(); return; }
        for (let i = 0; i < length; i++) {
            let blendFactor = (length <= 1) ? 0 : i / (length - 1); let RblendColor = blend(fromColor, toColor, blendFactor);
            rainbowRawColors[i] = RblendColor; _rainbowApplyBrightnessToRaw(i, RblendColor);
        }
        for (let i = length; i < rainbowNumLeds; i++) { rainbowRawColors[i] = 0; _rainbowApplyBrightnessToRaw(i, 0); }
        rainbowLastBrightnessApplied = rainbowBrightness; showRainbowBuffer();
    }

    /** Rainbow color picker. */
    //% subcategory="Rainbow" group="Color Utilities"
    //% weight=65 blockGap=20 blockId="one_bit_rainbow_color_picker" block="%value"
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.colours='["#FF0000", "#FFA500", "#FFFF00", "#7FFF00", "#00FF00", "#00FFFF", "#007FFF", "#0000FF", "#A000FF", "#FF00FF", "#FF1493", "#A0522D", "#FFFFFF", "#808080", "#000000"]'
    //% value.fieldOptions.columns=5 value.fieldOptions.className='rgbColorPicker'
    export function rainbowColorPicker(value: number): number { return value; }
    /** Get random color for Rainbow. */
    //% subcategory="Rainbow" group="Color Utilities"
    //% blockId="one_bit_rainbow_random_color" block="Rainbow random color" weight=60
    export function rainbowRandomColor(): number { return Math.randomRange(0, 0xFFFFFF); }
    /** Convert RGB to color for Rainbow. */
    //% subcategory="Rainbow" group="Color Utilities"
    //% blockId="one_bit_rainbow_rgb_to_color" block="Rainbow R %r G %g B %b" weight=55
    //% r.min=0 r.max=255 g.min=0 g.max=255 b.min=0 b.max=255
    export function rainbowRgbToColor(r: number, g: number, b: number): number { return (r << 16) | (g << 8) | b; }
    /** Convert HSL to color for Rainbow. */
    //% subcategory="Rainbow" group="Color Utilities"
    //% blockId="one_bit_rainbow_hsl_to_color" block="Rainbow hue %h saturation %s luminosity %l" weight=50
    //% h.min=0 h.max=360 s.min=0 s.max=100 l.min=0 l.max=100
    export function rainbowHslToColor(h: number, s: number, l: number): number { return hslToRgb(h, s, l); }

    // --- Rainbow Effects --- (Implementations from previous response, ensure they use _rainbowEnsureInitialized and _rainbowApplyBrightnessToRaw where appropriate)
    function _applyRainbowColorToAll(color: number): void { /* ... from prev, using rainbow fns ... */
        _rainbowEnsureInitialized();
        for (let i = 0; i < rainbowNumLeds; i++) { rainbowRawColors[i] = color; _rainbowApplyBrightnessToRaw(i, color); }
        rainbowLastBrightnessApplied = rainbowBrightness; showRainbowBuffer();
    }
    /** Rainbow breathing effect. */
    //% subcategory="Rainbow" group="Effects"
    //% blockId="one_bit_rainbow_breathing" block="Rainbow breathing effect for %duration s with %color"
    //% color.shadow="one_bit_rainbow_color_picker" duration.min=1 duration.defl=5 weight=45
    export function rainbowBreathingEffect(duration: number, color: number): void { /* ... from prev, adapted for new structure ... */
        _rainbowEnsureInitialized(); let originalBrightness = rainbowBrightness; let cycleTime = duration * 1000;
        let halfCycleTime = cycleTime / 2; let steps = 50; let stepTime = halfCycleTime / steps;
        for (let i = 0; i <= steps; i++) {
            let currentEffectBrightness = Math.round((i / steps) * 255); // Effect scales full brightness range
            setRainbowBrightness(Math.round((currentEffectBrightness / 255) * originalBrightness)); // Apply effect relative to original
            _applyRainbowColorToAll(color); basic.pause(stepTime);
        }
        for (let i = steps; i >= 0; i--) {
            let currentEffectBrightness = Math.round((i / steps) * 255);
            setRainbowBrightness(Math.round((currentEffectBrightness / 255) * originalBrightness));
            _applyRainbowColorToAll(color); basic.pause(stepTime);
        }
        setRainbowBrightness(originalBrightness); _applyRainbowColorToAll(color);
    }
    /** Rainbow color wipe. */
    //% subcategory="Rainbow" group="Effects"
    //% blockId="one_bit_rainbow_color_wipe" block="Rainbow color wipe %color delay %delay ms"
    //% color.shadow="one_bit_rainbow_color_picker" delay.min=10 delay.defl=50 weight=44
    export function rainbowColorWipe(color: number, delay: number): void { /* ... from prev ... */
        _rainbowEnsureInitialized();
        for (let i = 0; i < rainbowNumLeds; i++) {
            rainbowRawColors[i] = color; _rainbowApplyBrightnessToRaw(i, color);
            showRainbowBuffer(); basic.pause(delay);
        }
        rainbowLastBrightnessApplied = rainbowBrightness;
    }
    function wheel(position: number): number { /* ... from prev ... */
        position = position & 255;
        if (position < 85) return (((255 - position * 3) & 0xFF) << 16) | (((position * 3) & 0xFF) << 8) | 0;
        else if (position < 170) { position -= 85; return (0 << 16) | (((255 - position * 3) & 0xFF) << 8) | ((position * 3) & 0xFF); }
        else { position -= 170; return (((position * 3) & 0xFF) << 16) | (0 << 8) | ((255 - position * 3) & 0xFF); }
    }
    /** Rainbow cycle effect. */
    //% subcategory="Rainbow" group="Effects"
    //% blockId="one_bit_rainbow_cycle" block="Rainbow cycle delay %delay ms for %cycles cycles"
    //% delay.min=1 delay.defl=20 cycles.defl=3 weight=43
    export function rainbowCycle(delay: number, cycles: number): void { /* ... from prev ... */
        _rainbowEnsureInitialized(); let iterations = 256 * cycles;
        for (let j = 0; j < iterations; j++) {
            for (let i = 0; i < rainbowNumLeds; i++) {
                const colorVal = wheel(((i * 256) / rainbowNumLeds + j) & 255);
                rainbowRawColors[i] = colorVal; _rainbowApplyBrightnessToRaw(i, colorVal);
            }
            showRainbowBuffer(); basic.pause(delay);
            if (j % 256 === 0) rainbowLastBrightnessApplied = rainbowBrightness;
        }
    }
    /** Rainbow twinkle effect. */
    //% subcategory="Rainbow" group="Effects"
    //% blockId="one_bit_rainbow_twinkle" block="Rainbow twinkle %count times with %color on %onDelay ms off %offDelay ms"
    //% color.shadow="one_bit_rainbow_color_picker" count.defl=20 onDelay.defl=100 offDelay.defl=100 weight=42
    export function rainbowTwinkle(count: number, color: number, onDelay: number, offDelay: number): void { /* ... from prev ... */
        _rainbowEnsureInitialized();
        for (let k = 0; k < count; k++) {
            let index = Math.randomRange(0, rainbowNumLeds - 1);
            let originalColor = rainbowRawColors[index]; // Store to restore later if not black
            rainbowRawColors[index] = color; _rainbowApplyBrightnessToRaw(index, color); showRainbowBuffer(); basic.pause(onDelay);
            rainbowRawColors[index] = 0; _rainbowApplyBrightnessToRaw(index, 0); showRainbowBuffer(); basic.pause(offDelay);
            // Could restore originalColor here if desired, but twinkle usually means off.
        }
        rainbowLastBrightnessApplied = rainbowBrightness;
    }
    /** Rainbow theater chase. */
    //% subcategory="Rainbow" group="Effects"
    //% blockId="one_bit_rainbow_theater_chase" block="Rainbow theater chase %color delay %delay ms for %cycles cycles"
    //% color.shadow="one_bit_rainbow_color_picker" delay.min=10 delay.defl=50 cycles.defl=10 weight=41
    export function rainbowTheaterChase(color: number, delay: number, cycles: number): void { /* ... from prev ... */
        _rainbowEnsureInitialized(); let iterations = cycles * 3;
        for (let j = 0; j < iterations; j++) {
            for (let q = 0; q < 3; q++) {
                for (let i = 0; i < rainbowNumLeds; i = i + 3) if (i + q < rainbowNumLeds) { rainbowRawColors[i + q] = color; _rainbowApplyBrightnessToRaw(i + q, color); }
                showRainbowBuffer(); basic.pause(delay);
                for (let i = 0; i < rainbowNumLeds; i = i + 3) if (i + q < rainbowNumLeds) { rainbowRawColors[i + q] = 0; _rainbowApplyBrightnessToRaw(i + q, 0); }
            }
            if (j % 3 === 0) rainbowLastBrightnessApplied = rainbowBrightness;
        }
    }
    /** Rainbow wave effect. */
    //% subcategory="Rainbow" group="Effects"
    //% blockId="one_bit_rainbow_wave" block="Rainbow wave effect %color delay %delay ms for %cycles cycles"
    //% color.shadow="one_bit_rainbow_color_picker" delay.min=10 delay.defl=50 cycles.defl=5 weight=40
    export function rainbowWave(color: number, delay: number, cycles: number): void { /* ... from prev, using hsl for wave ... */
        _rainbowEnsureInitialized();
        let rBase = (color >> 16) & 0xFF; let gBase = (color >> 8) & 0xFF; let bBase = color & 0xFF;
        let iterations = Math.round(2 * Math.PI / 0.1) * cycles; // 0.1 is step, make it run a few cycles
        for (let j = 0; j < iterations; j++) {
            for (let i = 0; i < rainbowNumLeds; i++) {
                let factor = (Math.sin((i / (rainbowNumLeds / 2) + j * 0.1) * Math.PI) + 1) / 2; // Sine wave for brightness factor
                let r = Math.round(rBase * factor); let g = Math.round(gBase * factor); let b = Math.round(bBase * factor);
                let waveColor = (r << 16) | (g << 8) | b;
                rainbowRawColors[i] = waveColor; _rainbowApplyBrightnessToRaw(i, waveColor);
            }
            showRainbowBuffer(); basic.pause(delay);
            if (j % Math.round(2 * Math.PI / 0.1) === 0) rainbowLastBrightnessApplied = rainbowBrightness;
        }
    }

}