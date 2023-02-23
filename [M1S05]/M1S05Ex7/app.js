
import { Time } from './Time.js';
import { Partida } from './Partida.js';


const avai = new Time('Avai', 'AVA');
const figueirense = new Time('Figueirense', 'FIG');


const jogoida = new Partida('AVA', 2, 'FIG', 1);
const jogovolta = new Partida('FIG', 0, 'AVA', 0);


avai.computarPartida(jogoida);
figueirense.computarPartida(jogoida);
figueirense.computarPartida(jogovolta);
avai.computarPartida(jogovolta);


avai.exibirSituacao();
figueirense.exibirSituacao();
