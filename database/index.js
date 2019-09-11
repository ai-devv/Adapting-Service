let pg, connectSettings, modules;

pg = require( "pg" );
connectSettings = require( "./connectSettings.json" );

modules = {};
modules.db = pg.Pool( connectSettings );
modules.companies = new ( require( "./companies" ) )( modules );
modules.tests = new ( require( "./tests" ) )( modules );
modules.questions = new ( require( "./questions" ) )( modules );
modules.possibleAnswers = new ( require( "./possibleAnswers" ) )( modules );
modules.workers = new( require( "./workers" ) )( modules );
modules.infoBlocks = new( require( "./infoBlocks" ) )( modules );

module.exports = modules;
