    window.define = System.amdDefine;
    window.require = System.amdRequire;

    require(["App/Site.js"], function () {

       System.import("main"); // starts the application  

    });