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
    news: (req,res)=>{
        let {nomeNews, emailNews} = req.body;
        res.render('news',{nomeNews,title: 'Home'});
    }
    
}

module.exports = homeController;