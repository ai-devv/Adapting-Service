let express, needAuthorize;

express = require( "express" );
needAuthorize = require( "./support/needAuthorize" );

async function createHandler( req, res ){
  res.send( await req.db.workers.create(
    req.companyId, req.body.name
  ) );
}

async function getAllHandler( req, res ){
  res.send( await req.db.workers.getAll(
    req.companyId
  ) );
}

async function subscribeHandler( req, res ){
  res.send( await req.db.workers.subscribe(
    req.companyId, req.body.infoBlockId,
    req.body.workerId
  ) );
}

async function unsubscribeHandler( req, res ){
  res.send( await req.db.workers.unsubscribe(
    req.companyId, req.body.infoBlockId,
    req.body.workerId
  ) );
}

async function getSubscribersHandler( req, res ){
  res.send( await req.db.workers.getSubscribers(
    req.companyId, req.body.infoBlockId
  ) );
}

function index(){
  let router;

  router = express.Router();

  router.use( needAuthorize );
  router.post( "/create", createHandler );
  router.post( "/getAll", getAllHandler );
  router.post( "/subscribe", subscribeHandler );
  router.post( "/unsubscribe", unsubscribeHandler );
  router.post( "/getSubscribers", getSubscribersHandler );

  return router;
}

module.exports = index();
