//Codígo creado por David Chian wa.me/5351524614
const _0x2a4130=_0x2868;(function(_0x2d5f8a,_0xfb2b16){const _0xeb15d5=_0x2868,_0xc5790b=_0x2d5f8a();while(!![]){try{const _0x51e13d=parseInt(_0xeb15d5(0x104))/0x1*(-parseInt(_0xeb15d5(0x114))/0x2)+-parseInt(_0xeb15d5(0x105))/0x3*(-parseInt(_0xeb15d5(0xf0))/0x4)+parseInt(_0xeb15d5(0x109))/0x5*(parseInt(_0xeb15d5(0x11e))/0x6)+parseInt(_0xeb15d5(0xf1))/0x7+parseInt(_0xeb15d5(0xea))/0x8+parseInt(_0xeb15d5(0x112))/0x9*(-parseInt(_0xeb15d5(0x110))/0xa)+-parseInt(_0xeb15d5(0xe8))/0xb*(parseInt(_0xeb15d5(0xe9))/0xc);if(_0x51e13d===_0xfb2b16)break;else _0xc5790b['push'](_0xc5790b['shift']());}catch(_0xd5aadb){_0xc5790b['push'](_0xc5790b['shift']());}}}(_0x5bd6,0x7ae52));function _0x2868(_0x1501c5,_0x351b7e){const _0x5bd619=_0x5bd6();return _0x2868=function(_0x2868c3,_0x4c3aae){_0x2868c3=_0x2868c3-0xe2;let _0xa4baa8=_0x5bd619[_0x2868c3];return _0xa4baa8;},_0x2868(_0x1501c5,_0x351b7e);}import _0x3be501 from'fs';import{prepareWAMessageMedia,generateWAMessageFromContent,getDevice}from'@whiskeysockets/baileys';const obtenerDatos=()=>{const _0xad3850=_0x2868;return _0x3be501[_0xad3850(0xf9)](_0xad3850(0xff))?JSON[_0xad3850(0xfa)](_0x3be501['readFileSync'](_0xad3850(0xff),_0xad3850(0xfd))):{'usuarios':{},'personajesReservados':[]};},obtenerPersonajes=()=>{const _0x39b393=_0x2868;return _0x3be501[_0x39b393(0xf9)](_0x39b393(0xed))?JSON[_0x39b393(0xfa)](_0x3be501[_0x39b393(0xfc)](_0x39b393(0xed),_0x39b393(0xfd))):[];},contarTotalPersonajes=()=>{const _0x3e5797=_0x2868;if(_0x3be501[_0x3e5797(0xf9)](_0x3e5797(0xed))){const _0x1c9236=_0x3be501[_0x3e5797(0xfc)]('./src/JSON/characters.json',_0x3e5797(0xfd))['split']('\x0a');return _0x1c9236[_0x3e5797(0x116)]-0x2;}else return 0x0;};let handler=async(_0x18b255,{conn:_0x102a78,usedPrefix:_0x2a3e48})=>{const _0x5eb0cd=_0x2868,_0x2e7446=_0x18b255[_0x5eb0cd(0xf6)];let _0x1a2dc1=obtenerDatos(),_0x4a8ea7=obtenerPersonajes(),_0x312a66=contarTotalPersonajes();if(!_0x1a2dc1['usuarios']||!(_0x2e7446 in _0x1a2dc1['usuarios'])||_0x1a2dc1[_0x5eb0cd(0xe3)][_0x2e7446]['characters'][_0x5eb0cd(0x116)]===0x0){_0x102a78['reply'](_0x18b255[_0x5eb0cd(0x10c)],_0x5eb0cd(0x10d),_0x18b255,rcanal);return;}const _0x54df75=()=>{const _0x35b369=_0x5eb0cd;try{const _0x4841bc=JSON['parse'](_0x3be501['readFileSync'](_0x35b369(0x115),_0x35b369(0xfd)));if(_0x4841bc[_0x35b369(0x108)]!==_0x35b369(0x10a))return![];if(_0x4841bc[_0x35b369(0x103)]['url']!==_0x35b369(0x107))return![];return!![];}catch(_0x1e5b09){return console['error'](_0x35b369(0x113),_0x1e5b09),![];}};if(!_0x54df75()){await _0x102a78[_0x5eb0cd(0x119)](_0x18b255[_0x5eb0cd(0x10c)],'🚩\x20Este\x20comando\x20solo\x20está\x20disponible\x20para\x20AI\x20Yaemori.\x0a\x20🌟\x20https://github.com/OfcDiego/YaemoriBot-MD',_0x18b255,rcanal);return;}const {characters:_0x409311,totalRwcoins:_0x5ae385}=_0x1a2dc1[_0x5eb0cd(0xe3)][_0x2e7446],_0x3b6f3c=_0x409311['length'];let _0x1d5972=new Set();Object[_0x5eb0cd(0xe2)](_0x1a2dc1[_0x5eb0cd(0xe3)])[_0x5eb0cd(0xeb)](_0x50c3ea=>{const _0xde7c71=_0x5eb0cd;_0x50c3ea[_0xde7c71(0x10e)][_0xde7c71(0xeb)](_0x134d64=>_0x1d5972[_0xde7c71(0x10f)](_0x134d64));});let _0x1e6f42=_0x4a8ea7[_0x5eb0cd(0x100)](_0x547523=>!_0x1d5972[_0x5eb0cd(0xf5)](_0x547523[_0x5eb0cd(0x108)])),_0x519813=_0x1e6f42['length'];const _0x318f71=_0x5eb0cd(0xe6)+_0x3b6f3c+'\x20𝑊𝐹\x20♡\x0a┊𝙏𝙤𝙩𝙖𝙡\x20𝙙𝙚\x20𝙒𝙁𝙘𝙤𝙞𝙣𝙨:\x0a│\x20'+_0x5ae385+_0x5eb0cd(0xf7)+(_0x3b6f3c/_0x312a66*0x64)[_0x5eb0cd(0xf3)](0x2)+_0x5eb0cd(0xf4)+_0x519813+_0x5eb0cd(0xe5)+_0x312a66+_0x5eb0cd(0xef);let _0x48bd50=_0x409311['map']((_0x28772c,_0x30bc20)=>({'header':_0x28772c,'title':_0x5eb0cd(0x106)+(_0x30bc20+0x1),'description':'Selecciona\x20para\x20ver\x20la\x20imagen\x20de\x20'+_0x28772c,'id':_0x2a3e48+_0x5eb0cd(0x11c)+_0x28772c}));const _0x1ff8f6=await getDevice(_0x18b255[_0x5eb0cd(0x11a)]['id']);if(_0x1ff8f6!==_0x5eb0cd(0xee)&&_0x1ff8f6!==_0x5eb0cd(0x111)){const _0x32fb1d={'body':{'text':_0x318f71},'footer':{'text':_0x5eb0cd(0xec)},'nativeFlowMessage':{'buttons':[{'name':'single_select','buttonParamsJson':JSON[_0x5eb0cd(0xf8)]({'title':_0x5eb0cd(0xfe),'sections':[{'title':_0x5eb0cd(0x101),'rows':_0x48bd50}]})}],'messageParamsJson':''}};let _0x4301ac=generateWAMessageFromContent(_0x18b255['chat'],{'viewOnceMessage':{'message':{'interactiveMessage':_0x32fb1d}}},{'userJid':_0x102a78[_0x5eb0cd(0xf2)][_0x5eb0cd(0xe7)],'quoted':_0x18b255});_0x102a78[_0x5eb0cd(0x10b)](_0x18b255['chat'],_0x4301ac[_0x5eb0cd(0x11d)],{'messageId':_0x4301ac[_0x5eb0cd(0x11a)]['id']});}else _0x102a78[_0x5eb0cd(0x119)](_0x18b255[_0x5eb0cd(0x10c)],_0x318f71,_0x18b255);};function _0x5bd6(){const _0x41889d=['tags','reply','key','register','character\x20','message','2287734cHZyZS','values','usuarios','obtenido','\x20de\x20','╭──────┄\x20♡\x20┄──────\x0a│╽𝑻.𝑼\x20𝑰.𝑵.𝑽.𝑬.𝑵.𝑻.𝑨.𝑹.𝑰.𝑶╽\x0a┊𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙟𝙚𝙨:\x0a⎆\x20','jid','19382hoWBKP','600eUEMqd','4449384LBolOj','forEach','Personajes\x20Obtenidos','./src/JSON/characters.json','desktop','\x20en\x20total.\x0a╰──────┄\x20♢\x20┄──────','3912ufWDaY','5254781Kxfzyd','user','toFixed','%\x0a┊𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙟𝙚𝙨\x20𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚𝙨:\x0a⎆\x20','has','sender','\x0a┊𝙋𝙤𝙧𝙘𝙚𝙣𝙩𝙖𝙟𝙚:\x0a⎆\x20','stringify','existsSync','parse','help','readFileSync','utf-8','Tus\x20Personajes','data.json','filter','Lista\x20de\x20Personajes','command','repository','452509ezRvBG','1002hSpfhJ','Personaje\x20','git+https://github.com/OfcDiego/YaemoriBot-MD.git','name','5iQMhYM','YaemoriBot-MD','relayMessage','chat','*No\x20tienes\x20ningún\x20objeto\x20en\x20tu\x20inventario\x20😹🫵!*','characters','add','9708100DPeTgl','web','9cVHAHI','Error\x20al\x20leer\x20package.json:','2CfjBjJ','./package.json','length','obtenidos'];_0x5bd6=function(){return _0x41889d;};return _0x5bd6();}handler[_0x2a4130(0xfb)]=[_0x2a4130(0x117)],handler[_0x2a4130(0x118)]=['anime'],handler[_0x2a4130(0x102)]=[_0x2a4130(0x117),_0x2a4130(0xe4),'ob'],handler[_0x2a4130(0x11b)]=!![];export default handler;