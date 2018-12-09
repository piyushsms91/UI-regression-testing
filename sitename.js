var fs = require('fs');
var phantomcss = require('phantomcss');
var links = [];

casper.test.begin('-----UI regression Testing----- ', function(test){

    /* Initialising this phantomecss */     
    phantomcss.init(
      { 
        rebase: casper.cli.get("rebase"),
        casper:casper,
        libraryRoot: fs.absolute(fs.workingDirectory + '/node_modules/phantomcss'),
        screenshotRoot: fs.absolute(fs.workingDirectory + '/screenshots'),
        failedComaparisonsRoot: fs.absolute(fs.workingDirectory + 'failed'),
        addLabelToFailedImage: false,
        prefixCount: true,
        mismatchTolerance: 0,
        captureWaitEnabled: true
      }
    );
    
    /* Casper Start Methord */
    casper.start();

    /* Read CSV file */
    casper.then(function() {

        var fs = require('fs');
        var i = 0;

        stream = fs.open('url_file.csv', 'r');
        line = stream.readLine();

        // import data from csv file into the array
        while(line) {
            links[i] = line;
            line = stream.readLine();
            i++;
        }

        stream.close();
        casper.echo('\n There are total '+i+' number is URL is going to test \n');
    });
    
    /* Setting the Screen size, Which Site supported */
    casper.viewport(1440,900);

    casper.then(function(){
        // loop on array
        casper.each(links, function(self, link) {
            var linkNtxt = link.split(",");
            a = linkNtxt[0];
            //casper.echo("--");
            b = linkNtxt[1];
            casper.thenOpen(a, function() {
                casper.echo(this.getTitle());
                casper.echo(b);
                
                phantomcss.screenshot('body', 'body');
                
            });
        });
    });

    casper.then(function now_check_the_screenshort(){
        //phantomcss.compareAll();
    });

    casper.run(function(){
        test.done();
    });
});
