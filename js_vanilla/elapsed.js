/*
if(elapsedMillisecondsCreation >= 1000) {
    conversionDivider = 1000;
    elapsedTime = `Há ${Math.floor(timeSinceCreationConverted(conversionDivider))} segundo${isMoreThanOne(conversionDivider)} ? 's' : ''} atrás`
}else{
    elapsedTime = `Há ${Math.floor(elapsedMillisecondsSinceCreation))} milissegundos atrás`
}

if(elapsedMillisecondsCreation >= 6000) {
    conversionDivider = 6000;
    elapsedTime = `Há ${Math.floor(timeSinceCreationConverted(conversionDivider))} minuto${isMoreThanOne(conversionDivider)} ? 's' : ''} atrás`
}

if(elapsedMillisecondsCreation >= 3600000) {
    conversionDivider = 3600000;
    elapsedTime = `Há ${Math.floor(timeSinceCreationConverted(conversionDivider))} hora${isMoreThanOne(conversionDivider)} ? 's' : ''} atrás`
}

if(elapsedMillisecondsCreation >= 86400000) {
    conversionDivider = 86400000;
    elapsedTime = `Há ${Math.floor(timeSinceCreationConverted(conversionDivider))} dia${isMoreThanOne(conversionDivider)} ? 's' : ''} atrás`
}

function timeSinceCreationConverted(conversionDivider) {
  return (elapsedMillisecondsSinceCreation / conversionDivider).toFixed(1)
}

function isMoreThanOne(conversionDivider) {
  return timeSinceCreationConverted(conversionDivider) > 1 ? 's' : ''
}
*/

function howLongAgo(elapsedMillisecondsCreation) {
  let seconds = (elapsedMillisecondsCreation / 1000).toFixed(1)
  let minutes = (elapsedMillisecondsCreation / 60000).toFixed(1)
  let hours = (elapsedMillisecondsCreation / 3600000).toFixed(1)
  let days = (elapsedMillisecondsCreation / 86400000).toFixed(1)
  let months = (elapsedMillisecondsCreation / 2592000000).toFixed(1)

  if (seconds < 60) {
    return `Há ${seconds} segundos atrás`
  } else if (minutes < 60) {
    return `Há ${minutes} minutos atrás`
  } else if (hours < 24) {
    return `Há ${hours} horas atrás`
  } else if (days < 30) {
    return `Há ${days} dias atrás`
  } else {
    return `Há ${months} meses atrás`
  }
}

function howLongAgo2(elapsedMillisecondsCreation) {
  const seconds = (elapsedMillisecondsCreation / 1000).toFixed(1)
  const minutes = (elapsedMillisecondsCreation / 60000).toFixed(1)
  const hours = (elapsedMillisecondsCreation / 3600000).toFixed(1)
  const days = (elapsedMillisecondsCreation / 86400000).toFixed(1)
  const months = (elapsedMillisecondsCreation / 2592000000).toFixed(1)

  if (seconds < 60) return `Há ${seconds} segundos atrás`
  if (minutes < 60) return `Há ${minutes} minutos atrás`
  if (hours < 24) return `Há ${hours} horas atrás`
  if (days < 30) return `Há ${days} dias atrás`

  return `Há ${months} meses atrás`
}

console.log(howLongAgo2(1000))
console.log(howLongAgo2(60000))
console.log(howLongAgo2(3600000))
console.log(howLongAgo2(86400000))
console.log(howLongAgo2(2592000000))
