"use strict";

var assert = require( "assert" );
var parse = require( "../source" );
var path = require( "path" );


describe( "parseFile", function ()
{
    it( "should parse a file", function ( done )
    {
        parse.parseFile( path.join( __dirname, "assets", "sample.xml" ), function ( err, result )
        {
            assert.equal( err, null );
            assert.equal( result.length, 4 );
            assert.equal( result[ 0 ].functions.found, 16 );
            assert.equal( result[ 0 ].functions.hit, 14 );
            assert.equal( result[ 0 ].lines.found, 45 );
            assert.equal( result[ 0 ].lines.hit, 40 );
            assert.equal( result[ 0 ].functions.details[ 0 ].line, 5 );
            assert.equal( result[ 0 ].functions.details[ 0 ].hit, 6 );
            assert.equal( result[ 0 ].lines.details[ 0 ].line, 2 );
            assert.equal( result[ 0 ].lines.details[ 0 ].hit, 178 );
            done();
        } );
    } );
} );