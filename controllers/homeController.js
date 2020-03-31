const path = require('path');
const fs = require('fs');
const homeController = {
    index: (req,res) => {
        let servicos = [
            {nome: 'Desenvolvimento web', imagem:'/imagens/undraw_dev_focus.svg'},
            {nome: 'Consultoria UX', imagem:'/imagens/undraw_social_dashboard.svg'},
            {nome: 'Design', imagem:'/imagens/undraw_dev_focus.svg'},
            {nome: 'Marketing Digital', imagem:'/imagens/undraw_mobile_apps.svg'}
        ]
        let slider = [
            "/imagens/banner.jpg",
            "/imagens/slider.png",
            "/imagens/slider1.jpg",
            "/imagens/slider2.jpg"
        ]
        res.render('index',{title: 'Home' , listaServicos: servicos, carousel: slider});
    },

    contato: (req,res)=>{
        let {nomeC,emailC,mensagemC} = req.body;
        let contato ={nomeC,emailC,mensagemC};


        let fileContato = path.join('db','contatos.json');
        let listaContato =[];

        if(fs.existsSync(fileContato)){
            //Trazer informações do arquivo
            listaContato = fs.readFileSync(fileContato,{encoding:'utf-8'});
            listaContato = JSON.parse(listaContato);
 
        }
               
        //salvar informações no arquivo
        listaContato.push(contato);
        listaContato = JSON.stringify(listaContato);

        fs.writeFileSync(fileContato, listaContato);

        res.render('contato',{nomeC,title: 'Home'});
    },
    news: (req,res)=>{
        let {nomeNews, email} = req.body;
        let info ={nomeNews,email};


        let fileNews = path.join('db','news.json');
        let listaNews =[];

        if(fs.existsSync(fileNews)){
            //Trazer informações do arquivo
            listaNews = fs.readFileSync(fileNews,{encoding:'utf-8'});
            listaNews = JSON.parse(listaNews);
 
        }
               
        //salvar informações no arquivo
        listaNews.push(info);
        listaNews = JSON.stringify(listaNews);

        fs.writeFileSync(fileNews, listaNews);

        res.render('news',{nomeNews,title: 'Home'});
    },
    admin: (req,res)=>{

        let fileNews = path.join('db','news.json');

        listaNews = fs.readFileSync(fileNews,{encoding:'utf-8'});
        listaNews = JSON.parse(listaNews);

        let fileContatos = path.join('db','contatos.json');

        listaContatos = fs.readFileSync(fileContatos,{encoding:'utf-8'});
        listaContatos = JSON.parse(listaContatos);

        res.render('admin',{listaNews,listaContatos, title:"Painel De Controle"});
    }
    
}

module.exports = homeController;