const generateCost = (target) => {

   switch (target) {
      case "قزوین":
         return `30000ریال`
      case "شرق":
      case "استاد معین":
      case "یافت اباد":
         return '40000ریال'
      default:
         return '35000ریال'
   }
}