const path = require('path'); // dependencia nativa de node para la funcion de la linea 6
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ruleForStyles = {  // añade css autmaticamente en la compilacion sin tener que añadirlo al html silo en el main.js de src
    test: /\.css$/,
    use:[
        'style-loader', 'css-loader']
        //npm install style-loader css-loader --save-dev
}

const ruleForJavaScript = { // regla para transformar los archivos que no entiende webpack y serán entoces tratados por babel
    test: /\.js$/, //todos los archivos que terminen en .js seran enviados a un loader o cargador 
    loader: 'babel-loader', // ese loader será babel-loader
    options: {
        presets:[
            ['@babel/preset-env',
           // [// Para que no se haga necesario importar (buenas practicas)
              //  , //  Entre las opciones que tenemos establecemos un preset de babel (configuración preestablecida)
              //  {
                  //  runtime: 'automatic' // importa los elementos automaticamente
              //  }
          //  ]
            {targets:"defaults"}
            ]  
        ] ,
        plugins: ['@babel/plugin-proposal-object-rest-spread']
        //Terminal: npm install --save-dev webpack-cli
        //Terminal: npm install -D babel-loader @babel/core @babel/preset-env --save-dev
    }
}

const rules = [ ruleForJavaScript , ruleForStyles]//lista de reglas 

module.exports={
     entry:'./src/index.js', //por defecto webpack establece la ruta de entrada, así que esta linea se puede omitir a menos de que el punto de entrada sea otro archivo
     output: {
        path: path.resolve(__dirname, "build"), //Se establece el pumto de salida en este caso la carpeta 'build', pero no solo basta con decir el nombre de la carpeta sno que debemos dale la ruta absoluta
        filename: 'main.js'
     },

     plugins: [ // añade una funcionalidad a webpack (en este caso el de no necesitar crear manualmente un index.html para build)
        new HtmlWebpackPlugin( // pasamos el template que deseamos utilizar
        {
            inject: true,
            template: 'src/index.html',
            filename: './index.html'
        }
        ),
        new CopyPlugin(
            {
                patterns: [{
                    from: './src/styles/main.css',
                    to: ''        
                }]
            }
        )
        ],
    module:{ rules }// configurar el loader 
}


// Termonal: npm install html-webpack-plugin --save-dev
// Terminal: npm i webpack-dev-server
// Terminal: npm install copy-webpack-plugin --save-dev
// Terminal: npm install --save @babel/runtime