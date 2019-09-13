const homePage = () => {
    // clear out main container 
    $('#main').empty();
    // create container
    createElement('div', '#main', 'append', attributes = [{
        'name': 'class',
        'value': 'container'
    }, {
        'name': 'id',
        'value': 'homeContainer'
    }]);

    // row to hold column
    createElement('div', '#homeContainer', 'append', attributes = [{
        'name': 'class',
        'value': 'row'
    }, {
        'name': 'id',
        'value': 'homeRow1'
    }]);

    // create column for my projects container
    createElement('div', '#homeRow1', 'append', attributes = [{
        'name': 'class',
        'value': 'col-lg-4 col-md-8 col-xs-12 mx-auto'
    }, {
        'name': 'id',
        'value': 'homeColumn1'
    }]);

    // heading for project list
    createElement('h1', '#homeColumn1', 'append', attributes = [{
        'name': 'html',
        'value': 'My Projects'
    }, {
        'name': 'class',
        'value': 'h4 text-center'
    }]);

    // create row inside of column to hold new column where content will be placed
    createElement('div', '#homeContainer', 'append', attributes = [{
        'name': 'class',
        'value': 'row'
    }, {
        'name': 'id',
        'value': 'homeRow2'
    }]);

    // column to go inside of row 2 to hold content for project list
    createElement('div', '#homeRow2', 'append', attributes = [{
        'name': 'class',
        'value': 'col-lg-4 col-md-8 col-xs-12 mx-auto'
    }, {
        'name': 'id',
        'value': 'homeCol2-1'
    }]);

    Xhr('homeCol2-1', 'back-end/projectTracker.php?request=getall');

    
}

homePage();