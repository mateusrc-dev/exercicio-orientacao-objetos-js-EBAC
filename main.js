function Animacao(nome, genero, estilo_da_animacao, ano, estudio, animadores, dubladores, pais_de_origem) {
    this.nome = nome;
    this.genero = genero;
    this.estilo_da_animacao = estilo_da_animacao;
    this.ano = ano;
    this.estudio = estudio;
    this.animadores = animadores;
    this.dubladores = dubladores;
    this.pais_de_origem = pais_de_origem;
};

function Anime(nome, genero, ano, estudio, animadores, dubladores) {
    Animacao.call(this, nome, genero, "2D", ano, estudio, animadores, dubladores, "Japão");
}

function DesenhoAnimadoAmericano(nome, genero, estilo_da_animacao, ano, estudio, animadores, dubladores) {
    Animacao.call(this, nome, genero, estilo_da_animacao, ano, estudio, animadores, dubladores, "Estados Unidos");
}

const rei_leao = new Animacao("Rei Leão", "Eventura", "2D", 1995, "Disney", ["Funalo Desenhista", "Beltrano AnimaTudo"], ["Dublado doido", "Dublador DublaTudo"], "Estados Unidos");
const naruto = new Anime("Naruto", "Shounen", 2000, "Pierrot", ["Tatakai no desenho", "Shuriken no desenhista"], ["Shikai Dubla", "Kokoro no dublador"]);
const procurando_nemo = new DesenhoAnimadoAmericano("Procurando Nemo", "Aventura", "3D", 2003, "Pixar", ["Animador 3D muito doido", "Viciado em Criar modelo 3d"], ["dublador da Dori", "Dublador do Nemo"]);