// // hablar => 'habl'
// // comer => 'com'
// // vivir => 'viv'
// function getStem(verb) {
//   return verb.substring(0, verb.length - 2)
// }

// // hablar => 'ar'
// // comer => 'er'
// // vivir => 'ir'
// function getInfinitiveClass(verb) {
//   return verb.substring(verb.length - 2)
// }

// // hablar => 'hablado'
// // comer => 'comido'
// // vivir => 'vivido'
// function getPastParticiple(verb) {
//   const stem = getStem(verb)
//   const infinitiveClass = getInfinitiveClass(verb)

//   switch (infinitiveClass) {
//     case 'ar':
//       return stem + 'ado'
//     case 'er':
//     case 'ir':
//       return stem + 'ido'
//   }
// }

// // hablar => 'hablando'
// // comer => 'comiendo'
// // vivir => 'viviendo'
// function getGerund(verb) {
//   const stem = getStem(verb)
//   const infinitiveClass = getInfinitiveClass(verb)

//   switch (infinitiveClass) {
//     case 'ar':
//       return stem + 'ando'
//     case 'er':
//     case 'ir':
//       return stem + 'iendo'
//   }
// }

// export const indicative = {
//   present(verb) {
//     const stem = getStem(verb)
//     const infinitiveClass = getInfinitiveClass(verb)

//     switch (infinitiveClass) {
//       case 'ar':
//         return [
//           `${stem}o`,
//           `${stem}as`,
//           `${stem}a`,
//           `${stem}amos`,
//           `${stem}áis`,
//           `${stem}an`
//         ]
//       case 'er':
//         return [
//           `${stem}o`,
//           `${stem}es`,
//           `${stem}e`,
//           `${stem}emos`,
//           `${stem}éis`,
//           `${stem}en`
//         ]
//       case 'ir':
//         return [
//           `${stem}o`,
//           `${stem}es`,
//           `${stem}e`,
//           `${stem}imos`,
//           `${stem}ís`,
//           `${stem}en`
//         ]
//     }
//   },
//   future(verb) {
//     return [
//       `${verb}é`,
//       `${verb}ás`,
//       `${verb}á`,
//       `${verb}amos`,
//       `${verb}áis`,
//       `${verb}án`
//     ]
//   },
//   conditional(verb) {
//     return [
//       `${verb}ía`,
//       `${verb}ías`,
//       `${verb}ía`,
//       `${verb}íamos`,
//       `${verb}íais`,
//       `${verb}ían`
//     ]
//   },
//   preterite(verb) {
//     const stem = getStem(verb)
//     const infinitiveClass = getInfinitiveClass(verb)

//     switch (infinitiveClass) {
//       case 'ar':
//         return [
//           `${stem}é`,
//           `${stem}aste`,
//           `${stem}ó`,
//           `${stem}amos`,
//           `${stem}asteis`,
//           `${stem}aron`
//         ]
//       case 'er':
//       case 'ir':
//         return [
//           `${stem}í`,
//           `${stem}iste`,
//           `${stem}ió`,
//           `${stem}imos`,
//           `${stem}isteis`,
//           `${stem}ieron`
//         ]
//     }
//   },
//   imperfect(verb) {
//     const stem = getStem(verb)
//     const infinitiveClass = getInfinitiveClass(verb)

//     switch (infinitiveClass) {
//       case 'ar':
//         return [
//           `${stem}aba`,
//           `${stem}abas`,
//           `${stem}aba`,
//           `${stem}ábamos`,
//           `${stem}abais`,
//           `${stem}aban`
//         ]
//       case 'er':
//       case 'ir':
//         return [
//           `${stem}ía`,
//           `${stem}ías`,
//           `${stem}ía`,
//           `${stem}íamos`,
//           `${stem}íais`,
//           `${stem}ían`
//         ]
//     }
//   },
//   presentPerfect(verb) {
//     const pastParticiple = getPastParticiple(verb)
//     return [
//       `he ${pastParticiple}`,
//       `has ${pastParticiple}`,
//       `ha ${pastParticiple}`,
//       `hemos ${pastParticiple}`,
//       `habéis ${pastParticiple}`,
//       `han ${pastParticiple}`
//     ]
//   },
//   pluperfect(verb) {
//     const pastParticiple = getPastParticiple(verb)
//     return [
//       `había ${pastParticiple}`,
//       `habías ${pastParticiple}`,
//       `había ${pastParticiple}`,
//       `habíamos ${pastParticiple}`,
//       `habíais ${pastParticiple}`,
//       `habían ${pastParticiple}`
//     ]
//   },
//   preteritePerfect(verb) {
//     const pastParticiple = getPastParticiple(verb)
//     return [
//       `hube ${pastParticiple}`,
//       `hubiste ${pastParticiple}`,
//       `hubo ${pastParticiple}`,
//       `hubimos ${pastParticiple}`,
//       `hubisteis ${pastParticiple}`,
//       `hubieron ${pastParticiple}`
//     ]
//   },
//   futurePerfect(verb) {
//     const pastParticiple = getPastParticiple(verb)
//     return [
//       `habré ${pastParticiple}`,
//       `habrás ${pastParticiple}`,
//       `habrá ${pastParticiple}`,
//       `habremos ${pastParticiple}`,
//       `habréis ${pastParticiple}`,
//       `habrán ${pastParticiple}`
//     ]
//   },
//   conditionalPerfect(verb) {
//     const pastParticiple = getPastParticiple(verb)
//     return [
//       `habría ${pastParticiple}`,
//       `habrías ${pastParticiple}`,
//       `habría ${pastParticiple}`,
//       `habríamos ${pastParticiple}`,
//       `habríais ${pastParticiple}`,
//       `habrían ${pastParticiple}`
//     ]
//   }
// }

// export const subjunctive = {
//   present(verb) {
//     const stem = getStem(verb)
//     const infinitiveClass = getInfinitiveClass(verb)

//     switch (infinitiveClass) {
//       case 'ar':
//         return [
//           `${stem}o`,
//           `${stem}es`,
//           `${stem}e`,
//           `${stem}emos`,
//           `${stem}éis`,
//           `${stem}en`
//         ]
//       case 'er':
//       case 'ir':
//         return [
//           `${stem}a`,
//           `${stem}as`,
//           `${stem}a`,
//           `${stem}amos`,
//           `${stem}áis`,
//           `${stem}an`
//         ]
//     }
//   },
//   imperfect1(verb) {
//     const stem = getStem(verb)
//     const infinitiveClass = getInfinitiveClass(verb)

//     switch (infinitiveClass) {
//       case 'ar':
//         return [
//           `${stem}ara`,
//           `${stem}aras`,
//           `${stem}ara`,
//           `${stem}áramos`,
//           `${stem}arais`,
//           `${stem}aran`,
//         ]
//       case 'er':
//       case 'ir':
//         return [
//           `${stem}iera`,
//           `${stem}ieras`,
//           `${stem}iera`,
//           `${stem}iéramos`,
//           `${stem}ierais`,
//           `${stem}ieran`,
//         ]
//     }
//   },
//   imperfect2(verb) {
//     const stem = getStem(verb)
//     const infinitiveClass = getInfinitiveClass(verb)

//     switch (infinitiveClass) {
//       case 'ar':
//         return [
//           `${stem}ase`,
//           `${stem}ases`,
//           `${stem}ase`,
//           `${stem}ásemos`,
//           `${stem}aseis`,
//           `${stem}asen`,
//         ]
//       case 'er':
//       case 'ir':
//         return [
//           `${stem}iese`,
//           `${stem}ieses`,
//           `${stem}iese`,
//           `${stem}iésemos`,
//           `${stem}ieseis`,
//           `${stem}iesen`,
//         ]
//     }
//   },
//   presentPerfect(verb) {
//     const pastParticiple = getPastParticiple(verb)
//     return [
//       `haya ${pastParticiple}`,
//       `hayas ${pastParticiple}`,
//       `haya ${pastParticiple}`,
//       `hayamos ${pastParticiple}`,
//       `hayáis ${pastParticiple}`,
//       `hayan ${pastParticiple}`
//     ]
//   }
// }

// export const affirmativeImperative = (verb) => {
//   const stem = getStem(verb)
//   const infinitiveClass = getInfinitiveClass(verb)

//   switch (infinitiveClass) {
//     case 'ar':
//       return [
//         '--',
//         `${stem}a`,
//         `${stem}e`,
//         `${stem}emos`,
//         `${verb.substring(0, verb.length - 1)}d`,
//         `${stem}en`,
//       ]
//     case 'er':
//     case 'ir':
//       return [
//         '--',
//         `${stem}e`,
//         `${stem}a`,
//         `${stem}amos`,
//         `${verb.substring(0, verb.length - 1)}d`,
//         `${stem}an`,
//       ]
//   }
// }

// export const negativeImperative = (verb) => {
//   const stem = getStem(verb)
//   const infinitiveClass = getInfinitiveClass(verb)

//   switch (infinitiveClass) {
//     case 'ar':
//       return [
//         '--',
//         `no ${stem}es`,
//         `no ${stem}e`,
//         `no ${stem}emos`,
//         `no ${stem}éis`,
//         `no ${stem}en`
//       ]
//     case 'er':
//     case 'ir':
//       return [
//         '--',
//         `no ${stem}as`,
//         `no ${stem}a`,
//         `no ${stem}amos`,
//         `no ${stem}áis`,
//         `no ${stem}an`
//       ]
//   }
// }

// export const gerund = (verb) => {
//   return getGerund(verb)
// }

// export const pastParticiple = (verb) => {
//   return getPastParticiple(verb)
// }
