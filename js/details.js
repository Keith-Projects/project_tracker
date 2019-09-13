/*
**** JS file to build the project details component ****
*/

const Details = (id) => {
    // empty main and append a container
    $('#main').empty();

    createElement('div', '#main', 'append', attributes = [ {
        'name': 'class',
        'value': 'container'
    }, {
        'name': 'id',
        'value': 'detailsContainer'
    }]);

    // send id with post
    $.post('back-end/projectTracker.php?request=details', { id: ''+id+''}, function (data){
        // start tree of elements 
        //  start with row then append a column into the row
        createElement('div', '#detailsContainer', 'append', attributes = [ {
            'name': 'class',
            'value': 'row'
        }, {
            'name': 'id',
            'value': 'rowContainer'
        }]);

        createElement('div', '#rowContainer', 'append', attributes = [ {
            'name': 'class',
            'value': 'col-xs-12 col-md-8 col-lg-8 mx-auto border border-info '
        }, {
            'name': 'id',
            'value': 'colContainer'
        }, {
            'name': 'onclick',
            'value': 'check(this.clientWidth, this.clientHeight)'
        }]);

        // handle data that was called back
        const dataObj = JSON.parse(data);

        // create heading
        createElement('h1', '#colContainer', 'append', attributes = [ {
            'name': 'class',
            'value': 'h4 text-center'
        }, {
            'name': 'html',
            'value': dataObj[0].title
        }]);

        // create navigation 
        detailsNav(dataObj);
    });
    
}

// component for detailsNav
const detailsNav = (dataObj) => {
    createElement('nav', '#colContainer', 'append', attributes = [ {
        'name': 'class',
        'value': 'navbar navbar-expand-lg  navbar-dark bg-primary'
    }, {
        'name': 'id',
        'value': 'detailsNav'
    }]);

    createElement('button', '#detailsNav', 'append', attributes = [ {
        'name': 'class',
        'value': 'navbar-toggler'
    }, {
        'name': 'id',
        'value': 'navbar-toggler-details'
    }, {
        'name': 'data-toggle',
        'value': 'collapse'
    }, {
        'name': 'type',
        'value': 'button'
    }, {
        'name': 'aria-expand',
        'value': 'false'
    }, {
        'name': 'aria-label',
        'value': 'Toggle Navigation'
    }, {
        'name': 'data-target',
        'value': '#detailsNavCont'
    }]);

    createElement('div', '#detailsNav', 'append', attributes = [ {
        'name': 'id',
        'value': 'detailsNavCont'
    }, {
        'name': 'class',
        'value': 'collapse navbar-collapse container'
    }]);

    createElement('ul', '#detailsNavCont', 'append', attributes = [ {
        'name': 'class',
        'value': 'navbar-nav mx-auto row'
    }, {
        'name': 'id',
        'value': 'ulDetails'
    }, {
        'name': 'onclick',
        'value': 'check(this.clientWidth, this.clientHeight)'
    }]);

    const navArr = ["To Do's", "File Tracker", "Issues", "Time Spent", "Documentation"];
    navArr.forEach((item, i) => {
        createElement('li', '#ulDetails', 'append', attributes = [ {
            'name': 'class',
            'value': 'nav-item col text-center mx-auto'
        }, {
            'name': 'id',
            'value': 'nav-item-'+i
        }]);

        createElement('a', '#ulDetails', 'append', attributes = [{
            'name': 'class',
            'value': 'nav-link'
        }, {
            'name': 'id',
            'value': 'nav-link-' + i
        }, {
            'name': 'href',
            'value': '#'
        }, {
            'name': 'html',
            'value': item
        }]);
    });
    alert($('#ulDetails').css('margin-left'));
}