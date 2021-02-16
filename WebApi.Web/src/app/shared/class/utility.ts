declare var $: any;

export class Utility {

  // This function used to validate email
  public static validateEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  // This function used to validate phone
  public static validatePhone(phone: string) {
    var re = /^([0]|\+91)?[6789]\d{9}$/;
    return re.test(phone);
  }

  // This function used to verify password is as per rule or not
  public static validPasswordRule(password: string, repeatPassword: string) {
    if (!password || !repeatPassword)
      return false;

    let MinLength = 6;
    let MaxLength = 15;

    let meetsLengthRequirements: boolean = password.length >= MinLength && repeatPassword.length <= MaxLength;
    let hasUpperCaseLetter: boolean = false;
    let hasLowerCaseLetter: boolean = false;
    let hasDecimalDigit: boolean = false;

    if (meetsLengthRequirements) {
      for (var i = 0, len = password.length; i < len; i++) {
        let char = password.charAt(i);
        if (!isNaN(+char * 1)) {
          hasDecimalDigit = true;
        }
        else {
          if (this.isStringOnly(char) && char == char.toUpperCase()) {
            hasUpperCaseLetter = true;
          }
          if (this.isStringOnly(char) && char == char.toLowerCase()) {
            hasLowerCaseLetter = true;
          }
        }
      }
    }

    let isValid = meetsLengthRequirements
      && hasUpperCaseLetter
      && hasLowerCaseLetter
      && hasDecimalDigit;
    return isValid;
  }

  // This function used to verify password is as per rule or not
  public static validPassword(password: string) {
    if (!password)
      return false;

    let MinLength = 6;
    let MaxLength = 15;

    let meetsLengthRequirements: boolean = password.length >= MinLength && password.length <= MaxLength;
    let hasUpperCaseLetter: boolean = false;
    let hasLowerCaseLetter: boolean = false;
    let hasDecimalDigit: boolean = false;

    if (meetsLengthRequirements) {
      for (var i = 0, len = password.length; i < len; i++) {
        let char = password.charAt(i);
        if (!isNaN(+char * 1)) {
          hasDecimalDigit = true;
        }
        else {
          if (this.isStringOnly(char) && char == char.toUpperCase()) {
            hasUpperCaseLetter = true;
          }
          if (this.isStringOnly(char) && char == char.toLowerCase()) {
            hasLowerCaseLetter = true;
          }
        }
      }
    }

    let isValid = meetsLengthRequirements
      && hasUpperCaseLetter
      && hasLowerCaseLetter
      && hasDecimalDigit;
    return isValid;
  }

  // This function used to validate image extension and size
  public static validateImageExtension(fileName: string, osize: number) {
    let size;
    let validExtension = ['png', 'jpeg', 'jpg', 'gif'];
    var extension = fileName.substr(fileName.lastIndexOf('.') + 1);
    size = osize / 1048; // KB
    size = size / 1048; // MB
    if (validExtension.indexOf(extension.toLowerCase()) == -1) {
      return false;
    }
    else if (size > 2) {
      return false;
    }
    else {
      return true;
    }
  }

  // This function validate number only
  public static isNumberOnly(str: string) {
    let regexStr = '^[0-9]*$';
    let regEx = new RegExp(regexStr);
    return regEx.test(str);
  }

  // This function used to validate string only
  public static isStringOnly(str: string) {
    var regexPattern = /^[A-Za-z _]+$/
    return regexPattern.test(str)
  }

  // This function used to validate percentage 
  public static validatePercentage(str: string) {
    var regexPattern = /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/i;
    return regexPattern.test(str)
  }

  // This function used to validate money
  public static validateMoney(str: string) {
    var regexPattern = /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
    return regexPattern.test(str)
  }

  public static validateNumber(e: any, isMobile?: boolean) {
    let regexStr = '^[0-9]*$';
    let keyCode = [8, 9, 27, 13, 46, 190];
    if (isMobile)
      keyCode.push(32, 40, 41, 43, 45, 90)

    //console.log(e.keyCode);
    if (keyCode.indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode == 65 && e.ctrlKey === true) ||
      // Allow: Ctrl+C
      (e.keyCode == 67 && e.ctrlKey === true) ||
      // Allow: Ctrl+V
      (e.keyCode == 86 && e.ctrlKey === true) ||
      // Allow: Ctrl+X
      (e.keyCode == 88 && e.ctrlKey === true)
      // Allow: home, end, left, right
      //|| (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return;
    }
    let ch = String.fromCharCode(e.keyCode);
    let regEx = new RegExp(regexStr);
    if (regEx.test(ch))
      return;
    else
      e.preventDefault();
  }

  public static validatePhoneNumber(str: string) {
    var regexPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return regexPattern.test(str)
  }

  public static hasWhiteSpace(str: string) {
    return /\s/g.test(str);
  }

  public static showModal(id: string) {
    $('#' + id).modal({ backdrop: 'static', keyboard: false });
    $('#' + id).modal('show');
  }

  public static hideModal(id: string) {
    $('#' + id).modal('hide');
  }

  public static getRandom() {
    return Math.random();
  }

  public static toFloat(value: any): number {
    return parseFloat(value);
  }

  public static convertTo12Hrs(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice(1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

  public static convertUTCDateToLocalDate(date?: Date) {
    let offset = date.getTimezoneOffset();
    let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() - offset, date.getUTCSeconds());
    return newDate;
  }

  public static getLocalDate(date?: Date): Date {
    if (!date) date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  public static getUTCDateFromLocalDate(date?: Date): Date {
    if (!date) date = new Date();
    let utcDate = date.toUTCString();
    return new Date(utcDate);
  }
}