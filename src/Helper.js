export function formatDateString(strDate) {
  var strSplitDate = String(strDate).split(' ');
  var date = new Date(strSplitDate[0]);

  var dd = date.getDate();
  var mm = date.getMonth() + 1;

  var yyyy = date.getFullYear();
  if (dd < 10) {
      dd = '0' + dd;
  }
  if (mm < 10) {
      mm = '0' + mm;
  }
  date =  dd + "-" + mm + "-" + yyyy;
  return date.toString();
}