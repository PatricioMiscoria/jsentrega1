// Usuarios que en un furo tiene que venir de una base de datos
let usuarios = ['Sin' , 'Sin' , 'Sin' , 'Sin' , 'Sin' , 'Sin' , 'Sin' , 'Sin']

// Claves que en un furo tiene que venir de una base de datos
let claves = [99 , 99 , 99 ,99 ,99 ,99 ,99 ,99]

//Incrementando indice para abanzar en la base de datos
let indice_db = 0;

// Bandera para saber si el usuario ya esta registrado
bandera_usuario_registrado = false

//Donde se carga el usuario y clave que se ingresa para el registro
let usuario_registro
let clave_registro

// Banderas para guardar el indice "I" de los usuarios y clave
let usuario_bandera
let clave_bandera

// Bandera para saber si el usuario o la clave fue ingresada ok
let bandera_clave_ok = false
let bandera_usuario_ok = false

// Bandera para saber si el usuario o la clave fue ingresada OK
let bandera_clave_REG = false
let bandera_usuario_REG = false

//Bandera de que se registraron todos los usuarios
let bandera_registros_copletos = false

// Bandera para saber si estan bien los datos del usuario o la clave
let bandera_clave_RED = false
let bandera_usuario_RED = false


function Ingresar_Usuarios(){
    console.log("ENTRE 1")

    if(bandera_registros_copletos === false){

        for (let i = 0 ; i <= 7; i++){ //en un futuro no hacerlo con 8 usuario solamente.
            if(usuarios[indice_db] === 'Sin'){
                console.log("ENTRE 2")
                usuario_registro = prompt("Registre USUARIO")         
                i = 9
            } 
            else{
                bandera_registros_copletos = true
            }

        }  
    }
}

function Chequear_Usuario(){
    bandera_usuario_registrado = false

    for(a = 0; a <= 7; a++){
        if(usuarios[a] === usuario_registro){
            bandera_usuario_registrado = true
        }
    }

    if(bandera_usuario_registrado === true && bandera_registros_copletos != true){
        console.log("Usuario Registrado!!!! - ERROR")        
        console.log("ENTRE 6")
    }

}

function Grabar_Usuario(){

    if(bandera_usuario_registrado === false){
        usuarios[indice_db] = usuario_registro
    
        clave_registro = prompt("Registre CLAVE")
        claves[indice_db] = clave_registro
        
        
        indice_db = indice_db + 1
        console.log("ENTRE 5")
    }

}

while (bandera_registros_copletos === false){
    Ingresar_Usuarios()
    Chequear_Usuario()
    Grabar_Usuario()
}

    console.log("TODOS LOS USUARIOS REGISTRADOS")
    console.log("Usuario " + usuarios[0])
    console.log("Clave " + claves[0])

    console.log("Usuario " + usuarios[1])
    console.log("Clave " + claves[1])

    console.log("Usuario " + usuarios[2])
    console.log("Clave " + claves[2])

    console.log("Usuario " + usuarios[3])
    console.log("Clave " + claves[3])

    console.log("Usuario " + usuarios[4])
    console.log("Clave " + claves[4])

    console.log("Usuario " + usuarios[5])
    console.log("Clave " + claves[5])

    console.log("Usuario " + usuarios[6])
    console.log("Clave " + claves[6])

    console.log("Usuario " + usuarios[7])
    console.log("Clave " + claves[7])

