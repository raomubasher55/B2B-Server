require('dotenv').config();
const cookieParser = require('cookie-parser');
const  mongoose = require('mongoose');
const express  = require('express');
const app = express();
app.use(express.json())
app.use(express.static('public'));
app.use(cookieParser());

app.set('view engine' , 'ejs' );
app.set('views' , './views');

const userRoute = require('./routes/userRoute');
const ecommerceRoute = require('./routes/ecommerceRoutes');
const peashminaRoutes = require('./routes/boutique/pashminaRoutes');
const kaniCraftRoutes  = require('./routes/boutique/kaniCraftRoutes');
const cashmereRoutes = require('./routes/boutique/CashmereRoutes');
const silkRoutes = require('./routes/boutique/SilkRoutes');
const kashmiriBagsAndPurseRoutes = require('./routes/boutique/KashmiriBagsAndPurseRoutes'); 
const kashmiriJacket = require('./routes/boutique/kashmiriJacketRoutes'); 
const kashmiriKaftan = require('./routes/boutique/kashmiriKaftanRoutes'); 
const kashmiriKutra = require('./routes/boutique/kashmiriKurtaRoutes'); 
const kashmiriPheran = require('./routes/boutique/kashmiriPheranRoutes'); 
const kashmiriJewelry = require('./routes/boutique/kashmiriJewelryRoutes'); 
// interior Decor
const papierMacheRoutes = require('./routes/interiorDecor/papierMacheRoutes'); 
const bedLinenRoutes = require('./routes/interiorDecor/bedLinenRoutes');
const sofaAndCushionCoversRoutes = require('./routes/interiorDecor/sofaAndCushionCoversRoutes');
const roomDividerScreenRoutes = require('./routes/interiorDecor/roomDividerScreenRoutes');
const officeAccessoryRoutes = require('./routes/interiorDecor/officeAccessoryRoutes');
const jeweledWallHangingRoutes = require('./routes/interiorDecor/jeweledWallHangingRoutes');
const tapestryRoutes = require('./routes/interiorDecor/tapestryRoutes');
const copperwareRoutes = require('./routes/diningServingWare/copperwareRoutes');
const silverwareRoutes = require('./routes/diningServingWare/silverwareRoutes');
const walnutwareRoutes = require('./routes/diningServingWare/walnutwareRoutes');
const papermachiewareRoutes = require('./routes/diningServingWare/papermachiewareRoutes');
const enamelwareRoutes = require('./routes/diningServingWare/enamelwareRoutes');
const bedroomRoutes = require('./routes/rugsAndCarpets/bedroomRoutes');
const livingRoomRugRoutes = require('./routes/rugsAndCarpets/livingRoomRugRoutes');
const diningRoomRugRoutes = require('./routes/rugsAndCarpets/diningRoomRugRoutes');
const kitchenRugRoutes = require('./routes/rugsAndCarpets/kitchenRugRoutes');
const homeLibraryRugRoutes = require('./routes/rugsAndCarpets/homeLibraryRugRoutes');
const passagewayStairsRugRoutes = require('./routes/rugsAndCarpets/passagewayStairsRugRoutes');
const grandFoyerRugRoutes = require('./routes/rugsAndCarpets/grandFoyerRugRoutes');
const parlorRoomRugRoutes = require('./routes/rugsAndCarpets/parlorRoomRugRoutes');
const cigarRoomRugRoutes = require('./routes/rugsAndCarpets/cigarRoomRugRoutes');
const namdaEmbroideryRugRoutes = require('./routes/rugsAndCarpets/namdaEmbroideryRugRoutes');
const documentRoutes = require('./routes/documents/documentRoutes');





const connectDB = require('./config/db');

app.use('/api/v1', userRoute);
app.use('/api/ecommerce', ecommerceRoute);
app.use('/api/boutiques', peashminaRoutes);
app.use('/api/kanicrafts', kaniCraftRoutes);
app.use('/api/cashmere', cashmereRoutes);
app.use('/api/silks', silkRoutes);
app.use('/api/kashmiribagsandpurse', kashmiriBagsAndPurseRoutes);
app.use('/api/kashmiri-jacket', kashmiriJacket);
app.use('/api/kashmiri-kaftan', kashmiriKaftan);
app.use('/api/kashmiri-kurta', kashmiriKutra);
app.use('/api/kashmiri-pheran', kashmiriPheran);
app.use('/api/kashmiri-jewelry', kashmiriJewelry);


// interior Decor
app.use('/api/interior-decor/papier-mache', papierMacheRoutes);
app.use('/api/interior-decor/bed-linen', bedLinenRoutes);
app.use('/api/interior-decor/sofa-and-cushion-covers', sofaAndCushionCoversRoutes);
app.use('/api/interior-decor/room-divider', roomDividerScreenRoutes);
app.use('/api/interior-decor/officeaccessory', officeAccessoryRoutes);
app.use('/api/interior-decor/jeweledwallhanging', jeweledWallHangingRoutes);
app.use('/api/interior-decor/tapestry', tapestryRoutes);


// Dinning Serving Ware
app.use('/api/dining-serving-ware/copperware', copperwareRoutes);
app.use('/api/dining-serving-ware/silverware', silverwareRoutes);
app.use('/api/dining-serving-ware/walnutware', walnutwareRoutes);
app.use('/api/dining-serving-ware/papermachieware', papermachiewareRoutes);
app.use('/api/dining-serving-ware/enamelware', enamelwareRoutes);

// rugsAndCarpets
app.use('/api/rugs-and-carpets/bedroom', bedroomRoutes);
app.use('/api/rugs-and-carpets/livingroom', livingRoomRugRoutes);
app.use('/api/rugs-and-carpets/dining-room', diningRoomRugRoutes);
app.use('/api/rugs-and-carpets/kitchen', kitchenRugRoutes);
app.use('/api/rugs-and-carpets/home-library', homeLibraryRugRoutes);
app.use('/api/rugs-and-carpets/passageway-stairs', passagewayStairsRugRoutes);
app.use('/api/rugs-and-carpets/grand-foyer', grandFoyerRugRoutes);
app.use('/api/rugs-and-carpets/parlor-room', parlorRoomRugRoutes);
app.use('/api/rugs-and-carpets/cigar-room', cigarRoomRugRoutes);
app.use('/api/rugs-and-carpets/namda-embroidery', namdaEmbroideryRugRoutes);
app.use('/api/documents', documentRoutes);




connectDB();

const port = process.env.SERVER_PORT | 3000;
app.listen(port , ()=>{ 
    console.log("server is runing on port : " + port);
});