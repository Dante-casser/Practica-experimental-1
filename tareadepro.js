/*1. Bloque 1 – Cadenas (1 dato) → Se procesan textos y palabras individualmente.

1. Contar caracteres de una palabra
Entrada: "Manzana"
Salida: "La palabra tiene 7 letras."*/

function contarCaracteresDeUna(palabra) {
    if (!palabra) return "No ingresaste ninguna palabra.";
    return `La palabra '${palabra}' tiene ${palabra.length} letras.`;
}

function mostrarContarCaracteres() {
    let palabra = prompt("Ingresa una palabra:");
    let mensaje = contarCaracteresDeUna(palabra); 
    console.log(mensaje);
    document.getElementById("resultadoCaracteres").innerText = mensaje;
}


/* 2. Contar apariciones de una letra específica
o Entrada: "Me encanta el café"
o Salida: "La letra 'e' aparece 4 veces." */

function contarApariciones(cadena, caracter) {
    let c = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === caracter.toLowerCase()) {
            c++;
        }
    }
    return c;
}

function mostrarContarApariciones() {
    let cadena = prompt("Ingresa un texto:");
    if (!cadena) {
        document.getElementById("resultadoApariciones").innerText = "No ingresaste texto.";
        return;
    }

    let caracter = prompt("Ingresa la letra a contar:");
    if (!caracter || caracter.length !== 1) {
        document.getElementById("resultadoApariciones").innerText = "Debes ingresar solo una letra.";
        return;
    }

    let resp = contarApariciones(cadena, caracter);
    let mensaje = `La letra '${caracter}' aparece ${resp} ${resp === 1 ? 'vez' : 'veces'}.`;

    console.log(mensaje);
    document.getElementById("resultadoApariciones").innerText = mensaje;
}


/* 
3. Invertir un texto
o Entrada: "Quito"
o Salida: "otiuQ" */

function invertirTexto(texto) {
  let invertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
  }
  return invertido;
}

function mostrarInvertirTexto() {
  let texto = prompt("Ingresa el texto a invertir:");
  if (!texto) {
    document.getElementById("resultadoInvertir").innerText = "No ingresaste ningún texto.";
    return;
  }
  let resp = invertirTexto(texto);
  let mensaje = `Texto invertido: '${resp}'`;
  console.log(mensaje);
  document.getElementById("resultadoInvertir").innerText = mensaje;
}



/* 4. Comparar longitudes de cadenas
o Entrada: "García", "Pérez"
o Salida: "El apellido 'García' tiene más letras."
 */
function compararLongitudes(cadena1, cadena2) {
    if (cadena1.length > cadena2.length) {
        return `El apellido '${cadena1}' tiene más letras.`;
    } else if (cadena2.length > cadena1.length) {
        return `El apellido '${cadena2}' tiene más letras.`;
    } else {
        return 'Ambos apellidos tienen la misma cantidad de letras.';
    }
}

function mostrarCompararLongitudes() {
    let cadena1 = prompt("Ingresa el primer apellido:");
    let cadena2 = prompt("Ingresa el segundo apellido:");

    if (!cadena1 || !cadena2) {
        document.getElementById("resultadoComparar").innerText = "Debes ingresar ambos apellidos.";
        return;
    }

    let resp = compararLongitudes(cadena1, cadena2);
    console.log(resp);
    document.getElementById("resultadoComparar").innerText = resp;
}


/* 5. Iniciales de un nombre completo
o Entrada: "Ana María Torres"
o Salida: "A.M.T." */


function esTextoVacioOCespacios(texto) {
  for (let i = 0; i < texto.length; i++)
    if (texto[i] !== ' ') return false;
  return true;
}

function nombreIniciales(nombre) {
  let iniciales = "", palabra = "";
  for (let i = 0; i <= nombre.length; i++) {
    if (nombre[i] === ' ' || i === nombre.length) {
      if (palabra.length) iniciales += palabra[0].toUpperCase() + '.';
      palabra = "";
    } else palabra += nombre[i];
  }
  return iniciales;
}

function mostrarObtenerIniciales() {
  let n = prompt("Ingresa tu nombre completo:");
  if (!n || esTextoVacioOCespacios(n)) {
    document.getElementById("resultadoIniciales").innerText = "No ingresaste un nombre válido.";
    return;
  }
  document.getElementById("resultadoIniciales").innerText = "Iniciales: " + nombreIniciales(n);
}



/* 6. Reemplazo de caracteres
o Entrada: "Programador"
o Salida: "Pr#gramad#r" */

// Función que reemplaza todas las letras "o" por "#"
function reemplazarCaracteres(palabra) {
    return palabra.replace(/o/g, '#');
}

function mostrarReemplazarCaracteres() {
    let palabra = prompt("Ingresa una palabra:");

    if (!palabra) {
        document.getElementById("resultadoReemplazo").innerText = "No ingresaste ninguna palabra.";
        return;
    }

    let resultado = reemplazarCaracteres(palabra);
    let mensaje = `Palabra transformada: ${resultado}`;

    console.log(mensaje);
    document.getElementById("resultadoReemplazo").innerText = mensaje;
}


/* 7. Palabra palíndroma
o Entrada: "radar"
o Salida: "La palabra 'radar' es un palíndromo." */

function invertirTexto(texto) {
    let invertida = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    return invertida;
}

function palindroma(palabra) {
    return palabra === invertirTexto(palabra);
}

function mostrarPalindroma() {
    let palabra = prompt("Ingresa una palabra:");

    if (!palabra || palabra === " ") {
        document.getElementById("resultadoPalindromo").innerText = "No ingresaste una palabra válida.";
        return;
    }

    let esPalindromo = palindroma(palabra);
    let mensaje = esPalindromo 
        ? `La palabra '${palabra}' es un palíndromo.` 
        : `La palabra '${palabra}' no es un palíndromo.`;

    console.log(mensaje);
    document.getElementById("resultadoPalindromo").innerText = mensaje;
}



/* 8. Frase con mayor cantidad de caracteres
o Entrada: "Me gusta el fútbol", "Prefiero el baloncesto"
o Salida: "La frase 'Prefiero el baloncesto' tiene más
caracteres." */

function frasesLarga(frase1, frase2) {
    if (frase1.length > frase2.length) {
        return frase1;
    } else if (frase2.length > frase1.length) {
        return frase2;
    } else {
        return null;
    }
}

function mostrarFrasesLarga() {
    const frase1 = prompt("Ingresa la primera frase:");
    const frase2 = prompt("Ingresa la segunda frase:");

    if (!frase1 || !frase2) {
        document.getElementById("resultadoFrasesLarga").innerText = "No ingresaste ambas frases.";
        return;
    }

    const resp = frasesLarga(frase1, frase2);

    if (resp) {
        const mensaje = `La frase '${resp}' tiene más caracteres.`;
        console.log(mensaje);
        document.getElementById("resultadoFrasesLarga").innerText = mensaje;
    } else {
        const mensaje = "Ambas frases tienen la misma cantidad de caracteres.";
        console.log(mensaje);
        document.getElementById("resultadoFrasesLarga").innerText = mensaje;
    }
}


/* 9. Contar apariciones de un carácter elegido
o Entrada: Texto "Examen de programación", carácter "m"
o Salida: "La letra 'm' aparece 3 veces." */

function contarCaracter(texto, caracter) {
    let contador = 0;

    for (let letra of texto) {
            if (letra === caracter) {
                contador++;}
}

         return contador;
}

function pedirYContarCaracter() {
    let texto = prompt("Ingresa el texto:");
    let caracter = prompt("Ingresa el carácter a contar:");

    if (!texto || !caracter || caracter.length !== 1) {
        document.getElementById("resultadoContarCaracter").innerText = "Por favor, ingresa un texto y un solo carácter válido.";
        return;
    }

    let cantidad = contarCaracter(texto, caracter);
     let mensaje = `La letra '${caracter}' aparece ${cantidad} ${cantidad === 1 ? 'vez' : 'veces'}.`;

    console.log(mensaje);
    document.getElementById("resultadoContarCaracter").innerText = mensaje;
}


/* 10.Dividir oración en palabras
• Entrada: "Me gusta aprender programación"
• Salida:
o Me
o gusta
o aprender
o programación */

    function dividirOraciones(oracion) {
        return oracion.split(' ');
    }

    function dividirOracion(oracion) {
        let palabras = dividirOraciones(oracion);
        console.log("Palabras:");
        for (let palabra of palabras) {
            console.log(`- ${palabra}`);
        }
        return palabras;
    }

    function pedirYDividirOracion() {
        let oracion = prompt("Ingresa una oración:");

        if (!oracion) {
            document.getElementById("resultadoDividirOracion").textContent = "No ingresaste una oración válida.";
            return;
        }

        let palabras = dividirOracion(oracion);

        let resultado = "Palabras:\n";
        for (let palabra of palabras) {
            resultado += `- ${palabra}\n`;
        }

        document.getElementById("resultadoDividirOracion").textContent = resultado;
    }

// BLOQUE 2: Ejercicios de Cadenas con Arreglos

/* 1. Contar caracteres de varias palabras
o Entrada: ["Manzana", "Pera", "Sandía"]
o Salida:
▪ "Manzana tiene 7 letras."
▪ "Pera tiene 4 letras."
▪ "Sandía tiene 6 letras." */

function contarVariosCaracteres() {
  let entrada = prompt("Ingresa varias palabras separadas por comas:");
  if (!entrada) {
    document.getElementById("resultadoVariosCaracteres").innerText = "No ingresaste palabras.";
    return;
  }
  
  let resultados = "", palabra = "";
  for (let i = 0; i <= entrada.length; i++) {
    if (entrada[i] === "," || i === entrada.length) {
      resultados += contarCaracteresDeUna(palabra) + "\n";
      palabra = "";
    } else {
      palabra += entrada[i];
    }
  }
  console.log(resultados);
  document.getElementById("resultadoVariosCaracteres").innerText = resultados;
}


/* 2. Contar apariciones de una letra en varias frases
o Entrada: ["Me encanta el café", "Estudio programación"]
o Salida:
▪ En la primera frase, la 'e' aparece 4 veces.
▪ En la segunda frase, la 'e' aparece 2 veces. */

function contarVariasApariciones() {
  let entrada = prompt("Frases separadas por coma:");
  if (!entrada) return;
  let caracter = prompt("Letra a contar:");
  if (!caracter || caracter.length !== 1) return;
  let r = "", frase = "", i = 1;
  for (let j = 0; j <= entrada.length; j++) {
    if (entrada[j] === "," || j === entrada.length) {
      r += `Frase ${i}: '${caracter}' aparece ${contarApariciones(frase, caracter)} ${contarApariciones(frase, caracter) === 1 ? "vez" : "veces"}.\n`;
      frase = ""; i++;
    } else frase += entrada[j];
  }
  document.getElementById("resultadoVariasApariciones").innerText = r;
}


/* 3. Invertir varios textos
o Entrada: ["Quito", "Lima"]
o Salida:
▪ Quito → otiuQ
▪ Lima → amiL */


function mostrarInvertirVarios() {
  let e = prompt("Textos separados por comas:");
  if (!e) return;
  let tieneTexto = false, r = "", temp = "";
  for (let i = 0; i < e.length; i++) {
    if (e[i] !== " ") tieneTexto = true;
    if (e[i] === "," || i === e.length -1) {
      if (i === e.length -1) temp += e[i];
      if (tieneTexto) r += temp + " → " + invertirTexto(temp) + "\n";
      temp = ""; tieneTexto = false;
    } else temp += e[i];
  }
  document.getElementById("res2").innerText = r;
}


/* 4. Comparar longitudes de pares de palabras en arreglo
o Entrada: [("García","Pérez"), ("Lopez","Ramirez")]
o Salida:
▪ "García tiene más letras que Pérez."
▪ "Ramirez tiene más letras que Lopez." */

function compararVariasLongitudes() {
  let entrada = prompt("Ingresa pares separados por ';', cada apellido separado por ',' :");
  if (!entrada) return;
  let pares = [], temp = "";
  for (let i = 0; i <= entrada.length; i++)
    if (entrada[i] === ";" || i === entrada.length) pares.push(temp), temp = "";
    else temp += entrada[i];
  let res = "";
  for (let p of pares) {
    let apellidos = [], t = "";
    for (let i = 0; i <= p.length; i++)
      if (p[i] === "," || i === p.length) apellidos.push(t), t = "";
      else t += p[i];
    if (apellidos.length !== 2) continue;
    res += compararLongitudes(apellidos[0], apellidos[1]) + "\n";
  }
  document.getElementById("resultadoCompararVarias").innerText = res;
}

/* 5. Iniciales de varios nombres completos
o Entrada: ["Ana María Torres", "Juan Carlos Pérez"]
o Salida:
▪ Ana María Torres → A.M.T.
▪ Juan Carlos Pérez → J.C.P. */

function pedirYMostrarVariasIniciales() {
  let entrada = prompt("Ingresa nombres separados por coma:");
  if (!entrada) return;
  let nombres = [], temp = "";
  for (let i = 0; i <= entrada.length; i++)
    if (entrada[i] === "," || i === entrada.length) { nombres.push(temp); temp = ""; }
    else temp += entrada[i];
  let res = "";
  for (let n of nombres) res += nombreIniciales(n) + "\n";
  document.getElementById("resultadoVariasIniciales").innerText = res;
}

/* 6. Reemplazo de caracteres en varios textos
o Entrada: ["Programador", "Motor"]
o Salida:
▪ "Pr#gramad#r"
▪ "Motor */

function reemplazarVariosCaracteres() {
  let entrada = prompt("Ingresa palabras separadas por comas:");
  if (!entrada) return;
  let palabras = [], temp = "";
  for (let i = 0; i <= entrada.length; i++)
    if (entrada[i] === "," || i === entrada.length) { palabras.push(temp); temp = ""; }
    else temp += entrada[i];
  let resultado = "";
  for (let p of palabras) resultado += reemplazarCaracteres(p) + "\n";
  document.getElementById("resultadoVariosReemplazos").innerText = resultado;
}


/* 7. Palíndromos en un arreglo
o Entrada: ["radar", "oso", "casa"]
o Salida:
▪ radar → es palíndromo
▪ oso → es palíndromo
▪ casa → no es palíndromo */

function palindromosVarias() {
  let entrada = prompt("Palabras separadas por comas:");
  if (!entrada) return;
  let palabras = [], temp = "";
  for (let i = 0; i <= entrada.length; i++)
    if (entrada[i] === "," || i === entrada.length) { 
      palabras.push(temp); 
      temp = ""; 
    } else temp += entrada[i];
  
  let res = "";
  for (let p of palabras) 
    res += p + " → " + (palindroma(p) ? "es palíndromo" : "no es palíndromo") + "\n";
  
  document.getElementById("resultadoPalindromoVarias").innerText = res;
}


/* 8. Frase con más caracteres en varios pares
o Entrada: [("Me gusta el fútbol", "Prefiero el baloncesto"),
("Hola", "Adiós")]
o Salida:
▪ Prefiero el baloncesto → más caracteres
▪ Adiós → más caracteres */

function variasFrasesLarga() {
  let entrada = prompt("Ingresa pares de frases (frase1,frase2; frase3,frase4):");
  if (!entrada) return;
  let pares = entrada.split(';');
  let res = "";
  for (let par of pares) {
    let [f1, f2] = par.split(',');
    let mayor = frasesLarga(f1.trim(), f2.trim());
    res += mayor ? `${mayor} → más caracteres\n` : "Ambas frases iguales\n";
  }
  document.getElementById("resultadoVariasFrasesLarga").innerText = res;
}

/* 9. Contar apariciones de un carácter en varios textos
o Entrada: [("Examen de programación","m"), ("Hola
mundo","o")]
o Salida:
▪ En el primero, "m" aparece 3 veces.
▪ En el segundo, "o" aparece 2 veces. */

function contarCaracterEnLotes(datos) {
  var res = "";
  for (var i = 0; i < datos.length; i++) {
    var c = contarCaracter(datos[i][0], datos[i][1]);
    res += "Texto " + (i + 1) + ": '" + datos[i][1] + "' aparece " + c + (c === 1 ? " vez.\n" : " veces.\n");
  }
  document.getElementById("resultadoContarCaracterLotes").innerText = res;
}

function botonContarLotes() {
  contarCaracterEnLotes([["Examen de programación", "m"], ["Hola mundo", "o"]]);
}


/* 10.Dividir varias oraciones en palabras
• Entrada: ["Me gusta aprender programación", "Hola mundo"]
• Salida:
o Oración 1: Me, gusta, aprender, programación
o Oración 2: Hola, mundo */

function dividirVariasOraciones(oraciones) {
  var res = "";
  for (var i = 0; i < oraciones.length; i++) {
    var palabras = dividirOraciones(oraciones[i]);
    res += "Oración " + (i + 1) + ": ";
    for (var j = 0; j < palabras.length; j++) {
      res += palabras[j];
      if (j < palabras.length - 1) res += ", ";
    }
    res += "\n";
  }
  document.getElementById("resultadoDividirVarias").innerText = res;
}


/* 17.Calcular el promedio de 5 números.
• Entrada: 5, 7, 9, 3, 6
• Salida: Promedio = 6 */

function promedioN(cantidad) {
  let suma = 0, i = 1;
  while (i <= cantidad) {
    let num = parseInt(prompt("Número " + i + ":"));
    suma += num;
    i++;
  }
  let promedio = suma / cantidad;
  document.getElementById("resultado17").innerText = "Promedio = " + promedio;
}


/* 18.Contar cuántos de 5 números son impares.
• Entrada: 2, 5, 7, 8, 10
• Salida: "Cantidad de impares = 2" */

function contarImpares(cantidad) {
  let impares = 0, i = 1;
  while (i <= cantidad) {
    let num = parseInt(prompt(`Ingresa el número ${i}:`));
    if (num % 2 !== 0) impares++;
    i++;
  }
  document.getElementById("resultado18").innerText = `Cantidad de impares = ${impares}`;
}




/* 19.Leer 5 edades y contar cuántos son mayores de edad.
• Entrada: 15, 22, 18, 30, 12
• Salida: "Mayores de edad: 3" */

function contarMayores(cantidad) {
  let mayores = 0, i = 1;
  while (i <= cantidad) {
    let edad = parseInt(prompt(`Ingrese la edad ${i}:`));
    if (edad >= 18) mayores++;
    i++;
  }
  document.getElementById("resultado19").innerText = `Cantidad de mayores de edad = ${mayores}`;
}




/* 20.Buscar un valor en 4 números.
• Entrada: (4, 8, 15, 23), valor=15
• Salida: "El valor 15 existe." */

function buscarValor(cantidad, valor) {
  let encontrado = false;
  for (let i = 1; i <= cantidad; i++) {
    let num = parseInt(prompt("Ingrese el número " + i + ":"));
    if (num === valor) {
      encontrado = true;
      break;
    }
  }
  let mensaje = encontrado ? `El valor ${valor} existe.` : `El valor ${valor} no existe.`;
  document.getElementById("resultado20").innerText = mensaje;
  return encontrado;
}



/* 21.Concatenar 3 palabras.
• Entrada: "Me", "gusta", "programar"
• Salida: "Me gusta programar" */

function concatenar(n) {
  let resultado = "";
  for (let i = 1; i <= n; i++) {
    let palabra = prompt(`Palabra ${i}:`);
    while (!palabra) {
      palabra = prompt("No puede estar vacía:");
    }
    resultado += palabra + (i < n ? " " : "");
  }
  return resultado;
}

function mostrarConcatenacion() {
  const res = concatenar(3);
  document.getElementById("resultado21").innerText = res;
}



/* 22.Calcular el cubo de 3 números.
• Entrada: 2, 3, 4
• Salida: 8, 27, 64 */

function calcularCubos(n) {
  let res = "";
  for (let i = 1; i <= n; i++) {
    let num = parseInt(prompt(`Número ${i}:`));
    while (!Number.isInteger(num)) {
      num = parseInt(prompt(`Entrada inválida. Ingresa un número entero para el número ${i}:`));
    }
    res += num ** 3 + (i < n ? ", " : "");
  }
  return res;
}

function mostrarCubos() {
  let resultado = calcularCubos(3);
  document.getElementById("resultado22").innerText = resultado;
}


/* 23.Mostrar tabla de multiplicar de un número.
• Entrada: 5
• Salida: 5, 10, 15, …, 50 */

function tablaMultiplicar(n) {
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += n * i + (i < 10 ? ", " : "");
  }
  return resultado;
}

function mostrarTabla() {
  let numero = pedirEntero("Ingrese un número entero para ver su tabla de multiplicar:");
  if (numero === null) {
    document.getElementById("resultado23").innerText = "Entrada cancelada.";
    return;
  }
  let texto = "Tabla del " + numero + ": " + tablaMultiplicar(numero);
  document.getElementById("resultado23").innerText = texto;
}



/* 24.Factorial de elementos en arreglo
• Entrada: [4, 6]
• Salida: [24, 720] */

function factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) f *= i;
  return f;
}

function calcularFactoriales() {
  let entrada = prompt("Ingrese números separados por coma:");
  let partes = entrada.split(",");
  let texto = "Resultado: [";
  for (let i = 0; i < partes.length; i++) {
    let n = parseInt(partes[i]);
    texto += (n > 0 ? factorial(n) : 0) + (i < partes.length - 1 ? ", " : "");
  }
  document.getElementById("resultado24").innerText = texto + "]";
}



/* 25.Leer 4 números y mostrar los que sean pares.
• Entrada: 3, 8, 11, 14
• Salida: 8, 14 */

function pedirEntero(mensaje) {
  let num;
  do {
    let entrada = prompt(mensaje);
    if (entrada === null) return null;
    num = parseInt(entrada);
  } while (isNaN(num));
  return num;
}

function mostrarPares(cant = 4) {
  let pares = "", primero = true;
  for (let i = 1; i <= cant; i++) {
    let n = pedirEntero(`Número ${i}:`);
    if (n === null) {
      document.getElementById("resultado25").innerText = "Entrada cancelada.";
      return;
    }
    if (n % 2 === 0) {
      if (!primero) pares += ", ";
      pares += n;
      primero = false;
    }
  }
  document.getElementById("resultado25").innerText = "Pares: " + (pares || "ninguno");
}


/* 26.Sumar 2 grupos de 3 números.
• Entrada: A=(2,4,6), B=(1,3,5)
• Salida: C=(3,7,11) */

function pedirNum(msg) {
  let n;
  do {
    let entrada = prompt(msg);
    if (entrada === null) return null;
    n = parseInt(entrada);
  } while (typeof n !== "number" || n !== n);
  return n;
}

function sumarGrupos() {
  let c1 = 0, c2 = 0, c3 = 0;
  for (let i = 1; i <= 3; i++) {
    let a = pedirNum(`Ingrese a${i}:`);
    if (a === null) return null;
    let b = pedirNum(`Ingrese b${i}:`);
    if (b === null) return null;
    if (i === 1) c1 = a + b;
    else if (i === 2) c2 = a + b;
    else c3 = a + b;
  }
  return [c1, c2, c3];
}

function mostrarSuma() {
  let res = sumarGrupos();
  if (!res) {
    document.getElementById("resultado25").innerText = "Entrada cancelada.";
    return;
  }
  let texto = "Resultado: [";
  for (let i = 0; i < res.length; i++) {
    texto += res[i];
    if (i < res.length - 1) texto += ", ";
  }
  texto += "]";
  document.getElementById("resultado26").innerText = texto;
}




/* Bloque 4: Problemas Numéricos con Arreglos (10 ejercicios) */
/* 17.Promedio de un arreglo
• Entrada: [5, 7, 9, 3, 6]
• Salida: "El promedio es 6" */

    function promedioArreglo() {
      let nums = [];
      for (let i = 1; i <= 5; i++) {
        let n = parseFloat(prompt(`Ingrese el número ${i}:`));
        nums.push(n);
      }
      let suma = nums.reduce((a, b) => a + b, 0);
      let promedio = suma / nums.length;
      document.getElementById("resultadoArr17").innerText = "El promedio es " + promedio;
    }



/* 18.Contar impares en un arreglo
• Entrada: [2, 5, 7, 8, 10]
• Salida: "Cantidad de impares: 2" */
    function contarImpares() {
      let arreglo = [2, 5, 7, 8, 10];
      let impares = 0;
      for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 !== 0) {
          impares++;
        }
      }
      document.getElementById("resultadoArr18").innerText = "Cantidad de impares: " + impares;
    }


/* 19.Mayores de edad en un arreglo
• Entrada: [15, 22, 18, 30, 12]
• Salida: "Mayores de edad: 3" */

    function contarMayoresEdad() {
      let arreglo = [15, 22, 18, 30, 12];
      let mayores = 0;
      for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] >= 18) {
          mayores++;
        }
      }
      document.getElementById("resultadoArr19").innerText = "Mayores de edad: " + mayores;
    }


/* 20.Buscar valor en un arreglo
• Entrada: [4, 8, 15, 23], valor=15
• Salida: "El valor 15 sí existe en el arreglo." */

    function buscarValor() {
      let arreglo = [4, 8, 15, 23];
      let valor = 15;
      let encontrado = false;

      for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valor) {
          encontrado = true;
          break;
        }
      }

      let mensaje = encontrado
        ? "El valor " + valor + " sí existe en el arreglo."
        : "El valor " + valor + " no existe en el arreglo.";

      document.getElementById("resultadoArr20").innerText = mensaje;
    }


/* 21.Concatenar palabras de un arreglo
• Entrada: ["Me", "gusta", "programar"]
• Salida: "Me gusta programar" */

    function concatenarPalabras() {
      let arreglo = ["Me", "gusta", "programar"];
      let resultado = "";

      for (let i = 0; i < arreglo.length; i++) {
        resultado += arreglo[i];
        if (i < arreglo.length - 1) {
          resultado += " ";
        }
      }

      document.getElementById("resultadoArr21").innerText = resultado;
    }



/* 22.Cubo de elementos en arreglo
• Entrada: [2, 3, 4]
• Salida: [8, 27, 64] */

    function cuboArreglo() {
      let arreglo = [2, 3, 4];
      let resultado = "";

      for (let i = 0; i < arreglo.length; i++) {
        resultado += (arreglo[i] * arreglo[i] * arreglo[i]);
        if (i < arreglo.length - 1) {
          resultado += ", ";
        }
      }

      document.getElementById("resultadoArr22").innerText = resultado;
    }



/* 23.Tabla de multiplicar de elementos
• Entrada: [3, 5]
• Salida:
o Tabla de 3: 3,6,9…30
o Tabla de 5: 5,10,15…50 */


    function tablasMultiplicar() {
      let arreglo = [3, 5];
      let resultado = "";

      for (let i = 0; i < arreglo.length; i++) {
        resultado += "Tabla del " + arreglo[i] + ": ";
        for (let j = 1; j <= 10; j++) {
          resultado += (arreglo[i] * j);
          if (j < 10) resultado += ", ";
        }
        resultado += "\n";
      }

      document.getElementById("resultadoArr23").innerText = resultado;
    }






/* 24.Factorial de elementos en arreglo
• Entrada: [4, 6]
• Salida: [24, 720] */

    function factorialArreglo() {
      let arreglo = [4, 6];
      let resultado = "";

      function factorial(n) {
        let f = 1;
        for (let i = 1; i <= n; i++) {
          f *= i;
        }
        return f;
      }

      for (let i = 0; i < arreglo.length; i++) {
        resultado += factorial(arreglo[i]);
        if (i < arreglo.length - 1) {
          resultado += ", ";
        }
      }

      document.getElementById("resultadoArr24").innerText = "[" + resultado + "]";
    }


/* 25.Copiar pares a otro arreglo
• Entrada: [3, 8, 11, 14, 25]
• Salida: [8, 14] */

    function copiarPares() {
      let arreglo = [3, 8, 11, 14, 25];
      let resultado = "";

      let primero = true;
      for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
          if (!primero) {
            resultado += ", ";
          }
          resultado += arreglo[i];
          primero = false;
        }
      }

      document.getElementById("resultadoArr25").innerText = "[" + resultado + "]";
    } 

/* 26.Suma de dos arreglos
• Entrada: A=[2,4,6], B=[1,3,5]
• Salida: C=[3,7,11] */

    function sumarArreglos() {
      let A = [2, 4, 6];
      let B = [1, 3, 5];
      let resultado = "";

      for (let i = 0; i < A.length; i++) {
        resultado += (A[i] + B[i]);
        if (i < A.length - 1) {
          resultado += ", ";
        }
      }

      document.getElementById("resultadoArr26").innerText = "[" + resultado + "]";
    }
 