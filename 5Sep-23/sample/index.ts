//  message = "My name is Rehan, I live in Faisalabad."  //i wanna remove everything before Rehan


function removeBeforeRehan(message4:string)
{
   let rehanIndex = message4.indexOf("Rehan")
   let rehanMessage = message4.substring(rehanIndex)

   console.log(rehanMessage)
}
removeBeforeRehan("My name is Rehan, I live in Faisalabad.")