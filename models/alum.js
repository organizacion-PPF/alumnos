const { model, Schema } = require('mongoose');

const UserSchema = new Schema({

    "Informacion personal": {
        nombre: {type: String, required: true},

        apellido: {type: String, required: true},

        edad: {type:Number, required: true},

        "fecha de nacimiento": {type: String, required: true},

        telefono : {type: String, required: true},

        domicilio: {type: String, required: true},

        dni: {type: String, required: true},

        "tipo de sangre": {type: String},

        tutores :{
            nombre_tutor: {type: String},

            apellido_tutor: {type: String},

            dni_tutor:{type: String},

            domicilio: {type: String}
        }

    },

   
    "Intereses/hobby": {
        musica : {
            "cantante favorito": {type: String},
            "banda favorita": {type: String},
            "genero": {type: String}
        },
        actividades : {
            "deportes": {type: Boolean},
            "mirar peliculas/series":{type: Boolean},
            "salir": {type: Boolean},
            "dibujar/pintar": {type: Boolean},
            "instrumentos" : {type : Boolean}
        },

        cuadro: {type: String }
    

    },

    "Datos academicos/profesionales":{

        primaria: {
            completo_p :{type: Boolean, required: true},
            institucion_p: {type: String, required: true},
            direccion_p: {type: String, required: true}
        },

        secundaria: {
            completo_s : {type: Boolean, required: true},
            institucion_s: {type: String, required: true},
            direccion_s: {type: String, required: true}
        },

        carrera:{
            nombreCarrera:{type: String},
            institucion_carrera: {type: String} ,
            direccion_insti_c: {type: String},
            añoCursada: {type:Number}
        },

        idiomas : [
            {
                "tipo de idioma": {type: String},
                nivel: {type: String}

            }

        ]
       

    },

    "Experiencia laboral" : {

        "tiene experiencia" : {type: Boolean},

        rubro : [{
            "tipo de rubro":  {type: String}
        }],
            
        "años de trabajo" : {type: Number},

        "perfil Github" : {type: String}
    }


});


module.exports = model('alumno', UserSchema);