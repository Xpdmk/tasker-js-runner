import type { TaskParameterType } from './tasker'

const fakeTasker = {
  // Exported from Tasker. v1 tv5.4.3b.bf

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#alarmVol
   * 
   * Set the alarm volume to level.
   * 
   * @param {*} level - Range: 0 - 7. 0 will mute alarms.
   * @param {*} [display] - If true, the new level will be flashed up on-screen.
   * @param {*} [sound] - If true, a tone will sound at the new level.
   */
  alarmVol(level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, display?: number, sound?: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#audioRecord
   * 
   * The JavaScript does not wait for the audio recording to complete. audioRecordStop function is available to stop the recording.
   * 
   * @param {*} destPath - where to put the recording. Note that a file extension is not necessary, it will correspond to the selected format. 
   * @param {*} source - def, mic, call, callout or callin
   * @param {*} codec - amrn, amrw or aac
   * @param {*} format - mp4, 3gpp, amrn or amrw
   */
  audioRecord(destPath: string, source: 'def' | 'mic' | 'call' | 'callout' | 'callin' | 'codec', codec: 'amrn' | 'amrw' | 'aac', format: 'mp4' | '3gpp' | 'amrn' | 'amrw'): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#audioRecordStop
   * 
   * Stop recording previously initiated by audioRecord(). 
   * 
   */
  audioRecordStop(): boolean {return true;},
  
  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#btVoiceVol
   * 
   * Set the bluetooth voice volume to level.
   * 
   * @param {*} level - Range: 0 - 15.
   * @param {*} [display] - If true, the new level will be flashed up on-screen.
   * @param {*} [sound] - If true, a tone will sound at the new level.
   */
  btVoiceVol(level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15, display?: number, sound?: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#browseURL
   * 
   * Open the default browser at the specifed URL.
   * 
   * @param {*} url
   */
  browseURL(url: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#button
   * 
   * Simulate a press of the named button.
   * 
   * This function requires a rooted device. 
   * 
   * @param {*} name - must be one of these values: back, call, camera, endcall, menu, volup, voldown or search.
   */
  button(name: 'back' | 'call' | 'camera' | 'endcall' | 'menu' | 'volup' | 'voldown' | 'search'): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#call
   * 
   * Make a phone call.
   * 
   * @param {*} num 
   * @param {*} autoDial - If false, the phone app will be brought up with the number pre-inserted, if true the number will also be dialed. 
   */
  call(num: string, autoDial: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#callBlock
   * 
   * Block outgoing calls matching numMatch.
   * 
   * @param {*} numMatch 
   * @param {*} showInfo - If true, Tasker will flash a message when a call is blocked. 
   */
  callBlock(numMatch: string, showInfo: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#callDivert
   * 
   * Divert outgoing calls matching fromMatch to the number to.
   * 
   * @param {*} fromMatch 
   * @param {*} to 
   * @param {*} showInfo - If true, Tasker will flash a message when a call is diverted. 
   */
  callDivert(fromMatch: string, to: string, showInfo: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#callRevert
   * 
   * Stop blocking or diverting outgoing calls previously specified with callBlock or callDivert. 
   * 
   * @param {*} numMatch 
   */
  callRevert(numMatch: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#callVol
   * 
   * Set the call speaker volume to level.
   * 
   * @param {*} level - Range: 0 - 7. 0 will make phone calls difficult.
   * @param {*} [display] - If true, the new level will be flashed up on-screen.
   * @param {*} [sound] - If true, a tone will sound at the new level.
   */
  callVol(level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, display?: number, sound?: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#carMode
   * 
   * Turn on or off Android Car Mode. 
   * 
   * @param {*} enabled 
   */
  carMode(enabled: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#clearKey
   * 
   * Clear the passphrase for the specified keyName.
   * 
   * See Also: [Encryption](https://tasker.joaoapps.com/userguide/en/encryption.html) in the Userguide.
   * 
   * @param {*} keyName 
   */
  clearKey(keyName: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#composeEmail
   * 
   * Show an email composition dialog with any specified fields pre-filled.
   * 
   * The JavaScript does not wait for the email to be sent before continuing. 
   * 
   * @param {*} to 
   * @param {*} subject 
   * @param {*} message 
   */
  composeEmail(to: string, subject: string, message: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#composeMMS
   * 
   * Show an MMS composition dialog with any specified fields pre-filled.
   * 
   * The JavaScript does not wait for the MMS to be sent before continuing. 
   * 
   * @param {*} to 
   * @param {*} subject 
   * @param {*} message 
   * @param {*} attachmentPath 
   */
  composeMMS(to: string, subject: string, message: string, attachmentPath: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#composeSMS
   * 
   *  Show an SMS composition dialog with any specified fields pre-filled.
   * 
   * The JavaScript does not wait for the SMS to be sent before continuing. 
   * 
   * @param {*} to 
   * @param {*} message 
   */
  composeSMS(to: string, message: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#convert
   * 
   * Convert from one type of value to another.
   * 
   * See also: action Variable Convert. 
   * 
   * @param {*} val 
   * @param {*} conversionType - One of the string constants: byteToKbyte, byteToMbyte, byteToGbyte, datetimeToSec, secToDatetime, secToDatetimeM, secToDatetimeL, htmlToText, celsToFahr, fahrToCels, inchToCent, metreToFeet, feetToMetre, kgToPound, poundToKg, kmToMile, mileToKm, urlDecode, urlEncode, binToDec, decToBin, hexToDec, decToHex, base64encode base64decode, toMd5, toSha1, toLowerCase, toUpperCase, toUpperCaseFirst.
   */
  convert(
    val: string | number, 
    conversionType: 
      | 'byteToKbyte'
      | 'byteToMbyte' 
      | 'byteToGbyte' 
      | 'datetimeToSec'
      | 'secToDatetime' 
      | 'secToDatetimeM' 
      | 'secToDatetimeL' 
      | 'htmlToText' 
      | 'celsToFahr' 
      | 'fahrToCels' 
      | 'inchToCent' 
      | 'metreToFeet' 
      | 'feetToMetre' 
      | 'kgToPound' 
      | 'poundToKg' 
      | 'kmToMile'
      | 'mileToKm' 
      | 'urlDecode' 
      | 'urlEncode' 
      | 'binToDec' 
      | 'decToBin' 
      | 'hexToDec' 
      | 'decToHex' 
      | 'base64encode' 
      | 'base64decode' 
      | 'toMd5' 
      | 'toSha1' 
      | 'toLowerCase' 
      | 'toUpperCase' 
      | 'toUpperCaseFirst'
    ): string {return '';},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#createDir
   * 
   * Create the named dirPath. If createParent is specified and any parent directory does not exist, it will also be created. 
   * 
   * @param {*} dirPath 
   * @param {*} createParent 
   * @param {*} [useRoot] - If true, the operation will be performed as the root user (where available).
   */
  createDir(dirPath: string, createParent: boolean, useRoot?: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#createScene
   * 
   * Create the named scene without displaying it. 
   * 
   * @param {*} sceneName 
   */
  createScene(sceneName: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#cropImage
   * 
   * Crop an image in Tasker's image buffer previously loaded via loadImage. 
   * 
   * @param {*} fromLeftPercent 
   * @param {*} fromRightPercent 
   * @param {*} fromTopPercent 
   * @param {*} fromBottomPercent 
   */
  cropImage(fromLeftPercent: number, fromRightPercent: number, fromTopPercent: number, fromBottomPercent: number): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#decryptDir
   * 
   * As decryptFile(), but decrypts each file in the specified directory in turn. 
   * 
   * @param {*} path 
   * @param {*} key 
   * @param {*} removeKey 
   */
  decryptDir(path: string, key: string, removeKey: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#decryptFile
   * 
   * Decrypt the specified file using the encryption parameters specified in Menu / Prefs / Action.
   * 
   * If removeKey is not set, the entered passphrase will be reapplied automatically to the next encryption/decryption operation with the specified keyName.
   * 
   * See Also: [Encryption](https://tasker.joaoapps.com/userguide/en/encryption.html) in the Userguide, [Decrypt File](https://tasker.joaoapps.com/userguide/en/help/ah_decrypt_file.html) action.
   * 
   * @param {*} path 
   * @param {*} key 
   * @param {*} removeKey 
   */
  decryptFile(path: string, key: string, removeKey: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#deleteDir
   * 
   * Delete the named dirPath. recurse must be specified if the directory is not empty.
   * 
   * @param {*} dirPath 
   * @param {*} recurse 
   * @param {*} [useRoot] - If true, the operation will be performed as the root user (where available). 
   */
  deleteDir(dirPath: string, recurse: boolean, useRoot?: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#deleteFile
   * 
   * Delete the named filePath.
   * 
   * See also: action [Delete File](https://tasker.joaoapps.com/userguide/en/help/ah_delete_file.html) 
   * 
   * @param {*} filePath 
   * @param {*} shredTimes - Range: 0 - 10.
   * @param {*} [useRoot] - If true, the operation will be performed as the root user (where available).
   */
  deleteFile(filePath: string, shredTimes: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10, useRoot?: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#destroyScene
   * 
   * Hide the named scene if it's visible, then destroy it. 
   * 
   * @param {*} sceneName 
   */
  destroyScene(sceneName: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#disable
   * 
   * Disable Tasker.
   * 
   */
  disable(): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#displayAutoBright
   * 
   * Whether the display brightness should automatically adjust to the ambient light or not. 
   * 
   * @param {*} enabled 
   */
  displayAutoBright(enabled: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#displayAutoRotate
   * 
   * Whether the display orientation should change based on the physical orientation of the device. 
   * 
   * @param {*} enabled 
   */
  displayAutoRotate(enabled: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#displayTimeout
   * 
   * How long the period of no-activity should be before the display is turned off. 
   * 
   * @param {*} hours 
   * @param {*} minutes 
   * @param {*} seconds 
   */
  displayTimeout(hours: number, minutes: number, seconds: number): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#dpad
   * 
   * Simulate a movement or press of the hardware dpad (or trackball).
   * 
   * This function requires a rooted device. 
   * 
   * @param {*} direction - One of up, down, left, right or press.
   * @param {*} noRepeats 
   */
  dpad(direction: 'up' | 'down' | 'left' | 'right' | 'press', noRepeats: number): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#dtmfVol
   * 
   * Set the DTMF volume to level. The function is a bit of a mystery...
   * 
   * @param {*} level - Range: 0 - 15.
   * @param {*} [display] - If true, the new level will be flashed up on-screen.
   * @param {*} [sound] - If true, a tone will sound at the new level.
   */
  dtmfVol(level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15, display?: number, sound?: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#elemBackColour
   * 
   * Set the background colour of the specified scene element.
   * 
   * See also: action [Element Back Colour](https://tasker.joaoapps.com/userguide/en/help/ah_scene_element_background_colour.html). 
   * 
   * @param {*} scene 
   * @param {*} element 
   * @param {*} startColor 
   * @param {*} endColour 
   */
  elemBackColour(scene: string, element: string, startColor: string, endColour: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#elemBorder
   * 
   * Set the border colour and width of the specified scene element. 
   * 
   * @param {*} scene 
   * @param {*} element 
   * @param {*} width 
   * @param {*} colour 
   */
  elemBorder(scene: string, element: string, width: number, colour: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#elemPosition
   * 
   * Move an element within it's scene.
   * 
   * See also: action [Element Position](https://tasker.joaoapps.com/userguide/en/help/ah_scene_element_position.html). 
   * 
   * @param {*} scene 
   * @param {*} element 
   * @param {*} orientation - One of port or land.
   * @param {*} x 
   * @param {*} y 
   * @param {*} animMS - Indicates the duration of the corresponding animation in MS. A zero-value indicates no animation.
   */
  elemPosition(scene: string, element: string, orientation: 'port' | 'land', x: number, y: number, animMS: number): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#elemText
   * 
   * Set the text of the specified scene element.
   * 
   * See also: action [Element Text](https://tasker.joaoapps.com/userguide/en/help/ah_scene_element_text.html). 
   * 
   * @param {*} scene 
   * @param {*} element 
   * @param {*} position - One of repl (replace existing text completely), start (insert before existing text) or end (append after existing text).
   * @param {*} text 
   */
  elemText(scene: string, element: string, position: 'repl' | 'start' | 'end', text: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#elemTextColour
   * 
   * Set the text colour of the specified scene element.
   * 
   * See also: action [Element Text Colour](https://tasker.joaoapps.com/userguide/en/help/ah_scene_element_text_colour.html). 
   * 
   * @param {*} scene 
   * @param {*} element 
   * @param {*} colour 
   */
  elemTextColour(scene: string, element: string, colour: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#elemTextSize
   * 
   * Set the text size of the specified scene element.
   * 
   * See also: action [Element Text Size](https://tasker.joaoapps.com/userguide/en/help/scene_element_text_size.html). 
   * 
   * @param {*} scene 
   * @param {*} element 
   * @param {*} size 
   */
  elemTextSize(scene: string, element: string, size: number): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#elemVisibility
   * 
   * Make the specified scene element visible or invisible.
   * 
   * See also: action [Element Visibility](https://tasker.joaoapps.com/userguide/en/help/ah_scene_element_visibility.html). 
   * 
   * @param {*} scene 
   * @param {*} element 
   * @param {*} visible 
   * @param {*} animationTimeMS 
   */
  elemVisibility(scene: string, element: string, visible: boolean, animationTimeMS: number): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#endCall
   * 
   * Terminate the current call (if there is one). 
   * 
   */
  endCall(): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#enableProfile
   * 
   * Enable or disable the named Tasker profile. 
   * 
   * @param {*} name 
   * @param {*} enable 
   */
  enableProfile(name: string, enable: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#encryptDir
   * 
   * As encryptFile(), but encrypts each file in the specified directory in turn. 
   * 
   * @param {*} path 
   * @param {*} keyName 
   * @param {*} rememberKey 
   * @param {*} shredOriginal 
   */
  encryptDir(path: string, keyName: string, rememberKey: boolean, shredOriginal: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#encryptFile
   * 
   * Encrypt the specified file using the encryption parameters specified in Menu / Prefs / Action.
   * 
   * See Also: [Encryption](https://tasker.joaoapps.com/userguide/en/encryption.html) in the Userguide, [Encrypt File](https://tasker.joaoapps.com/userguide/en/help/ah_encrypt_file.html) action.
   * 
   * @param {*} path 
   * @param {*} keyName 
   * @param {*} rememberKey - If true, the entered passphrase will be reapplied automatically to the next encryption/decryption operation with the specified keyName.
   * @param {*} shredOriginal - If true, the original file will be overwritten several times with random bits if encryption is successful.
   */
  encryptFile(path: string, keyName: string, rememberKey: boolean, shredOriginal: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#enterKey
   * 
   * Show a dialog to enter the passphrase for the specified keyName. The JavaScript waits until the dialog has been dismissed or the timeout reached.
   * 
   * See Also: [Encryption](https://tasker.joaoapps.com/userguide/en/encryption.html) in the Userguide
   * 
   * @param {*} title 
   * @param {*} keyName 
   * @param {*} showOverKeyguard 
   * @param {*} confirm - If true, the passphrase must be entered twice to ensure it is correct.
   * @param {*} [background] - A file path or file URI to a background image.
   * @param {*} layout - The name of a user-created scene to use in place of the built-in scene. 
   * @param {*} timeoutSecs 
   */
  enterKey(title: string, keyName: string, showOverKeyguard: boolean, confirm: boolean, background?: string, layout: string, timeoutSecs: number): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#exit
   * 
   * Stop execution of the JavaScript. 
   * 
   */
  exit(){},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#flash
   * 
   * Flash a short-duration Android 'Toast' message. In testing environment the message will be logged in console.
   * 
   * @param {*} message 
   */
  flash(message: string){console.log(message)},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#flashLong
   * 
   * Flash a long-duration Android 'Toast' message. In testing environment the message will be logged in console.
   * 
   * @param {*} message 
   */
  flashLong(message: string){console.log(message)},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#filterImage
   * 
   * Filter an image previously loaded into Tasker's image buffer via loadImage()
   * 
   * @param {*} mode - Possible values:
   * - bw: convert to black & white, using value as a threshold
   * - eblue: enhance blue values by value
   * - egreen: enhance green values by value
   * - ered: enhance red values by value
   * - grey: convert to greyscale, value is unused
   * - alpha: set pixel alpha (opposite of transparency) to value
   * @param {*} value - Range: 1 - 254.
   */
  filterImage(
    mode: 
      | 'bw'
      | 'eblue'
      | 'egreen'
      | 'ered'
      | 'grey'
      | 'alpha', 
    value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 147 | 148 | 149 | 150 | 151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 | 160 | 161 | 162 | 163 | 164 | 165 | 166 | 167 | 168 | 169 | 170 | 171 | 172 | 173 | 174 | 175 | 176 | 177 | 178 | 179 | 180 | 181 | 182 | 183 | 184 | 185 | 186 | 187 | 188 | 189 | 190 | 191 | 192 | 193 | 194 | 195 | 196 | 197 | 198 | 199 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 209 | 210 | 211 | 212 | 213 | 214 | 215 | 216 | 217 | 218 | 219 | 220 | 221 | 222 | 223 | 224 | 225 | 226 | 227 | 228 | 229 | 230 | 231 | 232 | 233 | 234 | 235 | 236 | 237 | 238 | 239 | 240 | 241 | 242 | 243 | 244 | 245 | 246 | 247 | 248 | 249 | 250 | 251 | 252 | 253 | 254): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#flipImage
   * 
   * Flip an image previously loaded into Tasker's image buffer via loadImage()
   * 
   * @param {*} horizontal - If false, the image is flipped vertically. 
   */
  flipImage(horizontal: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#getLocation
   * 
   * Try to get a fix of the current device location.
   * 
   * Fix coordinates are stored in the global Tasker variables %LOC (GPS) and/or %LOCN (Net). The value can be retrieved with the global function. Several other parameters of the fix are also available, see Variables.
   * 
   * @example 
   * var lastFix = global( 'LOC' );
   * if ( getLocation( 'gps' ) && ( global( 'LOC' ) != lastFix ) ) {
   *   flash( "New fix: " + global( 'LOC' ) );
   * }
   * 
   * See also: action Get Location, function stopLocation. 
   * 
   * @param {*} source - One of gps, net or any.
   * @param {*} keepTracking - If true, the specified source(s) will be left tracking with the purpose of providing a much quicker fix next time the function is called.
   * @param {*} timeoutSecs 
   */
  getLocation(source: string, keepTracking: boolean, timeoutSecs: number): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#getVoice
   * 
   * Get voice input and convert to text.
   * 
   * @param {*} prompt - A label for the dialog that is shown during voice acquisition.
   * @param {*} languageModel - A clue as to the context of the speech for the speech recognition engine. It must be one of web for 'web search' or free for 'free-form'. 
   * @param {*} timeoutSecs
   * @returns {*} - 'undefined' if the voice acquisition failed, otherwise it's an array of possible matching texts.
   */
  getVoice(prompt: string, languageModel: string, timeoutSecs: number): 'undefined' | Array<string> {return [''];},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#global
   * 
   * Retrieve the value of a Tasker global variable. Prefixing the name with % is optional.
   * 
   * @example
   * flash( global( '%DogName' ) );
   * 
   * @param {*} varName 
   */
  global(varName: string): string {if(varName=='SDK'||varName=='%SDK'){return '0';}else{return '';}},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#goHome
   * 
   * Go to the Android home screen. screenNum is not supported by all home screens. 
   * 
   * @param {*} screenNum 
   */
  goHome(screenNum: number){},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#haptics
   * 
   * Enable/disable system setting Haptic Feedback. 
   * 
   * @param {*} enabled 
   */
  haptics(enabled: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#hideScene
   * 
   * Hide the named scene if it's visible. 
   * 
   * @param {*} sceneName 
   */
  hideScene(sceneName: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#listFiles
   * 
   * List all files in the specified dirPath.
   * 
   * @example
   * var files = listFiles( '/sdcard' );
   * var arr = files.split( '\n' );
   * flash( 'Found ' + arr.length + ' files' );
   * 
   * @param {*} dirPath 
   * @param {*} hiddenToo - If true, files starting with period are included, otherwise they are not.
   * @returns {*} - A newline-separated list of subfiles. If no files or found or an error occurs, the returned value will be undefined.
   */
  listFiles(dirPath: string, hiddenToo: boolean): string {return '';},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#loadApp
   * 
   * Start up the named app.
   * 
   * @param {*} name - Can be a package name or app label, it's tested first against known package names. Note: app label could be localized to another language if the script is used in an exported app.
   * @param {*} data - URI format and app-specific.
   * @param {*} excludeFromRecents - If true, the app will not appear in the home screen 'recent applications' list. 
   */
  loadApp(name: string, data: string, excludeFromRecents: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#loadImage
   * 
   * Load an image into Tasker's internal image buffer.
   * 
   * See also [Load Image](https://tasker.joaoapps.com/userguide/en/help/ah_load_image.html) action.
   * 
   * @param {*} uri - The following uri formats are currently supported: file:// followed by a local file path 
   */
  loadImage(uri: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#local
   * 
   * Retrieve the value of a Tasker scene-local variable.
   * 
   * This function is only for use by JavaScript embedded in HTML and accessed via a WebView scene element. 
   * 
   * @param {*} varName - The name should not be prefixed with %.
   */
  local(varName: string): string {return '';},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#lock
   * 
   * Show a lock screen, preventing user interaction with the covered part of the screen. The JavaScript waits until the code has been entered or the lock cancelled (see below).
   * 
   * @param {*} title 
   * @param {*} code - The numeric code which must be entered for unlock.
   * @param {*} allowCancel  - Show a button to remove the lockscreen, which causes a return to the Android home screen.
   * @param {*} rememberCode - The code will be remembered and automatically entered when the lock screen is show in future, until the display next turns off.
   * @param {*} fullScreen 
   * @param {*} [background] - A file path or file URI to a background image.
   * @param {*} layout - The name of a user-created scene to use in place of the built-in lock scene.
   */
  lock(title: string, code: string, allowCancel: boolean, rememberCode: boolean, fullScreen: boolean, background?: string, layout: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#mediaControl
   * 
   * Control media via simulation of hardware buttons.
   * 
   * @param {*} action - Possible values: next, pause, prev, toggle, stop or play.
   */
  mediaControl(action: 'next' | 'pause' | 'prev' | 'toggle' | 'stop' | 'play'): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#mediaVol
   * 
   * Set the media volume to level.
   * 
   * @param {*} level - Range: 0 - 15. 0 will mute music.
   * @param {*} [display] - If true, the new level will be flashed up on-screen.
   * @param {*} [sound] - If true, a tone will sound at the new level.
   */
  mediaVol(level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15, display?: number, sound?: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#micMute
   * 
   * Mute or unmute the device's microphone (if present), 
   * 
   * @param {*} muted 
   */
  micMute(muted: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#mobileData
   * 
   * Enable or disable the system Mobile Data setting.
   * 
   * See also: action [Mobile Data](https://tasker.joaoapps.com/userguide/en/help/ah_mobile_data_direct.html)
   * 
   * @param {*} enabled
   */
  mobileData(enabled: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#musicBack
   * 
   *  Skip back by seconds during playback of a music file previously started by musicPlay.
   * 
   * See also: 
   * @see musicSkip 
   * @see musicStop 
   * 
   * @param {*} seconds 
   */
  musicBack(seconds: number): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#musicPlay
   * 
   * Play a music file via Tasker's internal music player.
   * 
   * This function does not not wait for completion.
   * 
   * See also: 
   * @see musicStop
   * @see musicBack
   * @see musicSkip 
   * 
   * @param {*} path 
   * @param {*} [offsetSecs=0] 
   * @param {*} [loop=false]
   * @param {*} [stream="media"] - Audio stream the music should be played
   */
  musicPlay(path: string, offsetSecs?: number, loop?: boolean, stream?: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#musicSkip
   * 
   * Skip forwards by seconds during playback of a music file previously started by musicPlay.
   * 
   * See also: 
   * @see musicBack
   * @see musicStop 
   * 
   * @param {*} seconds 
   */
  musicSkip(seconds: number): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#musicStop
   * 
   *  Stop playback of a music file previously started by musicPlay.
   * 
   * See also: 
   * @see musicBack
   * @see musicSkip 
   * 
   */
  musicStop(): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#nightMode
   * 
   * Turn on or off Android Night Mode. 
   * 
   * @param {*} enabled 
   */
  nightMode(enabled: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#notificationVol
   * 
   * Set the notification volume to level.
   * 
   * Note: On some devices Notification and Ringer volume are linked, changing one will change the other. There may be an Android setting for controlling that behaviour.
   * 
   * @param {*} level - Range: 0 - 7. 0 will mute the notification sound.
   * @param {*} display - If true, the new level will be flashed up on-screen.
   * @param {*} sound - If true, a tone will sound at the new level.
   */
  notificationVol(level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, display?: number, sound?: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#performTask
   * 
   * Run the Tasker task taskName.
   * 
   * Note that the JavaScript does not wait for the task to complete.
   * 
   * @param {*} taskName 
   * @param {*} priority 
   * @param {*} [parameterOne] 
   * @param {*} [parameterTwo] 
   */
  performTask(taskName: string, priority: number | string, parameterOne?: string, parameterTwo?: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#popup
   * 
   * Show a popup dialog. The JavaScript waits until the popup has been dismissed or the timeout reached.
   * 
   * @param {*} title 
   * @param {*} text 
   * @param {*} showOverKeyguard 
   * @param {*} [background] - A file path or file URI to a background image.
   * @param {*} layout - The name of a user-created scene to use in place of the built-in popup scene. 
   * @param {*} timeoutSecs 
   */
  popup(title: string, text: string, showOverKeyguard: boolean, background?: string, layout: string, timeoutSecs: number): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#profileActive
   * 
   * Whether the named Tasker profile is currently active. Returns false if the profile name is unknown. 
   * 
   * @param {*} profileName 
   */
  profileActive(profileName: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#pulse
   * 
   * Enable or disable the Android Notification Pulse system setting. 
   * 
   * @param {*} enabled 
   */
  pulse(enabled: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#readFile
   * 
   * Read the contents of a text file. 
   * 
   * @param {*} path 
   */
  readFile(path: string): string {return ' ';},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#reboot
   * 
   * Reboot the device.
   * 
   * Requires a rooted device.
   * 
   * See also: 
   * @see shutdown
   * 
   * @param {*} type - normal, recovery or bootloader. It can be ommitted and defaults to normal.
   */
  reboot(type?: 'normal' | 'recovery' | 'bootloader'): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#resizeImage
   * 
   * Scale the current image in Tasker's image buffer to the specified dimensions. 
   * 
   * @param {*} width 
   * @param {*} height 
   */
  resizeImage(width: number, height: number): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#ringerVol
   * 
   * Set the ringer volume to level. 
   * 
   * If you want to put your phone in vibrate or silent mode, use siletMode function, not this.
   * 
   * Note: On some devices Notification and Ringer volume are linked, changing one will change the other. There may be an Android setting for controlling that behaviour.
   * 
   * @param {*} level - Range: 0 - 7.
   * @param {*} display - If true, the new level will be flashed up on-screen.
   * @param {*} sound - If true, a tone will sound at the new level.
   */
  ringerVol(level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, display?: number, sound?: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#rotateImage
   * 
   * Rotate the current image in Tasker's image buffer.
   * 
   * @param {*} direction - One of left or right
   * @param {*} degrees - One of 45, 90, 135 or 180. 
   */
  rotateImage(direction: 'left' | 'right', degrees: 45 | 90 | 135 | 180): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#saveImage
   * 
   * Save the current image in Tasker's image buffer to the specified file path.
   * 
   * See [Save Image](https://tasker.joaoapps.com/userguide/en/help/ah_save_image.html) action.
   * 
   * @param {*} path 
   * @param {*} qualityPercent 
   * @param {*} deleteFromMemoryAfter 
   */
  saveImage(path: string, qualityPercent: number, deleteFromMemoryAfter: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#say
   * 
   * Cause the device to say text out loud.
   * 
   * The script waits for the speech to be finished. 
   * 
   * @param {*} text 
   * @param {*} [engine] - The speech engine e.g. com.svox.classic Defaults to the system default (specify undefined for that)
   * @param {*} [voice] - The voice to use (must be supported by engine). Defaults to the current system language (specify undefined for that)
   * @param {*} stream - To which audio stream the speech should be made
   * @param {*} pitch - Range: 1 - 10
   * @param {*} speed - Range: 1 - 10
   */
  say(text: string, engine?: string, voice?: string, stream: string, pitch: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10, speed: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#scanCard
   * 
   * Force the system to scan the external storage card for new/deleted media.
   * 
   * See also: action [Scan Card](https://tasker.joaoapps.com/userguide/en/help/ah_scan_card.html) 
   * 
   * @param {*} [path] - If defined, only that will be scanned.
   */
  scanCard(path?: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#sendIntent
   * 
   * Send an intent. Intents are Android's high-level application interaction system.
   * 
   * Any parameter may be specified as undefined.
   * 
   * See also: action [Send Intent](https://tasker.joaoapps.com/userguide/en/help/ah_send_intent.html). 
   * 
   * @param {*} [action] 
   * @param {*} [targetComp] - The type of application component to target, one of receiver, activity or service. Defaults to receiver.
   * @param {*} [packageName] - The application package to limt the intent to
   * @param {*} [className] - The application class to limit the intent to
   * @param {*} [category] - One of none, alt, browsable, cardock, deskdock, home, info, launcher, preference, selectedalt, tab or test, defaults to none.
   * @param {*} [data] 
   * @param {*} [mimeType] 
   * @param {*} [extras] - Extra data to pass, in the format key:value. May be undefined. Maximum length 2. 
   */
  sendIntent(action?: string, targetComp?: string, packageName?: string, className?: string, category?: string, data?: string, mimeType?: string, extras?: Array<string>): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#sendSMS
   * 
   * Send an SMS.
   * 
   * See also: action [Send SMS](https://tasker.joaoapps.com/userguide/en/help/ah_send_sms.html) 
   * 
   * @param {*} number 
   * @param {*} text 
   * @param {*} storeInMessagingApp 
   */
  sendSMS(number: string, text: string, storeInMessagingApp: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#setClip
   * 
   * Set the global system clipboard.
   * 
   * @example <caption>Test the value</caption>
   * var clip = global( 'CLIP' ); 
   * 
   * @param {*} text 
   * @param {*} append 
   */
  setClip(text: string, append: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#settings
   * 
   * Show an Android System Settings screen.
   * 
   * @param {*} screenName - One of all, accessibility, addacount, airplanemode, apn, app, batteryinfo, appmanage, bluetooth, date, deviceinfo, dictionary, display, inputmethod, internalstorage, locale, location, memorycard, networkoperator, powerusage, privacy, quicklaunch, security, mobiledata, search, sound, sync, wifi, wifiip or wireless. 
   */
  settings(screenName: 'all' | 'accessibility' | 'addacount' | 'airplanemode' | 'apn' | 'app' | 'batteryinfo' | 'appmanage' | 'bluetooth' | 'date' | 'deviceinfo' | 'dictionary' | 'display' | 'inputmethod' | 'internalstorage' | 'locale' | 'location' | 'memorycard' | 'networkoperator' | 'powerusage' | 'privacy' | 'quicklaunch' | 'security' | 'mobiledata' | 'search' | 'sound' | 'sync' | 'wifi' | 'wifiip' | 'wireless' | string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#setAirplaneMode
   * 
   * Enable or disable Airplane Mode.
   * 
   * @example <caption>Get the current value</caption>
   * var enabled = global( 'AIR' );
   * 
   * See also: 
   * @see setAirplaneRadios 
   * 
   * @param {*} enabled
   */
  setAirplaneMode(enabled: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#setAirplaneRadios
   * 
   * Specify the radios which will be disabled when the device enters Airplane Mode.
   * 
   * @example <caption>Get the current value</caption>
   * var radios = global( 'AIRR' );
   * 
   * See also: 
   * @see setAirplaneMode 
   * 
   * @param {*} disableRadios - A comma-separated list with radio names from the following set: cell, nfc, wifi, wimax, bt.
   */
  setAirplaneRadios(disableRadios: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#setAlarm
   * 
   * Create an alarm in the default alarm clock app.
   * 
   * Requires Android version 2.3+. 
   * 
   * @param {*} hour 
   * @param {*} min 
   * @param {*} [message] 
   * @param {*} confirm - Specifies whether the app should confirm that the alarm has been set.
   */
  setAlarm(hour: number, min: number, message?: string, confirm: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#setAutoSync
   * 
   * Enable or disable the global auto-sync setting. 
   * 
   * @param {*} enabled 
   */
  setAutoSync(enabled: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#setBT
   * 
   * Enable or disable the Bluetooth radio (if present).
   * 
   * @example <caption>Test BT state</caption>
   * if ( global( 'BLUE' ) == "on" ) { doSomething(); } 
   * 
   * @param {*} enabled 
   */
  setBT(enabled: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#setBTID
   * 
   * Set the bluetooth adapter ID (the name as seen by other devices). 
   * 
   * @param {*} name 
   */
  setBTID(name: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#setGlobal
   * 
   * Set the value of a Tasker global user variable.
   * 
   * Arrays are not supported due to limitations of the Android JS interface. 
   * 
   * @param {*} varName - Prefixing varName with % is optional.
   * @param {*} newValue 
   */
  setGlobal(varName: string, newValue: TaskParameterType) {},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#setKey
   * 
   * Set the passphrase for the specified keyName.
   * 
   * See Also: [Encryption](https://tasker.joaoapps.com/userguide/en/encryption.html) in the Userguide.
   * 
   * @param {*} keyName 
   * @param {*} passphrase 
   */
  setKey(keyName: string, passphrase: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#setLocal
   * 
   * Set the value of a Tasker scene-local user variable. 
   * 
   * This function is only for use by JavaScript embedded in HTML and accessed via a WebView scene element. 
   * 
   * @param {*} varName - Variable names should not be prefixed with %.
   * @param {*} newValue 
   */
  setLocal(varName: string, newValue: string){},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#setWallpaper
   * 
   * Set the system home screen wallpaper. 
   * 
   * @param {*} path 
   */
  setWallpaper(path: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#setWifi
   * 
   *  Enable or disable the Wifi radio (if present).
   * 
   * @example <caption>Test wifi state</caption>
   * if ( global( 'WIFI' ) == "on" ) { doSomething(); } 
   * 
   * @param {*} enabled
   */
  setWifi(enabled: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#shell
   * 
   * Run the shell command command.
   * 
   * @param {*} command 
   * @param {*} asRoot - Will only have effect if the device is rooted.
   * @param {*} timeoutSecs 
   * @return {*} - 'undefined' if the shell command failed. It's maximum size is restricted to around 750K.
   */
  shell(command: string, asRoot: boolean, timeoutSecs: number): 'undefined' | string {return '';},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#showScene
   * 
   * Show the named scene, creating it first if necessary.
   * 
   * @param {*} name 
   * @param {*} displayAs - Possible values: Overlay, OverBlocking, OverBlockFullDisplay, Dialog, DialogBlur, DialogDim, ActivityFullWindow, ActivityFullDisplay, ActivityFullDisplayNoTitle
   * @param {*} hoffset - Percentage horizontal offset for the scene -100% to 100% (not relevant for full screen/window display types)
   * @param {*} voffset -  Percentage vertical offset for the scene -100% to 100% (not relevant for full screen/window display types)
   * @param {*} showExitIcon - Display a small icon in the bottom right which destroys the scene when pressed
   * @param {*} waitForExit - Whether to wait for the scene to exit before continuing the script 
   */
  showScene(name: string, displayAs: string, hoffset: number, voffset: number, showExitIcon: boolean, waitForExit: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#shutdown
   * 
   * Shutdown the device.
   * 
   * Requires a rooted device.
   * 
   * See also: 
   * @see reboot
   */
  shutdown(): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#silentMode
   * 
   * Set the system silent ('ringer') mode.
   * 
   * @param {*} mode - One of off, vibrate or on
   */
  silentMode(mode: 'off' | 'vibrate' | 'on'): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#sl4a
   * 
   * Run a previously created SL4A script. 
   * 
   * @param {*} scriptName 
   * @param {*} inTerminal 
   */
  sl4a(scriptName: string, inTerminal: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#soundEffects
   * 
   * Setting the system Sound Effects setting (sound from clicking on buttons etc. 
   * 
   * @param {*} enabled 
   */
  soundEffects(enabled: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#speakerphone
   * 
   * Enable or disable the speakerphone function. 
   * 
   * @param {*} enabled 
   */
  speakerphone(enabled: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#statusBar
   * 
   * Expand or contract the system status bar. 
   * 
   * @param {*} expanded 
   */
  statusBar(expanded: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#stayOn
   * 
   * Specify whether the device should remain on when power is connected.
   * 
   * @param {*} mode - Possible values: never, ac, usb, any. 
   */
  stayOn(mode: 'never' | 'ac' | 'usb' | 'any'): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#stopLocation
   * 
   * Stop tracking a location provider. This is only relevant when a getLocation function has been previously called with the keepTracking parameter set. 
   */
  stopLocation(): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#systemLock
   * 
   * Turn off the display and activate the keyguard.
   * 
   * Requires Tasker's Device Administrator to be enabled in Android settings. 
   */
  systemLock(): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#systemVol
   * 
   * Set the system sounds volume to level.
   * 
   * Note: System Sounds must also be enabled if required.
   * 
   * @param {*} level - Range: 0 to 7.
   * @param {*} [display] - If true, the new level will be flashed up on-screen.
   * @param {*} [sound] - If true, a tone will sound at the new level.
   */
  systemVol(level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, display?: number, sound?: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#takeCall
   * 
   * Auto-accept an incoming call (if there is one). 
   * 
   */
  takeCall(): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#takePhoto
   * 
   * Take a photo with the builtin camera.
   * 
   * See also: action [Take Photo](https://tasker.joaoapps.com/userguide/en/help/ah_take_photo.html) 
   * 
   * @param {*} camera - 0 = rear camera, 1 = front camera
   * @param {*} fileName 
   * @param {*} resolution - format WxH e.g. 640x840
   * @param {*} insertGallery - Whether to insert the resulting picture in the Android Gallery application 
   */
  takePhoto(camera: 0 | 1, fileName: string, resolution: string, insertGallery: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#taskRunning
   * 
   * Whether the named Tasker task is currently running.
   * 
   * @param {*} taskName 
   * @return {*} - False if the task name is unknown. 
   */
  taskRunning(taskName: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#type
   * 
   * Simulate keyboard typing.
   * 
   * Requires a rooted device. 
   * 
   * @param {*} text 
   * @param {*} repeatCount 
   */
  type(text: string, repeatCount: number): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#unzip
   * 
   * Unpack a Zip archive into the parent directory of the archive.
   * 
   * @param {*} path
   * @param {*} deleteZipAfter - Causes the zip archive to be deleted after successful unpacking. 
   */
  unzip(path: string, deleteZipAfter: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#usbTether
   * 
   * Enable or disable USB tethering.
   * 
   * See also: action [USB Tether](https://tasker.joaoapps.com/userguide/en/help/ah_tether_usb.html) 
   * 
   * @param {*} enabled 
   */
  usbTether(enabled: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#vibrate
   * 
   * Cause the device to vibrate for the specified time. 
   * 
   * @param {*} durationMS 
   */
  vibrate(durationMS: number){},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#vibratePattern
   * 
   * Cause the device to vibrate following the specified pattern, which consists of a sequence of off then on millisecond durations e.g.
   * 
   * @example
   * 500,1000,750,1000 // wait for 500ms, vibrates 1000ms, wait for 750ms, then vibrate for 1000ms. 
   * @param {*} pattern 
   */
  vibratePattern(pattern: string): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#wait
   * 
   * Pause the script for the specified time.
   * 
   * Warning: This may cause some preceeding functions not to complete in some situations. If in doubt, use JavaScript setTimeout() instead. 
   * 
   * @param {*} durationMS 
   */
  wait(durationMS: number): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#wifiTether
   * 
   * Enable or disable Wifi tethering.
   * 
   * See also: action [Wifi Tether](https://tasker.joaoapps.com/userguide/en/help/ah_tether_wifi.html) 
   * 
   * @param {*} enabled 
   */
  wifiTether(enabled: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#writeFile
   * 
   * Write text to file path.
   * 
   * @param {*} path 
   * @param {*} text 
   * @param {*} append - If true, the text will be attached to the end of the existing file contents (if there are any). 
   */
  writeFile(path: string, text: string, append?: boolean): boolean {return true;},

  /**
   * https://tasker.joaoapps.com/userguide/en/javascript.html#zip
   * 
   * Zip a file or directory.
   * 
   * @param {*} path 
   * @param {*} level - The desired compression level from 1-9, with 9 resulting in the smallest file and the longest compression time. 
   * @param {*} deleteOriginalAfter - Causes path to be deleted if the zip operation is successful. 
   */
  zip(path: string, level: number, deleteOriginalAfter: boolean): boolean {return true;},
}

export default fakeTasker
