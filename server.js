var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var cors        = require('cors');
var bodyParser  = require('body-parser');
//var logger      = require('morgan');

// parse application/json
app.use(bodyParser.json());
app.use(cors());
//app.use(logger('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



// Conexión con la base de datos
mongoose.connect('mongodb://localhost:27017/minimo1_final');


/* ************* MODELOS ********************************************** */

//Schema
var StudentSchema = mongoose.Schema({
    name: String,
    address: String,
    phone: String,
});

//Compiling our schema into a model
var Student = mongoose.model('students', StudentSchema);

var SubjectSchema = mongoose.Schema({
    name: String,
    studies: String,
    quadrimestre: String,
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'students'}],
    when: String
});
var Subject = mongoose.model('subjects', SubjectSchema);

/* ********************************************************************************** */


//listar todas las asignaturas
app.get('/api/subjects', function(req, res) {
    Subject.find(req.query,function(err, subjects) {
        if(err) {
            res.send(err);
        }
        res.json(subjects);

    });
});

//buscar asignatura por nombre
app.get('/api/subjects/:name', function(req, res,next) {
    var name = new mongoose.Types.ObjectId(req.params.name);
    Subject.findSubjectByName({name: name}).populate("subjects").exec(function(err, subject) {
        if(err) {
            res.send(err);
        }
        res.send(subject);
    });

});


//buscar asignatura por titulacion
app.get('/api/subjects/:studies', function(req, res,next) {
  var studies = new mongoose.Types.ObjectId(req.params.studies);
  Subject.findSubjectByStudies({studies: studies}).populate("subjects").exec(function(err, subject) {
    if(err) {
      res.send(err);
    }
    res.send(subject);
  });

});


//buscar asignaturas por quadrimestre
app.get('/api/subjects/:quadrimestre', function(req, res,next) {
  var quadrimestre = new mongoose.Types.ObjectId(req.params.quadrimestre);
  Subject.findSubjectByQuadrimestre({quadrimestre: quadrimestre}).populate("subjects").exec(function(err, subject) {
    if(err) {
      res.send(err);
    }
    res.send(subject);
  });

});

//Ordenacion por nombre



//Ver detalle de una asignatura




//crear un estudiante
app.post('/api/students', function (req, res, next) {
  Student.create({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone
  }, function(err, student) {
    if(err) {
      res.send(err);
    }
    console.log("Student creado");
  })
});


//crear una asignatura
app.post('/api/subjects', function (req, res, next) {
  Subject.create({
    name: req.body.name,
    studies: req.body.studies,
    quadrimestre: req.body.quadrimestre,
    students: req.body.students
  }, function(err, subject) {
    if(err) {
      res.send(err);
    }
    console.log("Subject creada");
  })
});




//matricular alumno a una asignatura
app.post('/api/subjects/:name/students', function(req, res) {
    Student.create({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone
    }, function(err, student) {
        if(err) {
            res.send(err);
        }
        console.log("Student creado");
        Subject.findSubjectByName({name: req.params.name}, function(err, subject) {
            subject.students.push(student);
            subject.save(function(err, data){
                if(err) {
                    res.send(err);
                }
                res.send(student);
            });
        })
    })
})


//app.use(express.static('src'));
//app.use('/', express.static('public/views'));

// Escucha en el puerto 2709 y corre el server
app.listen(3000, function() {
    console.log('App listening on port 3000');
});
