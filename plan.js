// ===== PLAN DEL MES: es lo único que hay que cambiar cada mes =====
// Cada comida = lista de PUNTOS (obligatorios); cada punto = lista de OPCIONES (elige 1).
const FR=["120 g piña","1 kiwi","60 g arándanos o frambuesas","150 g fresas","2 albaricoques","240 g sandía","120 g melón","1 manzana sin piel","1 pera"],
FRP=[...FR,"1 plátano grande"],
LACT=["2 yogures naturales","300 ml queso fresco batido 0%","300 ml Skyr","1 yogur griego","1 yogur de soja"],
CER=g=>[g+" g avena o harina de avena",g+" g cereales (Corn Flakes, Rice Krispies o Avena Crunchy)"],
NUT=g=>g+" g almendras, avellanas o anacardos crudos",
TOR="3 tortitas de arroz, maíz o legumbre",
PROT=["120 g pollo a la plancha","120 g filete de pavo","1 lata de atún al natural + 50 g fiambre de pavo o pollo, 3 claras (90 ml) o 1 huevo (plancha, cocido o tortilla)","120 g cinta de lomo de cerdo","140 g merluza, bacalao, gallo o pescadilla"],
GRC=["10 ml aceite de oliva virgen extra","40 g aguacate o guacamole"],
GRN=["10 ml aceite de oliva virgen extra","20 g hummus","40 g aguacate o guacamole"],
QCH=["30 g queso","1 onza de chocolate +70%"],
VER=["130 g verduras a la plancha, cocidas o trituradas (plato medio)","Ensalada mixta (lechuga, canónigos, tomate, cebolla…)","250 ml caldo (pollo, cocido, verduras o pescado)"],
VEC=["180 ml gazpacho",...VER],
SAL=["170 g ternera","140 g carne kebab","180 g salmón o emperador"],
DES=[
 ["60 g pan de barra o Bimbo (centeno, multicereales, integral)","2 rebanadas de pan molde",...CER(40),"5 tortitas de arroz, maíz o legumbre"],
 ["10 ml aceite de oliva virgen extra","40 g aguacate o guacamole",NUT(15),"Crema de cacahuete natural","5 g cacao desgrasado","20 g hummus","25 g membrillo"],
 ["80 g fiambre de pavo o pollo","70 g york","50 g jamón serrano o lomo embuchado extra","50 g lacón","50 g tiras de pollo ahumado",...LACT],
 FRP,
 ["Café + 200-300 ml leche de soja"]
],
MER1=[LACT,CER(20),[NUT(25)],FRP],
MER2=[["1 rebanada de pan molde",TOR],["40 g jamón serrano o lomo"],[NUT(15)]];

const PLAN={
 nombre:"Plan actual",
 notas:["Beber mínimo 2 L de agua al día.","3 comidas libres a la semana.","Todos los pesos son en seco. Pasta, arroz y legumbre cocidos pesan ×3 (60 g en seco = 180 g cocido). Los demás alimentos mantienen el mismo peso."],
 comidas:["Desayuno","Comida","Merienda","Cena"],
 // lunes … domingo -> clave de menú
 semana:["LV","MS","X","J","LV","MS","D"],
 dias:{
  LV:[DES,
   [["60 g arroz o pasta sin gluten","60 g noodles de arroz"],PROT,GRC,VEC],
   MER1,
   [["60 g pan","180 g patata"],SAL,QCH,GRN,VER]],
  MS:[DES,
   [["180 g ñoquis de patata","65 g pasta de legumbre"],["2 huevos (plancha, cocidos o tortilla)"],["50 g fiambre de pavo o pollo"],GRC,LACT,VEC],
   [...MER2,[NUT(25),"Crema de cacahuete natural","10 g cacao desgrasado"]],
   [["60 g arroz","90 g pan"],PROT,QCH,GRN,VER]],
  X:[DES,
   [["70 g arroz o pasta sin gluten","70 g noodles de arroz"],["180 g ternera","170 g salmón o emperador"],QCH,GRC,VEC],
   [LACT,CER(30),[NUT(30)],FR],
   [["60 g pan","200 g patata"],PROT,GRN,VER]],
  J:[DES,
   [["70 g legumbre","50 g soja texturizada","60 g pasta de legumbre"],["120 g patata o boniato","35 g arroz"],PROT,VEC],
   [...MER2.slice(0,2),FR,MER2[2]],
   [["2 fajitas","250 g patata"],["2 huevos"],["30 g jamón serrano","50 g lacón","50 g tiras de pollo","1 lata de atún al natural"],QCH,GRN,VER]],
  D:[DES,
   [["80 g arroz o pasta sin gluten","80 g noodles de arroz"],["150 g salmón o emperador"],GRC,VEC],
   [LACT,CER(20),[NUT(25)],FR],
   [["200 g patata o boniato"],PROT,QCH,GRN,VER]]
 },
 ent:[
  {n:"Día 1",cal:["6 min andando en cinta a ritmo suave","Sentadillas con peso corporal 2x15","Femoral sentada 1x15"],ej:[
   ["Femoral sentada a 1 pierna","1 min","2x15 por pierna"],
   ["Sentadillas con barra o Multipower","2 min","1x15 · 1x12 · 1x10"],
   ["Jalón con Gironda","2 min","2x15 · 1x10-12"],
   ["Prensa inclinada (pies en la parte superior)","2 min","1x15 · 2x12"],
   ["Patada de glúteo en polea baja","1 min","2x15 por pierna"],
   ["Elevaciones laterales con mancuernas (hombro)","1 min","2x12"],
   ["Curl martillo con mancuernas","1 min","2x12"]]},
  {n:"Día 2",cal:["6 min andando en cinta a ritmo suave","Glute bridge 2x15","Sentadillas libres 1x15"],ej:[
   ["Máquina de aductor (movimiento hacia dentro)","1 min","2x15"],
   ["Prensa vertical","2 min","1x12-15 · 1x10 · 1x8"],
   ["Hip thrust con barra o en máquina","2 min","1x12-15 · 1x10 · 1x8"],
   ["Remo en máquina, agarre neutro","2 min","2x12"],
   ["Dominadas en máquina asistida, agarre inverso, 20 kg de asistencia","2 min","2x10-15"],
   ["Patada de glúteo lateral en máquina","1 min","2x15 por pierna"],
   ["Cadera-glúteo en máquina sentada (movimiento hacia fuera)","1 min","2x15"]]}
 ],
 notaEnt:"Calentamiento siempre con pesos muy livianos."
};
