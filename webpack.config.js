
const path= require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin=require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports={
  //mode 
    mode:'development',
    // input file
    entry:{
       bundle: path.resolve(__dirname,"src/index.js")},
    //output
       output:{
        path:path.resolve(__dirname,"dist"),
        filename:'[name][contenthash].js',
        clean:true,
        assetModuleFilename:'[name][ext]'
    },
    //dependency graph
    devtool:'source-map',
    devServer: { contentBase: './dist', open: true }, 
    module:{
        rules:[
            {
              //type
            test:/\.scss/,
            //loaders
            use:['style-loader','css-loader','sass-loader'],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
          {test:/\.(png|svg|webp|jpg|gif)/,
          type:'asset/resource'
        }
    ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"Webpack App",
            filename:"index.html",
            template:'src/template.html'
        }),
        new BundleAnalyzerPlugin(),
    ],
}