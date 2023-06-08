const path=require('path');

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        port:8080,
        static:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"],
                exclude:/node_modules/,
            },
        ],
    },
    mode:"development"
}