# booking web

web for show bookings

## Tópicos
*  **[📝 Requerimientos / tecnologias](#-requerimientos)**
*  **[🚀 Solucion](#-Solucion)**
*  **[🗂 Estructura de Directorios](#-estructura-de-directorios)**
*  **[👓 Pruebas](#-pruebas)**

## 📝 Requerimientos / Tecnologias
```
Nodejs 14.16.0
Angular 11.2.4
```
## 🚀 Solucion

Utilizando el framework Angular bajo un servidor nodejs se construye una web dinámica que contemplan un login de usuario y un listado de bookings consultando un api rest

## 🗂 Estructura de Directorios
```
📦 resume-api 
│
│  
└─📁 src                  Código fuente
│ │
│ └─📁 app               componentes, módulos, servicios, utils
│ │
│ └─📁 assets            archivos
│ │       
│ └─📁 environments      Configuracion de ambientes
│
└─📄 README.md            Documentacion del software
```

## 👓 Pruebas
### Ejecutar
1. Para Ejecutar el proyecto se debe clonar, luego de clonar se deben de descargar las dependencias, y luego iniciar
>comandos:
```
git clone git@github.com:wrumbos/booking-web.git
cd booking-web
npm install
ng serve
```
### Home pagina simple que contiene un titulo
![](resources/images/1.png)
### inicio de session pagina contiene un formulario para inciar session contempla validaciones
![](resources/images/2.png)
![](resources/images/3.png)
![](resources/images/4.png)
![](resources/images/5.png)
### booking al lograr un inicio de session exitoso a los usuarios puede consultar los bookings en donde se tendra una lista con las posibilidades de los campos id y precio filtar y ordenar
![](resources/images/6.png)
