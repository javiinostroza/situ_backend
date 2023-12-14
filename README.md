# SITU BACKEND

Este módulo corresponde al backend de la app requerida para postular a Situ.
Fue realizado en el framework Nestjs y utiliza una base de datos sqlite3.

## Installation

```bash
$ npm install
```
## Running the app

```bash
# development
$ npm run start
```
 Correr [http://localhost:3001](http://localhost:3001) para acceder a la API o bien, ingresar a [https://situ-backend.onrender.com](https://situ-backend.onrender.com).

 ## Link a la App
 [https://situ-frontend-javiinostroza.vercel.app/](https://situ-frontend-javiinostroza.vercel.app/)
 
 
## Documentación


### Patients
**GET** all Patients 

`http://localhost:3001/patient`

**GET** a Patient

`http://localhost:3001/patient/1`

**POST** a Patient 

```
http://localhost:3001/patient

Body raw (json)

{
    "rut": "99999999-9"
}
```

**DELETE** a Patient

`http://localhost:3001/patient/1`

### Professionals
**GET** all Professionals 

`http://localhost:3001/professional`

**GET** a Professional

`http://localhost:3001/professional/1`

**POST** a Professional 

```
http://localhost:3001/professional

Body raw (json)

{
    "email": "cristianpomez@situ.cl",
    "name": "Cristian Pomez",
    "profession": 1
}
```

**DELETE** a Professional

`http://localhost:3001/professional/1`

### Professions
**GET** all Professions

`http://localhost:3001/profession`

**GET** a Profession

`http://localhost:3001/profession/1`

**POST** a Profession

```
http://localhost:3001/profession

Body raw (json)

{
    "name": "Enfermero(a)"
}
```

**DELETE** a Profession

`http://localhost:3001/profession/1`

### Schedules
**GET** all Schedules 

`http://localhost:3001/schedule`

**POST** a Schedule 

```
http://localhost:3001/schedule

Body raw (json)
{
    "date": "2023-12-10", //AAA-MM-DD
    "startHour": 14,
    "endHour": 20,
    "professional": 4
}
```

**GET** a Schedule

`http://localhost:3001/schedule/1`

**PUT** a Schedule
```
http://localhost:3001/schedule/1

Body raw (json)
{
   available: false
}
```

**DELETE** a Schedule

`http://localhost:3001/schedule/1`
