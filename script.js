function checkForm(form) {
  // uttrycket = dd/mm/yyyy, för det användaren skriver in.
  regDate = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

  if(form.startdate.value != '') {
    if(regs = form.startdate.value.match(regDate) && (regs = form.endDate.value.match(regDate))){
      // dag värde mellan 1 och 31
      if(regs[1] < 1 || regs[1] > 31) {
        alert("Invalid value for day: " + regs[1]);
        form.startdate.focus();
        return false;
      }
      // månads värde mellan 1 och 12
      if(regs[2] < 1 || regs[2] > 12) {
        alert("Invalid value for month: " + regs[2]);
        form.startdate.focus();
        return false;
      }
      // år värde mellan 1902 och 2019
      if(regs[3] < 1902 || regs[3] > (new Date()).getFullYear()) {
        alert("Invalid value for year: " + regs[3] + " - must be between 1902 and " + (new Date()).getFullYear());
        form.startdate.focus();
        return false;
      }
    } else {
      alert("Invalid date format: " + form.startdate.value);
      form.startdate.focus();
      return false;
    }
  }
}
