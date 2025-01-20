const express = require('express');
const userRoute = require('./userRoute');
const ecommerceRoute = require('./ecommerceRoutes');
const peashminaRoutes = require('./boutique/pashminaRoutes');
const kaniCraftRoutes  = require('./boutique/kaniCraftRoutes');
const cashmereRoutes = require('./boutique/CashmereRoutes');
const silkRoutes = require('./boutique/SilkRoutes');
const kashmiriBagsAndPurseRoutes = require('./boutique/KashmiriBagsAndPurseRoutes'); 
const kashmiriJacket = require('./boutique/kashmiriJacketRoutes'); 
const kashmiriKaftan = require('./boutique/kashmiriKaftanRoutes'); 
const kashmiriKutra = require('./boutique/kashmiriKurtaRoutes'); 
const kashmiriPheran = require('./boutique/kashmiriPheranRoutes'); 
const kashmiriJewelry = require('./boutique/kashmiriJewelryRoutes'); 
// interior Decor
const papierMacheRoutes = require('./interiorDecor/papierMacheRoutes'); 
const bedLinenRoutes = require('./interiorDecor/bedLinenRoutes');
const sofaAndCushionCoversRoutes = require('./interiorDecor/sofaAndCushionCoversRoutes');
const roomDividerScreenRoutes = require('./interiorDecor/roomDividerScreenRoutes');
const officeAccessoryRoutes = require('./interiorDecor/officeAccessoryRoutes');
const jeweledWallHangingRoutes = require('./interiorDecor/jeweledWallHangingRoutes');
const tapestryRoutes = require('./interiorDecor/tapestryRoutes');
const copperwareRoutes = require('./diningServingWare/copperwareRoutes');
const silverwareRoutes = require('./diningServingWare/silverwareRoutes');
const walnutwareRoutes = require('./diningServingWare/walnutwareRoutes');
const papermachiewareRoutes = require('./diningServingWare/papermachiewareRoutes');
const enamelwareRoutes = require('./diningServingWare/enamelwareRoutes');
const bedroomRoutes = require('./rugsAndCarpets/bedroomRoutes');
const livingRoomRugRoutes = require('./rugsAndCarpets/livingRoomRugRoutes');
const diningRoomRugRoutes = require('./rugsAndCarpets/diningRoomRugRoutes');
const kitchenRugRoutes = require('./rugsAndCarpets/kitchenRugRoutes');
const homeLibraryRugRoutes = require('./rugsAndCarpets/homeLibraryRugRoutes');
const passagewayStairsRugRoutes = require('./rugsAndCarpets/passagewayStairsRugRoutes');
const grandFoyerRugRoutes = require('./rugsAndCarpets/grandFoyerRugRoutes');
const parlorRoomRugRoutes = require('./rugsAndCarpets/parlorRoomRugRoutes');
const cigarRoomRugRoutes = require('./rugsAndCarpets/cigarRoomRugRoutes');
const namdaEmbroideryRugRoutes = require('./rugsAndCarpets/namdaEmbroideryRugRoutes');
const documentRoutes = require('./documents/documentRoutes');
// vendor
const vendorRoutes = require('./VendoerRoutes');
// subsidiary
const subsidiaryRoutes = require('./subsidiaryRoutes');
// vendor Application
const vendorApplicationRoutes = require('./vendorApplicationRoutes');
// franchise Application
const FranchiseApplicationRoutes = require('./franchiseRoutes');
// BrickAndMortar Applcation
const BrickAndMortarRoutes = require('./brickAndMortarRoutes');
// ConsignmentBusiness 
const ConsignmentBusinessRoutes = require('./consignmentBusinessRoutes');

const defaultRouter = express.Router();


// defaultRouter.use('/api/v1', userRoute);
defaultRouter.use('/api/ecommerce', ecommerceRoute);
defaultRouter.use('/api/boutiques', peashminaRoutes);
defaultRouter.use('/api/kanicrafts', kaniCraftRoutes);
defaultRouter.use('/api/cashmere', cashmereRoutes);
defaultRouter.use('/api/silks', silkRoutes);
defaultRouter.use('/api/kashmiribagsandpurse', kashmiriBagsAndPurseRoutes);
defaultRouter.use('/api/kashmiri-jacket', kashmiriJacket);
defaultRouter.use('/api/kashmiri-kaftan', kashmiriKaftan);
defaultRouter.use('/api/kashmiri-kurta', kashmiriKutra);
defaultRouter.use('/api/kashmiri-pheran', kashmiriPheran);
defaultRouter.use('/api/kashmiri-jewelry', kashmiriJewelry);


// interior Decor
defaultRouter.use('/api/interior-decor/papier-mache', papierMacheRoutes);
defaultRouter.use('/api/interior-decor/bed-linen', bedLinenRoutes);
defaultRouter.use('/api/interior-decor/sofa-and-cushion-covers', sofaAndCushionCoversRoutes);
defaultRouter.use('/api/interior-decor/room-divider', roomDividerScreenRoutes);
defaultRouter.use('/api/interior-decor/officeaccessory', officeAccessoryRoutes);
defaultRouter.use('/api/interior-decor/jeweledwallhanging', jeweledWallHangingRoutes);
defaultRouter.use('/api/interior-decor/tapestry', tapestryRoutes);


// Dinning Serving Ware
defaultRouter.use('/api/dining-serving-ware/copperware', copperwareRoutes);
defaultRouter.use('/api/dining-serving-ware/silverware', silverwareRoutes);
defaultRouter.use('/api/dining-serving-ware/walnutware', walnutwareRoutes);
defaultRouter.use('/api/dining-serving-ware/papermachieware', papermachiewareRoutes);
defaultRouter.use('/api/dining-serving-ware/enamelware', enamelwareRoutes);

// rugsAndCarpets
defaultRouter.use('/api/rugs-and-carpets/bedroom', bedroomRoutes);
defaultRouter.use('/api/rugs-and-carpets/livingroom', livingRoomRugRoutes);
defaultRouter.use('/api/rugs-and-carpets/dining-room', diningRoomRugRoutes);
defaultRouter.use('/api/rugs-and-carpets/kitchen', kitchenRugRoutes);
defaultRouter.use('/api/rugs-and-carpets/home-library', homeLibraryRugRoutes);
defaultRouter.use('/api/rugs-and-carpets/passageway-stairs', passagewayStairsRugRoutes);
defaultRouter.use('/api/rugs-and-carpets/grand-foyer', grandFoyerRugRoutes);
defaultRouter.use('/api/rugs-and-carpets/parlor-room', parlorRoomRugRoutes);
defaultRouter.use('/api/rugs-and-carpets/cigar-room', cigarRoomRugRoutes);
defaultRouter.use('/api/rugs-and-carpets/namda-embroidery', namdaEmbroideryRugRoutes);
defaultRouter.use('/api/documents', documentRoutes);


// Vendor
defaultRouter.use('/api/vendors' , vendorRoutes);
// subsidiary
defaultRouter.use('/api/subsidiary' ,subsidiaryRoutes);
// vendor Application
defaultRouter.use('api/vendor-application', vendorApplicationRoutes);
// franchise Application
defaultRouter.use('/api/franchise-application' , FranchiseApplicationRoutes)
// Bricks and Motor Application
defaultRouter.use('/api/brick-and-mortar', BrickAndMortarRoutes);
// Consignment Business Application
defaultRouter.use('/api/consignment-business' , ConsignmentBusinessRoutes)



module.exports =  defaultRouter;