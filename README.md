# componentes
Es una aplicación básica de Ionic 6 con Angular, para aprender. Para ello lo que se ejecutó:

`npm install -g @ionic/cli@v6`

`ionic start componentes blank`


Ejecutar `ionic serve` dentro del directorio de la aplicación para ver tu app en el navegador

Ejecutar `ionic capacitor add` para agregar un proyecto nativo de iOS o Android usando Capacitor

Usa  `cordova-res --skip-config --copy` para generar el icono de tu app y pantallas de presentación



## añadir las páginas
`ionic g page pages/inicio `
`ionic g page pages/alert `
`ionic g page pages/action-sheet`


## Build
Ejecutar
`ionic build`
Generará la carpeta wwww, con una versión "web"

## Lanzar en VM Android
Previamente debemos tener un maquina virtual de android configurada (que se puede configurar desde Virtual Device Manager de Android Studio ) y es recomendable hacer el `ionic build` antes

Ejecutar:
`ionic capacitor add android`
Generará la carpeta android con la versión de aplicación para arrancar en android.

Ejecutar:
`ionic capacitor copy android`
Copiará la aplicación buildeada en la carpeta de android

Si queremos que segun cambiemos código, se vaya actualizando automaticamente en la VM Android, recordad darle a reload en el android studio la primera vez (a mi no me fue muy bien..)
`ionic capacitor run android -l --host=192.168.1.94`
ó
`ionic capacitor run android -l --external`


## Más documentación
https://ionic-docs-lq0if04rc-ionic1.vercel.app/docs/v6/intro/cli
https://ionic-docs-lq0if04rc-ionic1.vercel.app/docs/v6/components
https://forum.ionicframework.com/t/create-old-ionic-6-app/232469
https://ionicframework.com/docs
